//DressUpGeorge.js

var canvas;
var stage;
var screen_width;
var screen_height;

var myAudio = document.createElement('audio');
var SUFFIX; 
if (myAudio.canPlayType) {
	var canPlayMp3 = !!myAudio.canPlayType && "" != myAudio.canPlayType('audio/mpeg');
	var canPlayOgg = !!myAudio.canPlayType && "" != myAudio.canPlayType('audio/ogg; codecs="vorbis"');
	if (canPlayOgg)
		SUFFIX = ".ogg";
	if (canPlayMp3)
		SUFFIX = ".mp3";
	
}
var agent = navigator.userAgent;
var isIOS = agent.indexOf("iPod") > -1 || agent.indexOf("iPhone") > -1 || agent.indexOf("iPad") > -1; 
var isAndroid = agent.indexOf("Android") > -1
var isMobile = isIOS||isAndroid

var repo;
var sRepo;
var gameType = "halloween";
var game;

var firstrun = true;

init();

function init() {
	canvas = document.getElementById('canvas');
	screen_width = canvas.width;
	screen_height = canvas.height;
	stage = new Stage(canvas);
	var bg = new Image();
	bg.onload = handleImageLoad;
	bg.src = IMAGE_PATH+"titlescreen_bg.png";
	
	stage.enableMouseOver(10);
	Touch.enable(stage);
	canvas.addEventListener('selectstart', function(e) { e.preventDefault(); return false; }, false);
}

function handleImageLoad(e){
	
		var con = new Container();
		var load = new Image();
		var bgb = new Bitmap(this);
		con.addChild(bgb);
		stage.addChild(con);
		
		load.onload = function(){
			
			repo = new ImageRepo();
			sRepo = new SoundRepo();
			
			var s = new SpriteSheet({
				images:[load],
				frames:{width:120,height:120,regX:0,regY:0},
				animations:{
					roll: [0, 7,"roll",7]
				}
			});
			
			var loading = new BitmapAnimation(s);
			loading.x = 725;
			loading.y = 375;
			
			if (!repo.isLoaded()){
				con.addChild(bgb);
				con.addChild(loading);
				stage.addChild(con);
				loading.gotoAndPlay("roll");
			}
			startGame();
		}
		load.src = SPRITE_PATH+"loading.png";
		
		
		
}

function startGame(){

	
	
	Ticker.addListener(window);
	Ticker.useRAF = true;
	Ticker.setFPS(60);
	
}

function tick(){

	if(repo.isLoaded() && firstrun && (sRepo.loaded() ||(isIOS ||isAndroid))){
		
		game = new DressUpGame();
		stage.removeAllChildren();
		sRepo.playAll(["start","toPlay"],true);
		repo.startScreen();
		firstrun = false;
	}
	
	stage.update();
}