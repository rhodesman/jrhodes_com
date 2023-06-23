/****************************************************************************
 Copyright (c) 2010-2012 cocos2d-x.org
 Copyright (c) 2008-2010 Ricardo Quesada
 Copyright (c) 2011      Zynga Inc.

 http://www.cocos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

var cc = cc = cc || {};

//Cocos2d directory
cc.Dir = './';//in relate to the html file or use absolute
cc.loadQue = [];//the load que which js files are loaded
cc.COCOS2D_DEBUG = 2;
cc._DEBUG = 1;
cc._IS_RETINA_DISPLAY_SUPPORTED = 0;

var IS_IOS = false;

var ANIM_LEFT;

var LVL = 1;

var ALL_SOUNDS = new Array();

if((navigator.platform.indexOf("iPhone") != -1) || (navigator.platform.indexOf("iPad") != -1)) {
	IS_IOS = true;
};

var EXT = "";

var game_res = [

	{type:"image", src:"resources/images/neighbourhood.jpg"},
	{type:"image", src:"resources/images/arrow.png"},
	{type:"image", src:"resources/images/ady_posting_1.png"},
	{type:"image", src:"resources/images/dalmation_1.png"},
	{type:"image", src:"resources/images/dalmation2.png"},
	{type:"image", src:"resources/images/fireman_1.png"},
	{type:"image", src:"resources/images/man_and_baby_1.png"},
	{type:"image", src:"resources/images/firebell_1.png"},
	{type:"image", src:"resources/images/firebell2.png"},
//	{type:"image", src:"resources/images/and_girl_1.png"},
	{type:"image", src:"resources/images/atm_guy_1.png"},
	{type:"image", src:"resources/images/baker_1.png"},
	{type:"image", src:"resources/images/bike_and_1.png"},
	{type:"image", src:"resources/images/birds_lady_1.png"},
	{type:"image", src:"resources/images/boy_playing_1.png"},
	{type:"image", src:"resources/images/btn_help.png"},
	{type:"image", src:"resources/images/btn_play.png"},
	{type:"image", src:"resources/images/butterflies_1.png"},
	{type:"image", src:"resources/images/butterflies1.png"},
	{type:"image", src:"resources/images/butterflies2.png"},
	{type:"image", src:"resources/images/butterflies3.png"},
	{type:"image", src:"resources/images/cake_lady_1.png"},
	{type:"image", src:"resources/images/cat_1.png"},
	{type:"image", src:"resources/images/classroom_1.png"},
	{type:"image", src:"resources/images/classroom4.png"},
	{type:"image", src:"resources/images/clock_1.png"},
	{type:"image", src:"resources/images/coach_1.png"},
	{type:"image", src:"resources/images/coach5.png"},
	{type:"image", src:"resources/images/crossing_guard_1.png"},
	{type:"image", src:"resources/images/dog_1.png"},
//	{type:"image", src:"resources/images/man_with_dog_1.png"},
	{type:"image", src:"resources/images/fountain_1.png"},
	{type:"image", src:"resources/images/george_1.png"},
	{type:"image", src:"resources/images/grocer_1.png"},
	{type:"image", src:"resources/images/horn_1.png"},
	{type:"image", src:"resources/images/ice_cream_vendor_1.png"},
	{type:"image", src:"resources/images/jackhammer_guy_1.png"},
	{type:"image", src:"resources/images/kite_1.png"},
	{type:"image", src:"resources/images/kite5.png"},
	{type:"image", src:"resources/images/lady_watering_1.png"},
	{type:"image", src:"resources/images/librarian_1.png"},
	{type:"image", src:"resources/images/man_in_shower_1.png"},
	{type:"image", src:"resources/images/man_yellow_hat_1.png"},
	{type:"image", src:"resources/images/manhole_guy_1.png"},
	{type:"image", src:"resources/images/parrot_1.png"},
	{type:"image", src:"resources/images/piano_girl_1.png"},
	{type:"image", src:"resources/images/police_car_1.png"},
	{type:"image", src:"resources/images/postal_delivery_1.png"},
	{type:"image", src:"resources/images/recycle_bin_1.png"},
	{type:"image", src:"resources/images/roof_bird_1.png"},
	{type:"image", src:"resources/images/roof_bird4.png"},
	{type:"image", src:"resources/images/swings_1.png"},
	{type:"image", src:"resources/images/swings_2.png"},
	{type:"image", src:"resources/images/swings_3.png"},
	{type:"image", src:"resources/images/swings_4.png"},
	{type:"image", src:"resources/images/swings_5.png"},
	{type:"image", src:"resources/images/swings_6.png"},
	{type:"image", src:"resources/images/swings_7.png"},
	{type:"image", src:"resources/images/swings_8.png"},
	{type:"image", src:"resources/images/swings_9.png"},
	{type:"image", src:"resources/images/teacher_1.png"},
	{type:"image", src:"resources/images/wheelchair_girl_1.png"},
	{type:"image", src:"resources/images/yoyo_boy_1.png"},
	{type:"image", src:"resources/images/yoyo_boy2.png"}
]

//html5 selector method
cc.$ = function (x) {
    return document.querySelector(x);
};
cc.$new = function (x) {
    return document.createElement(x);
};

cc.loadjs = function (filename) {
    //add the file to the que
    var script = cc.$new('script');
    script.src = cc.Dir + filename;
    script.order = cc.loadQue.length;
    cc.loadQue.push(script);


    script.onload = function () {
        //file have finished loading,
        //if there is more file to load, we should put the next file on the head
        if (this.order + 1 < cc.loadQue.length) {
            cc.$('head').appendChild(cc.loadQue[this.order + 1]);
            //console.log(this.order);
        }
        else {
            cc.setup("neighbourhoodGame");

            //init audio,mp3 or ogg
            //for example:
			cc.AudioManager.sharedEngine().init("mp3,ogg");

            //we are ready to run the game
            cc.Loader.shareLoader().onloading = function () {
                cc.LoaderScene.shareLoaderScene().draw();
            };
            cc.Loader.shareLoader().onload = function () {
                cc.AppController.shareAppController().didFinishLaunchingWithOptions();
            };

			soundManager.waitForWindowLoad = true;
			soundManager.debugMode = false;

			soundManager.setup({
				url: 'resources/swf/',
				onready: function() {
//					createAllSounds();
					preloadSoundsSheet();
				}
			}); 

            //preload ressources
            cc.Loader.shareLoader().preload(game_res);
        }
    };
    if (script.order === 0)//if the first file to load, then we put it on the head
    {
        cc.$('head').appendChild(script);
    }

};

var CHARACTERS = [
	{"tag":"man_and_baby", "width":124, "height":164, "posX":18, "posY":45, "sound":"FG_GN_025", "tofind":true},
	{"tag":"ady_posting", "width":56, "height":80, "posX":48, "posY":251, "sound":"FG_GN_005", "tofind":true},
	{"tag":"bike_and", "width":104, "height":135, "posX":227, "posY":38, "sound":"FG_GN_008", "tofind":true},
	{"tag":"atm_guy", "width":61, "height":122, "posX":339, "posY":110, "sound":"FG_GN_009", "tofind":true},
	{"tag":"lady_watering", "width":67, "height":92, "posX":351, "posY":281, "sound":"", "tofind":false},
	{"tag":"firebell", "width":47, "height":70, "posX":137, "posY":376, "sound":"", "tofind":false},
	{"tag":"dalmation", "width":46, "height":51, "posX":190, "posY":254, "sound":"FG_GN_007", "tofind":true},
	{"tag":"fireman", "width":49, "height":51, "posX":236, "posY":238, "sound":"FG_GN_006", "tofind":true},
	{"tag":"horn", "width":47, "height":42, "posX":265, "posY":289, "sound":"", "tofind":false},
	{"tag":"cake_lady", "width":50, "height":112, "posX":476, "posY":99, "sound":"FG_GN_012", "tofind":true},
	{"tag":"grocer", "width":162, "height":108, "posX":534, "posY":139, "sound":"FG_GN_013", "tofind":true},
	{"tag":"baker", "width":87, "height":71, "posX":458, "posY":281, "sound":"FG_GN_014", "tofind":true},
	{"tag":"boy_playing", "width":72, "height":50, "posX":565, "posY":302, "sound":"FG_GN_015", "tofind":true},
	{"tag":"roof_bird", "width":46, "height":46, "posX":504, "posY":396, "sound":"FG_GN_016", "tofind":true},
	{"tag":"jackhammer_guy", "width":61, "height":117, "posX":742, "posY":71, "sound":"FG_GN_010", "tofind":true},
	{"tag":"manhole_guy", "width":71, "height":37, "posX":830, "posY":120, "sound":"FG_GN_011", "tofind":true},
	{"tag":"postal_delivery", "width":72, "height":129, "posX":742, "posY":200, "sound":"FG_GN_020", "tofind":true},
	{"tag":"george", "width":52, "height":99, "posX":690, "posY":281, "sound":"FG_GN_017", "tofind":true},
	{"tag":"parrot", "width":45, "height":80, "posX":830, "posY":263, "sound":"FG_GN_019", "tofind":true},
	{"tag":"man_in_shower", "width":55, "height":99, "posX":690, "posY":396, "sound":"", "tofind":false},
	{"tag":"piano_girl", "width":52, "height":47, "posX":825, "posY":377, "sound":"FG_GN_004", "tofind":true},
	{"tag":"piano_girl", "width":37, "height":7, "posX":825, "posY":424, "sound":"FG_GN_004", "tofind":false},
	{"tag":"piano_girl", "width":25, "height":9, "posX":825, "posY":431, "sound":"FG_GN_004", "tofind":false},
	{"tag":"piano_girl", "width":15, "height":9, "posX":825, "posY":440, "sound":"FG_GN_004", "tofind":false},
	{"tag":"man_yellow_hat", "width":55, "height":102, "posX":758, "posY":385, "sound":"FG_GN_018", "tofind":true},
	{"tag":"police_car", "width":200, "height":135, "posX":920, "posY":73, "sound":"FG_GN_021", "tofind":true},
	{"tag":"librarian", "width":149, "height":87, "posX":908, "posY":232, "sound":"FG_GN_030", "tofind":true},
	{"tag":"dog", "width":82, "height":70, "posX":1131, "posY":87, "sound":"FG_GN_003", "tofind":true},
	{"tag":"dog", "width":65, "height":80, "posX":1187, "posY":127, "sound":"FG_GN_003", "tofind":false},
//	{"tag":"cat", "width":90, "height":46, "posX":1235, "posY":3, "sound":"", "tofind":false},
	{"tag":"cat", "width":260, "height":42, "posX":1029, "posY":0, "sound":"", "tofind":false},
	{"tag":"cat", "width":162, "height":22, "posX":1045, "posY":42, "sound":"", "tofind":false},
	{"tag":"butterflies", "width":237, "height":46, "posX":1233, "posY":50, "sound":"", "tofind":false},
	{"tag":"fountain", "width":90, "height":127, "posX":1378, "posY":110, "sound":"FG_GN_026", "tofind":true},
	{"tag":"crossing_guard", "width":42, "height":91, "posX":1230, "posY":208, "sound":"FG_GN_028", "tofind":true},
	{"tag":"wheelchair_girl", "width":36, "height":64, "posX":1324, "posY":228, "sound":"FG_GN_027", "tofind":true},
	{"tag":"coach", "width":44, "height":85, "posX":1251, "posY":302, "sound":"", "tofind":false},
	{"tag":"clock", "width":43, "height":46, "posX":1233, "posY":413, "sound":"", "tofind":false},
	{"tag":"classroom", "width":96, "height":79, "posX":1331, "posY":329, "sound":"FG_GN_024", "tofind":true},
	{"tag":"teacher", "width":70, "height":82, "posX":1434, "posY":367, "sound":"FG_GN_023", "tofind":true},
	{"tag":"ice_cream_vendor", "width":78, "height":143, "posX":1572, "posY":7, "sound":"FG_GN_031", "tofind":true},
	{"tag":"ice_cream_vendor", "width":112, "height":184, "posX":1649, "posY":0, "sound":"FG_GN_031", "tofind":false},
	{"tag":"recycle_bin", "width":76, "height":59, "posX":1472, "posY":240, "sound":"FG_GN_022", "tofind":true},
	{"tag":"birds_lady", "width":59, "height":82, "posX":1591, "posY":217, "sound":"", "tofind":false},
	{"tag":"yoyo_boy", "width":49, "height":68, "posX":1744, "posY":275, "sound":"FG_GN_029", "tofind":true},
	{"tag":"swings", "width":66, "height":72, "posX":1554, "posY":410, "sound":"", "tofind":false},
	{"tag":"kite", "width":46, "height":54, "posX":1722, "posY":374, "sound":"FG_GN_032", "tofind":true},
	{"tag":"kite", "width":26, "height":15, "posX":1722, "posY":428, "sound":"FG_GN_032", "tofind":false},
	{"tag":"kite", "width":18, "height":8, "posX":1722, "posY":442, "sound":"FG_GN_032", "tofind":false},
	{"tag":"kite", "width":12, "height":8, "posX":1722, "posY":450, "sound":"FG_GN_032", "tofind":false}
]

var ANIMATIONS = [
	{"name":"man_and_baby", "type":1, "frames":1, "posX":0, "posY":22, "sfx":"27_babyGiggles01", "sfxtime":1620, "time":15},
	{"name":"ady_posting", "type":1, "frames":1, "posX":39, "posY":239, "sfx":"04_mailbox02", "sfxtime":1358, "time":15},
	{"name":"firebell", "type":2, "frames":1, "posX":111, "posY":326, "sfx":"05_firehouseBell04", "sfxtime":2351, "time":15, "deg":10, "aX":0.5, "aY":1, "posX2":46, "posY2":94},
	{"name":"fireman", "type":1, "frames":1, "posX":217, "posY":223, "sfx":"07_firetruckEngine", "sfxtime":4937, "time":15},
	{"name":"dalmation", "type":2, "frames":1, "posX":168, "posY":248, "sfx":"08_dogBark03rev", "sfxtime":1463, "time":15, "deg":10, "aX":0.5, "aY":0, "posX2":71, "posY2":10},
	{"name":"horn", "type":1, "frames":1, "posX":265, "posY":288, "sfx":"06_firetruckHorn03", "sfxtime":9012, "time":15},
	{"name":"bike_and", "type":1, "frames":1, "posX":208, "posY":11, "sfx":"09_bicycleBell02", "sfxtime":2926, "time":15},
	{"name":"atm_guy", "type":1, "frames":1, "posX":315, "posY":101, "sfx":"10_ATM02", "sfxtime":2560, "time":15},
	{"name":"cake_lady", "type":1, "frames":1, "posX":466, "posY":84, "sfx":"FG_GN_012a", "sfxtime":940, "time":15},
	{"name":"lady_watering", "type":1, "frames":1, "posX":315, "posY":101, "sfx":"11_hey03", "sfxtime":1567, "time":15},
	{"name":"grocer", "type":1, "frames":1, "posX":536, "posY":86, "sfx":"15_monkeyApples01", "sfxtime":1672, "time":15},
	{"name":"baker", "type":1, "frames":1, "posX":457, "posY":254, "sfx":"16_MMMmmm01", "sfxtime":2116, "time":15},
	{"name":"roof_bird", "type":4, "frames":1, "posX":491, "posY":382, "sfx":"18_BirdSquawk02", "sfxtime":1646, "time":15, "sX":20, "sY":20, "pX":130, "pY":60, "eX":200, "eY":200, "duration":2},
	{"name":"boy_playing", "type":1, "frames":1, "posX":563, "posY":294, "sfx":"17_blocks01", "sfxtime":1489, "time":15},
	{"name":"man_in_shower", "type":1, "frames":1, "posX":688, "posY":393, "sfx":"03_lalala03", "sfxtime":3370, "time":15},
	{"name":"piano_girl", "type":1, "frames":1, "posX":806, "posY":363, "sfx":"02_piano02", "sfxtime":2534, "time":15},
	{"name":"man_yellow_hat", "type":1, "frames":1, "posX":757, "posY":382, "sfx":"goodforyou", "sfxtime":1620, "time":15},
	{"name":"jackhammer_guy", "type":3, "frames":1, "posX":717, "posY":59, "sfx":"12_jackhammer01rev", "sfxtime":3004, "time":5, "speed":2, "duration":10},
	{"name":"manhole_guy", "type":1, "frames":1, "posX":802, "posY":109, "sfx":"13_manhole", "sfxtime":1463, "time":15, "delayed":true},
	{"name":"postal_delivery", "type":1, "frames":1, "posX":716, "posY":190, "sfx":"22_doorbell01", "sfxtime":3422, "time":15},
	{"name":"george", "type":1, "frames":1, "posX":689, "posY":280, "sfx":"19_MonkeyChitter01", "sfxtime":1045, "time":15},
	{"name":"parrot", "type":1, "frames":1, "posX":823, "posY":246, "sfx":"21_parrot02", "sfxtime":522, "time":15},
	{"name":"police_car", "type":3, "frames":1, "posX":911, "posY":68, "sfx":"23_PoliceSiren06", "sfxtime":1593, "time":2.5, "speed":2, "duration":10},
	{"name":"librarian", "type":1, "frames":1, "posX":908, "posY":228, "sfx":"FG_GN_030c", "sfxtime":2116, "time":15},
	{"name":"dog", "type":3, "frames":1, "posX":1119, "posY":71, "sfx":"01_dogbark02", "sfxtime":888, "time":15, "speed":1, "duration":2},
	{"name":"cat", "type":1, "frames":1, "posX":1229, "posY":0, "sfx":"28_meow03", "sfxtime":967, "time":15},
	{"name":"butterflies", "type":6, "frames":1, "posX":1212, "posY":0, "sfx":"29_butterflies04", "sfxtime":2090, "time":15, "elem":3, "position":[38,72,94,38,166,40], "radius":[15,25,20]},
	{"name":"clock", "type":1, "frames":1, "posX":1231, "posY":410, "sfx":"34_ClockChimes02", "sfxtime":6504, "time":6.5},
	{"name":"crossing_guard", "type":1, "frames":1, "posX":1210, "posY":195, "sfx":"34_PoliceWhistle02", "sfxtime":1463, "time":15},
	{"name":"wheelchair_girl", "type":1, "frames":1, "posX":1305, "posY":221, "sfx":"32_MonkeyChitter03", "sfxtime":1306, "time":15},
	{"name":"coach", "type":5, "frames":1, "posX":1233, "posY":284, "sfx":"31_CoachWhistle01", "sfxtime":1750, "time":15, "sX":45, "sY":50, "eX":45, "eY":100, "duration":0.75, "back":true},
	{"name":"fountain", "type":1, "frames":1, "posX":1373, "posY":112, "sfx":"30_splashChitter02", "sfxtime":3631, "time":15},
	{"name":"classroom", "type":4, "frames":1, "posX":1323, "posY":311, "sfx":"23_PoliceSirenMix04", "sfxtime":5120, "time":6, "sX":10, "sY":30, "pX":-100, "pY":-100, "eX":-280, "eY":-130, "duration":4},
	{"name":"teacher", "type":1, "frames":1, "posX":1431, "posY":349, "sfx":"25_markerSqueak02", "sfxtime":705, "time":15, "delayed":true},
	{"name":"recycle_bin", "type":1, "frames":1, "posX":1467, "posY":237, "sfx":"24_bottleTrash03", "sfxtime":784, "time":15},
	{"name":"birds_lady", "type":1, "frames":1, "posX":1408, "posY":156, "sfx":"37_birdChirps04", "sfxtime":1411, "time":15},
	{"name":"ice_cream_vendor", "type":1, "frames":1, "posX":1471, "posY":0, "sfx":"38_icecreamBell01", "sfxtime":1384, "time":15},
	{"name":"swings", "type":1, "frames":9, "posX":1530, "posY":395, "sfx":"39_kidsLaughing02", "sfxtime":2664, "time":15},
	{"name":"kite", "type":5, "frames":1, "posX":1679, "posY":274, "sfx":"40_tree02", "sfxtime":1593, "time":15, "sX":45, "sY":85, "eX":15, "eY":7, "duration":2, "back":false},
	{"name":"yoyo_boy", "type":7, "frames":1, "posX":1742, "posY":271, "sfx":"35_yoyo02", "sfxtime":1280, "time":7, "deg":10, "aX":0.5, "aY":1, "posX2":10, "posY2":45}
]

var CHEERS = [
	"Gen_Feed_001",
	"Gen_Feed_003alt",
	"Gen_Feed_004",
	"Gen_Feed_005",
	"Gen_Feed_006a",
	"Gen_Feed_009",
	"CG-ManInYellowHat_GENERIC_FeedbackforCorrectAnswers_VO_YoureRight-1",
	"CG-ManInYellowHat_GENERIC_FeedbackforCorrectAnswers_VO_YouGotIt-2",
	"CG-ManInYellowHat_GENERIC_FeedbackforCorrectAnswers_VO_ThatsIt-1",
	"CG-ManInYellowHat_GENERIC_FeedbackforCorrectAnswers_VO_Perfect-1"
]

var TRYMORE = [
	"FG_GN_033c",
	"FG_GN_033d"
]

var soundfiles = [
	"CG_Game-NavigationButtons_Play_Boy",
	"George_sNeighborhood1",
	"FG_GN_002",
	"FG_GN_003",
	"FG_GN_004",
	"FG_GN_004a",
	"FG_GN_005",
	"FG_GN_006",
	"FG_GN_007",
	"FG_GN_008",
	"FG_GN_009",
	"FG_GN_009a",
	"FG_GN_010",
	"FG_GN_011",
	"FG_GN_012",
	"FG_GN_012a",
	"FG_GN_013",
	"FG_GN_014",
	"FG_GN_014a",
	"FG_GN_015",
	"FG_GN_016",
	"FG_GN_017",
	"FG_GN_018",
	"FG_GN_019",
	"FG_GN_020",
	"FG_GN_021",
	"FG_GN_022",
	"FG_GN_023",
	"FG_GN_024",
	"FG_GN_025",
	"FG_GN_026",
	"FG_GN_027",
	"FG_GN_028",
	"FG_GN_029",
	"FG_GN_030",
	"FG_GN_031",
	"FG_GN_032",
	"FG_GN_030c",
	"Gen_Feed_001",
	"Gen_Feed_003alt",
	"Gen_Feed_004",
	"Gen_Feed_005",
	"Gen_Feed_006a",
	"Gen_Feed_009",
	"CG-ManInYellowHat_GENERIC_FeedbackforCorrectAnswers_VO_Perfect-1",
	"CG-ManInYellowHat_GENERIC_FeedbackforCorrectAnswers_VO_ThatsIt-1",
	"CG-ManInYellowHat_GENERIC_FeedbackforCorrectAnswers_VO_YouGotIt-2",
	"CG-ManInYellowHat_GENERIC_FeedbackforCorrectAnswers_VO_YoureRight-1",
	"01_dogbark02",
	"02_piano02",
	"03_lalala03",
	"04_mailbox02",
	"05_firehouseBell04",
	"06_firetruckHorn03",
	"07_firetruckEngine",
	"08_dogBark03rev",
	"09_bicycleBell02",
	"10_ATM02",
	"11_hey03",
	"12_jackhammer01rev",
	"13_manhole",
	"15_monkeyApples01",
	"16_MMMmmm01",
	"17_blocks01",
	"18_BirdSquawk02",
	"19_MonkeyChitter01",
	"21_parrot02",
	"22_doorbell01",
	"23_PoliceSirenMix04",
	"24_bottleTrash03",
	"25_markerSqueak02",
//	"26_PoliceSiren04",
	"23_PoliceSiren06",
	"27_babyGiggles01",
	"28_meow03",
	"29_butterflies04",
	"30_splashChitter02",
	"31_CoachWhistle01",
	"32_MonkeyChitter03",
	"34_ClockChimes02",
	"34_PoliceWhistle02",
	"35_yoyo02",
	"37_birdChirps04",
	"38_icecreamBell01",
	"39_kidsLaughing02",
	"40_tree02",
	"FG_GN_033b",
	"FG_GN_033c",
	"FG_GN_033d",
	"goodforyou",
	"FG_GN_034",
	"FG_GN_035",
	"CG_ManInYellowHat_GENERIC_PlayButton_VO_IfYouWantT"

]

var soundSprites = {
	"CG_Game-NavigationButtons_Play_Boy" : [0, 888],
	"George_sNeighborhood1" : [1888, 1750],
	"FG_GN_002" : [4638, 13923],
	"FG_GN_003" : [19561, 3213],
	"FG_GN_004" : [23774, 5616],
	"FG_GN_004a" : [30390, 4545],
	"FG_GN_005" : [35935, 4258],
	"FG_GN_006" : [41193, 1463],
	"FG_GN_007" : [43656, 3344],
	"FG_GN_008" : [48000, 2586],
//	"FG_GN_009" : [51586, 4153],
	"FG_GN_009a" : [56739, 810],
	"FG_GN_010" : [58549, 4206],
	"FG_GN_011" : [63755, 3971],
	"FG_GN_012" : [68726, 3683],
//	"FG_GN_012a" : [73409, 1228],
	"FG_GN_013" : [75637, 4389],
	"FG_GN_014" : [81026, 2247],
	"FG_GN_014a" : [84273, 1306],
	"FG_GN_015" : [86579, 2847],
	"FG_GN_016" : [90426, 2299],
	"FG_GN_017" : [93725, 6348],
	"FG_GN_018" : [101073, 5512],
//	"FG_GN_019" : [107585, 5381],
	"FG_GN_020" : [113966, 2456],
	"FG_GN_021" : [117422, 2534],
	"FG_GN_022" : [120956, 4023],
	"FG_GN_023" : [125979, 4101],
	"FG_GN_024" : [131080, 4467],
	"FG_GN_025" : [136547, 3579],
	"FG_GN_026" : [141126, 2743],
	"FG_GN_027" : [144869, 1881],
	"FG_GN_028" : [147750, 3971],
	"FG_GN_029" : [152721, 3030],
//	"FG_GN_030" : [156751, 3370],
	"FG_GN_031" : [161121, 5381],
	"FG_GN_032" : [167502, 2299],
	"FG_GN_030c" : [170801, 2116],
	
	"Gen_Feed_001" : [173917, 1019],
	"Gen_Feed_003alt" : [175936, 967],
	"Gen_Feed_004" : [177903, 1280],
	"Gen_Feed_005" : [180183, 810],
	"Gen_Feed_006a" : [181993, 1045],
	"Gen_Feed_009" : [184038, 940],
	"CG-ManInYellowHat_GENERIC_FeedbackforCorrectAnswers_VO_Perfect-1" : [185978, 836],
	"CG-ManInYellowHat_GENERIC_FeedbackforCorrectAnswers_VO_ThatsIt-1" : [187814, 810],
	"CG-ManInYellowHat_GENERIC_FeedbackforCorrectAnswers_VO_YouGotIt-2" : [189624, 784],
	"CG-ManInYellowHat_GENERIC_FeedbackforCorrectAnswers_VO_YoureRight-1" : [191408, 914],

	"01_dogbark02" : [193322, 888],
	"02_piano02" : [195210, 2534],
	"03_lalala03" : [198744, 3370],
	"04_mailbox02" : [203114, 1358],
	"05_firehouseBell04" : [205472, 2351],
//	"06_firetruckHorn03" : [208823, 3736],
	"07_firetruckEngine" : [213559, 4937],
	"08_dogBark03rev" : [219496, 1463],
	"09_bicycleBell02" : [221959, 2926],
	"10_ATM02" : [225885, 2560],
//	"11_hey03" : [229445, 705],
	"12_jackhammer01rev" : [231150, 3004],
	"13_manhole" : [235154, 1463],
	"15_monkeyApples01" : [237617, 1672],
	"16_MMMmmm01" : [240289, 2116],
	"17_blocks01" : [243405, 1489],
	"18_BirdSquawk02" : [245849, 1646],
	"19_MonkeyChitter01" : [248540, 1045],
	"21_parrot02" : [250585, 522],
	"22_doorbell01" : [252107, 3422],
//	"23_PoliceSirenMix04" : [256529, 4571],
	"24_bottleTrash03" : [262100, 784],
	"25_markerSqueak02" : [263884, 705],
//	"26_PoliceSiren04" : [265589, 549],
	"27_babyGiggles01" : [267138, 1620],
	"28_meow03" : [269758, 967],
	"29_butterflies04" : [271725, 2090],
	"30_splashChitter02" : [274815, 3631],
	"31_CoachWhistle01" : [279446, 1750],
	"32_MonkeyChitter03" : [282196, 1306],
	"34_ClockChimes02" : [284502, 6504],
	"34_PoliceWhistle02" : [292006, 1463],
	"35_yoyo02" : [294469, 1280],
	"37_birdChirps04" : [296749, 1411],
	"38_icecreamBell01" : [299160, 1384],
	"39_kidsLaughing02" : [301544, 2664],
	"40_tree02" : [305208, 1593],
	"FG_GN_033b" : [307801, 810],
	"FG_GN_033c" : [309611, 1176],
	"FG_GN_033d" : [311787, 1411],
	"goodforyou" : [314198, 1620],
	"FG_GN_034" : [316818, 2011],
	"FG_GN_035" : [319829, 2325],
	"CG_ManInYellowHat_GENERIC_PlayButton_VO_IfYouWantT" : [323154, 3500],
	"23_PoliceSiren06" : [327654, 1593],
	"11_hey03" : [330247, 1567],
	"06_firetruckHorn03" : [332814, 9012],
	"23_PoliceSirenMix04" : [342826, 5120],
	"FG_GN_012a" : [348946, 940],
	"FG_GN_009" : [350886, 3553],
	"FG_GN_019" : [355439, 5486],
	"FG_GN_030" : [361925, 3657]
}

var soundsSheet = null;
var spritePlayTimeout = null; // the timeout reference (must be global)
var currentSoundSpriteStopPosition = 0; // the stop position (in the sounds sheet) of the current playing sound
var iosTitleSound = null;

function preloadSoundsSheet() {  
	soundsSheet = soundManager.createSound({
		id: 'sounds-sheet',
		url: 'resources/sounds/CG_Neighbourhood.' + (!IS_IOS ? 'mp3' : 'm4a'),
		autoBuffer: true,
	});
	soundsSheet.load();

	if (!IS_IOS) {
		// desktop
		soundsSheet.mute();  
		soundsSheet.play({}); 
	} else {
		// mobile
		window.addEventListener('pagehide', function() { soundsSheet.stop(); }, false);
		iosTitleSound = soundManager.createSound({
			id: 'ios-title',
			url: 'resources/sounds/George_sNeighborhood1.m4a',
			autoBuffer: true,
		});
		iosTitleSound.load();
	}
}


function createAnim() {
	ANIM_LEFT = new Array();
	for(var i = 0; i < CHARACTERS.length; i++) {
		if(CHARACTERS[i].tofind) {
			ANIM_LEFT[ANIM_LEFT.length] = CHARACTERS[i];
		}
	}
//	console.log(ANIM_LEFT.length);
}

/*
*/

var isDebugMode = false;

if(!isDebugMode){
//    cc.loadjs('../lib/Cocos2d-html5-canvasmenu-min.js');
    cc.loadjs('Cocos2d-html5-canvasmenu-min.js');
}else{
    cc.loadjs('../cocos2d/platform/CCClass.js');
    cc.loadjs('../cocos2d/platform/CCCommon.js');
    cc.loadjs('../cocos2d/platform/platform.js');
    cc.loadjs('../cocos2d/platform/ZipUtils.js');
    cc.loadjs('../cocos2d/platform/base64.js');
    cc.loadjs('../cocos2d/platform/gzip.js');
    cc.loadjs('../cocos2d/platform/CCMacro.js');
    cc.loadjs('../cocos2d/platform/CCConfig.js');
    cc.loadjs('../cocos2d/platform/CCFileUtils.js');
    cc.loadjs('../cocos2d/platform/CCTypes.js');
    cc.loadjs('../cocos2d/cocoa/CCGeometry.js');
    cc.loadjs('../cocos2d/cocoa/CCSet.js');
    cc.loadjs('../cocos2d/cocoa/CCAffineTransform.js');
    cc.loadjs('../cocos2d/support/CCPointExtension.js');
    cc.loadjs('../cocos2d/base_nodes/CCNode.js');
    cc.loadjs('../cocos2d/base_nodes/CCAtlasNode.js');
    cc.loadjs('../cocos2d/textures/CCTexture2D.js');
    cc.loadjs('../cocos2d/textures/CCTextureCache.js');
    cc.loadjs('../cocos2d/textures/CCTextureAtlas.js');
    cc.loadjs('../cocos2d/misc_nodes/CCRenderTexture.js');
    cc.loadjs('../cocos2d/misc_nodes/CCProgressTimer.js');
    cc.loadjs('../cocos2d/effects/CCGrid.js');
    cc.loadjs('../cocos2d/effects/CCGrabber.js');
    cc.loadjs('../cocos2d/actions/CCAction.js');
    cc.loadjs('../cocos2d/actions/CCActionInterval.js');
    cc.loadjs('../cocos2d/actions/CCActionInstant.js');
    cc.loadjs('../cocos2d/actions/CCActionManager.js');
    cc.loadjs('../cocos2d/actions/CCActionProgressTimer.js');
    cc.loadjs('../cocos2d/actions/CCActionCamera.js');
    cc.loadjs('../cocos2d/actions/CCActionEase.js');
    cc.loadjs('../cocos2d/actions/CCActionGrid.js');
    cc.loadjs('../cocos2d/actions/CCActionTiledGrid.js');
    cc.loadjs('../cocos2d/actions/CCActionGrid.js');
    cc.loadjs('../cocos2d/layers_scenes_transitions_nodes/CCScene.js');
    cc.loadjs('../cocos2d/layers_scenes_transitions_nodes/CCLayer.js');
    cc.loadjs('../cocos2d/layers_scenes_transitions_nodes/CCTransition.js');
    cc.loadjs('../cocos2d/layers_scenes_transitions_nodes/CCTransitionRadial.js');
    cc.loadjs('../cocos2d/layers_scenes_transitions_nodes/CCTransitionPageTurn.js');
    cc.loadjs('../cocos2d/sprite_nodes/CCSprite.js');
    cc.loadjs('../cocos2d/sprite_nodes/CCAnimation.js');
    cc.loadjs('../cocos2d/sprite_nodes/CCAnimationCache.js');
    cc.loadjs('../cocos2d/sprite_nodes/CCSpriteFrame.js');
    cc.loadjs('../cocos2d/sprite_nodes/CCSpriteFrameCache.js');
    cc.loadjs('../cocos2d/sprite_nodes/CCSpriteBatchNode.js');
    cc.loadjs('../cocos2d/label_nodes/CCLabelAtlas.js');
    cc.loadjs('../cocos2d/label_nodes/CCLabelTTF.js');
    cc.loadjs('../cocos2d/label_nodes/CCLabelBMFont.js');
    cc.loadjs('../cocos2d/particle_nodes/CCParticleSystem.js');
    cc.loadjs('../cocos2d/particle_nodes/CCParticleSystemQuad.js');
    cc.loadjs('../cocos2d/particle_nodes/CCParticleSystemPoint.js');
    cc.loadjs('../cocos2d/particle_nodes/CCParticleExamples.js');
    cc.loadjs('../cocos2d/touch_dispatcher/CCTouchDelegateProtocol.js');
    cc.loadjs('../cocos2d/touch_dispatcher/CCTouchHandler.js');
    cc.loadjs('../cocos2d/touch_dispatcher/CCTouchDispatcher.js');
    cc.loadjs('../cocos2d/keypad_dispatcher/CCKeypadDelegate.js');
    cc.loadjs('../cocos2d/keypad_dispatcher/CCKeypadDispatcher.js');
    cc.loadjs('../cocos2d/text_input_node/CCIMEDispatcher.js');
    cc.loadjs('../cocos2d/text_input_node/CCTextFieldTTF.js');
    cc.loadjs('../cocos2d/CCDirector.js');
    cc.loadjs('../cocos2d/CCCamera.js');
    cc.loadjs('../cocos2d/CCScheduler.js');
    cc.loadjs('../cocos2d/CCLoader.js');
    cc.loadjs('../cocos2d/CCDrawingPrimitives.js');
    cc.loadjs('../cocos2d/platform/CCApplication.js');
    cc.loadjs('../cocos2d/platform/CCSAXParser.js');
    cc.loadjs('../cocos2d/platform/AppControl.js');

    cc.loadjs('../cocos2d/menu_nodes/CCMenuItem.js');
    cc.loadjs('../cocos2d/menu_nodes/CCMenu.js');

    cc.loadjs('../cocos2d/tileMap_parallax_nodes/CCTMXTiledMap.js');
    cc.loadjs('../cocos2d/tileMap_parallax_nodes/CCTMXXMLParser.js');
    cc.loadjs('../cocos2d/tileMap_parallax_nodes/CCTMXObjectGroup.js');
    cc.loadjs('../cocos2d/tileMap_parallax_nodes/CCTMXLayer.js');
    cc.loadjs('../cocos2d/tileMap_parallax_nodes/CCParallaxNode.js');

    cc.loadjs('../CocosDenshion/SimpleAudioEngine.js');
}

// User files

cc.loadjs('resources/AppDelegate.js');

cc.loadjs('resources/introScene.js');
cc.loadjs('resources/neighbourhoodScene.js');
cc.loadjs('resources/neighbourhoodLayer.js');
cc.loadjs('resources/gameoverScene.js');
//cc.loadjs('resources/dinosaursSprite.js');

