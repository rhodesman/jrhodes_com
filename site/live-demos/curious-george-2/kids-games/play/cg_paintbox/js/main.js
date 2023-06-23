window.cgp_conf = {
  theme_url_exp: /create\/([^\/]+)/,
  theme_json_stream: 'stream/themes.json',
  brush_tool: {
    /* pixels */
    initial_size: 10,
    min_size: 3,
    max_size: 50,
    initial_color: '#f60002',
    colors: ['#0069b3', '#ffde00', '#00b09d', '#ff8400', '#16bd00', '#f60002', '#848c00', '#d033b1', '#b06a2b', '#5234b2', '#65392d', '#878787', '#1e1e1e', '#ffffff']
  },
  eraser_tool: {
    /* pixels */
    initial_size: 50,
    min_size: 5,
    max_size: 100
  },
  stamp_tool: {
    /* procent of original image */
    initial_size: 50,
    min_size: 25,
    max_size: 100
  },
  background_tool: {
    initial_display_frame: false,
    initial_background: 1 /* 1..5 */
  }
}

if (typeof console == 'undefined') {
  console = {
    log: function(){},
    info: function(){},
    warn: function(){},
    error: function(){}
  }
}
var canvas = document.createElement('canvas');
var canvas_supported = !!(canvas.getContext && canvas.getContext('2d'));
delete canvas;


if (canvas_supported) {
  $(window).load(function(){
    var cdraw_load_interval = window.setInterval(function() {
      if (typeof window.cdraw != 'object' || !cdraw.loaded || !cdraw.theme.data_loaded) {
        return;
      }
      window.clearInterval(cdraw_load_interval);

      cdraw.setup();

      var remove_loader = function () {
        $('#cgp-loader').remove();
      }
      if ($('#cgp-intro-screen img').length) {
        $('#cgp-intro-screen img').load(remove_loader).error(remove_loader);
      }
      else {
        remove_loader();
      }
    }, 100);
  });
}
