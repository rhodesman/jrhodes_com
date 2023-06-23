var res_title_bg = 'res/images/splash.jpg';
var res_app_bg = 'res/images/animaldance_bg.jpg';
var res_gator_note = 'res/images/animals/gator_note2.png';

var s_elephant = 'res/sprites/elephant.png';
var s_bird = 'res/sprites/parrot.png';
var s_george = 'res/sprites/george.png';
var s_lion = 'res/sprites/lion.png';
var s_hipo = 'res/sprites/hippo.png';
var s_gator = 'res/sprites/crocodile.png';

var s_elephantPlist = "res/sprites/elephant.plist";
var s_birdPlist = "res/sprites/parrot.plist";
var s_georgePlist = "res/sprites/george.plist";
var s_lionPlist = "res/sprites/lion.plist";
var s_hipoPlist = "res/sprites/hippo.plist";
var s_gatorPlist = "res/sprites/crocodile.plist";

var ELEPHANT_AUDIO = "res/audio/elephant_trumpets";
var LION_AUDIO = "res/audio/lion2_trombone";
var BIRD_AUDIO = "res/audio/parrot_saxophone";
var HIPPO_AUDIO = "res/audio/hippo_tuba";
var MONKEY_AUDIO = "res/audio/monkey_drums";
var GATOR_AUDIO = "res/audio/gator_xylophone";
var GATOR_NOTE_1 = "res/audio/notes/gator_xylo_note01";
var GATOR_NOTE_2 = "res/audio/notes/gator_xylo_note02";
var GATOR_NOTE_3 = "res/audio/notes/gator_xylo_note03";
var GATOR_NOTE_4 = "res/audio/notes/gator_xylo_note04";
var GATOR_NOTE_5 = "res/audio/notes/gator_xylo_note05";
var GATOR_NOTE_6 = "res/audio/notes/gator_xylo_note06";
var GATOR_NOTE_7 = "res/audio/notes/gator_xylo_note07";
var GATOR_NOTE_8 = "res/audio/notes/gator_xylo_note08";

var vo_splash = "res/audio/vo/CG_Game-ActivityTitles_AnimalDanceParty_Girl";
var vo_play = "res/audio/vo/CG_Game-NavigationButtons_Play_Girl_2";
var vo_playback = "res/audio/vo/CG-ManInYellowHat_FunnyGarbage_GameActivities_AnimalDanceParty_RolloverButtons_VO_PlayMyMusic";
var vo_record = "res/audio/vo/CG-ManInYellowHat_FunnyGarbage_GameActivities_AnimalDanceParty_RolloverButtons_VO_Record";
var vo_stop = "res/audio/vo/CG-ManInYellowHat_FunnyGarbage_GameActivities_AnimalDanceParty_RolloverButtons_VO_Stop";
/*var vo_load1 = "res/audio/vo/CG-ManInYellowHat_FunnyGarbage_GameActivities_AnimalDanceParty_Instructions_VO_1_05-2";
var vo_load2 = "res/audio/vo/CG-ManInYellowHat_FunnyGarbage_GameActivities_AnimalDanceParty_Instructions_VO_1_06";
var vo_load3 = "res/audio/vo/CG-ManInYellowHat_FunnyGarbage_GameActivities_AnimalDanceParty_Instructions_VO_1_08";
var vo_load4 = "res/audio/vo/CG-ManInYellowHat_FunnyGarbage_GameActivities_AnimalDanceParty_Instructions_VO_1_09";
var vo_load5 = "res/audio/vo/CG-ManInYellowHat_FunnyGarbage_GameActivities_AnimalDanceParty_Instructions_VO_2_01";
var vo_load6 = "res/audio/vo/CG-ManInYellowHat_FunnyGarbage_GameActivities_AnimalDanceParty_Instructions_VO_1_11";
var vo_load7 = "res/audio/vo/CG-ManInYellowHat_FunnyGarbage_GameActivities_AnimalDanceParty_Instructions_VO_1_12";
var vo_load8 = "res/audio/vo/CG-ManInYellowHat_FunnyGarbage_GameActivities_AnimalDanceParty_Instructions_VO_1_15";
var vo_load9 = "res/audio/vo/CG-ManInYellowHat_FunnyGarbage_GameActivities_AnimalDanceParty_Instructions_VO_1_18";*/
var vo_load_merged = "res/audio/vo/load_vo_merged";
var vo_end_song1 = "res/audio/vo/CG-ManInYellowHat_FunnyGarbage_GameActivities_AnimalDanceParty_Feedback_VO_12-2";
var vo_end_song2 = "res/audio/vo/CG-ManInYellowHat_FunnyGarbage_GameActivities_AnimalDanceParty_Feedback_VO_13-2";
var vo_end_song3 = "res/audio/vo/CG-ManInYellowHat_FunnyGarbage_GameActivities_AnimalDanceParty_Feedback_VO_14-2";
var vo_end_song4 = "res/audio/vo/CG-ManInYellowHat_FunnyGarbage_GameActivities_AnimalDanceParty_Feedback_VO_15-2";
var vo_end_song5 = "res/audio/vo/CG-ManInYellowHat_FunnyGarbage_GameActivities_AnimalDanceParty_Feedback_VO_16-2";
var vo_end_song_final = "res/audio/vo/CG-ManInYellowHat_FunnyGarbage_GameActivities_AnimalDanceParty_Instructions_VO_2_03";
var vo_help = "res/audio/vo/CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ButtonRollovers_Help_2";

var g_ressources = [
    //image resources
		{type:"image", src:res_title_bg},
		{type:"image", src:res_app_bg},
		{type:"image", src:res_gator_note},
		{type:"image", src:s_elephant},
		{type:"image", src:s_bird},
		{type:"image", src:s_george},
		{type:"image", src:s_lion},
		{type:"image", src:s_hipo},
		{type:"image", src:s_gator},
		//animation lists
		{type:"plist", src:s_elephantPlist},
		{type:"plist", src:s_birdPlist},
		{type:"plist", src:s_georgePlist},
		{type:"plist", src:s_lionPlist},
		{type:"plist", src:s_hipoPlist},
		{type:"plist", src:s_gatorPlist},
		//audio resources
    {type:"effect", src:"res/audio/elephant_trumpets"},
		{type:"effect", src:"res/audio/lion2_trombone"},
		{type:"effect", src:"res/audio/parrot_saxophone"},
		{type:"effect", src:"res/audio/hippo_tuba"},
		{type:"effect", src:"res/audio/monkey_drums"},
		{type:"effect", src:"res/audio/gator_xylophone"},
		{type:"effect", src:"res/audio/notes/gator_xylo_note01"},
		{type:"effect", src:"res/audio/notes/gator_xylo_note02"},
		{type:"effect", src:"res/audio/notes/gator_xylo_note03"},
		{type:"effect", src:"res/audio/notes/gator_xylo_note04"},
		{type:"effect", src:"res/audio/notes/gator_xylo_note05"},
		{type:"effect", src:"res/audio/notes/gator_xylo_note06"},
		{type:"effect", src:"res/audio/notes/gator_xylo_note07"},
		{type:"effect", src:"res/audio/notes/gator_xylo_note08"},
		//vo audio resources
		{type:"effect", src:vo_splash},
		{type:"effect", src:vo_play},
		{type:"effect", src:vo_playback},
		{type:"effect", src:vo_record},
		{type:"effect", src:vo_stop},
		/*{type:"effect", src:vo_load1},
		{type:"effect", src:vo_load2},
		{type:"effect", src:vo_load3},
		{type:"effect", src:vo_load4},
		{type:"effect", src:vo_load5},
		{type:"effect", src:vo_load6},
		{type:"effect", src:vo_load7},
		{type:"effect", src:vo_load8},
		{type:"effect", src:vo_load9},*/
		{type:"effect", src:vo_load_merged},
		{type:"effect", src:vo_end_song1},
		{type:"effect", src:vo_end_song2},
		{type:"effect", src:vo_end_song3},
		{type:"effect", src:vo_end_song4},
		{type:"effect", src:vo_end_song5},
		{type:"effect", src:vo_end_song_final},
		{type:"effect", src:vo_help}
];


if (iOS) {
	var s_elephant_static = 'res/sprites/static/elephant.png';
	var s_bird_static = 'res/sprites/static/parrot.png';
	var s_george_static = 'res/sprites/static/george.png';
	var s_lion_static = 'res/sprites/static/lion.png';
	var s_hipo_static = 'res/sprites/static/hippo.png';
	var s_gator_static = 'res/sprites/static/crocodile.png';
	var iOS_resources = [
		{type:"image", src:s_elephant_static},
		{type:"image", src:s_bird_static},
		{type:"image", src:s_george_static},
		{type:"image", src:s_lion_static},
		{type:"image", src:s_hipo_static},
		{type:"image", src:s_gator_static}
	];
	g_ressources = g_ressources.concat(iOS_resources);
  //var iOS_loadingVO_durations = [2953, 3512, 3178, 3176, 2944, 5140, 2177, 4866, 4004];
}