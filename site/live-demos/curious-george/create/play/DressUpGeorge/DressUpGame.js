//DressUpGame.js

function DressUpGame(){

}

(function (window){
	function DressUpGame(){
		this.initialize();
		
		var images = repo.gameImages();
		
		var _background = images.background;	
		var _george = images.george;
		var _blink = images.georgeBlink;
		var _nod = images.georgeNod;
		var _window;
		var _dresser = {};
		var dresserCon;
		var _howToPlayButton;
		var _dressUpButton;
		var _payoffScreen;
		
		this.clothesOut;
		this.dressed = false;
		
		this.george_hat;
		this.george_top;
		this.george_pants;
		this.george_shoes;
		this.pos = {
			hat:{x:78,y:205},
			top:{x:77,y:277},
			pants:{x:72,y:344},
			shoes:{x:77,y:382}
		}
		
		_window = images.window;
		_window.x = 615;
		_window.y = 67;
		
		this.action = true;
		var timer = 0;
		var timerOn = true;
		
		_dresser.main = images.dresser;
		_dresser.drawers = images.drawers;
		
		_george.x = 50;
		_george.y = 200;
	
		_blink.x = 82;
		_blink.y = 232;
		_blink.gotoAndPlay("start");
		_blink.onAnimationEnd = function(){
			var rand = 6000*Math.random() + 1000;
			setTimeout(function(){_blink.gotoAndPlay("start")},rand);
		}
		
		_nod.x = 82;
		_nod.y = 232;
		_nod.onAnimationEnd = function(){
			this.visible = false;
			_blink.visible = true;
		}
		_nod.visible = false;
		
		this.headNod = function(){
			if (!this.george_hat && !_nod.visible){
				_blink.visible = false;
				_nod.visible = true;
				_nod.gotoAndPlay("start");
			}
		}
		
		addDresser();
		
		_howToPlayButton = repo.getButton("howToPlay");
		_howToPlayButton.x = screen_width - 82;
		_howToPlayButton.y = 0;
		_howToPlayButton.action = howToPlayClicked;
		_howToPlayButton.over = function(){sRepo.play("helpOver");}
		
		this.addChild(_background);
		this.addChild(_howToPlayButton);
		//this.addChild(_george);
		this.addChild(_blink);
		this.addChild(_nod);
		this.addChild(_window);
		this.addChild(dresserCon);
		
		
		function addDresser(){
			
			dresserCon = new Container();
			dresserCon.x = 225;
			dresserCon.y = 205;
			dresserCon.addChild(_dresser.main);
			
			_dresser.drawers[0].x = 16;
			_dresser.drawers[0].y = 182;
			_dresser.drawers[0].alpha = 0.01;
			_dresser.drawers[0].clothes = images.hats;
			_dresser.drawers[0].type = "hat";
			
			_dresser.drawers[1].x = 16;
			_dresser.drawers[1].y = 57;
			_dresser.drawers[1].alpha = 0.01;
			_dresser.drawers[1].clothes = images.tops;
			_dresser.drawers[1].type = "top";
			
			_dresser.drawers[2].x = 16;
			_dresser.drawers[2].y = 118;
			_dresser.drawers[2].alpha = 0.01;
			_dresser.drawers[2].clothes = images.pants;
			_dresser.drawers[2].type = "pants";
			
			_dresser.drawers[3].x = 163;
			_dresser.drawers[3].y = 182;
			_dresser.drawers[3].alpha = 0.01;
			_dresser.drawers[3].clothes = images.shoes;
			_dresser.drawers[3].type = "shoes";
			
			
		
			dresserCon.addChild(_dresser.drawers[0]);
			dresserCon.addChild(_dresser.drawers[3]);
			dresserCon.addChild(_dresser.drawers[2]);
			dresserCon.addChild(_dresser.drawers[1]);
		}
		
		this.reset = function(){
			this.george_hat = null;
			this.george_top = null;
			this.george_pants = null;
			this.george_shoes = null;
			this.drawerOpened("");
		}
		
		this.drawerOpened = function(type){
			for (var i = 0; i < _dresser.drawers.length; i++){
				if (_dresser.drawers[i].type != type)
					_dresser.drawers[i].close();
			}
		}
		
		this.anyOpen = function(){
			for (var i = 0; i < _dresser.drawers.length; i++){
				if (_dresser.drawers[i].isOpen())
					return true;
			}
			return false;
		}
		
		this.checkDressed = function(){
			if (this.george_hat && this.george_top && this.george_pants && this.george_shoes){
				if (!_dressUpButton){
					_dressUpButton = repo.getButton("dressUp");
					_dressUpButton.x = screen_width -250;
					_dressUpButton.y = screen_height - 130;
					_dressUpButton.alpha = 0;
					_dressUpButton.action = dressUpClicked;
					_dressUpButton.over = function(){sRepo.play("go");};
					
				}
				this.addChild(_dressUpButton);
				Tween.get(_dressUpButton).to({alpha:1},100);
				if (!game.dressed){
				sRepo.playAll(["payoff1","pressGo"],true);
				sRepo.playChitter("yay");
				}
				if (isMobile){
					var aud = new Audio();
					aud.src = AUDIO_PATH+"payoff1"+SUFFIX;
					aud.play();
				}
				game.dressed = true;
				timerOn = false;
			}
			else if (this.contains(_dressUpButton)){
					Tween.get(_dressUpButton).to({alpha:0},100);
					setTimeout(function(){game.removeChild(_dressUpButton);},100);
				}
			else{
				var count = 0;
				if (this.george_hat)count++;
				if (this.george_top)count++;
				if (this.george_pants)count++;
				if(this.george_shoes)count++;
				
				if (count == 3 && Math.random()>Math.random()){
					sRepo.play("almostDone",true);
				}
			}
			
			
			for (var i = 0; i < this.clothesOut.length; i++){
				if (this.clothesOut[i] != this["george_"+this.clothesOut[i].type])
					Tween.get(this.clothesOut[i]).to(this.clothesOut[i].pos,300);
			}
		}
		
		this.onTick = function(e){
			if (timerOn){
				if (this.action){
					timer = 60*15;
					this.action = false;
				}
				else{
					timer--;
					if (timer == 0){
						var rand = Math.floor(2*Math.random())+1;
						sRepo.play("inactive"+rand,true);
						timer = 60*15;
					}
				}
			}
			
			if (7000*Math.random() < 10){
				if (!isMobile)
					this.headNod();
				if (Math.random() > Math.random())
					sRepo.playChitter("nod");
				else
					sRepo.playChitter("nod2");
			}
		}
	}
	
	function dressUpClicked(){
		
		var _payoffScreen = repo.getPayoff();
		sRepo.quiet();
		_payoffScreen.alpha = 0;
		stage.addChild(_payoffScreen);
		Tween.get(_payoffScreen).to({alpha:1},500);
		sRepo.startPayoff();
		sRepo.playChitter("trickOrTreat");
		setTimeout(function(){
			stage.removeChild(game);
			sRepo.delayPlay("playAgain",3000);
			if (isMobile){
				var aud = new Audio();
				aud.src = AUDIO_PATH+"playAgain"+SUFFIX;
				aud.play();
			}
		},600);
	}
	
	function howToPlayClicked(){
		game.action = true;
		sRepo.play("help",true);
		if (isMobile){
				var aud = new Audio();
				aud.src = AUDIO_PATH+"help"+SUFFIX;
				aud.play();
			}
	}
	
	DressUpGame.prototype = new Container();
	
	DressUpGame.prototype.Container_initialize = DressUpGame.prototype.initialize;
	
	DressUpGame.prototype.initialize = function(){
		this.Container_initialize();
		this.name = 'DressUpGame';
		this.snapToPixel = true;
	}
	window.DressUpGame = DressUpGame;
}(window));

(function (window){
	function Drawer(image){
		this.initialize(image);
		
		this.width = this.image.width;
		this.height = this.image.height;
		this.stageX = function() {return this.localToGlobal(0,0).x;}
		this.stageY = function() {return this.localToGlobal(0,0).y;}
		
		this.clothes = [];
		var open = false;
		
		this.type = "";
		
		this.isOpen = function(){return open}
		
		var closeHit = new Shape();
		closeHit.graphics.beginFill("#000").drawRect(0,0,this.width,this.height - 30);
		
		var openHit = new Shape();
		openHit.graphics.beginFill("#000").drawRect(0,0,this.width,this.height);
		
		this.clothesMask = function(){ 
			var sh = new Shape();
			var hold = this.stageY();
			sh.graphics.beginFill("#000").drawRect(0,0,screen_width,205 +this.y+26);
			return sh;
		}
		
		this.addClothes = function(){
			
			for (var i = 0; i < this.clothes.length; i++){
				if (this.clothes[i] != game["george_"+this.type]){
				var item = this.clothes[i];
				
				var hit = new Shape();
				hit.graphics.beginFill("#000").drawRect(0,0,item.image.width,item.image.height - 15);
				item.hitArea = hit;
				item.type = this.type;
				item.x = this.stageX() + this.width/2 - item.image.width/2;
				item.y = this.stageY() + 20;
				
				item.mask = this.clothesMask();
				game.addChild(item);
				var toY;
				var toX;
				if ( i < 3){
					if (i == 1)
						toY = 0;
					else
						toY = 15;
					toX = 175 + 150*i;
				}
				else{
					if (i == 4)
						toY = 95;
					else
						toY = 110;
					toX = 175 + 150*(i-3);
				}
					
				item.pos = {x:toX,y:toY};
				Tween.get(item).to({y:toY},300);
				Tween.get(item).to({x:toX},300,Ease.quartIn);
				item.onPress = clothesClicked;
				}
			}
		}
		
		this.removeClothes = function(){
			for (var i = 0; i < this.clothes.length; i++){
			
				var t = this;
				
				if (this.clothes[i] != game["george_"+this.type]){
					var item = this.clothes[i];
					item.mask = this.clothesMask();
					Tween.get(item).to({x:this.stageX() + this.width/2 - item.image.width/2},300,Ease.quartOut);
					Tween.get(item).to({y:this.stageY() +20},300);
					
					
				}
			}
			
			var t = this;
			setTimeout(function(){
				for (var i = 0; i < 6; i++){
					if (t.clothes[i] != game["george_"+t.type]){
					game.removeChild(t.clothes[i]);
					}
				}
			},350);
		}
		
		function clothesClicked(e){

			if (isMobile){
				quickBlock();
			}
			game.action = true;
			game.addChild(e.target);
			var moved = false;
			e.target.mask = null;
			var offset = {x:e.target.x-e.stageX, y:e.target.y-e.stageY};
			
			
			
			e.onMouseMove = function(ev) {
						moved = true;
						ev.target.x = ev.stageX+offset.x;
						ev.target.y = ev.stageY+offset.y;
					}
			e.onMouseUp = function(ev){
				var at = new Point(ev.target.x,ev.target.y);
				var goal = new Point(game.pos[ev.target.type].x,game.pos[ev.target.type].y);
				if (getDist(at,goal) < 150 || (ev.target.type != game.clothesOut[0].type || !game.anyOpen()) || !moved){
					if (!ev.target.image.special){
						Tween.get(ev.target).to(game.pos[ev.target.type],300);
						}
					else
						Tween.get(ev.target).to(ev.target.image.adjust,300);
					game["george_"+ev.target.type] = ev.target;
					if (game.george_pants)
						game.addChild(game.george_pants);
					if (game.george_shoes)
						game.addChild(game.george_shoes);
					if (game.george_top)
						game.addChild(game.george_top);
					if (game.george_hat)
						game.addChild(game.george_hat);
						
					var rand = Math.floor(4*Math.random())+1;
					if (100*Math.random() < 33){
						sRepo.play("feedback"+rand,true);
						if (isMobile){
						var aud = new Audio();
						aud.src = AUDIO_PATH+"feedback"+rand+SUFFIX;
						aud.play();
						}
					}
					if (3*Math.random() < 1){
						var c = Math.floor(3*Math.random());
						sRepo.playChitter("clothes"+c);
						if (isMobile){
						var aud = new Audio();
						aud.src = AUDIO_PATH+"clothes"+c+"Chitter"+SUFFIX;
						aud.play();
						}
					}
				}
				else{
					Tween.get(ev.target).to(ev.target.pos,300);
					if(game["george_"+e.target.type] == e.target && game.anyOpen()){
						game["george_"+e.target.type] = null;
						game.dressed = false;
					}
				}
				game.checkDressed();
			}
		}
		
		this.hitArea = closeHit;
		
		this.close = function(){
			if (open){
				var dra = this;
				setTimeout(function() {Tween.get(dra).to({alpha:0.01},100,Ease.linear);},320);
				open = false;
				this.hitArea = closeHit;
				this.removeClothes();
			}
		}
		
		this.open = function(){
			game.drawerOpened(this.type);
			game.clothesOut = this.clothes;
			if (!open){
				Tween.get(this).to({alpha:1},100,Ease.linear);
				open = true;
				this.hitArea = openHit;
				this.addClothes();
			}
		}
		
		this.switchState = function(){
			if (open)
				this.close();
			else
				this.open();
		}
		
		this.onPress = function(e){
			if (isMobile){
				quickBlock();
			}
			this.switchState();
			game.action = true;
			if (isMobile){
				if (3*Math.random()<1){
				var aud = new Audio();
				if (Math.random()>Math.random())
					aud.src = AUDIO_PATH+"nodChitter"+SUFFIX;
				else
					aud.src = AUDIO_PATH+"nod2Chitter"+SUFFIX;
				aud.play();
				setTimeout(function(){game.headNod();},1000);
				}
				
			}
		}
	}
	Drawer.prototype = new Bitmap();
	
	Drawer.prototype.Bitmap_initialize = Drawer.prototype.initialize;
	
	Drawer.prototype.initialize = function(image){
		this.Bitmap_initialize(image);
		this.name = 'Drawer';
		this.snapToPixel = true;
	}
	window.Drawer = Drawer;
}(window));