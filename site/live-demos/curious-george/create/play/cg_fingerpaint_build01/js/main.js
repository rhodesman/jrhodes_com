window.cgp_conf = {
  initial_size: 'medium', /* one of [small, medium, large] */
  initial_color: '#dd0d16',
  colors: ['#fdfdfd', '#1f3aff', '#c003ef', '#a7969f', '#58b4eb', '#df2c97', '#b57f4c', '#1ebfa3', '#dd0d16', '#81482e', '#29a637', '#f06c00', '#010000', '#4be92e', '#f2bf00'],
  brush_tool: {
    /* pixels */
    size: {
      small: 5,
      medium: 11,
      large: 20
    }
  },
  eraser_tool: {
    /* pixels */
    size: {
      small: 20,
      medium: 35,
      large: 50
    }
  },
  stamp_tool: {
    /* procent of original image */
    size: {
      small: 25,
      medium: 60,
      large: 100
    },
    min_distance: 75
  },
  background_tool: {
    initial_background: 1 /* 1..5 */
  },

  dripping_tool: {
    /* pixels */
    size: {
      small: 4,
      medium: 10,
      large: 17
    }
  },

  george: {
    /* george will take turn after a random number of seconds, between the follwing min and max ...*/
    time_before_take_turn: {
      min: 10,
      max: 30
    },
    /* ...but he won't be that rude to interrupt the child, he will wait for the child to be idle for a few seconds */
    idle_time_before_take_turn: 5
  },

  recorder: {
    /* the maximum time, in miliseconds, that may be spent between 2 actions when replaying a recording */
    max_idle_time: 300
  },

  audio_base_path: 'audio/',
  audio: {
    btn_help: ['CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ButtonRollovers_Help_2.ogg', 'CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ButtonRollovers_Help_2.mp3'],
    btn_done: ['CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ButtonRollovers_Done.ogg', 'CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ButtonRollovers_Done.mp3'],
    start_over: ['CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ButtonRollovers_StartOver.ogg', 'CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ButtonRollovers_StartOver.mp3'],
    keep_painting: ['KeepPainting.ogg', 'KeepPainting.mp3'],
    game_title: ['CG_Game_ActivityTitles_FingerPaintWithGeorge_Boy.ogg', 'CG_Game_ActivityTitles_FingerPaintWithGeorge_Boy.mp3'],
    play_game: ['CG_Game-NavigationButtons_Play_Girl_2.ogg', 'CG_Game-NavigationButtons_Play_Girl_2.mp3'],
    skip_video: ['Gen_Nav_M_022.ogg', 'Gen_Nav_M_022.mp3'],
    btn_save: ['Gen_Nav_M_005.ogg', 'Gen_Nav_M_005.mp3'],
    btn_print: ['Gen_Nav_M_004.ogg', 'Gen_Nav_M_004.mp3'],
    btn_close: ['Gen_Nav_M_002.ogg', 'Gen_Nav_M_002.mp3'],
    paint_w_finger: ['FG_FP_020.ogg', 'FG_FP_020.mp3'],
    paint_w_hand: ['FG_FP_021.ogg', 'FG_FP_021.mp3'],
    paint_w_foot: ['FG_FP_022.ogg', 'FG_FP_022.mp3'],
    eraser: ['FG_FP_019.ogg', 'FG_FP_019.mp3'],
    paper: ['FG_FP_023.ogg', 'FG_FP_023.mp3'],
    save_and_print_with_an_adult: ['CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ButtonRllvrs_SvAndPrntWthAnAdlt.ogg', 'CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ButtonRllvrs_SvAndPrntWthAnAdlt.mp3'],
    reaction_01: ['reactions/01.ogg', 'reactions/01.mp3'],
    reaction_02: ['reactions/02.ogg', 'reactions/02.mp3'],
    reaction_03: ['reactions/03.ogg', 'reactions/03.mp3'],
    reaction_04: ['reactions/04.ogg', 'reactions/04.mp3'],
    reaction_05: ['reactions/05.ogg', 'reactions/05.mp3'],
    reaction_06: ['reactions/06.ogg', 'reactions/06.mp3'],
    reaction_07: ['reactions/07.ogg', 'reactions/07.mp3'],
    reaction_08: ['reactions/08.ogg', 'reactions/08.mp3'],
    reaction_09: ['reactions/09.ogg', 'reactions/09.mp3'],
    reaction_10: ['reactions/10.ogg', 'reactions/10.mp3'],
    reaction_11: ['reactions/11.ogg', 'reactions/11.mp3'],
    reaction_12: ['reactions/12.ogg', 'reactions/12.mp3'],
    reaction_13: ['reactions/13.ogg', 'reactions/13.mp3'],
    reaction_14: ['reactions/14.ogg', 'reactions/14.mp3']
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
      if (typeof window.cdraw != 'object' || !cdraw.loaded) {
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
