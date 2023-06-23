window.cgp_conf = {
  download_script: 'download.php',
  theme_url_exp: /Georges-paintbox\/([^\/]+)/,
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
    initial_frame: 0 /* index of the initial frame; 0 = no frame*/,
    frames_count: 7 /* for each frame the DOM must contain an image with the id "background-frame-X", where X=1..frames_count */,
    initial_background: 1 /* 1..5 */
  },

  audio_base_path: 'audio/',
  audio: {
    tool_brush: ['CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ButtonRollovers_Brush.ogg', 'CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ButtonRollovers_Brush.mp3'],
    tool_eraser: ['CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ButtonRollovers_Eraser.ogg', 'CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ButtonRollovers_Eraser.mp3'],
    size_small: ['CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ToolPallette_Small.ogg', 'CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ToolPallette_Small.mp3'],
    size_medium: ['CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ToolPallette_Medium.ogg', 'CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ToolPallette_Medium.mp3'],
    size_big: ['CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ToolPallette_Big.ogg', 'CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ToolPallette_Big.mp3'],
    btn_help: ['CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ButtonRollovers_Help_2.ogg', 'CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ButtonRollovers_Help_2.mp3'],
    btn_theme_browser: ['CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ButtonRollovrs_SMrPctrsAndStmps.ogg', 'CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ButtonRollovrs_SMrPctrsAndStmps.mp3'],
    tool_clipart: ['CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ButtonRllvrs_SPctrssInThsCllctn.ogg', 'CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ButtonRllvrs_SPctrssInThsCllctn.mp3'],
    tool_stamp: ['CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ButtonRollovers_SelectAStamp.ogg', 'CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ButtonRollovers_SelectAStamp.mp3'],
    btn_done: ['CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ButtonRollovers_Done.ogg', 'CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ButtonRollovers_Done.mp3'],
    choose_a_picture: ['CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ToolPallette_ChooseAPicture.ogg', 'CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ToolPallette_ChooseAPicture.mp3'],
    choose_a_color: ['CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ToolPallette_ChooseAColor.ogg', 'CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ToolPallette_ChooseAColor.mp3'],
    clipart_control_zoom_out: ['CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ToolPallette_Smaller.ogg', 'CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ToolPallette_Smaller.mp3'],
    clipart_control_zoom_in: ['CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ToolPallette_Bigger.ogg', 'CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ToolPallette_Bigger.mp3'],
    clipart_control_zoom_rotate: ['CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ToolPallette_Rotate.ogg', 'CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ToolPallette_Rotate.mp3'],
    clipart_control_zoom_remove: ['CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ToolPallette_Erase.ogg', 'CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ToolPallette_Erase.mp3'],
    background_choose_paper: ['CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ButtonRollovers_ChoosePaper.ogg', 'CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ButtonRollovers_ChoosePaper.mp3'],
    background_change_frame: ['FG_GP_006.ogg', 'FG_GP_006.mp3'],
    start_over: ['CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ButtonRollovers_StartOver.ogg', 'CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ButtonRollovers_StartOver.mp3'],
    keep_drawing: ['CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ButtonRollovers_KeepDrawing.ogg', 'CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ButtonRollovers_KeepDrawing.mp3'],
    save_and_print: ['CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ButtonRllvrs_SvAndPrntWthAnAdlt.ogg', 'CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ButtonRllvrs_SvAndPrntWthAnAdlt.mp3'],
    what_do_you_want_to_do_next: ['CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ButtonRollovers_WhatDoYouWantTD.ogg', 'CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ButtonRollovers_WhatDoYouWantTD.mp3'],
    game_title: ['CG_Game-ActivityTitles_GerogesPaintbox_Boy_1.ogg', 'CG_Game-ActivityTitles_GerogesPaintbox_Boy_1.mp3'],
    play_game: ['CG_Game-NavigationButtons_Play_Girl_2.ogg', 'CG_Game-NavigationButtons_Play_Girl_2.mp3'],
    skip_video: ['CG_Game-NavigationButtons_Skip_Girl.ogg', 'CG_Game-NavigationButtons_Skip_Girl.mp3'],
    btn_undo: ['FG_GP_005.ogg', 'FG_GP_005.mp3']
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
