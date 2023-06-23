window.cdraw = {
  background_layer: null,
  drawing_layer: null,
  crt_tool: null,
  crt_color: cgp_conf.initial_color,
  crt_size: cgp_conf.initial_size,
  mouse_down: false,
  last_mouse_position: new Point(-100, -100),
  loaded: false
}

$.browser.isIpad = (navigator.platform.indexOf('iPad') != -1)

cdraw.crt_tool_load = function(is_reload) {
  is_reload = typeof is_reload == 'undefined' ? false: is_reload;
  if (cdraw.crt_tool && typeof cdraw.crt_tool.load == 'function') {
    if (cdraw.crt_tool.loaded) {
      cdraw.crt_tool_unload();
    }
    cdraw.crt_tool.load(is_reload);
  }
}

cdraw.crt_tool_unload = function() {
  if (cdraw.crt_tool && typeof cdraw.crt_tool.unload == 'function') {
    cdraw.crt_tool.unload();
  }
}

cdraw.setSize = function(size) {
  if (size == cdraw.crt_size) {
    return;
  }

  if ($.inArray(size, ['small', 'medium', 'large']) == -1) {
    return;
  }
  
  cdraw.crt_size = size;

  if (cdraw.crt_tool && typeof cdraw.crt_tool.sizeChanged == 'function') {
    cdraw.crt_tool.sizeChanged();
  }
}

cdraw.setFGColor = function(color) {
  cdraw.crt_color = color;

  if (cdraw.crt_tool && typeof cdraw.crt_tool.fgColorChanged == 'function') {
    cdraw.crt_tool.fgColorChanged();
  }
}

cdraw.setup = function() {
  cdraw.initializeNewCanvas();
  cdraw.setupPlayButton();
  cdraw.setupHelpButton();
  cdraw.setupDoneDialog();
  cdraw.setupSizeSelector();
  cdraw.setupColorSelector();

  var tools = [cdraw.brush_tool, cdraw.eraser_tool, cdraw.background, cdraw.stamp_tool, cdraw.dripping_tool, cdraw.recorder, cdraw.george];
  for (var i=0; i<tools.length; i++) {
    if (typeof tools[i].setup == 'function') {
      tools[i].setup();
    }
  }

  cdraw.audio.setup();
  cdraw.audio.playHint('game_title', 0);
}

cdraw.initializeNewCanvas = function() {
  cdraw.crt_tool_unload();

  cdraw.background_layer = project.layers[0];

  if (!cdraw.drawing_layer) {
    cdraw.drawing_layer = new Layer();
  }
  cdraw.drawing_layer.removeChildren();

  $('#cgp-background-options li#cgp-btn-background-' + (cgp_conf.background_tool.initial_background - 1)).click();

  cdraw.crt_tool_load(true);
}

cdraw.setupPlayButton = function() {
  $('#cgp-btn-play').click(function() {
    $('#cgp-intro-screen').animate({top: -500}, 'fast', 'swing', function(){$('#cgp-intro-screen').remove();});

    if (!$.cookies.get('video-help-displayed')) {
      $('#cgp-btn-help').click();
      cdraw.audio.cancelScheduledHint();
      cdraw.audio.stopCurrentHint();
    }

    $('#cgp-tools-drawer').animate({left: 0}, 'swing', function() {
      $('#cgp-tool-brush').click(); //activate the brush tool by default
      cdraw.audio.cancelScheduledHint();
      cdraw.audio.stopCurrentHint();
    });
    $('#cgp-background-drawer').animate({left: 785}, 'swing');
  });
}

cdraw.setupHelpButton = function() {
  if ($.browser.isIpad) {
    $('#cgp-video video').attr('controls', 'controls');
  }

  var video_loading_wait_interval = null;
  $('#cgp-btn-help').click(function() {
    $.cookies.set('video-help-displayed', 1, {expiresAt: new Date((new Date()).getTime() + 30*24*60*60*1000)});
    $('#cgp-video-help').show();
    $('#cgp-video-help-overlay').stop(false, true).css({opacity: 0}).show().animate({opacity: 0.75}, 'fast');
    $('#cgp-video-container').stop(false, true).css({top: -380}).animate({top: 0}, 'fast', 'swing');
    var video_tag = $('#cgp-video video').get(0);
    video_tag.volume = 1;
    if (!$.browser.isIpad) {
      if (video_tag.readyState==4) {
        video_tag.currentTime = 0;
        video_tag.play();
      }
      else {
        video_loading_wait_interval = window.setInterval(function() {
          var video_tag = $('#cgp-video video').get(0);
          if (video_tag.readyState==4) {
            window.clearInterval(video_loading_wait_interval);
            video_loading_wait_interval = null;

            video_tag.currentTime = 0;
            video_tag.play();
          }
        }, 100);
      }
    }
  });
  $('#cgp-btn-skip-video').click(function() {
    if (video_loading_wait_interval) {
      window.clearInterval(video_loading_wait_interval);
      video_loading_wait_interval = null;
    }

    var video_tag = $('#cgp-video video').get(0);
    if (video_tag.readyState==4) {
      video_tag.volume = 0;
      video_tag.pause();
    }

    $('#cgp-video-help-overlay').stop(false, true).animate({opacity: 0}, 'fast');
    $('#cgp-video-container').stop(false, true).animate({top: -500}, 'fast', 'swing', function(){
      $('#cgp-video-help').hide();
    });
  });
}

cdraw.setupDoneDialog = function() {
  $('#cgp-download-image-form').attr('action', cgp_conf.download_script);
  $('#cgp-btn-done').click(function() {
    /* add watermark to the image and set the data-baseURL attribute */
    var buffer = document.createElement('canvas'),
        bctx = buffer.getContext('2d'),
        drawing_canvas = document.getElementById('cgp-canvas'),
        watermark = document.getElementById('watermark');
    buffer.width = 570;
    buffer.height = 458;
    bctx.fillStyle = '#fff';
    bctx.fillRect(0, 0, buffer.width, buffer.height);
    bctx.drawImage(drawing_canvas, 0, 0);
    bctx.drawImage(watermark, 166, 434);

    $('#cgp-donedlg-btn-download').attr('data-baseURL', buffer.toDataURL());

    cdraw.openDoneDialog();
  });

  $('#cgp-donedlg-btn-close, #cgp-donedlg-btn-keeppainting').click(cdraw.closeDoneDialog);

  $('#cgp-donedlg-btn-startover').click(function() {
    cdraw.closeDoneDialog();
    cdraw.initializeNewCanvas();
  });

  $('#cgp-donedlg-btn-print').click(function() {
    var iframe = document.getElementById('cgp-print-image-frame');
    var iwindow = null;
    if (iframe.contentWindow) {
      iwindow = iframe.contentWindow;
    }
    else if (frame.contentDocument) {
      if (frame.contentDocument.defaultView) {
        iwindow = frame.contentDocument.defaultView;
      }
      else if (frame.contentDocument.parentWindow) {
        iwindow = frame.contentDocument.parentWindow;
      }
    }
    if (!iwindow) {
      return;
    }

    iwindow.printImage(document.getElementById('cgp-canvas').toDataURL());
  });
}

cdraw.openDoneDialog = function() {
  cdraw.audio.playHint('save_and_print_with_an_adult', 0);
  cdraw.crt_tool_unload();
  $('#cgp-donedlg').show();
  $('#cgp-donedlg-overlay').stop(false, true).css({opacity: 0}).show().animate({opacity: 0.75}, 'fast');
  $('#cgp-donedlg-container').stop(false, true).css({top: -380}).animate({top: 39}, 'fast', 'swing');
}

cdraw.closeDoneDialog = function() {
  $('#cgp-donedlg-overlay').stop(false, true).animate({opacity: 0}, 'fast');
  $('#cgp-donedlg-container').stop(false, true).animate({top: -380}, 'fast', 'swing', function(){$('#cgp-donedlg').hide();});
  cdraw.crt_tool_load();
}

cdraw.setupSizeSelector = function() {
  $('#cgp-size-drawer li').click(function() {
    if ($(this).hasClass('active')) {
      return;
    }

    var size = /cgp-size-(.*)/.exec($(this).attr('id'));
    if (!size) {
      return;
    }
    $('#cgp-size-drawer li').removeClass('active');
    $(this).addClass('active');
    cdraw.setSize(size[1]);

    cdraw.george.restartIdleTimeBeforeTakeTurn();
  });

  $('#cgp-size-drawer li').removeClass('active');
  $('#cgp-size-drawer li#cgp-size-' + cdraw.crt_size).addClass('active');
}

cdraw.setupColorSelector = function() {
  $('#cgp-daub-drawer li').click(function() {
    var idx = /cgp-daub-(\d+)/.exec($(this).attr('id'));
    if (!idx) {
      return;
    }

    idx = parseInt(idx[1]);
    var color = cgp_conf.colors[idx];
    cdraw.setFGColor(color);
    $('#cgp-daub-drawer li').removeClass('active');
    $(this).addClass('active');
    cdraw.setSizeColor(cdraw.crt_color);

    if (cdraw.crt_tool == cdraw.eraser_tool) {
      $('#cgp-tool-brush').click();
    }

    cdraw.george.restartIdleTimeBeforeTakeTurn();
  });

  var idx = $.inArray(cdraw.crt_color, cgp_conf.colors);
  $('#cgp-daub-drawer li').removeClass('active');
  $('#cgp-daub-drawer li#cgp-daub-' + idx).addClass('active');
  cdraw.setSizeColor(cdraw.crt_color);
}

cdraw.setSizeColor = function(color) {
  $('#cgp-size-drawer li').each(function() {
    var canvas = $('canvas', this).get(0),
        ctx = canvas.getContext('2d');
        size_img = $('#cgp-size-img').get(0);

    /* clear the canvas */
    ctx.clearRect (0, 0, canvas.width, canvas.height);

    /* draw the original image */
    var x = /^(-?\d+)/.exec($(this).css('backgroundPosition'))[1];
    ctx.drawImage(size_img, x, -180);

    /* get the data and tint to color */
    var col = $.Color(color);
    var rgb = [
      col.red() / 255,
      col.green() / 255,
      col.blue() / 255
    ];
    var d = ctx.getImageData(0, 0, canvas.width, canvas.height);
    for (var i=0, n = d.data.length; i<n; i+=4) {
      d.data[i+0] = Math.min(255, d.data[i+0] * rgb[0]);
      d.data[i+1] = Math.min(255, d.data[i+1] * rgb[1]);
      d.data[i+2] = Math.min(255, d.data[i+2] * rgb[2]);
    }
    ctx.putImageData(d, 0, 0);
  });
}

cdraw.audio = {
  tags: {},
  timeout: null,
  currenlty_playing_tag_id: null,
  play_to_end_tag_ids: ['game_title', 'play_game'],
  
  setup: function() {
    this.tags = {};
    for (var id in cgp_conf.audio) {
      if ($.isArray(cgp_conf.audio[id])) {
        this.tags[id] = this.createTag(cgp_conf.audio[id]);
      }
    }

    this.setupHint('#cgp-tool-brush', 'paint_w_finger');
    this.setupHint('#cgp-tool-hand', 'paint_w_hand');
    this.setupHint('#cgp-tool-foot', 'paint_w_foot');
    this.setupHint('#cgp-tool-eraser', 'eraser');
    this.setupHint('#cgp-background-options', 'paper');
    this.setupHint('#cgp-btn-help', 'btn_help', true);
    this.setupHint('#cgp-btn-done', 'btn_done');
    this.setupHint('#cgp-donedlg-btn-startover', 'start_over');
    this.setupHint('#cgp-donedlg-btn-close', 'btn_close');
    this.setupHint('#cgp-donedlg-btn-keeppainting', 'keep_painting');
    this.setupHint('#cgp-donedlg-btn-download', 'btn_save');
    this.setupHint('#cgp-donedlg-btn-print', 'btn_print');
    this.setupHint('#cgp-btn-play', 'play_game');
    this.setupHint('#cgp-btn-skip-video', 'skip_video');
  },
  
  createTag: function(sources) {
    var sources_tags = '';
    for (var i=0; i<sources.length; i++) {
      var type = '';
      if (/.ogg$/i.test(sources[i])) {
        type = 'audio/ogg';
      }
      if (/.mp3$/i.test(sources[i])) {
        type = 'audio/mpeg';
      }
      sources_tags += '<source src="' + cgp_conf.audio_base_path + sources[i] + '" type="' + type + '" />';
    }
    var tag = '<audio preload="auto">' + sources_tags + '</audio>';
    $('#cgp-preloader').append(tag);

    var tag = $('#cgp-preloader audio:last');
    if (!tag.length) {
      return null;
    }
    tag.on('ended', function(){
      cdraw.audio.currenlty_playing_tag_id = null;
    });

    return tag.get(0);
  },

  setupHint: function(element, tag_id, onclick, onhover) {
    onclick = typeof onclick == 'undefined' ? false : onclick; /* by default, clicking will not play the sound */
    onhover = typeof onhover == 'undefined' ? true : onhover; /* by default, hovering will play the sound */

    $(element).data('audio_tag_id', tag_id);

    if (onhover) {
      $(element).hover(
        function() {
          var tag_id = $(this).data('audio_tag_id');
          if (!tag_id) {
            return;
          }
          cdraw.audio.playHint(tag_id);
        },
        function() {
          cdraw.audio.cancelScheduledHint();
        }
      );
    }

    if (onclick) {
      $(element).click(function() {
        var tag_id = $(this).data('audio_tag_id');
        if (!tag_id) {
          return;
        }
        if (cdraw.audio.currenlty_playing_tag_id == tag_id) {
          return;
        }
        cdraw.audio.playHint(tag_id, 0);
      });
    }
  },

  playHint: function(tag_id, timeout) {
    if (typeof cdraw.audio.tags[tag_id] == 'undefined' || !cdraw.audio.tags[tag_id]) {
      return;
    }

    this.cancelScheduledHint();
    timeout = (typeof timeout == 'undefined') ? 500 : timeout;
    
    function play(tag_id) {
      cdraw.audio.stopCurrentHint();
      
      cdraw.audio.currenlty_playing_tag_id = tag_id;
      cdraw.audio.tags[tag_id].volume = 1;
      cdraw.audio.tags[tag_id].play();
    }

    if (timeout) {
      cdraw.audio.timeout = window.setTimeout(function() {play(tag_id);}, timeout);
    }
    else {
      play(tag_id);
    }
  },

  stopCurrentHint: function() {
    try {
      if (this.currenlty_playing_tag_id && $.inArray(this.currenlty_playing_tag_id, this.play_to_end_tag_ids) == -1) {
        this.tags[this.currenlty_playing_tag_id].volume = 0;
        this.tags[this.currenlty_playing_tag_id].pause();
        this.tags[this.currenlty_playing_tag_id].currentTime = 0;
      }
    }
    catch(e){}
  },

  cancelScheduledHint: function() {
    if (this.timeout) {
      window.clearTimeout(cdraw.audio.timeout);
    }
  }
}

function onMouseDown(event) {
  if (cdraw.recorder.replaying && !event.fake) {
    return;
  }
  
  if (cdraw.crt_tool && typeof cdraw.crt_tool.onMouseDown == 'function') {
    cdraw.crt_tool.onMouseDown(event);

    cdraw.recorder.recordEvent({type: 'canvas-mouse-down', point: {x: event.point.x, y: event.point.y}});
  }

  cdraw.mouse_down = true;

  cdraw.george.restartIdleTimeBeforeTakeTurn();
}

function onMouseMove(event) {
  if (!event.fake) {
    cdraw.last_mouse_position = event.point.clone();
  }

  if (cdraw.recorder.replaying && !event.fake) {
    return;
  }

  if ($('#cgp-video-help-overlay:visible, #cgp-donedlg-overlay:visible, #cgp-intro-screen:visible').length) {
    return;
  }

  if (cdraw.crt_tool && typeof cdraw.crt_tool.onMouseMove == 'function') {
    cdraw.crt_tool.onMouseMove(event);

    if (cdraw.mouse_down) {
      cdraw.recorder.recordEvent({type: 'canvas-mouse-move', point: {x: event.point.x, y: event.point.y}});
    }
  }

  if (cdraw.mouse_down) {
    cdraw.george.restartIdleTimeBeforeTakeTurn();
  }
}

function onMouseUp(event) {
  if (cdraw.recorder.replaying && !event.fake) {
    return;
  }

  if (cdraw.crt_tool && typeof cdraw.crt_tool.onMouseUp == 'function') {
    cdraw.crt_tool.onMouseUp(event);

    cdraw.recorder.recordEvent({type: 'canvas-mouse-up', point: {x: event.point.x, y: event.point.y}});
  }

  cdraw.mouse_down = false;

  cdraw.george.restartIdleTimeBeforeTakeTurn();
}

function onFrame(event) {
  if ($('#cgp-video-help-overlay:visible, #cgp-donedlg-overlay:visible, #cgp-intro-screen:visible').length) {
    return;
  }

  cdraw.dripping_tool.drip();
}

/*** BRUSH TOOL **********************************************************************/
cdraw.brush_tool = {
  path: null,
  cursor: null,
  cursor_layer: null,
  loaded: false,

  setup: function() {
    $('#cgp-tool-brush').click(function(){
      if (cdraw.crt_tool == cdraw.brush_tool) {
        return;
      }
      cdraw.crt_tool_unload();
      cdraw.crt_tool = cdraw.brush_tool;
      cdraw.crt_tool_load();

      cdraw.george.restartIdleTimeBeforeTakeTurn();
    });
  },

  load: function(is_reload) {
    if (this.loaded) {
      return;
    }
    this.loaded = true;

    $('#cgp-tool-brush').addClass('active');

    this.path = null;

    if (!$.support.touch) {
      if (this.cursor_layer) {
        this.cursor_layer.remove();
      }
      this.cursor_layer = new Layer();
      this.cursor = new Path.Circle(new Point(-100, -100), cgp_conf.brush_tool.size[ cdraw.crt_size ]/2);
      this.fgColorChanged();
      this.sizeChanged();
    }

    cdraw.drawing_layer.activate();
  },

  unload: function() {
    if (!this.loaded) {
      return;
    }
    this.loaded = false;

    $('#cgp-tool-brush').removeClass('active');

    if (this.cursor_layer) {
      this.cursor_layer.remove();
      this.cursor_layer = null;
      $(view.canvas).css('cursor', 'default');
    }

    view.draw();
  },

  onMouseDown: function(event) {
    this.path = new Path(event.point + new Point(0.01, 0.01));
    this.path.strokeColor = cdraw.crt_color;
    this.path.strokeWidth = cgp_conf.brush_tool.size[ cdraw.crt_size ];
    this.path.strokeCap = 'round';
    cdraw.dripping_tool.dripAtPoint(this.path, event.point);
  },

  onMouseUp: function(event) {
    if (!this.path) {
      return;
    }
    
    this.path.lineTo(event.point);
//    this.path.smooth();
    this.path.simplify(10);
    this.path = null;

    cdraw.dripping_tool.resetLastPoint();
  },

  onMouseMove: function(event) {
    if (this.cursor) {
      this.cursor.position = event.point;
    }

    if (!this.path) {
      return;
    }

    if (event.point.getDistance(this.path.segments[this.path.segments.length - 1].point, false) < Math.sqrt(cgp_conf.brush_tool.size[ cdraw.crt_size ])) {
      return;
    }

    this.path.lineTo(event.point);
    cdraw.dripping_tool.dripAtPoint(this.path, event.point);
  },

  fgColorChanged: function() {
    if (this.cursor) {
      this.cursor.fillColor = cdraw.crt_color;
    }
  },

  sizeChanged: function() {
    if (this.cursor) {
      var crt_diameter = this.cursor.segments[2].point.x - this.cursor.segments[0].point.x;
      this.cursor.scale(cgp_conf.brush_tool.size[ cdraw.crt_size ]  / crt_diameter);

      if (cgp_conf.brush_tool.size[ cdraw.crt_size ]>5) {
        $(view.canvas).css('cursor', 'none');
        this.cursor.visible = true;
      }
      else {
        $(view.canvas).css('cursor', 'crosshair');
        this.cursor.visible = false;
      }
    }
  },

  setCursorVisibility: function(visible) {
    if (this.cursor_layer) {
      this.cursor_layer.visible = visible;
    }
  },

  setCursorPosition: function(position) {
    if (this.cursor) {
      this.cursor.position = position;
    }
  }
}

/*** ERASER TOOL *****************************************************************/
cdraw.eraser_tool = {
  path: null,
  cursor: null,
  cursor_layer: null,
  erasing: false,
  last_checked_point: null,
  path_tolerance: 0.75, /* procent of current size */
  raster_tolerance: 0.5, /* procent of eraser size */
  loaded: false,

  setup: function() {
    $('#cgp-tool-eraser').click(function(){
      if (cdraw.crt_tool == cdraw.eraser_tool) {
        return;
      }
      cdraw.crt_tool_unload();
      cdraw.crt_tool = cdraw.eraser_tool;
      cdraw.crt_tool_load();

      cdraw.george.restartIdleTimeBeforeTakeTurn();
    });

    $('#cgp-eraser-btn-undo').click(cdraw.eraser_tool.undo);
  },

  load: function(is_reload) {
    if (this.loaded) {
      return;
    }
    this.loaded = true;

    $('#cgp-tool-eraser').addClass('active');
    $('#cgp-tools-eraser-drawer-options').stop().animate({left: 26}, 'swing');

    this._build_cursor();
  },

  unload: function() {
    if (!this.loaded) {
      return;
    }
    this.loaded = false;

    $('#cgp-tool-eraser').removeClass('active');
    $('#cgp-tools-eraser-drawer-options').stop().animate({left: -253}, 'swing');

    this.cursor_layer.remove();
    $(view.canvas).css('cursor', 'default');
  },

  onMouseDown: function(event) {
    this.erasing = true;
    this.onMouseMove(event);
  },

  onMouseUp: function(event) {
    this.erasing = false;
    this.last_checked_point = null
  },

  onMouseMove: function(event) {
    this.cursor_layer.position = event.point.clone();

    if (!this.erasing) {
      return;
    }

    if (this.last_checked_point && this.last_checked_point.getDistance(event.point, false) < cgp_conf.eraser_tool.size[ cdraw.crt_size ] * 0.2) {
      return;
    }

    var hitResult = null;
    while (hitResult = cdraw.drawing_layer.hitTest(event.point, {fill: true, stroke: true, segments: true, tolerance: cgp_conf.eraser_tool.size[ cdraw.crt_size ] * this.path_tolerance})) {
      if (typeof hitResult.item.dripping_from == 'object') {
        cdraw.dripping_tool.removeDripings(hitResult.item.dripping_from);
        hitResult.item.dripping_from.remove();
      }
      else {
        cdraw.dripping_tool.removeDripings(hitResult.item);
        hitResult.item.remove();
      }
    }

    var eraser_bounds = new Rectangle(this.cursor_layer.firstChild.bounds);
    /* only use a procent of the bounds */
    eraser_bounds.width = Math.round(eraser_bounds.width * this.raster_tolerance);
    eraser_bounds.height = Math.round(eraser_bounds.height * this.raster_tolerance);
    eraser_bounds.x = eraser_bounds.x + Math.round((this.cursor_layer.firstChild.bounds.width - eraser_bounds.width) / 2);
    eraser_bounds.y = eraser_bounds.y + Math.round((this.cursor_layer.firstChild.bounds.height - eraser_bounds.height) / 2);

    var i = 0;
    while (i<cdraw.drawing_layer.children.length) {
      if (cdraw.drawing_layer.children[i] instanceof Raster && cdraw.drawing_layer.children[i].bounds.intersects(eraser_bounds)) {
        var removed_child = cdraw.drawing_layer.children[i];
        cdraw.dripping_tool.removeDripings(cdraw.drawing_layer.children[i]);
        cdraw.drawing_layer.children[i].remove();
        if (removed_child == cdraw.drawing_layer.children[i]) {
          /* sometimes paper js doesn't actually remove the object, causing this loop to run indefinitely; in that case, manually remove the object */
          cdraw.drawing_layer.children.splice(i, 1);
        }
      }
      else {
        i++;
      }
    }
    this.last_checked_point = event.point.clone();
  },

  _build_cursor: function() {
    var size = cgp_conf.eraser_tool.size[ cdraw.crt_size ];

    if (this.cursor_layer) {
      this.cursor_layer.remove();
    }

    this.cursor_layer = new Layer();
    if ($.support.touch || size < 10) {
      this.cursor_layer.visible = false;
    }

    if (size < 10) {
      $(view.canvas).css('cursor', 'crosshair');
    }
    else {
      $(view.canvas).css('cursor', 'none');
    }

    
    var cursor1 = null, cursor2 = null;
    if (this.style == 'square') {
      cursor1 = new Path.Rectangle(new Point(view.center.x, view.center.y), new Size(size, size));
      cursor2 = new Path.Rectangle(new Point(view.center.x + 1, view.center.y + 1), new Size(size-2, size-2));
    }
    else {
      cursor1 = new Path.Circle(new Point(view.center.x, view.center.y), parseInt(size/2));
      cursor2 = new Path.Circle(new Point(view.center.x, view.center.y), parseInt(size/2-1));
    }
    cursor1.strokeColor = '#333333';cursor1.strokeWidth = 1;
    cursor2.strokeColor = '#cccccc';cursor2.strokeWidth = 1;

    this.cursor_layer.position = new Point(-10-size, -10-size);

    cdraw.drawing_layer.activate();
  },

  sizeChanged: function() {
    this._build_cursor();
  },

  undo: function() {
    var last = cdraw.drawing_layer.children.length - 1;
    if (last < 0) {
      return;
    }
    
    var removed_child = cdraw.drawing_layer.children[last];
    cdraw.drawing_layer.children[last].remove();
    if (removed_child == cdraw.drawing_layer.children[last]) {
      /* sometimes paper js doesn't actually remove the object, causing this loop to run indefinitely; in that case, manually remove the object */
      cdraw.drawing_layer.children.splice(last, 1);
    }

    view.draw();
  },

  setCursorPosition: function(position) {
    if (this.cursor_layer) {
      this.cursor_layer.position = position;
    }
  }
}

/*** CUSTOM STAMPS ***************************************************************/
cdraw.stamp_tool = {
  cursor: null,
  cursor_layer: null,
  rasters: [],
  rasters_layer: null,
  current_stamp_idx: -1,
  crt_stamp_frame_idx: -1,
  raster_width: 200,
  raster_height: 200,
  drawing: false,
  last_drawing_point: null,
  min_distance: 0,
  loaded: false,

  setup: function() {
    this.rasters_layer = new Layer();
    this.rasters_layer.visible = false;
    this.cursor_layer = new Layer();
    if ($.support.touch) {
      this.cursor_layer.visible = false;
    }
    cdraw.drawing_layer.activate();

    $('#cgp-tool-foot, #cgp-tool-hand').click(cdraw.stamp_tool.stampsPalleteStampSelected);
  },

  stampsPalleteStampSelected: function() {
    if ($(this).hasClass('active')) {
      return;
    }

    if (cdraw.crt_tool != cdraw.stamp_tool) {
      cdraw.crt_tool_unload();
      cdraw.crt_tool = cdraw.stamp_tool;
      cdraw.crt_tool_load();
    }

    $('#cgp-tool-foot, #cgp-tool-hand').removeClass('active');
    $(this).addClass('active');

    for (var i=0; i<cdraw.stamp_tool.rasters.length; i++) {
      cdraw.stamp_tool.rasters[i].remove();
    }
    cdraw.stamp_tool.rasters = [];

    var sprites_image = $('img#' + $(this).attr('id') + '-img').get(0);
    var rasters_count = Math.floor(sprites_image.width / cdraw.stamp_tool.raster_width);

    cdraw.stamp_tool.rasters_layer.activate();
    for (var i=0; i<rasters_count; i++) {
      var tmp_canvas = document.createElement('canvas');
      tmp_canvas.width = cdraw.stamp_tool.raster_width;
      tmp_canvas.height = cdraw.stamp_tool.raster_height;

      cdraw.stamp_tool.rasters[i] = new Raster(tmp_canvas);
      cdraw.stamp_tool.rasters[i].drawImage(sprites_image, new Point(-cdraw.stamp_tool.raster_width * i, 0));
    }

    cdraw.stamp_tool.fgColorChanged();
    cdraw.stamp_tool.crt_stamp_frame_idx = -1;
    cdraw.stamp_tool.buildNextCursor();
    cdraw.stamp_tool.computeMinDistance();
    cdraw.drawing_layer.activate();

    cdraw.george.restartIdleTimeBeforeTakeTurn();
  },

  buildCursor: function() {
    var last_cursor_position = null;
    if (this.cursor) {
      last_cursor_position = this.cursor.position;
      this.cursor.remove();
    }

    this.cursor = this.rasters[this.crt_stamp_frame_idx].clone();
    this.cursor.scale(cgp_conf.stamp_tool.size[ cdraw.crt_size ] / 100);
    if (last_cursor_position) {
      this.cursor.position = last_cursor_position;
    }
    else {
      this.cursor.position = new Point(-cdraw.stamp_tool.raster_width, -cdraw.stamp_tool.raster_height);
    }
    this.cursor_layer.addChild(this.cursor);
    $(view.canvas).css('cursor', 'none');
    this.setCursorVisibility(!cdraw.recorder.replaying);
  },

  computeMinDistance: function() {
    /*
     * the min_distance defined in the themes json represents a procentual value of the current size
     * the size of this tool is also a procent of the original image
     * so first build the arithmetic sum of the original image, then get the scaled size and then apply the min_distance scaling
     */
    this.min_distance = (cgp_conf.stamp_tool.size[ cdraw.crt_size ]/100) * cdraw.stamp_tool.raster_width * cgp_conf.stamp_tool.min_distance/100;
  },

  buildNextCursor: function() {
    this.crt_stamp_frame_idx++;
    if (this.crt_stamp_frame_idx >= this.rasters.length) {
      this.crt_stamp_frame_idx = 0;
    }

    this.buildCursor();
  },

  load: function(is_reload) {
    if (this.loaded) {
      return;
    }
    this.loaded = true;
  },

  unload: function() {
    if (!this.loaded) {
      return;
    }
    this.loaded = false;

    $('#cgp-tool-foot, #cgp-tool-hand').removeClass('active');

    $(view.canvas).css('cursor', 'default');
  },

  onMouseDown: function(event) {
    this.drawing = true;
    this.onMouseMove(event);
  },

  onMouseUp: function(event) {
    this.drawing = false;
    this.last_drawing_point = null
  },

  onMouseMove: function(event) {
    if (this.cursor && !cdraw.recorder.replaying) {
      this.cursor.position = event.point;
    }

    if (!this.drawing) {
      return;
    }

    if (event.point.x < -100 || event.point.x > 100 + view.size.width) {
      return;
    }
    if (event.point.y < -100 || event.point.y > 100 + view.size.height) {
      return;
    }

    if (this.last_drawing_point && this.last_drawing_point.getDistance(event.point, false) < this.min_distance) {
      return;
    }

    var clone = this.cursor.clone();
    clone.visible = true;
    clone.position = event.point;
    cdraw.drawing_layer.addChild(clone);
    this.buildNextCursor();
    this.last_drawing_point = event.point.clone();
  },

  sizeChanged: function() {
    if (!this.rasters.length) {
      return;
    }

    this.buildCursor();
    this.computeMinDistance();
  },

  fgColorChanged: function() {
    var buffer = document.createElement('canvas');
    buffer.width = this.rasters[0].width;
    buffer.height = this.rasters[0].height;
    var bctx = buffer.getContext('2d');

    bctx.fillStyle = cdraw.crt_color;
    bctx.fillRect(0, 0, buffer.width, buffer.height);

    for (var i=0; i<this.rasters.length; i++) {
      var ctx = this.rasters[i].getContext('2d');

      ctx.globalCompositeOperation = 'source-atop';
      ctx.drawImage(buffer, 0, 0);
    }

    if (this.crt_stamp_frame_idx != -1) {
      this.buildCursor();
    }
  },

  setCursorVisibility: function(visible) {
    if (!this.cursor) {
      return;
    }
    this.cursor.visible = visible;
    if (!this.cursor.visible) {
      this.cursor.position = new Point(-100, -100);
    }
    view.draw();
  },

  setCursorPosition: function(position) {
    if (this.cursor) {
      this.cursor.position = position;
    }
  }
}

cdraw.background = {
  current_background: cgp_conf.background_tool.initial_background - 1,

  setup: function() {
    $('#cgp-background-options li').click(function(){cdraw.background.setBackgroundPaper(this);});
    $('#cgp-background-options li#cgp-btn-background-' + this.current_background).click();
  },

  setBackgroundPaper: function(element) {
    if ($(element).hasClass('active')) {
      return;
    }

    $('#cgp-background-options li').removeClass('active');
    $(element).addClass('active');

    var idx = parseInt($(element).attr('id').match(/^cgp-btn-background-(\d+)$/)[1]);
    var lis_count = $('#cgp-background-options li').length;

    this.current_background = idx;

    $(element).css({zIndex: lis_count});
    for (var id=idx+1; id<lis_count; id++) {
      $('#cgp-btn-background-'+id).css({zIndex: lis_count-id+idx});
    }
    for (var id=idx-1; id>=0; id--) {
      $('#cgp-btn-background-'+id).css({zIndex: lis_count+id-idx});
    }

    $('#cgp-canvas-wrapper').css({backgroundPosition: 'left -' + (idx*465) + 'px'});

    cdraw.background_layer.removeChildren();
    var bg_image = $('#cgp-canvas-bg').get(0),
        tmp_canvas = document.createElement('canvas');
    tmp_canvas.width = view.size.width;
    tmp_canvas.height = view.size.height;
    var raster = new Raster(tmp_canvas);
    raster.setBounds(new Rectangle(0, 0, view.size.width, view.size.height));
    raster.drawImage(bg_image, new Point(-15, -idx*465 - 16));
    cdraw.background_layer.addChild(raster);

    cdraw.george.restartIdleTimeBeforeTakeTurn();

    view.draw();
  }
}

cdraw.dripping_tool = {
  fails_until_next_drip: 0,
  last_point: null,
  drips: [],

  setup: function() {
    this.generateFailsUntilNextDrip();
  },

  dripAtPoint: function(parent, point, force) {
    force = typeof force == 'undefined' ? false : force;

    if (this.last_point == null) {
      this.last_point = point.clone();
    }

    this.fails_until_next_drip--;
    if (this.fails_until_next_drip > 0 && !force) {
      return;
    }

    this.last_point = point.clone();
    this.generateFailsUntilNextDrip();

    var tool_size = cgp_conf.dripping_tool.size[ cdraw.crt_size ];

    var drip = new Path(point);
    drip.lineTo(point);
    drip.strokeColor = cdraw.crt_color;
    /* dripping width is 25% to 100% of the size set in the config; this will also determine how long the dripping will be */
    var dripping_width = Math.max(1, Math.round((2.5 + Math.random() * 7.5)/10 * tool_size));
    drip.strokeWidth = dripping_width;
    drip.strokeCap = 'round';

    this.drips.push({
      drip: drip,
      drip_to: point.y + (7 + Math.floor(Math.random() * 3)) * dripping_width
    });

    if (typeof parent.drips == 'undefined') {
      parent.drips = [];
    }
    parent.drips.push(drip);
    drip.dripping_from = parent;
  },

  resetLastPoint: function() {
    this.last_point = null;
  },

  generateFailsUntilNextDrip: function() {
    this.fails_until_next_drip = 70 + Math.floor(Math.random() * 30);
  },

  drip: function() {
    for (var i=0; i<this.drips.length; i++) {
      this.drips[i].drip.lastSegment.point.y += Math.max(0.1, (this.drips[i].drip_to - this.drips[i].drip.lastSegment.point.y) / 7);
      if (this.drips[i].drip.lastSegment.point.y >= this.drips[i].drip_to) {
        this.drips.splice(i, 1);
      }
    }
  },

  removeDripings: function(item) {
    if (typeof item.drips != 'object') {
      return;
    }

    for (var i=0; i< item.drips.length; i++) {
      for (var j=0; j<this.drips.length; j++) {
        if (item.drips[i] == this.drips[j]) {
          this.drips.splice(j, 1);
        }
      }
      item.drips[i].remove();
    }
  }
}

cdraw.george = {
  active: false,
  time_before_take_turn: 0,
  idle_time_before_take_turn: 0,
  my_turn: false,
  take_turn_interval: null,
  dancing_interval: null,
  crt_dancing_sprite: 0,

  setup: function() {
    if (typeof recordings != 'object' || recordings.length == 0) {
      //document.title = 'No recordings found, George is inactive';
      return;
    }

    if (cdraw.recorder.enabled) {
      return;
    }

    this.active = true;
    this.restartTimeBeforeTakeTurn();
    this.restartIdleTimeBeforeTakeTurn();
    this.take_turn_interval = window.setInterval(function(){cdraw.george.onTimer();}, 1000);
  },

  takeTurn: function() {
    this.my_turn = true;

    $('#cgp-tools-drawer').animate({left: -200}, 'swing', function() {
      cdraw.george.dance();
    });

    $('#cgp-background-drawer').animate({left: 900}, 'swing');
    $('#cgp-btn-done').animate({left: 903}, 'swing');

    $('#cgp-georges-turn-drawer').animate({left: 0}, 'swing');

    if (typeof cdraw.crt_tool.setCursorVisibility == 'function') {
      cdraw.crt_tool.setCursorVisibility(false);
    }
    $('#recording-replay-overlay').show();

    /* play random reaction */
    var reaction = 1 + Math.floor(Math.random() * 14),
        reaction_tag_id = 'reaction_' + (reaction < 10 ? '0' : '') + reaction;
    cdraw.audio.playHint(reaction_tag_id, 0);
    
    cdraw.recorder.playRandomRecording();
    //document.title = 'George\'s turn';
  },

  goAway: function() {
    $('#cgp-georges-turn-drawer').animate({left: -202}, 'swing');
    
    $('#cgp-tools-drawer').animate({left: 0}, 'swing');
    $('#cgp-background-drawer').animate({left: 785}, 'swing');
    $('#cgp-btn-done').animate({left: 794}, 'swing');
    
    this.my_turn = false;
    this.restartTimeBeforeTakeTurn();
    this.restartIdleTimeBeforeTakeTurn();
    
    if (typeof cdraw.crt_tool.setCursorVisibility == 'function') {
      cdraw.crt_tool.setCursorVisibility(true);
    }
    if (typeof cdraw.crt_tool.setCursorPosition == 'function') {
      cdraw.crt_tool.setCursorPosition(cdraw.last_mouse_position);
    }
    $('#recording-replay-overlay').hide();
  },

  restartIdleTimeBeforeTakeTurn: function() {
    if (this.my_turn || !this.active) {
      return;
    }
    
    this.idle_time_before_take_turn = cgp_conf.george.idle_time_before_take_turn;
    //document.title = 'George\'s turn in ' + Math.max(0, this.time_before_take_turn, this.idle_time_before_take_turn) + 's';
  },

  restartTimeBeforeTakeTurn: function() {
    this.time_before_take_turn = Math.round(cgp_conf.george.time_before_take_turn.min + Math.random() * (cgp_conf.george.time_before_take_turn.max - cgp_conf.george.time_before_take_turn.min));
  },

  onTimer: function() {
    if (this.my_turn || $('#cgp-video-help-overlay:visible, #cgp-donedlg-overlay:visible, #cgp-intro-screen:visible').length) {
      return;
    }

    this.time_before_take_turn--;
    this.idle_time_before_take_turn--;
    
    //document.title = 'George\'s turn in ' + Math.max(0, this.time_before_take_turn, this.idle_time_before_take_turn) + 's';

    if (!cdraw.mouse_down && this.time_before_take_turn <= 0 && this.idle_time_before_take_turn <= 0) {
      this.takeTurn();
    }
  },

  dance: function() {
    cdraw.george.crt_dancing_sprite = 0;
    $('#cgp-georges-turn-drawer').css({backgroundPosition: '0px 0px'});

    cdraw.george.dancing_interval = window.setInterval(function() {
      cdraw.george.crt_dancing_sprite++;
      if (cdraw.george.crt_dancing_sprite >= 10) {
        window.clearInterval(cdraw.george.dancing_interval);
        cdraw.george.dancing_interval = null;
      }
      
      $('#cgp-georges-turn-drawer').css({backgroundPosition: '-' + (cdraw.george.crt_dancing_sprite * 202) + 'px 0px'});
    }, 100);
    
  },

  die: function() {
    window.clearInterval(this.take_turn_interval);
    //document.title = 'George has painted all the drawings.';
    this.active = false;
  }
}

cdraw.recorder = {
  enabled: false,
  recording: false,
  recorded_events: null,
  events_last_timestamp: null,
  recording_btn_interval: null,
  replaying: false,
  replayed_recordings: [],
  replay_index: 0,

  setup: function() {
    this.enabled = window.location.search == '?record';
    if (!this.enabled) {
      return;
    }

    $('#cgp-tool-eraser, #cgp-tool-brush, #cgp-tool-foot, #cgp-tool-hand, #cgp-size-drawer>li, #cgp-daub-drawer>li, #cgp-background-options>li').click(function() {
      cdraw.recorder.recordEvent({type: 'html-click', id: $(this).attr('id')});
    });

    $('#cgp-btn-done').hide();
    $('#cgp-btn-record').click(function() {cdraw.recorder.startStopRecording();}).show();
    $('#recording-results-wrapper p a').click(function(){$('#recording-results-wrapper').hide();});

    $(window).keypress(function(e) {
      if ($('#cgp-video-help-overlay:visible, #cgp-donedlg-overlay:visible, #cgp-intro-screen:visible, #recording-results-wrapper:visible').length) {
        return;
      }
      if (!cdraw.mouse_down && (e.charCode == 32 || (cdraw.recorder.recording && e.keyCode == 27))) {
        $('#cgp-btn-record').click();
      }
    });
  },

  startStopRecording: function() {
    if (!this.enabled) {
      return;
    }

    if (this.recording) {
      /* stop recording */
      this.recording = false;

      var data = $.toJSON(this.recorded_events);
      data = Iuppiter.compress(data);
      $('#recording-results').val('[' + data.join(',') + ']');
      $('#recording-results-wrapper').show();

      this.recorded_events = null;
      window.clearInterval(this.recording_btn_interval);
      this.recording_btn_interval = null;
      $('#cgp-btn-record')
        .stop()
        .css({backgroundColor: '#eee', borderColor: '#fff'})
        .removeClass('recording');

      cdraw.initializeNewCanvas();
    }
    else {
      /* start recording */
      this.recording = true;
      this.recorded_events = [];
      this.events_last_timestamp = null;

      $('#cgp-tool-eraser.active, #cgp-tool-brush.active, #cgp-tool-foot.active, #cgp-tool-hand.active, #cgp-size-drawer>li.active, #cgp-daub-drawer>li.active').click();

      this.animateRecordingButton();
      this.recording_btn_interval = window.setInterval(this.animateRecordingButton, 1000);
    }
  },

  animateRecordingButton: function() {
    $('#cgp-btn-record')
      .addClass('recording')
      .animate({backgroundColor: '#c00', borderColor: '#f00'}, 500, 'swing', function() {
        $('#cgp-btn-record').animate({backgroundColor: '#eee', borderColor: '#fff'}, 500, 'swing');
      });
  },

  recordEvent: function(e) {
    if (!this.enabled || !this.recording || this.replaying) {
      return;
    }
    
    var ts = (new Date()).getTime();
    e.ts = this.events_last_timestamp ? Math.max(ts - this.events_last_timestamp, 1) : 1;
    this.events_last_timestamp = ts;
    this.recorded_events.push(e);
  },

  playRandomRecording: function() {
    if (typeof recordings != 'object' || recordings.length == 0) {
      return;
    }

    var rnd_idx = Math.floor(Math.random() * (recordings.length - this.replayed_recordings.length));
    var idx = null;
    /* search for the rnd_idx'th recording that was not played */
    for (var i=0, k=0; i<recordings.length; i++) {
      if ($.inArray(i, this.replayed_recordings) != -1) {
        continue;
      }
      if (k == rnd_idx) {
        idx = i;
        break;
      }
      k++;
    }

    this.replayed_recordings.push(idx);
    if (recordings.length == cdraw.recorder.replayed_recordings.length) {
      /* all recordings had been played => start over */
      cdraw.recorder.replayed_recordings = [];
    }

    try {
      this.recorded_events = JSON.parse(Iuppiter.decompress(recordings[idx]));
    }
    catch(e) {
      this.recorded_events = [];
    }
    
    this.replay_index = 0;
    this.replaying = true;
    this._playAllEvents();
  },

  _playAllEvents: function () {
    var event = cdraw.recorder.recorded_events[cdraw.recorder.replay_index];
    cdraw.recorder.playEvent(event);

    cdraw.recorder.replay_index++;
    if (cdraw.recorder.replay_index == cdraw.recorder.recorded_events.length) {
      cdraw.recorder.replaying = false;
      cdraw.george.goAway();
      return;
    }

    /*
    var timeout = cdraw.recorder.recorded_events[cdraw.recorder.replay_index].ts;
    timeout = Math.max(1, timeout);
    timeout = Math.min(cgp_conf.recorder.max_idle_time, timeout);
    */
    var timeout = 1;

    window.setTimeout(cdraw.recorder._playAllEvents, timeout);
  },

  playEvent: function(event) {
    event.fake = true;
    if (typeof event.point != 'undefined') {
      event.point = new Point(parseInt(event.point.x), parseInt(event.point.y));
    }

    switch (event.type) {
      case 'canvas-mouse-down':onMouseDown(event);break;
      case 'canvas-mouse-move':onMouseMove(event);break;
      case 'canvas-mouse-up':onMouseUp(event);break;
      case 'html-click':
        $('#' + event.id).click();
        break;
    }

    view.draw();
  }
};

cdraw.view = view;
cdraw.project = project;
cdraw.loaded = true;
