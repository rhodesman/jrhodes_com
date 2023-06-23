isIOS = false;
isMobile = /(iPhone|iPod|iPad|Android|android).*AppleWebKit/i.test(navigator.userAgent);
isAndroid = /(Android|android).*/i.test(navigator.userAgent);
if(/(iPhone|iPod|iPad)/i.test(navigator.userAgent)) {
    if(/OS [2-5]_\d(_\d)? like Mac OS X/i.test(navigator.userAgent)) {  
        isIOS = true; //ios safari cant play audio
    } else if(/CPU like Mac OS X/i.test(navigator.userAgent)) {
        isIOS = true; //ios safari cant play audio
    } else {
       isIOS = true;  // iOS 6 or Newer they can play audio
    }
}
var isIE9 = isIE9 || false;

//v1 bgs
var s_clouds = "assets/images/s_clouds.png";
var s_dock_george = "assets/images/s_dock_george.png";
var s_sky = "assets/images/s_sky.jpg";
var s_title = "assets/images/s_title.jpg";
var s_water_dock = "assets/images/s_water_dock.png";

//v1 images
var s_sun = "assets/images/s_sun.png";
var s_tank_front = "assets/images/s_tank_front.png";
var s_containersigns = "assets/images/s_containersigns.png";
var s_hook = "assets/images/s_hook.png";
var s_line = "assets/images/s_line.png";
var s_fish = "assets/images/s_fish.png";
var s_counter = "assets/images/s_counter.png";
var s_george = isMobile ? "assets/images/s_george_2048.png" : "assets/images/s_george.png";

//v1 buttons
var s_buttons = "assets/images/s_buttons.png";
var s_counter_plist = "assets/s_counter.plist";

//plist
var s_Hook_plist = "assets/Hook.plist";
var s_fish_plist = "assets/s_fish.plist";
var s_george_plist = isMobile ? "assets/s_george_2048.plist" : "assets/s_george.plist";

//sounds
var snd_pfx = "assets/sounds/" + global.locale + "/";

//--Intro
var snd_post_intro = snd_pfx + 'FG_FWG_001'; //

//--Casting
var snd_casting_welcome_1 = snd_pfx + 'CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_Intsructions_05'; //

var snd_cast_btn = snd_pfx + 'CG_Game-NavigationButtons_Cast_Girl'; //
var snd_not_casting = snd_pfx + 'FG_FWG_001b'; //

//--Fishing
var snd_fishing_welcome = snd_pfx + 'FG_FWG_002b'; //

var snd_hooked_1 = snd_pfx + 'CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_CatchingFish_VO_2_02-1'; //
var snd_hooked_2 = snd_pfx + 'FG_FWG_003'; //
var snd_hooked_3 = snd_pfx + 'FG_FWG_004'; //
var snd_hooked_5 = snd_pfx + 'FG_FWG_005'; //

var snd_hooked_4 = snd_pfx + 'FG_FWG_021'; //

var snd_slow_tap = snd_pfx + 'FG_FWG_022'; //
var snd_reel_red = snd_pfx + 'FG_FWG_023'; //
var snd_fish_escaped_1 = snd_pfx + 'CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_CatchingFish_VO_2_10'; //
var snd_fish_escaped_2 = snd_pfx + 'CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_CatchingFish_VO_2_12'; //

var snd_caught_10 = snd_pfx + 'CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_CountingFish_VO_2_13'; //
var snd_caught_9 = snd_pfx + 'CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_CountingFish_VO_2_11'; //
var snd_caught_8 = snd_pfx + 'CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_CountingFish_VO_2_10-1'; //
var snd_caught_7 = snd_pfx + 'CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_CountingFish_VO_2_09'; //
var snd_caught_6 = snd_pfx + 'CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_CountingFish_VO_2_07'; //
var snd_caught_5 = snd_pfx + 'CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_CountingFish_VO_2_05'; //
var snd_caught_4 = snd_pfx + 'CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_CountingFish_VO_2_03'; //
var snd_caught_3 = snd_pfx + 'CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_CountingFish_VO_2_01'; //
var snd_caught_2 = snd_pfx + 'CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_CountingFish_VO_1_18'; //
var snd_caught_1 = snd_pfx + 'CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_CountingFish_VO_1_16'; //

//--Sorting
var snd_sorting_welcome_1 = snd_pfx + 'FG_FWG_006b'; //

var snd_which_tank_1 = snd_pfx + 'CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_SortingFish_VO_2_05-1'; //
var snd_which_tank_2 = snd_pfx + 'CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_SortingFish_VO_2_05-2'; //
var snd_which_tank_3 = snd_pfx + 'CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_SortingFish_VO_2_05-3'; //

var snd_which_tank_more_12 = snd_pfx + 'CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_SortingFish_VO_2_20'; //
var snd_which_tank_more_11 = snd_pfx + 'CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_SortingFish_VO_2_15-2'; //
var snd_which_tank_more_10 = snd_pfx + 'CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_SortingFish_VO_2_15-1'; //
var snd_which_tank_more_9 = snd_pfx + 'CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_SortingFish_VO_2_13-3'; //
var snd_which_tank_more_8 = snd_pfx + 'CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_SortingFish_VO_2_13-2'; //
var snd_which_tank_more_7 = snd_pfx + 'CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_SortingFish_VO_2_13-1'; //
var snd_which_tank_more_6 = snd_pfx + 'CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_SortingFish_VO_2_04-2'; //
var snd_which_tank_more_5 = snd_pfx + 'CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_SortingFish_VO_2_04-1'; //

var snd_which_tank_more_4 = snd_pfx + 'CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_SortingFish_VO_2_19'; //
var snd_which_tank_more_3 = snd_pfx + 'CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_SortingFish_VO_2_17-3'; //
var snd_which_tank_more_2 = snd_pfx + 'CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_SortingFish_VO_2_17-2'; //
var snd_which_tank_more_1 = snd_pfx + 'CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_SortingFish_VO_2_17-1'; //

var snd_sort_by_shape_1 = snd_pfx + 'FG_FWG_008'; //
var snd_sort_by_size_1 = snd_pfx + 'FG_FWG_009'; //
var snd_sort_by_color_1 = snd_pfx + 'FG_FWG_007'; //

var snd_sort_done_catch_more = snd_pfx + 'CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_Intsructions_12'; //

var snd_sort_flat_wrong_1 = snd_pfx + 'CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_FeedbckfrWrngAnswrs_VO_2_01-01-EDIT'; //

var snd_sort_fat_wrong_1 = snd_pfx + 'CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_FeedbckfrWrngAnswrs_VO_1_10-1'; //

var snd_sort_fit_wrong_1 = snd_pfx + 'FG_FWG_015'; //

var snd_sort_small_wrong_1 = snd_pfx + 'FG_FWG_013'; //
var snd_sort_medium_wrong_1 = snd_pfx + 'CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_FeedbackforWrngAnswrs_VO_1_17'; //
var snd_sort_large_wrong_1 = snd_pfx + 'FG_FWG_014'; //

var snd_sort_blue_wrong_1 = snd_pfx + 'CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_FeedbckfrWrngAnswrs_VO_1_08-3'; //

var snd_sort_red_wrong_1 = snd_pfx + 'CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_FeedbckfrWrngAnswrs_VO_1_03-1'; //

var snd_sort_yellow_wrong_1 = snd_pfx + 'CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_FeedbackforWrngAnswrs_VO_1_05-edit'; //

var snd_sort_correct_1 = snd_pfx + 'CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_FedbckfrCrrctAnswrs_VO_1_09-1'; //
var snd_sort_correct_2 = snd_pfx + 'CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_FeedbackfrCrrctAnswrs_VO_1_13'; //
var snd_sort_correct_3 = snd_pfx + 'CG-ManInYellowHat_GENERIC_FeedbackforCorrectAnswers_VO_IKnewYouCouldDoIt-1'; //
var snd_sort_correct_4 = snd_pfx + 'CG-ManInYellowHat_GENERIC_FeedbackforCorrectAnswers_VO_GreatJob-1'; //
var snd_sort_correct_5 = snd_pfx + 'CG-ManInYellowHat_GENERIC_FeedbackforCorrectAnswers_VO_YoureATerrificHelper-3'; //
var snd_sort_correct_6 = snd_pfx + 'CG-ManInYellowHat_GENERIC_FeedbackforCorrectAnswers_VO_Perfect-1'; //

//--Other
var snd_activity_listing = snd_pfx + 'CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_ToolPallette_04'; //

var snd_fishing_wgeorge = snd_pfx + 'CG_Game-ActivityTitles_FishingWithGeorge_Boy';
var snd_play = snd_pfx + 'CG_Game-NavigationButtons_Play_Boy';

var snd_sorting_outro = snd_pfx + 'sorting_outro';
var snd_day_over = snd_pfx + 'FG_FWG_020';
var snd_if_play_again = snd_pfx + 'CG-ManInYellowHat_GENERIC_PlayButton_VO_IfYouWantToPlayAgainClickOrTapTheGreenButton-1';

var snd_help_over = snd_pfx + 'CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ButtonRollovers_Help_2';


//sounds end

var g_ressources = [
    //image
    {type:"image", src:s_george},
    {type:"image", src:s_sun},
    {type:"image", src:s_tank_front},
    {type:"image", src:s_clouds},
    {type:"image", src:s_dock_george},
    {type:"image", src:s_sky},
    {type:"image", src:s_title},
    {type:"image", src:s_water_dock},
    {type:"image", src:s_hook},
    {type:"image", src:s_line},
    {type:"image", src:s_fish},
    {type:"image", src:s_counter},
    {type:"image", src:s_buttons},
    {type:"image", src:s_containersigns},

    //plist
    {type:"plist", src:s_Hook_plist},
    {type:"plist", src:s_fish_plist},
    {type:"plist", src:s_george_plist},
    {type:"plist", src:s_counter_plist}
];

var g_ressources_sound = [
    //effects
    {type:"effect", src:snd_post_intro},
    {type:"effect", src:snd_casting_welcome_1},
    {type:"effect", src:snd_cast_btn },
    {type:"effect", src:snd_not_casting},
    {type:"effect", src:snd_fishing_welcome},
    {type:"effect", src:snd_hooked_1},
    {type:"effect", src:snd_hooked_2},
    {type:"effect", src:snd_hooked_3},
    {type:"effect", src:snd_hooked_4},
    {type:"effect", src:snd_hooked_5},
    {type:"effect", src:snd_slow_tap},
    {type:"effect", src:snd_reel_red},
    {type:"effect", src:snd_fish_escaped_1},
    {type:"effect", src:snd_fish_escaped_2},
    {type:"effect", src:snd_caught_10},
    {type:"effect", src:snd_caught_9},
    {type:"effect", src:snd_caught_8},
    {type:"effect", src:snd_caught_7},
    {type:"effect", src:snd_caught_6},
    {type:"effect", src:snd_caught_5},
    {type:"effect", src:snd_caught_4},
    {type:"effect", src:snd_caught_3},
    {type:"effect", src:snd_caught_2},
    {type:"effect", src:snd_caught_1},
    {type:"effect", src:snd_sorting_welcome_1},
    {type:"effect", src:snd_which_tank_3},
    {type:"effect", src:snd_which_tank_2},
    {type:"effect", src:snd_which_tank_1},
    {type:"effect", src:snd_which_tank_more_12},
    {type:"effect", src:snd_which_tank_more_11},
    {type:"effect", src:snd_which_tank_more_10},
    {type:"effect", src:snd_which_tank_more_9},
    {type:"effect", src:snd_which_tank_more_8},
    {type:"effect", src:snd_which_tank_more_7},
    {type:"effect", src:snd_which_tank_more_6},
    {type:"effect", src:snd_which_tank_more_5},
    {type:"effect", src:snd_which_tank_more_4},
    {type:"effect", src:snd_which_tank_more_3},
    {type:"effect", src:snd_which_tank_more_2},
    {type:"effect", src:snd_which_tank_more_1},
    {type:"effect", src:snd_sort_by_shape_1},
    {type:"effect", src:snd_sort_by_size_1},
    {type:"effect", src:snd_sort_by_color_1},
    {type:"effect", src:snd_sort_done_catch_more},
    {type:"effect", src:snd_sort_large_wrong_1},
    {type:"effect", src:snd_sort_fat_wrong_1},
    {type:"effect", src:snd_sort_medium_wrong_1},
    {type:"effect", src:snd_sort_fit_wrong_1},
    {type:"effect", src:snd_sort_flat_wrong_1},
    {type:"effect", src:snd_sort_blue_wrong_1},
    {type:"effect", src:snd_sort_small_wrong_1},
    {type:"effect", src:snd_sort_red_wrong_1},
    {type:"effect", src:snd_sort_yellow_wrong_1},
    {type:"effect", src:snd_sort_correct_1},
    {type:"effect", src:snd_sort_correct_2},
    {type:"effect", src:snd_sort_correct_3},
    {type:"effect", src:snd_sort_correct_4},
    {type:"effect", src:snd_sort_correct_5},
    {type:"effect", src:snd_sort_correct_6},
    {type:"effect", src:snd_activity_listing},
    {type:"effect", src:snd_fishing_wgeorge},
    {type:"effect", src:snd_play},
    {type:"effect", src:snd_sorting_outro},
    {type:"effect", src:snd_day_over},
    {type:"effect", src:snd_if_play_again},
    {type:"effect", src:snd_help_over}
];

/*if(!isIOS) */g_ressources = g_ressources.concat(g_ressources_sound);
