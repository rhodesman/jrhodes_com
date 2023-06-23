//CuriousGeorgeMaze.js

var canvas;
var stage;
var screen_width;
var screen_height;
var firstrun = true;
var playing = false;

var IMAGE_PATH = "Assets/graphics/";
var TILE_PATH = IMAGE_PATH+"tiles/";
var SPRITE_PATH = IMAGE_PATH+"spriteSheets/";
var AUDIO_PATH = "Assets/audio/";

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
var maze;

init();

function init() {
	canvas = document.getElementById('canvas');
	stage = new Stage(canvas);
	maze = new TiledMaze();
	sRepo = new SoundRepo();
	
	
	var count = 0;
	
	var bg = new Image();
	bg.onload = firstLoad;
	var load = new Image();
	load.onload = firstLoad;
	bg.src = IMAGE_PATH+"titleScreen_bg.png";
	load.src = SPRITE_PATH+"loading.png";
	
	function firstLoad(){
		count++;
		if (count == 2){
		
			var con = new Container();
			var bgi = new Bitmap(bg);
			
			var s = new SpriteSheet({
				images:[load],
				frames:{width:120,height:120,regX:0,regY:0},
				animations:{
					roll: [0, 7,"roll",7]
				}
			});
			con.addChild(bgi);
			var loading = new BitmapAnimation(s);
			loading.x = 725;
			loading.y = 375;
			con.addChild(loading);
			loading.gotoAndPlay("roll");
			stage.addChild(con);
			repo = new ImageRepo();
		}
	}
	
	maze.x = 0;
	maze.y = 50;
	Touch.enable(stage);
	canvas.addEventListener('selectstart', function(e) { e.preventDefault(); return false; }, false);
	handleImageLoad();
	stage.enableMouseOver(10);
}

function handleImageLoad(e){
	
		maze.build();
		startGame();
}

function startGame(){

	screen_width = canvas.width;
	screen_height = canvas.height;
	
	Ticker.addListener(window);
	Ticker.useRAF = true;
	Ticker.setFPS(60);

	
}

function tick(){

	if(repo && repo.isLoaded()){
	if (firstrun && (sRepo.loaded() ||(isMobile))){
			
			sRepo.playAll(["intro","toPlay"],true);
			repo.startScreen();
			firstrun = false;
	}

	if (maze.drawComplete()){
		if (maze.imagesAdded()){
			maze.tick();
		}
		else if(playing)
			maze.addImages();
	}
	}
	stage.update();
}
