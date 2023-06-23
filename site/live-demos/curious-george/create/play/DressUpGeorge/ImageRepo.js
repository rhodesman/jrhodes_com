//ImageRepo.js

var IMAGE_PATH = "assets/graphics/";
var SPRITE_PATH = IMAGE_PATH +"sprites/";

function ImageRepo(){

	_total = 48;
	_loaded = 0;
	
	var title;
	var play;
	var playHover;
	var bgGame;
	var window;
	var gameGeorge;
	var georgeBlink;
	var georgeNod;
	var dresser;
	var howToPlay;
	var howToPlayHover;
	var dressUp;
	var dressUpHover;
	var hats;
	var tops;
	var pants;
	var shoes;
	var bgPayoff;
	var witch;
	var clouds;
	var house;
	var moon;
	var moonFace;
	var pumpkins;
	
	title = quickImage("titlescreen_bg.png");
	
	this.startScreen = function(){
		var screen = new Container();
		var bg = new Bitmap(title);
		var playBut = repo.getButton("play");
		playBut.action = function(){
			stage.removeChild(screen);
			stage.addChild(game);
			sRepo.quiet();
			sRepo.play("intro1",true);
			sRepo.playChitter("excited");
			setTimeout(function(){sRepo.playAll(["intro2","intro3"]);},2500);
			if (isMobile){
				var aud = new Audio();

				aud.src = AUDIO_PATH+"fullIntro"+SUFFIX;
				
				aud.play();
			}
		}
		playBut.x = 700;
		playBut.y = 375;
		playBut.over = function(){
			sRepo.play("play");
		}
		bg.onClick = function(){
			if (isMobile){
				var aud = new Audio();
				aud.src = AUDIO_PATH+"fullStart"+SUFFIX;
				aud.play();
			}
		}
		screen.addChild(bg);
		screen.addChild(playBut);
		stage.addChild(screen);
	}
	
	bgGame = quickImage("game_bg.png");
	gameGeorge = quickImage("game_george.png");
	georgeBlink = quickImage("restingBlink.png",true);
	georgeNod = quickImage("restingHeadShake.png",true);
	window = quickImage("window.png");
	dresser = quickImage("game_dresser.png");
	if (gameType == "halloween"){
		hats = [quickImage("game_costume_cheetah_hat.png"),quickImage("game_costume_greenmonster_hat.png"),quickImage("game_costume_pumpkin_hat.png"),quickImage("game_costume_spaceman_hat.png"),quickImage("game_costume_bunny_hat.png"),quickImage("game_costume_yellow_hat.png")];
		hats[4].special = true;
		hats[4].adjust = {x:78,y:170}
		hats[5].special = true;
		hats[5].adjust = {x:76,y:163}
		hats[2].special = true;
		hats[2].adjust = {x:78,y:198},
		tops = [quickImage("game_costume_cheetah_top.png"),quickImage("game_costume_greenmonster_top.png"),quickImage("game_costume_pumpkin_top.png"),quickImage("game_costume_spaceman_top.png"),quickImage("game_costume_bunny_top.png"),quickImage("game_costume_yellow_top.png")];
		pants = [quickImage("game_costume_cheetah_bottom.png"),quickImage("game_costume_greenmonster_bottom.png"),quickImage("game_costume_pumpkin_bottom.png"),quickImage("game_costume_spaceman_bottom.png"),quickImage("game_costume_bunny_bottom.png"),quickImage("game_costume_yellow_bottom.png")];
		shoes = [quickImage("game_costume_cheetah_shoes.png"),quickImage("game_costume_greenmonster_shoes.png"),quickImage("game_costume_pumpkin_shoes.png"),quickImage("game_costume_spaceman_shoes.png"),quickImage("game_costume_bunny_shoes.png"),quickImage("game_costume_yellow_shoes.png")];	
	}
	if (gameType == "spring"){
		hats = [quickImage("game_costume_bunny_hat.png"),quickImage("game_costume_spaceman_hat.png"),quickImage("game_costume_yellow_hat.png")];
		tops = [quickImage("game_costume_bunny_top.png"),quickImage("game_costume_spaceman_top.png"),quickImage("game_costume_yellow_top.png")];
		pants = [quickImage("game_costume_bunny_bottom.png"),quickImage("game_costume_spaceman_bottom.png"),quickImage("game_costume_yellow_bottom.png")];
		shoes = [quickImage("game_costume_bunny_shoes.png"),quickImage("game_costume_spaceman_shoes.png"),quickImage("game_costume_yellow_shoes.png")];	
	
	}
	
	drawers = [quickImage("game_dresserdrawer_hats.png"),quickImage("game_dresserdrawer_tops.png"),quickImage("game_dresserdrawer_pants.png"),quickImage("game_dresserdrawer_shoes.png")];

	
	this.gameImages = function(){
	
		var list = new Object();
		
		list.background = new Bitmap(bgGame);
		list.george = new Bitmap(gameGeorge);
		
		var blink = new SpriteSheet({
					images:[georgeBlink],
					frames:{width:112,height:200,regX:0,regY:0},
					animations:{
						start: [0, 2,0,8]
					}
				});
		
		var nod = new SpriteSheet({
					images:[georgeNod],
					frames:{width:112,height:200,regX:0,regY:0},
					animations:{
						start: [0, 4,0,8]
					}
				});
		
		
		list.georgeBlink = new BitmapAnimation(blink);
		list.georgeNod = new BitmapAnimation(nod);
		list.window = new Bitmap(window);
		list.dresser = new Bitmap(dresser);
		list.drawers = [new Drawer(drawers[0]),new Drawer(drawers[1]),new Drawer(drawers[2]),new Drawer(drawers[3])];
		list.hats = [new Bitmap(hats[0]), new Bitmap(hats[1]), new Bitmap(hats[2]),new Bitmap(hats[3]), new Bitmap(hats[4]), new Bitmap(hats[5])];
		list.tops = [new Bitmap(tops[0]), new Bitmap(tops[1]), new Bitmap(tops[2]),new Bitmap(tops[3]), new Bitmap(tops[4]), new Bitmap(tops[5])];
		list.pants = [new Bitmap(pants[0]), new Bitmap(pants[1]), new Bitmap(pants[2]),new Bitmap(pants[3]), new Bitmap(pants[4]), new Bitmap(pants[5])];
		list.shoes = [new Bitmap(shoes[0]), new Bitmap(shoes[1]), new Bitmap(shoes[2]),new Bitmap(shoes[3]), new Bitmap(shoes[4]), new Bitmap(shoes[5])];
		
		return list;
	}
	
	bgPayoff = quickImage("payoff_bg.png");
	witch = quickImage("payoff_witch.png");
	clouds = quickImage("payoff_clouds.png");
	house = quickImage("house1.png",true);
	moon = quickImage("moon.png",true);
	moonFace = quickImage("moon.png");
	pumpkin = quickImage("pumpkin1.png",true);
	
	this.getPayoff = function(){
		if (gameType == "halloween"){
		var pay = new Container();
		
		var bgPay = new Bitmap(bgPayoff);
		var playBut = repo.getButton("play");
		playBut.action = function(){
			game = new DressUpGame();
			stage.addChild(game);
			game.alpha = 0;
			Tween.get(game).to({alpha:1},500);
			setTimeout(function(){
				sRepo.play("intro1",true);
				sRepo.playChitter("excited");
				setTimeout(function(){sRepo.playAll(["intro2","intro3"]);},2500);
				stage.removeChild(pay);
				sRepo.startMusic();
				if (isMobile){
					var aud = new Audio();
					aud.src = AUDIO_PATH+"fullIntro"+SUFFIX;
					aud.play();
				}
			},600);
		}
		playBut.x = 700;
		playBut.y = 375;
		playBut.over = function(){
			sRepo.play("play");
		}
		
		var moonSheet = new SpriteSheet({
					images:[moon],
					frames:{width:232,height:232,regX:0,regY:0},
					animations:{
						start: [0, 4,0,8],
						go:[0,1,"start",100]
					}
				});

		var moonAn = new BitmapAnimation(moonSheet);
		var face = new Bitmap(moonFace);
		moonAn.onAnimationEnd = function(){
			var m = this;
			setTimeout(function(){m.gotoAndPlay("start");},3000);
		}
		
		moonAn.onClick = function(){
			Tween.get(face).to({alpha:1},1000).to({alpha:0},1000);
			sRepo.play("howl");
			if (isMobile){
					var aud = new Audio();
					aud.src = AUDIO_PATH+"howl"+SUFFIX;
					aud.play();
				}
		}
		
		moonAn.x = 500;
		face.x = 545;
		face.y = 40;
		face.alpha = 0;
		
		var payWitch = new Bitmap(witch)
		
		var houseSheet = new SpriteSheet({
					images:[house],
					frames:{width:256,height:312,regX:0,regY:0},
					animations:{
						start: [0, 6,0,8],
					}
				});
		var houseAn = new BitmapAnimation(houseSheet);
		houseAn.onAnimationEnd = function(){
			var m = this;
			setTimeout(function(){m.gotoAndPlay("start");},4000);
		}
		
		houseAn.onClick = function(){
			this.gotoAndPlay("start");
			sRepo.play("doorCreak");
			if (isMobile){
					var aud = new Audio();
					aud.src = AUDIO_PATH+"doorCreak"+SUFFIX;
					aud.play();
				}
		}
		houseAn.x = 25;
		houseAn.y = 60;
		
		var pumpkinSheet = new SpriteSheet({
					images:[pumpkin],
					frames:{width:104,height:96,regX:0,regY:0},
					animations:{
						start: [0, 5,"start",8],
					}
				});
		var pumpkinAn = new BitmapAnimation(pumpkinSheet);
		pumpkinAn.onClick = function(){if (this.paused) this.paused = false;
			else this.paused = true;
			sRepo.play("pumpkin1");
			if (isMobile){
					var aud = new Audio();
					aud.src = AUDIO_PATH+"pumpkin1"+SUFFIX;
					aud.play();
				}
			}
		
		pumpkinAn.x = 150;
		pumpkinAn.y = 325;
		
		var pumpkinAn2 = pumpkinAn.clone();
		pumpkinAn2.onClick = function(){if (this.paused) this.paused = false;
			else this.paused = true;
				sRepo.play("pumpkin2");
				if (isMobile){
					var aud = new Audio();
					aud.src = AUDIO_PATH+"pumpkin2"+SUFFIX;
					aud.play();
				}
				}
		pumpkinAn2.x += 30;
		pumpkinAn2.y += 25;
		
		var payClouds = new Bitmap(clouds);
		payClouds.alpha = 0.8;
		
		var holdGeorge = new Container()
		holdGeorge.onClick = function(){
			sRepo.playChitter("trickOrTreat");
			if (isMobile){
					var aud = new Audio();
					aud.src = AUDIO_PATH+"trickOrTreatChitter"+SUFFIX;
					aud.play();
				}
		}
		holdGeorge.onTick = function(){
			this.updateCache();
		}
		
		var blink = repo.gameImages().georgeBlink;
		blink.gotoAndPlay("start");
		blink.onAnimationEnd = function(){
			var rand = 6000*Math.random() + 1000;
			setTimeout(function(){blink.gotoAndPlay("start")},rand);
		}
		
		blink.x = 333;
		blink.y = 257;
		
		var hat = game.george_hat.clone();
		hat.onPress = function(){};
		var top = game.george_top.clone();
		top.onPress = function(){};
		var pants = game.george_pants.clone();
		pants.onPress = function(){};
		var shoes = game.george_shoes.clone();
		shoes.onPress = function(){};
		hat.x += 250;
		hat.y += 25;
		top.x += 250;
		top.y += 25;
		pants.x += 250;
		pants.y += 25;
		shoes.x += 250;
		shoes.y += 25;
		
		var cm = new ColorMatrix();
		cm.adjustColor(-75);
		var colorFilter = new ColorMatrixFilter(cm);
		holdGeorge.filters = [colorFilter];
		
		pay.addChild(bgPay);
		setTimeout(function(){
			playBut.alpha = 0;
			pay.addChild(playBut);
			Tween.get(playBut).to({alpha:1},300);
		},4000);
		
		pay.addChild(moonAn);
		pay.addChild(face);
		pay.addChild(payWitch);
		pay.addChild(payClouds);
		pay.addChild(houseAn);
		pay.addChild(pumpkinAn);
		pay.addChild(pumpkinAn2);
		holdGeorge.addChild(blink);
		holdGeorge.addChild(pants);
		holdGeorge.addChild(shoes);
		holdGeorge.addChild(top);
		holdGeorge.addChild(hat);
		holdGeorge.cache(300,175,175,300);
		pay.addChild(holdGeorge);
		var witchHit = new Shape();
		witchHit.graphics.beginFill("#000").drawRect(0,0,100,100);
		payWitch.hitArea = witchHit;
		witchFly(payWitch);
		moonAn.gotoAndPlay("start");
		houseAn.gotoAndPlay("start");
		pumpkinAn.gotoAndPlay("start");
		setTimeout(function(){pumpkinAn2.gotoAndPlay("start");},200);
		return pay;
		}
	}
	
	function witchFly(fly){
		fly.x = -150;
		fly.y = 75;
		fly.regX = 0;
		fly.regY = 0;
		fly.rotation = 0;
		
		fly.onClick = function(){
		fly.onClick = function(){}
		fly.regX = 50;
		fly.regY = 50;
		fly.x += 50;
		fly.y += 50;
			Tween.get(fly,{override:true}).to({y:500,rotation:720,x:fly.x + 200},1000);
			sRepo.play("witchFall");
			if (isMobile){
				var aud = new Audio();
				aud.src = AUDIO_PATH+"witchFall"+SUFFIX;
				aud.play();
			}
		
		}
		
		Tween.get(fly).to({x:1050},7000,Ease.linear);
		if (3*Math.random()> 1){
			sRepo.play("witchLaugh");
		}
		Tween.get(fly).to({y:0},875,Ease.quadInOut).to({y:100},875,Ease.quadInOut).to({y:0},875,Ease.quadInOut).to({y:100},875,Ease.quadInOut).to({y:0},875,Ease.quadInOut).to({y:100},875,Ease.quadInOut).to({y:0},875,Ease.quadInOut).to({y:100},875,Ease.quadInOut);
		setTimeout(function(){if (stage.contains(fly.parent))witchFly(fly);},8000);
	}
	
	
	play = quickImage("btn_play.png");
	playHover = quickImage("btn_play_hover.png");
	
	howToPlay = quickImage("btn_help.png");
	howToPlayHover = quickImage("btn_help_hover.png");
	
	dressUp = quickImage("btn_go.png");
	dressUpHover = quickImage("btn_go_hover.png");
	
	this.getButton = function(name){
	
		var but = new Button();
		var norm,hov,act;
		
		if (name == "howToPlay"){
			norm = new Bitmap(howToPlay);
			hov = new Bitmap(howToPlayHover);
			act = new Bitmap(howToPlayHover);
			but.canBeActive = false;
			but.over = function(){
				//sRepo.play("helpOver");
			}
		}
		
		if (name == "play"){
			norm = new Bitmap(play);
			hov = new Bitmap(playHover);
			act = new Bitmap(playHover);
			but.canBeActive = false;
		}
		
		if (name == "dressUp"){
			norm = new Bitmap(dressUp);
			hov = new Bitmap(dressUpHover);
			act = new Bitmap(dressUpHover);
			but.canBeActive = false;
		}
		
		but.load(norm,hov,act);
		but.name = name;
		return but;
	}
	
	
	
	this.isLoaded = function(){
		
		if (_loaded > _total)
			alert ("incorrect image count: "+_loaded);
		
		return _total == _loaded;
	}
	
	this.progress = function(){
		return _loaded/total;
	}
	
	function handleLoad(e){
		_loaded++;
		if (_loaded == _total){
			repo.onLoad();
		}
	}
	
	function quickImage(source,sprite){
	
		var img = new Image();
		img.onload = handleLoad;
		if (sprite)
			img.src = SPRITE_PATH+source;
		else
			img.src = IMAGE_PATH+source;
		return img;
	}
	
	this.onLoad = function(){}
}