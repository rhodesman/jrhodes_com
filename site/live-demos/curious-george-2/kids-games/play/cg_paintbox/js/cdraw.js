window.cdraw = {
  background_layer: null,
  frame_layer: null,
  drawing_layer: null,
  crt_tool: null,
  loaded: false
}

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
  size = parseInt(size);
  if (size == cdraw.crt_size) {
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

cdraw.theme = {
  data_loaded: false,
  data: null,
  data_errors: [],
  loading_images_left: 0,

  readJSONThemes: function() {
    $.ajax({
      url: cgp_conf.theme_json_stream,
      dataType: 'json',
      success: function(data) {
        cdraw.theme.data_loaded = true;
        cdraw.theme.data = data;
        cdraw.theme.validateData();
        if (cdraw.theme.data_errors.length > 0) {
          console.error(cdraw.theme.data_errors);
        }
      },
      error: function() {
        cdraw.theme.data_loaded = true;
        cdraw.theme.data_errors.push('Could not read the themes stream ('+cgp_conf.theme_json_stream+').');
        console.error(cdraw.theme.data_errors);
      }
    });
  },

  setup: function() {
    if (cdraw.theme.data_errors.length > 0) {
      return;
    }

    /* setup the theme browser button */
    $('#cgp-btn-theme-browser').click(function() {
      for (var i=0; i<cdraw.theme.data.themes_names.length; i++) {
        if (cdraw.theme.data.themes_names[i] == cdraw.theme.data.current_theme) {
          var next = i+1;
          if (next == cdraw.theme.data.themes_names.length) {
            next = 0;
          }
          cdraw.theme.loadTheme(cdraw.theme.data.themes_names[next]);
          break;
        }
      }
    });

    /* match the theme in the URL */
    var matches = cgp_conf.theme_url_exp.exec(window.location.href);
    if (matches && $.inArray(matches[1], cdraw.theme.data.themes_names) != -1) {
      cdraw.theme.data.current_theme = matches[1];
    }

    $('#cgp-intro-screen').prepend($('<img src="' + cdraw.theme.data.themes[ cdraw.theme.data.current_theme ].intro_canvas_art + '">'));

    cdraw.theme.loadTheme(cdraw.theme.data.current_theme);
    $('#cgp-btn-theme-browser, #cgp-tool-clipart').show();
  },

  loadTheme: function(theme) {
    if (cdraw.theme.loading_images_left) {
      return;
    }

    cdraw.theme.data.current_theme = theme;
    $('#cgp-btn-theme-browser-caption').html(cdraw.theme.data.themes[theme].name)
    cdraw.stamp_tool.buildStampsPalette();
    cdraw.clipart_tool.buildClipartPalette();
    cdraw.background.setupFrame();

    if (!$('#cgp-preload-' + cdraw.theme.data.current_theme + '-frame').length) {
      $('<img src="' + cdraw.theme.data.themes[ cdraw.theme.data.current_theme ].frame + '" id="cgp-preload-' + cdraw.theme.data.current_theme + '-frame" />').appendTo('#cgp-preloader');
    }

    var theme_images = $('#cgp-tool-stamp img, #cgp-clipart img');
    cdraw.theme.loading_images_left = theme_images.length;

    $('#cgp-tool-stamp, #cgp-clipart').stop().hide();

    theme_images
      .load(cdraw.theme.themeImageLoaded)
      .error(cdraw.theme.themeImageLoaded);
  },

  themeImageLoaded: function() {
    cdraw.theme.loading_images_left--;

    if (cdraw.theme.loading_images_left == 0) {
      $('#cgp-tool-stamp, #cgp-clipart').stop().css({opacity: 0}).show().animate({opacity: 1});
    }
  },

  validateData: function() {
    if (typeof this.data.themes == 'undefined') {
      this.data_errors.push('Invalid JSON: "themes" key missing. Aborting...');
      return;
    }

    this.data.themes_names = [];
    for (i in this.data.themes) {
      if (typeof this.data.themes[i] == 'object') {
        this.data.themes_names.push(i);
      }
    }

    if (this.data.themes_names.length == 0) {
      this.data_errors.push('Invalid JSON: the "themes" appears to be empty. Aborting...');
      return;
    }

    if (typeof this.data.current_theme == 'undefined') {
      this.data.current_theme = this.data.themes_names[0];
    }

    for (i in this.data.themes) {
      if (typeof this.data.themes[i] == 'object') {
        if (typeof this.data.themes[i].name == 'undefined') {
          this.data.themes[i].name = i;
        }

        if (typeof this.data.themes[i].frame == 'undefined') {
          this.data_errors.push('"frame" key missing for theme "'+i+'".');
        }

        if (typeof this.data.themes[i].intro_canvas_art == 'undefined') {
          this.data_errors.push('"intro_canvas_art" key missing for theme "'+i+'".');
        }

        if (typeof this.data.themes[i].stamps == 'undefined') {
          this.data_errors.push('"stamps" key missing for theme "'+i+'".');
        }
        else {
          for (var j=0; j<this.data.themes[i].stamps.length; j++) {
            if (typeof this.data.themes[i].stamps[j].imagepath == 'undefined') {
              this.data_errors.push('"imagepath" key missing for stamp #'+(j+1)+' of theme "'+i+'".');
              continue;
            }
            if (typeof this.data.themes[i].stamps[j].thumb_imagepath == 'undefined') {
              this.data_errors.push('"thumb_imagepath" key missing for stamp #'+(j+1)+' of theme "'+i+'".');
              continue;
            }
            if (typeof this.data.themes[i].stamps[j].width == 'undefined') {
              this.data_errors.push('"width" key missing for stamp #'+(j+1)+' of theme "'+i+'".');
              continue;
            }
            if (typeof this.data.themes[i].stamps[j].height == 'undefined') {
              this.data_errors.push('"height" key missing for stamp #'+(j+1)+' of theme "'+i+'".');
              continue;
            }

            this.data.themes[i].stamps[j].width = parseInt(this.data.themes[i].stamps[j].width);
            if (isNaN(this.data.themes[i].stamps[j].width)) {
              this.data_errors.push('The width for the stamp #'+(j+1)+' of theme "'+i+'" is not numeric.');
              continue;
            }

            this.data.themes[i].stamps[j].height = parseInt(this.data.themes[i].stamps[j].height);
            if (isNaN(this.data.themes[i].stamps[j].height)) {
              this.data_errors.push('The height for the stamp #'+(j+1)+' of theme "'+i+'" is not numeric.');
              continue;
            }

            if (typeof this.data.themes[i].stamps[j].min_distance == 'undefined') {
              this.data.themes[i].stamps[j].min_distance = 10;
            }
            this.data.themes[i].stamps[j].min_distance = parseInt(this.data.themes[i].stamps[j].min_distance);
            if (isNaN(this.data.themes[i].stamps[j].min_distance)) {
              this.data_errors.push('The min_distance for the stamp #'+(j+1)+' of theme "'+i+'" is not numeric.');
              continue;
            }

            if (typeof this.data.themes[i].stamps[j].choose_next_mode == 'undefined') {
              this.data.themes[i].stamps[j].choose_next_mode = 'liniar';
            }
            if ($.inArray(this.data.themes[i].stamps[j].choose_next_mode, ['liniar', 'random']) == -1) {
              this.data_errors.push('Unknown value set to "choose_next_mode" for the stamp #'+(j+1)+' of theme "'+i+'": "'+this.data.themes[i].stamps[j].choose_next_mode+'"; use one of "liniar" or "random".');
              continue;
            }
          }
        }

        if (typeof this.data.themes[i].clipart == 'undefined') {
          this.data_errors.push('"clipart" key missing for theme "'+i+'".');
        }
        else {
          for (var j=0; j<this.data.themes[i].clipart.length; j++) {
            if (typeof this.data.themes[i].clipart[j].imagepath == 'undefined') {
              this.data_errors.push('"imagepath" key missing for clipart #'+(j+1)+' of theme "'+i+'".');
              continue;
            }

            if (typeof this.data.themes[i].clipart[j].thumb_imagepath == 'undefined') {
              this.data.themes[i].clipart[j].thumb_imagepath = this.data.themes[i].clipart[j].imagepath;
            }

            if (typeof this.data.themes[i].clipart[j].initial_scale == 'undefined') {
              this.data.themes[i].clipart[j].initial_scale = 50;
            }

            this.data.themes[i].clipart[j].initial_scale = parseInt(this.data.themes[i].clipart[j].initial_scale);
            if (isNaN(this.data.themes[i].clipart[j].initial_scale)) {
              this.data_errors.push('The "initial_scale" for clipart #'+(j+1)+' of theme "'+i+'" is not numeric.');
              continue;
            }
          }
        }
      }
    }
  }
}


cdraw.setup = function() {
  cdraw.initializeNewCanvas();

  cdraw.setupSizeSelectorFor(cdraw.brush_tool);
  cdraw.setupSizeSelectorFor(cdraw.eraser_tool);
  cdraw.setupSizeSelectorFor(cdraw.stamp_tool);

  var tools = [cdraw.brush_tool, cdraw.eraser_tool, cdraw.background, cdraw.stamp_tool, cdraw.clipart_tool, cdraw.theme];
  for (var i=0; i<tools.length; i++) {
    if (typeof tools[i].setup == 'function') {
      tools[i].setup();
    }
  }


  $('#cgp-btn-play').click(function() {
    $('#cgp-intro-screen').animate({top: -500}, 'fast', 'swing', function(){$('#cgp-intro-screen').remove();});
    
    $('#cgp-tools-drawer').animate({left: 0}, 'swing', function() {
      $('#cgp-tool-brush').click(); //activate the brush tool by default
    });
    $('#cgp-background-drawer').animate({left: 804}, 'swing');
  });
}

cdraw.initializeNewCanvas = function() {
  cdraw.crt_tool_unload();
  /* create a new, empty layer */
  new Layer();
  while (project.layers.length > 1) {
     project.layers[0].remove();
  }

  cdraw.background_layer = project.layers[0];
  cdraw.drawing_layer = new Layer();
  cdraw.frame_layer = new Layer();

  $('#cgp-background-options li.active').click();

  cdraw.crt_tool_load(true);
}

cdraw.setupSizeSelectorFor = function(tool) {
  var drawer = null;
  switch (tool) {
    case cdraw.brush_tool:drawer = $('#cgp-tools-brush-drawer-options');break;
    case cdraw.eraser_tool:drawer = $('#cgp-tools-eraser-drawer-options');break;
    case cdraw.stamp_tool:drawer = $('#cgp-tools-stamps-drawer-options');break;
  }
  if (!drawer || !drawer.length) {
    return;
  }

  function setSize(size) {
    tool.size = size;
    var knob_min = -8, knob_max = 86, /* top coordinates for knob movement */
        top = Math.round(knob_max - (knob_max - knob_min) * (tool.size - tool.min_size) / (tool.max_size - tool.min_size));
    $('.size-selector-knob', drawer).stop().animate({top: top});
    updateSampleSize();
    if (typeof tool.sizeChanged == 'function') {
      tool.sizeChanged();
    }
  }

  function updateSampleSize() {
    var one_third = (tool.max_size - tool.min_size) / 3,
        flat_size = tool.size - tool.min_size;
    $('.size-selector-sample li', drawer).removeClass('active');
    if (flat_size < one_third) {
      $('.size-selector-sample li.size-selector-sample-small', drawer).addClass('active');
    }
    else if (flat_size < 2*one_third) {
      $('.size-selector-sample li.size-selector-sample-medium', drawer).addClass('active');
    }
    else {
      $('.size-selector-sample li.size-selector-sample-big', drawer).addClass('active');
    }
  }

  if (!$('.size-selector', drawer).length) {
    drawer.prepend('\
      <div class="size-selector">\
        <div class="size-selector-knob"></div>\
        <ul class="size-selector-sample">\
          <li class="size-selector-sample-big"><div class="size-selector-selected-color"><div class="size-selector-selected-color-overlay"></div></div></li>\
          <li class="size-selector-sample-medium"><div class="size-selector-selected-color"><div class="size-selector-selected-color-overlay"></div></div></li>\
          <li class="size-selector-sample-small"><div class="size-selector-selected-color"><div class="size-selector-selected-color-overlay"></div></div></li>\
        </ul>\
      </div>\
    ');
  }

  $('.size-selector', drawer).on('move', function (e) {
    var knob_min = -8, knob_max = 86, /* top coordinates for knob movement */
        top = Math.max(knob_min, Math.min(knob_max, e.pageY - $(this).offset().top - 18));
        size = Math.round(tool.max_size - (top - knob_min) * (tool.max_size - tool.min_size) / (knob_max - knob_min));
    if (size != tool.size) {
      tool.size = size;
      updateSampleSize();
      if (typeof tool.sizeChanged == 'function') {
        tool.sizeChanged();
      }
    }
    $('.size-selector-knob', drawer).stop().css({top: top});
  });
  $('.size-selector-sample li', drawer).click(function() {
    var one_third = (tool.max_size - tool.min_size) / 3;
    if ($(this).hasClass('size-selector-sample-small')) {
      setSize(tool.min_size + Math.round(one_third / 2));
    }
    else if ($(this).hasClass('size-selector-sample-medium')) {
      setSize(tool.min_size + Math.round(one_third * 3 / 2));
    }
    else {
      setSize(tool.min_size + Math.round(one_third * 5 / 2));
    }
  });
  
  setSize(tool.size);
}

function onMouseDown(event) {
  if ($('.ui-widget-overlay, #generic-overlay').length) {
    return;
  }

  if (cdraw.crt_tool && typeof cdraw.crt_tool.onMouseDown == 'function') {
    cdraw.crt_tool.onMouseDown(event);
  }
}

function onMouseMove(event) {
  if ($('.ui-widget-overlay, #generic-overlay').length) {
    return;
  }

  if (cdraw.crt_tool && typeof cdraw.crt_tool.onMouseMove == 'function') {
    cdraw.crt_tool.onMouseMove(event);
  }
}

function onMouseUp(event) {
  if ($('.ui-widget-overlay, #generic-overlay').length) {
    return;
  }

  if (cdraw.crt_tool && typeof cdraw.crt_tool.onMouseUp == 'function') {
    cdraw.crt_tool.onMouseUp(event);
  }
}

function onFrame(event) {
  if ($('.ui-widget-overlay, #generic-overlay').length) {
    return;
  }

  if (cdraw.crt_tool && typeof cdraw.crt_tool.onFrame == 'function') {
    cdraw.crt_tool.onFrame(event)
  }
}

/*** BRUSH TOOL **********************************************************************/
cdraw.brush_tool = {
  path: null,
  cursor: null,
  cursor_layer: null,
  size: cgp_conf.brush_tool.initial_size,
  min_size: cgp_conf.brush_tool.min_size,
  max_size: cgp_conf.brush_tool.max_size,
  color: cgp_conf.brush_tool.initial_color,
  colors: cgp_conf.brush_tool.colors,
  loaded: false,

  setup: function() {
    $('#cgp-tool-brush').click(function(){
      if (cdraw.crt_tool == cdraw.brush_tool) {
        return;
      }
      cdraw.crt_tool_unload();
      cdraw.crt_tool = cdraw.brush_tool;
      cdraw.crt_tool_load();
    });

    this._setupBrushHead();
    this._setupColorPicker();
  },

  _setupBrushHead: function() {
    var canvas = document.createElement('canvas'),
        head_img = $('#cgp-tool-brush img').get(0);

    canvas.width = head_img.width;
    canvas.height = head_img.height;

    canvas.getContext('2d').drawImage(head_img, 0, 0);
    $(head_img).replaceWith(canvas);
  },

  _setupColorPicker: function() {
    var color_options = '';
    for (var i=0; i<this.colors.length; i++) {
      color_options += '<li'+((this.colors[i] == this.color) ? ' class="active"' : '')+'>\
                          <div class="cgp-colorpicker-color" style="background-color: '+this.colors[i]+'"></div>\
                          <div class="cgp-colorpicker-color-overlay"></div>\
                       </li>';
    }
    $('#cgp-colorpicker').html(color_options);
    $('#cgp-colorpicker li').click(function() {
      var rgb = /rgba?\((\d+), (\d+), (\d+)/.exec($('.cgp-colorpicker-color', this).css('backgroundColor'));
      if (!rgb || rgb.length != 4) {
        return;
      }
      var r = parseInt(rgb[1]).toString(16);r = (r.length<2 ? '0' : '') + r;
      var g = parseInt(rgb[2]).toString(16);g = (g.length<2 ? '0' : '') + g;
      var b = parseInt(rgb[3]).toString(16);b = (b.length<2 ? '0' : '') + b;
      var hex = '#' + r + g+ b;

      if (cdraw.brush_tool.color == hex) {
        return;
      }

      $('#cgp-colorpicker li').removeClass('active');
      $(this).addClass('active');

      cdraw.brush_tool.color = hex;
      cdraw.brush_tool.fgColorChanged();
      cdraw.brush_tool.updateBrushHeadColor();
    });
    
    this.updateBrushHeadColor();
  },

  updateBrushHeadColor: function() {
    var buffer = document.createElement('canvas'),
        bctx = buffer.getContext('2d'),
        canvas = $('#cgp-tool-brush canvas').get(0),
        ctx = canvas.getContext('2d');

    bctx.fillStyle = this.color;
    bctx.fillRect(0, 0, buffer.width, buffer.height);

    ctx.globalCompositeOperation = 'source-atop';
    ctx.drawImage(buffer, 0, 0);
  },

  load: function(is_reload) {
    if (this.loaded) {
      return;
    }
    this.loaded = true;

    $('#cgp-tool-brush').addClass('active');
    $('#cgp-tools-brush-drawer-options').stop().animate({left: 26}, 'swing');

    this.path = null;

    if (!$.support.touch) {
      this.cursor_layer = new Layer();
      this.cursor = new Path.Circle(new Point(-100, -100), cdraw.brush_tool.size/2);
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
    $('#cgp-tools-brush-drawer-options').stop().animate({left: -253}, 'swing');

    if (this.cursor_layer) {
      this.cursor_layer.remove();
      this.cursor_layer = null;
      $(view.canvas).css('cursor', 'default');
    }

    view.draw();
  },

  onMouseDown: function(event) {
    this.path = new Path(event.point);
    this.path.strokeColor = cdraw.brush_tool.color;
    this.path.strokeWidth = cdraw.brush_tool.size;
    this.path.strokeCap = 'round';
  },

  onMouseUp: function(event) {
    if (!this.path) {
      return;
    }
    
    this.path.lineTo(event.point);
    this.path.smooth();
    this.path.simplify(10);
    this.path = null;
  },

  onMouseMove: function(event) {
    if (this.cursor) {
      this.cursor.position = event.point;
    }

    if (!this.path) {
      return;
    }

    if (event.point.getDistance(this.path.segments[this.path.segments.length - 1].point, false) < Math.sqrt(cdraw.brush_tool.size)) {
      return;
    }
    this.path.lineTo(event.point);
  },

  fgColorChanged: function() {
    if (this.cursor) {
      this.cursor.fillColor = cdraw.brush_tool.color;
      $('#cgp-tools-brush-drawer-options .size-selector .size-selector-sample li .size-selector-selected-color').css({backgroundColor: cdraw.brush_tool.color});
    }
  },

  sizeChanged: function() {
    if (this.cursor) {
      var crt_diameter = this.cursor.segments[2].point.x - this.cursor.segments[0].point.x;
      this.cursor.scale(cdraw.brush_tool.size  / crt_diameter);

      if (cdraw.brush_tool.size>5) {
        $(view.canvas).css('cursor', 'none');
        this.cursor.visible = true;
      }
      else {
        $(view.canvas).css('cursor', 'crosshair');
        this.cursor.visible = false;
      }
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
  size: cgp_conf.eraser_tool.initial_size,
  min_size: cgp_conf.eraser_tool.min_size,
  max_size: cgp_conf.eraser_tool.max_size,
  loaded: false,

  setup: function() {
    $('#cgp-tool-eraser').click(function(){
      if (cdraw.crt_tool == cdraw.eraser_tool) {
        return;
      }
      cdraw.crt_tool_unload();
      cdraw.crt_tool = cdraw.eraser_tool;
      cdraw.crt_tool_load();
    });
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

    if (this.last_checked_point && this.last_checked_point.getDistance(event.point, false) < cdraw.eraser_tool.size) {
      return;
    }

    var hitResult = null;
    while (hitResult = cdraw.drawing_layer.hitTest(event.point, {fill: true, stroke: true, segments: true, tolerance: cdraw.eraser_tool.size})) {
      hitResult.item.remove();
    }

    var i = 0;
    while (i<cdraw.drawing_layer.children.length) {
      if (cdraw.drawing_layer.children[i] instanceof Raster && cdraw.drawing_layer.children[i].bounds.intersects(this.cursor_layer.firstChild.bounds)) {
        var removed_child = cdraw.drawing_layer.children[i];
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
    if (this.cursor_layer) {
      this.cursor_layer.remove();
    }

    this.cursor_layer = new Layer();
    if ($.support.touch || this.size < 10) {
      this.cursor_layer.visible = false;
    }

    if (this.size < 10) {
      $(view.canvas).css('cursor', 'crosshair');
    }
    else {
      $(view.canvas).css('cursor', 'none');
    }

    
    var cursor1 = null, cursor2 = null;
    if (this.style == 'square') {
      cursor1 = new Path.Rectangle(new Point(view.center.x, view.center.y), new Size(this.size, this.size));
      cursor2 = new Path.Rectangle(new Point(view.center.x + 1, view.center.y + 1), new Size(this.size-2, this.size-2));
    }
    else {
      cursor1 = new Path.Circle(new Point(view.center.x, view.center.y), parseInt(this.size/2));
      cursor2 = new Path.Circle(new Point(view.center.x, view.center.y), parseInt(this.size/2-1));
    }
    cursor1.strokeColor = '#333333';cursor1.strokeWidth = 1;
    cursor2.strokeColor = '#cccccc';cursor2.strokeWidth = 1;

    this.cursor_layer.position = new Point(-10-this.size, -10-this.size);

    cdraw.drawing_layer.activate();
  },

  sizeChanged: function() {
    this._build_cursor();
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
  drawing: false,
  last_drawing_point: null,
  size: cgp_conf.stamp_tool.initial_size,
  min_size: cgp_conf.stamp_tool.min_size,
  max_size: cgp_conf.stamp_tool.max_size,
  min_distance: 0,
  loaded: false,

  setup: function() {
    this.rasters_layer = new Layer();
    this.rasters_layer.visible = false;
    this.cursor_layer = new Layer();
    cdraw.drawing_layer.activate();
  },

  buildStampsPalette: function() {
    var stamps = cdraw.theme.data.themes[cdraw.theme.data.current_theme].stamps;
    var list = '';
    for (var i=0; i<stamps.length; i++) {
      list += '<li id="custom-stamp-'+cdraw.theme.data.current_theme+'-'+i+'">\
                 <img src="'+stamps[i].thumb_imagepath+'" />\
                 <img class="sprite" src="'+stamps[i].imagepath+'" />\
               </li>';
    }

    $('#cgp-tool-stamp').html(list);
    $('#cgp-tool-stamp li').click(cdraw.stamp_tool.stampsPalleteStampSelected);
  },

  stampsPalleteStampSelected: function() {
    if ($(this).hasClass('active')) {
      return;
    }
    
    var matches = /^custom-stamp-(.*)-(\d)$/.exec($(this).attr('id'));
    if (!matches) {
      return;
    }

    if (cdraw.crt_tool != cdraw.stamp_tool) {
      cdraw.crt_tool_unload();
      cdraw.crt_tool = cdraw.stamp_tool;
      cdraw.crt_tool_load();
    }

    $('#cgp-tool-stamp li').removeClass('active').css({zIndex: 'auto'});
    $(this).addClass('active').css({zIndex: 1});

    var theme = matches[1];
    var idx = parseInt(matches[2]);

    cdraw.stamp_tool.current_stamp_idx = idx;

    for (var i=0; i<cdraw.stamp_tool.rasters.length; i++) {
      cdraw.stamp_tool.rasters[i].remove();
    }
    cdraw.stamp_tool.rasters = [];

    var sprites_image = $('img.sprite', this).get(0);
    var raster_width = cdraw.theme.data.themes[theme].stamps[idx].width,
        raster_height = cdraw.theme.data.themes[theme].stamps[idx].height,
        rasters_count = Math.floor(sprites_image.width / raster_width);

    cdraw.stamp_tool.rasters_layer.activate();
    for (var i=0; i<rasters_count; i++) {
      var tmp_canvas = document.createElement('canvas');
      tmp_canvas.width = raster_width;
      tmp_canvas.height = raster_height;

      cdraw.stamp_tool.rasters[i] = new Raster(tmp_canvas);
      cdraw.stamp_tool.rasters[i].drawImage(sprites_image, new Point(-raster_width * i, 0));
    }

    cdraw.stamp_tool.crt_stamp_frame_idx = -1;
    cdraw.stamp_tool.buildNextCursor();
    cdraw.stamp_tool.computeMinDistance();
    cdraw.drawing_layer.activate();
  },

  buildCursor: function() {
    var last_cursor_position = null;
    if (this.cursor) {
      last_cursor_position = this.cursor.position;
      this.cursor.remove();
    }

    var theme = cdraw.theme.data.current_theme,
        idx = this.current_stamp_idx;

    this.cursor = this.rasters[this.crt_stamp_frame_idx].clone();
    this.cursor.scale(this.size / 100);
    if (last_cursor_position) {
      this.cursor.position = last_cursor_position;
    }
    else {
      this.cursor.position = new Point(-cdraw.theme.data.themes[theme].stamps[idx].width, -cdraw.theme.data.themes[theme].stamps[idx].height);
    }
    this.cursor_layer.addChild(this.cursor);
    $(view.canvas).css('cursor', 'none');
  },

  computeMinDistance: function() {
    /*
     * the min_distance defined in the themes json represents a procentual value of the current size
     * the size of this tool is also a procent of the original image
     * so first build the arithmetic sum of the original image, then get the scaled size and then apply the min_distance scaling
     */
    var theme = cdraw.theme.data.current_theme,
        idx = this.current_stamp_idx;

    this.min_distance = ((cdraw.theme.data.themes[theme].stamps[idx].width + cdraw.theme.data.themes[theme].stamps[idx].height)/2 * this.size/100) * cdraw.theme.data.themes[theme].stamps[idx].min_distance/100;
  },

  buildNextCursor: function() {
    var theme = cdraw.theme.data.current_theme,
        idx = this.current_stamp_idx;
    if (cdraw.theme.data.themes[theme].stamps[idx].choose_next_mode == 'random') {
     this.crt_stamp_frame_idx = Math.floor(Math.random() * this.rasters.length) ;
    }
    else {
      this.crt_stamp_frame_idx++;
      if (this.crt_stamp_frame_idx >= this.rasters.length) {
        this.crt_stamp_frame_idx = 0;
      }
    }

    this.buildCursor();
  },

  load: function(is_reload) {
    if (this.loaded) {
      return;
    }
    this.loaded = true;

    $('#cgp-tools-stamps-drawer-options').stop().animate({left: 26}, 'swing');
  },

  unload: function() {
    if (!this.loaded) {
      return;
    }
    this.loaded = false;

    $('#cgp-tool-stamp li').removeClass('active');
    $('#cgp-tools-stamps-drawer-options').stop().animate({left: -253}, 'swing');

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
    if (this.cursor) {
      this.cursor.position = event.point;
    }

    if (!this.drawing) {
      return;
    }

    var theme = cdraw.theme.data.current_theme,
        idx = this.current_stamp_idx;

    if (event.point.x < -cdraw.theme.data.themes[theme].stamps[idx].width || event.point.x > cdraw.theme.data.themes[theme].stamps[idx].width + view.size.width) {
      return;
    }
    if (event.point.y < -cdraw.theme.data.themes[theme].stamps[idx].height || event.point.y > cdraw.theme.data.themes[theme].stamps[idx].height + view.size.height) {
      return;
    }

    if (this.last_drawing_point && this.last_drawing_point.getDistance(event.point, false) < this.min_distance) {
      return;
    }

    cdraw.drawing_layer.addChild(this.cursor.clone());
    this.buildNextCursor();
    this.last_drawing_point = event.point.clone();
  },

  sizeChanged: function() {
    if (!this.rasters.length) {
      return;
    }

    this.buildCursor();
    this.computeMinDistance();
  }
}

cdraw.clipart_tool = {
  controls: {},
  selection_layer: null,
  active_raster: null,
  dragging: false,
  loaded: false,

  setup: function() {
    $('#cgp-tool-clipart').click(function() {
      if (cdraw.crt_tool == cdraw.clipart_tool) {
        return;
      }
      cdraw.crt_tool_unload();
      cdraw.crt_tool = cdraw.clipart_tool;
      cdraw.crt_tool_load();
    });

    this.selection_layer = new Layer();
    this.controls.layer = new Layer();
    this.controls.layer.visible = false;

    var controls_sprite = $('#clipart-tool-controls').get(0);
    var tmp_canvas = document.createElement('canvas');
    tmp_canvas.width = tmp_canvas.height = 35;
    var raster = new Raster(tmp_canvas);
    raster.setBounds(new Rectangle(0, 0, 35, 35));

    this.controls.zoomin = raster.clone();
    this.controls.zoomin.drawImage(controls_sprite, new Point(0, 0));
    this.controls.zoomin_hover = raster.clone();
    this.controls.zoomin_hover.drawImage(controls_sprite, new Point(0, -35));

    this.controls.zoomout = raster.clone();
    this.controls.zoomout.drawImage(controls_sprite, new Point(-35, 0));
    this.controls.zoomout_hover = raster.clone();
    this.controls.zoomout_hover.drawImage(controls_sprite, new Point(-35, -35));

    this.controls.rotate = raster.clone();
    this.controls.rotate.drawImage(controls_sprite, new Point(-70, 0));
    this.controls.rotate_hover = raster.clone();
    this.controls.rotate_hover.drawImage(controls_sprite, new Point(-70, -35));

    this.controls.remove = raster.clone();
    this.controls.remove.drawImage(controls_sprite, new Point(-105, 0));
    this.controls.remove_hover = raster.clone();
    this.controls.remove_hover.drawImage(controls_sprite, new Point(-105, -35));

    this.controls.zoomin_hover.visible = this.controls.zoomout_hover.visible = this.controls.rotate_hover.visible = this.controls.remove_hover.visible = false;

    cdraw.drawing_layer.activate();
  },

  buildClipartPalette: function() {
    var pictures = cdraw.theme.data.themes[cdraw.theme.data.current_theme].clipart;
    var list = '';
    for (var i=0; i<pictures.length; i++) {
      list += '<li id="custom-picture-'+cdraw.theme.data.current_theme+'-'+i+'">\
                 <img class="thumb" src="'+pictures[i].thumb_imagepath+'" />\
                 <img class="original" src="'+pictures[i].imagepath+'" />\
               </li>';
    }

    $('#cgp-clipart').html(list);
    $('#cgp-clipart img.thumb').load(function(){
      var left = Math.round((91 - this.width) / 2),
          top = Math.round((90 - this.height) / 2);
      $(this).css({'visibility': 'visible', left: left, top: top});
    });
    $('#cgp-clipart li').click(cdraw.clipart_tool.clipartPalletePictureSelected);
  },

  clipartPalletePictureSelected: function() {
    var matches = /^custom-picture-(.*)-(\d)$/.exec($(this).attr('id'));
    if (!matches) {
      return;
    }

    var theme = matches[1];
    var idx = parseInt(matches[2]);

    var img = $('img.original', this).get(0);
    var raster = new Raster(img);
    raster.scale(parseInt(cdraw.theme.data.themes[theme].clipart[idx].initial_scale) / 100);
    raster.position = view.center;
    raster.custom_image = {theme: theme, picture_idx: idx};

    cdraw.clipart_tool.selection_layer.activate();
    raster.custom_image.selection = new Path.Rectangle(view.center, 10);
    raster.custom_image.selection.strokeWidth = 3;
    raster.custom_image.selection.strokeColor = '#000';

    var size = Math.max(raster.bounds.width, raster.bounds.height);
    var topLeft = raster.bounds.topLeft.clone();
    topLeft.x -= (size - raster.bounds.width)/2;
    topLeft.y -= (size - raster.bounds.height)/2;
    raster.custom_image.selection.setBounds(new Rectangle(topLeft, new Size(size, size)));

    cdraw.drawing_layer.activate();
    
    cdraw.clipart_tool.selectClipart(raster);
  },

  selectClipart: function(raster) {
    if (this.active_raster) {
      this.active_raster.custom_image.selection.visible = false;
    }
    this.active_raster = raster;
    
    if (cdraw.crt_tool != cdraw.clipart_tool) {
      cdraw.crt_tool_unload();
      cdraw.crt_tool = cdraw.clipart_tool;
      cdraw.crt_tool_load();
    }
    this.updateControlsPosition();
    this.controls.layer.visible = true;
    this.active_raster.custom_image.selection.visible = true;
  },

  updateControlsPosition: function() {
    var bounds = this.active_raster.custom_image.selection.bounds;
    this.controls.zoomin.position = this.controls.zoomin_hover.position = bounds.topLeft;
    this.controls.zoomout.position = this.controls.zoomout_hover.position = bounds.bottomLeft;
    this.controls.rotate.position = this.controls.rotate_hover.position = bounds.topRight;
    this.controls.remove.position = this.controls.remove_hover.position = bounds.bottomRight;
  },

  load: function(is_reload) {
    if (this.loaded) {
      return;
    }
    this.loaded = true;

    $('#cgp-tool-clipart').addClass('active');
    $('#cgp-tools-clipart-drawer-options').stop().animate({left: 26}, 'swing');
  },

  unload: function() {
    if (!this.loaded) {
      return;
    }
    this.loaded = false;

    $('#cgp-tool-clipart').removeClass('active');
    $('#cgp-tools-clipart-drawer-options').stop().animate({left: -253}, 'swing');

    this.deselectActiveRaster();
  },

  onMouseDown: function(event) {
    if (this.active_raster) {
      if (this.controls.zoomin.bounds.contains(event.point) && this.active_raster.bounds.width < view.size.width - 64 && this.active_raster.bounds.height < view.size.height - 64) {
        var initial_size = this.active_raster.bounds.size;

        this.active_raster.scale(1.1, this.active_raster.bounds.topLeft);
        this.active_raster.custom_image.selection.scale(1.1, this.active_raster.custom_image.selection.bounds.topLeft);
        this.updateControlsPosition();
        return;
      }

      if (this.controls.zoomout.bounds.contains(event.point) && this.active_raster.bounds.width > 64 && this.active_raster.bounds.height > 64) {
        this.active_raster.scale(0.9, this.active_raster.bounds.bottomLeft);
        this.active_raster.custom_image.selection.scale(0.9, this.active_raster.custom_image.selection.bounds.bottomLeft);

        this.updateControlsPosition();
        return;
      }

      if (this.controls.rotate.bounds.contains(event.point)) {
        this.active_raster.rotate(30);
        return;
      }

      if (this.controls.remove.bounds.contains(event.point)) {
        this.active_raster.custom_image.selection.remove();
        this.active_raster.custom_image.selection = null;
        for (var i=0; i<cdraw.drawing_layer.children.length; i++) {
          if (cdraw.drawing_layer.children[i] == this.active_raster) {
            cdraw.drawing_layer.children[i].remove();
            if (typeof cdraw.drawing_layer.children[i] != 'undefined' && cdraw.drawing_layer.children[i] == this.active_raster) {
              cdraw.drawing_layer.children.splice(i, 1);
            }
            $(view.canvas).css('cursor', 'default');
            break;
          }
        }

        this.active_raster = null;
        this.controls.layer.visible = false;

        return;
      }

      if (this.active_raster.bounds.contains(event.point)) {
        this.dragging = this.active_raster.position - event.point ;
        return;
      }
    }

    for (var i=cdraw.drawing_layer.children.length-1; i>=0; i--) {
      if (
          cdraw.drawing_layer.children[i] instanceof Raster &&
          typeof cdraw.drawing_layer.children[i].custom_image != 'undefined' &&
          cdraw.drawing_layer.children[i] != this.active_raster &&
          cdraw.drawing_layer.children[i].bounds.contains(event.point)
      ) {
        if (cdraw.drawing_layer.children[i] != cdraw.drawing_layer.lastChild) {
          cdraw.drawing_layer.children[i].insertAbove(cdraw.drawing_layer.lastChild);
        }
        this.selectClipart(cdraw.drawing_layer.lastChild);
        this.onMouseDown(event);
        break;
      }
    }
  },

  onMouseUp: function(event) {
    this.dragging = false;
  },

  onMouseMove: function(event) {
    if (this.dragging) {
      this.active_raster.position = event.point + this.dragging;
      this.active_raster.custom_image.selection.position = event.point + this.dragging;
      this.updateControlsPosition();
    }



    if (this.controls.layer.visible) {
      var hovering = false;
      hovering = hovering || this._toogleButtons(this.controls.zoomin, this.controls.zoomin_hover, event.point);
      hovering = hovering || this._toogleButtons(this.controls.zoomout, this.controls.zoomout_hover, event.point);
      hovering = hovering || this._toogleButtons(this.controls.rotate, this.controls.rotate_hover, event.point);
      hovering = hovering || this._toogleButtons(this.controls.remove, this.controls.remove_hover, event.point);
      if (hovering) {
        $(view.canvas).css('cursor', 'pointer');
      }
      else {
        $(view.canvas).css('cursor', 'default');
      }
    }
  },

  _toogleButtons: function(off_btn, on_btn, point) {
    if (on_btn.bounds.contains(point)) {
      off_btn.visible = false;
      on_btn.visible = true;
      return true;
    }
    else {
      off_btn.visible = true;
      on_btn.visible = false;
      return false;
    }
  },

  deselectActiveRaster: function() {
    this.controls.layer.visible = false;
    if (this.active_raster) {
      this.active_raster.custom_image.selection.visible = false;
    }
    this.active_raster = null;
    this.moving = false;
    this.rotating = null;

  }
}

cdraw.background = {
  display_frame: cgp_conf.background_tool.initial_display_frame,
  current_background: cgp_conf.background_tool.initial_background - 1,

  setup: function() {
    $('#cgp-background-options li').click(function() {
      if ($(this).hasClass('active')) {
        return;
      }

      $('#cgp-background-options li').removeClass('active');
      $(this).addClass('active');

      var idx = parseInt($(this).attr('id').match(/^cgp-btn-background-(\d+)$/)[1]);
      var lis_count = $('#cgp-background-options li').length;

      cdraw.background.current_background = idx;

      $(this).css({zIndex: lis_count});
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

      if (cdraw.crt_tool == cdraw.clipart_tool) {
        cdraw.clipart_tool.deselectActiveRaster();
      }
    });

    $('#cgp-background-options li#cgp-btn-background-' + this.current_background).click();

    $('#cgp-btn-background-frame').click(function(){
      if ($('#cgp-btn-background-frame').hasClass('disabled')) {
        return;
      }
      cdraw.background.display_frame = !cdraw.background.display_frame
      cdraw.background.setupFrame();

      if (cdraw.crt_tool == cdraw.clipart_tool) {
        cdraw.clipart_tool.deselectActiveRaster();
      }
    });
  },

  setupFrame: function() {
    cdraw.frame_layer.removeChildren();
    $('#cgp-canvas-frame').remove();

    if (!cdraw.background.display_frame) {
      $('#cgp-canvas-wrapper').css({backgroundPosition: 'left -' + (this.current_background*465) + 'px'});
      return;
    }

    $('#cgp-btn-background-frame').addClass('disabled');

    $('#cgp-canvas-wrap').prepend($('<img id="cgp-canvas-frame" />'));
    $('#cgp-canvas-frame')
      .load(function() {
        var tmp_canvas = document.createElement('canvas');
        tmp_canvas.width = view.size.width;
        tmp_canvas.height = view.size.height;
        var raster = new Raster(tmp_canvas);
        raster.setBounds(new Rectangle(0, 0, view.size.width, view.size.height));
        raster.drawImage(this, new Point(-3, -1));
        cdraw.frame_layer.addChild(raster);

        $('#cgp-canvas-wrapper').css({backgroundPosition: 'left -4650px'});
        $('#cgp-btn-background-frame').removeClass('disabled');
      })
      .error(function() {
        $('#cgp-btn-background-frame').removeClass('disabled');
      })
      .attr('src', cdraw.theme.data.themes[ cdraw.theme.data.current_theme ].frame );

  }
}

cdraw.undo = function() {
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

  if (cdraw.crt_tool == cdraw.clipart_tool) {
    cdraw.clipart_tool.deselectActiveRaster();
  }
}

cdraw.theme.readJSONThemes();

cdraw.view = view;
cdraw.project = project;
cdraw.loaded = true;
