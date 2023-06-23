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

var ALL_SOUNDS = new Array();

if((navigator.platform.indexOf("iPhone") != -1) || (navigator.platform.indexOf("iPad") != -1)) {
	IS_IOS = true;
};

var EXT = "";

var game_res = [

	// sounds dino 1
//	{type:"bgm", src:"resources/sounds/CG_Game-NavigationButtons_Play_Boy"},
	// images dino 1
	{type:"image", src:"resources/images/bg_intro.jpg"},
	{type:"image", src:"resources/images/btn_play.png"},
	{type:"image", src:"resources/images/bg_tools.png"},
	{type:"image", src:"resources/images/sprite_george.png"},
	{type:"image", src:"resources/images/brush.png"},
	{type:"image", src:"resources/images/shovel.png"},
	{type:"image", src:"resources/images/shovel.png"},
	{type:"image", src:"resources/images/brush.png"},
	{type:"image", src:"resources/images/brush_cur.png"},
	{type:"image", src:"resources/images/shovel_cur.png"},
	{type:"image", src:"resources/images/btn_help.png"},
	{type:"image", src:"resources/images/btn_skip.png"},
	{type:"image", src:"resources/images/bg_rocks.jpg"},
	{type:"image", src:"resources/images/d1_b1_s1.png"},
	{type:"image", src:"resources/images/d1_b2_s1.png"},
	{type:"image", src:"resources/images/d1_b3_s1.png"},
	{type:"image", src:"resources/images/d1_b1_s2.png"},
	{type:"image", src:"resources/images/d1_b2_s2.png"},
	{type:"image", src:"resources/images/d1_b3_s2.png"},
	{type:"image", src:"resources/images/d1_b1_s3.png"},
	{type:"image", src:"resources/images/d1_b2_s3.png"},
	{type:"image", src:"resources/images/d1_b3_s3.png"},
	{type:"image", src:"resources/images/bg_museum_dino1.jpg"},
	{type:"image", src:"resources/images/bone_holder.png"},
	{type:"image", src:"resources/images/d1_b1.png"},
	{type:"image", src:"resources/images/d1_b2.png"},
	{type:"image", src:"resources/images/d1_b3.png"},
	{type:"image", src:"resources/images/d1_b4.png"},
	{type:"image", src:"resources/images/d1_b5.png"},
	{type:"image", src:"resources/images/d1_b6.png"},
	{type:"image", src:"resources/images/d1_b7.png"},
	{type:"image", src:"resources/images/d1_b8.png"},
	{type:"image", src:"resources/images/d1_b9.png"},
	{type:"image", src:"resources/images/dino1_skin.png"},
	{type:"image", src:"resources/images/bg_sand1.png"},
	{type:"image", src:"resources/images/bg_sand2.png"},
	{type:"image", src:"resources/images/bg_sand3.png"},
	{type:"image", src:"resources/images/bg_exhibition.jpg"},
	{type:"image", src:"resources/images/d1_e_skin.png"},
	{type:"image", src:"resources/images/d1_e_bones.png"},

	// images dino 2
	{type:"image", src:"resources/images/d2_b1_s1.png"},
	{type:"image", src:"resources/images/d2_b2_s1.png"},
	{type:"image", src:"resources/images/d2_b3_s1.png"},
	{type:"image", src:"resources/images/d2_b1_s2.png"},
	{type:"image", src:"resources/images/d2_b2_s2.png"},
	{type:"image", src:"resources/images/d2_b3_s2.png"},
	{type:"image", src:"resources/images/d2_b1_s3.png"},
	{type:"image", src:"resources/images/d2_b2_s3.png"},
	{type:"image", src:"resources/images/d2_b3_s3.png"},
	{type:"image", src:"resources/images/bg_museum_dino2.jpg"},
	{type:"image", src:"resources/images/dino2_skin.png"},
	{type:"image", src:"resources/images/d2_e_skin.png"},
	{type:"image", src:"resources/images/d2_e_bones.png"},

	// images dino 3
	{type:"image", src:"resources/images/d3_b1_s1.png"},
	{type:"image", src:"resources/images/d3_b2_s1.png"},
	{type:"image", src:"resources/images/d3_b3_s1.png"},
	{type:"image", src:"resources/images/d3_b1_s2.png"},
	{type:"image", src:"resources/images/d3_b2_s2.png"},
	{type:"image", src:"resources/images/d3_b3_s2.png"},
	{type:"image", src:"resources/images/d3_b1_s3.png"},
	{type:"image", src:"resources/images/d3_b2_s3.png"},
	{type:"image", src:"resources/images/d3_b3_s3.png"},
	{type:"image", src:"resources/images/bg_museum_dino3.jpg"},
	{type:"image", src:"resources/images/dino3_skin.png"},
	{type:"image", src:"resources/images/d3_e_skin.png"},

	{type:"image", src:"resources/images/d3_e_bones.png"}

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
            cc.setup("diggingGame");

            //init audio,mp3 or ogg
            //for example:
/* 			cc.AudioManager.sharedEngine().init("mp3,ogg"); */

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

var soundfiles = [
	"CG_Game-NavigationButtons_Play_Boy", // 0 - 816 (offset/start - sprite length)
	"FG_Titles_002", // 2816 - 3000
	"intro_shovel", // 6801 - 30433
	"play_intro_shovel", // 39234 - 31216
	"FG_FD_037", // 1m12450 - 627
	"FG_FD_038", // 1m15077 - 604
	"FG_FD_002", // 1m17681 - 1956
	"FG_FD_003", // 1m21637 - 3004
	"FG_FD_006", // 1m26641 - 6946
	"more_bones", // 1m35587 - 2188
	"keep_digging", // 1m39775 - 824
	"allbones_museum_front", // 1m42617 - 17737
	"FG_FD_024", // 2m2354 - 2496
	"FG_FD_024b", // 2m6851 - 3316
	"FG_FD_024c", // 2m12167 - 5593
	"FG_FD_024d", // 2m19760 - 5805
	"FG_FD_024e", // 2m27565 - 3262
	"good_backleg", // 2m32827 - 3370
	"good_pelvis", // 2m38197 - 8176
	"good_shoulder", // 2m48373 - 6296
	"good_ribs", // 2m56669 - 3840
	"good_thick", // 3m2509 - 9770
	"good_thin", // 3m14279 - 6766
	"good_neck", // 3m23044 - 4049
	"good_skull", // 3m29093 - 9900
	"apatasaur_more_shovel", // 3m40994 - 22519
	"good_tail", // 4m5513 - 5381
	"good_ribs2", // 4m12894 - 3892
	"triceratops_more_shovel", // 4m18786 - 21265
	"allbones_museum_right", // 4m42051 - 18860
	"good_left", // 5m2912 - 3239
	"good_tail2", // 5m8151 - 3109
	"good_tiny", // 5m13259 - 6844
	"trex_the_end", // 5m22103 - 28788
	"FG_FD_033", // 5m52892 - 6513
	"FG_FD_027", // 6m1405 - 12603
	"FG_FD_031_b", // 6m16008 - 13279
	"FG_FD_029_b" // 6m31287 - 13100
];

var soundSprites = {
  "CG_Game-NavigationButtons_Play_Boy" : [0, 816],
	"FG_Titles_002" : [2816, 3000],
	"intro_shovel" : [6801, 30433], // 
	"play_intro_shovel" : [39234, 31216], // 
	"FG_FD_037" : [60000 + 12450, 627], // 
	"FG_FD_038" : [60000 + 15077, 604], // 
	"FG_FD_002" : [60000 + 17681, 1956], // 
	"FG_FD_003" : [60000 + 21637, 3004], // 
	"FG_FD_006" : [60000 + 26641, 6946], // 
	"more_bones" : [60000 + 35587, 2188], // 
	"keep_digging" : [60000 + 39775, 824], // 
	"allbones_museum_front" : [60000 + 42617, 17737], // 
	"FG_FD_024" : [120000 + 2354, 2496], // 
	"FG_FD_024b" : [120000 + 6851, 3316], // 
	"FG_FD_024c" : [120000 + 12167, 5593], // 
	"FG_FD_024d" : [120000 + 19760, 5805], // 
	"FG_FD_024e" : [120000 + 27565, 3262], // 
	"good_backleg" : [120000 + 32827, 3370], // 
	"good_pelvis" : [120000 + 38197, 8176], // 
	"good_shoulder" : [120000 + 48373, 6296], // 
	"good_ribs" : [120000 + 56669, 3840], // 
	"good_thick" : [180000 + 2509, 9770], // 
	"good_thin" : [180000 + 14279, 6766], // 
	"good_neck" : [180000 + 23044, 4049], // 
	"good_skull" : [180000 + 29093, 9900], // 
	"apatasaur_more_shovel" : [180000 + 40994, 22519], // 
	"good_tail" : [240000 + 5513, 5381], // 
	"good_ribs2" : [240000 + 12894, 3892], // 
	"triceratops_more_shovel" : [240000 + 18786, 21265], // 
	"allbones_museum_right" : [240000 + 42051, 18860], // 
	"good_left" : [300000 + 2912, 3239], // 
	"good_tail2" : [300000 + 8151, 3109], // 
	"good_tiny" : [300000 + 13259, 6844], // 
	"trex_the_end" : [300000 + 22103, 28788], // 
	"FG_FD_033" : [300000 + 52892, 6513], // 
	"FG_FD_027" : [360000 + 1405, 12603], // 
	"FG_FD_031_b" : [360000 + 16008, 13279], // 
	"FG_FD_029_b" : [360000 + 31287, 13100] //
};

var BAD_JOB = ["FG_FD_024", "FG_FD_024b", "FG_FD_024c", "FG_FD_024d", "FG_FD_024e"];

var soundsSheet = null;
var spritePlayTimeout = null; // the timeout reference (must be global)
var currentSoundSpriteStopPosition = 0; // the stop position (in the sounds sheet) of the current playing sound
var iosTitleSound = null;

function preloadSoundsSheet() {  
  soundsSheet = soundManager.createSound({
    id: 'sounds-sheet',
    url: 'resources/sounds-sheet/CG-sounds-sheet.' + (!IS_IOS ? 'mp3' : 'm4a'),
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
      url: 'resources/sounds-sheet/FG_Titles_002.m4a',
      autoBuffer: true,
    });
    iosTitleSound.load();
  }
}

var DINOSAUR = [
	{
		"todig":[
			{"width":325, "height":259},
			{"width":590,"height":242},
			{"width":355,"height":38}
		],
		"bones": 9,
		"tomatch":[
			{"width":332,"height":86,"sound":"allbones_museum_front", "helpsnd":"FG_FD_011", sndtime: 15}, //front leg
			{"width":459,"height":92,"sound":"good_backleg", "helpsnd":"FG_FD_012", sndtime: 1}, //back leg
			{"width":412,"height":197,"sound":"good_pelvis", "helpsnd":"FG_FD_019", sndtime: 1.1}, //pelvis
			{"width":315,"height":188,"sound":"good_shoulder", "helpsnd":"FG_FD_021", sndtime: 2.2}, //shoulder
			{"width":252,"height":228,"sound":"good_ribs", "helpsnd":"FG_FD_013", sndtime: 1.1}, //ribs
			{"width":497,"height":225,"sound":"good_thick", "helpsnd":"FG_FD_022", sndtime: 1.1}, //thick tail part
			{"width":662,"height":218,"sound":"good_thin", "helpsnd":"FG_FD_023", sndtime: 3.6}, //tail : FG_FD_014
			{"width":95,"height":290,"sound":"good_neck", "helpsnd":"FG_FD_015", sndtime: 2.2}, //neck
			{"width":72,"height":405,"sound":"good_skull", "helpsnd":"FG_FD_016", sndtime: 3.7} //skull
		],
		"exhibition":"FG_FD_031_b",
		"sound":"apatasaur_more_shovel",
		"exhibitionios":"FG_FD_031_b",
		"soundios":"apatasaur_more_shovel",
		"more":16,
		"museum":{"width":"453", "height":"132", "snd":13.5}
	},
	{
		"todig":[
			{"width":265, "height":232},
			{"width":577,"height":250},
			{"width":400,"height":20}
		],
		"bones": 6,
		"tomatch":[
			{"width":308,"height":80,"sound":"allbones_museum_front", "helpsnd":"FG_FD_011", sndtime: 15}, //front leg
			{"width":480,"height":81,"sound":"good_backleg", "helpsnd":"FG_FD_012", sndtime: 1}, //back leg
			{"width":335,"height":216,"sound":"good_ribs2", "helpsnd":"FG_FD_013", sndtime: 1.2}, //ribs
			{"width":546,"height":227,"sound":"good_tail", "helpsnd":"FG_FD_014", sndtime: 3.4}, //tail
			{"width":218,"height":262,"sound":"good_neck", "helpsnd":"FG_FD_015", sndtime: 2.2}, //neck
			{"width":99,"height":182,"sound":"good_skull", "helpsnd":"FG_FD_016", sndtime: 3.7} //skull
		],
		"exhibition":"FG_FD_027",
		"sound":"triceratops_more_shovel",
		"exhibitionios":"FG_FD_027",
		"soundios":"triceratops_more_shovel",
		"more":14.5,
		"museum":{"width":"204", "height":"49", "snd":14.5}
	},
	{
		"todig":[
			{"width":281, "height":205},
			{"width":578,"height":198},
			{"width":307,"height":9}
		],
		"bones": 8,
		"tomatch":[
			{"width":312,"height":57,"sound":"allbones_museum_right", "helpsnd":"FG_FD_017", sndtime: 15}, //right leg
			{"width":462,"height":83,"sound":"good_left", "helpsnd":"FG_FD_018", sndtime: 1.1}, //left leg
			{"width":289,"height":229,"sound":"good_pelvis", "helpsnd":"FG_FD_019", sndtime: 1.1}, //pelvis
			{"width":288,"height":246,"sound":"good_ribs2", "helpsnd":"FG_FD_013", sndtime: 1.2}, //ribs
			{"width":110,"height":124,"sound":"good_tail2", "helpsnd":"FG_FD_014", sndtime: 1.1}, //tail
			{"width":433,"height":231,"sound":"good_tiny", "helpsnd":"FG_FD_020", sndtime: 3.4}, //tiny arms
			{"width":489,"height":318,"sound":"good_neck", "helpsnd":"FG_FD_015", sndtime: 2.2}, //neck
			{"width":546,"height":358,"sound":"good_skull", "helpsnd":"FG_FD_016", sndtime: 3.7} //skull
		],
		"exhibition":"FG_FD_029_b",
		"sound":"trex_the_end",
		"exhibitionios":"FG_FD_029_b",
		"soundios":"trex_the_end",
		"more":17.5,
		"museum":{"width":"2", "height":"133", "snd":12.5}
	}
]

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
cc.loadjs('resources/diggingScene.js');
cc.loadjs('resources/museumScene.js');
cc.loadjs('resources/exhibitionScene.js');
cc.loadjs('resources/dinosaursSprite.js');

