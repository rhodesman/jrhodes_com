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


var repo;
var maze;

init();

function init() {
	canvas = document.getElementById('canvas');
	stage = new Stage(canvas);
	maze = new TiledMaze();
	repo = new ImageRepo();
	maze.x = 0;
	maze.y = 50;
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

	if (firstrun){
			var snd = new Audio("Assets/audio/CG_Game-ActivityTitles_A-MAZE-ingAdventure_Man"+SUFFIX);
			snd.play();
			
			repo.startScreen();
			firstrun = false
	}

	if (maze.drawComplete()){
		if (maze.imagesAdded()){
			maze.tick();
		}
		else if(playing)
			maze.addImages();
	}
	stage.update();
}
