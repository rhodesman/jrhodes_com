//ImageRepo.js

function ImageRepo(){

	var _loaded = 0;
	var _total = 68;
	
	var ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	
	this.tiles = new TileRepo();
	
	var intro = new Image();
	this.bg = new Image();
	var play = new Image();
	var playHover = new Image();
	var newMaze = new Image();
	var newMazeHover = new Image();
	var howToPlay = new Image();
	var howToPlayHover = new Image();
	var ratImg = new Image();
	var ratImg2 = new Image();
	var ratImg3 = new Image();
	var rewards = new Array();
	var letters = new Array();
	letters[0] = new Array();
	letters[1] = new Array();
	
	
	intro.onload = handleLoad;
	intro.src = IMAGE_PATH+"titleScreen_bg.png";
	
	play.onload = handleLoad;
	play.src = IMAGE_PATH+"btn_play.png";
	playHover.onload = handleLoad;
	playHover.src = IMAGE_PATH+"btn_play_hover.png";
	
	this.startScreen = function(){
		var screen = new Container();
		var bg = new Bitmap(intro);
		var playBut = repo.getButton("play");
		playBut.action = function(){
		
			var snd = new Audio("Assets/audio/CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_Introduction_VO_1_05-1"+SUFFIX);
			snd.addEventListener('ended',function(){
				var snd2 = new Audio("Assets/audio/CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_Introduction_VO_1_07"+SUFFIX);
				snd2.onload = new function(){
					snd2.play();
				}
			});
			snd.onload = new function(){
				snd.play();
			}
			playing = true;
			stage.removeChild(screen);
			
		}
		playBut.x = 700;
		playBut.y = 375;
		screen.addChild(bg);
		screen.addChild(playBut);
		stage.addChild(screen);
	}
	
	this.bg.onload = handleLoad;
	this.bg.src = IMAGE_PATH+"maze_bg.png"
	
	newMaze.onload = handleLoad;
	newMazeHover.onload = handleLoad;
	newMaze.src = IMAGE_PATH +"btn_newmaze.png";
	newMazeHover.src = IMAGE_PATH+"btn_newmaze_hover.png";
	
	howToPlay.onload = handleLoad;
	howToPlayHover.onload = handleLoad;
	howToPlay.src = IMAGE_PATH+"btn_help.png";
	howToPlayHover.src = IMAGE_PATH+"btn_help_hover.png";
	
	
	this.getButton = function(name){
	
		var but = new Button();
		var norm,hov,act;
		if (name == "newMaze"){
			norm = new Bitmap(newMaze);
			hov = new Bitmap(newMazeHover);
			act = new Bitmap(newMazeHover);
			but.canBeActive = false;
			but.action = function(e){maze.build();};
		}
		if (name == "howToPlay"){
			norm = new Bitmap(howToPlay);
			hov = new Bitmap(howToPlayHover);
			act = new Bitmap(howToPlayHover);
			but.canBeActive = false;
		}
		if (name == "play"){
			norm = new Bitmap(play);
			hov = new Bitmap(playHover);
			act = new Bitmap(playHover);
		}
		
		but.load(norm,hov,act);
		but.name = name;
		return but;
	}
	
	
	ratImg.onload = handleLoad;
	ratImg.src = SPRITE_PATH+"george_walk_0.png";
	ratImg2.src = SPRITE_PATH+"george_walk_1.png";
	ratImg3.src = SPRITE_PATH+"george_walk_2.png";
	
	this.getRat = function(){
	
		var sheet = new SpriteSheet({
				images:[ratImg,ratImg2,ratImg3],
				frames:{width:183,height:265,regX:62,regY:50},
				animations:{
					toWalkR: [40, 47,"WalkR"], 
					WalkR: [48, 79,"WalkR"], 
					toWalkF: [80, 87,"WalkF"], 
					WalkL: [7, 39,"WalkL"], 
					WalkB: [129, 161,"WalkB"], 
					WalkF: [88, 120,"WalkF"], 
					toWalkL: [0, 6,"WalkL"], 
					toWalkB: [121, 128,"WalkB"]
				}
			});
		//SpriteSheetUtils.addFlippedFrames(sheet, true, false, false);
		//SpriteSheetUtils.flip(sheet,{walk_h:["walk",true,false]});
		var theRat = new Rat(sheet);
		theRat.scaleX = 0.3;
		theRat.scaleY = 0.3;
		theRat.sequence = "toWalkR";
		//theRat.gotoAndPlay("toWalkR");
		return theRat;
	}
	
	for (var i = 0; i < 5; i++){
		rewards[i] = new Image();
		rewards[i].onload = handleLoad;
		}
	
	rewards[0].src = IMAGE_PATH + "apple.png";
	rewards[1].src = IMAGE_PATH + "balloons.png";
	rewards[2].src = IMAGE_PATH + "beachball.png";
	rewards[3].src = IMAGE_PATH + "ice_cream.png";
	rewards[4].src = IMAGE_PATH + "puppy.png";
	
	this.getReward = function(not){
		var n;
		if (not != null)
			n = not;
		else
			n = -1;
			
		var rand = Math.floor(rewards.length*Math.random());
		return rewards[rand];
	}
	
	var letSrc = IMAGE_PATH+"letters/alphabet_letter_";
	var redSrc = letSrc+"red_";
	
	for (var i = 0; i < 26; i++){
		letters[0][i] = new Image();
		letters[1][i] = new Image();
		letters[0][i].onload = handleLoad;
		letters[1][i].onload = handleLoad;
		
		var src = "00";
		var code = 25-i;
		if (code < 10)
			src +="0";
		src += code +"_" +ALPHA.charAt(i)+".png";
		letters[0][i].src = letSrc + src;
		letters[1][i].src = redSrc + src;
	}
	
	this.getLetter = function(letter,red){
		var letImg;
		if (red)
			letImg = letters[1][letter];
		else
			letImg = letters[0][letter];
		
		var retLet = new Letter(letImg);
		retLet.code = letter;
		if (red)
			retLet.red = red;
		else
			retLet.red = false;
		
		retLet.character = ALPHA.charAt(letter)
		return retLet;
	}
	
	this.changeColor = function(let){
		if (let.red)
			let.image = letters[0][let.code];
		else
			let.image = letters[1][let.code];
			
		let.red = !let.red;
	}
	
	this.changeLetter = function(let){
		
		var not = let.code;
		
		var rand = Math.floor(26*Math.random());
		while (rand == not){
			var rand = Math.floor(26*Math.random());
		}
		
		if (let.red)
			let.image = letters[1][rand];
		else
			let.image = letters[0][rand];
			
		let.code = rand;
		let.character = ALPHA.charAt(rand)
		
	}
	
	this.randomLetter = function(not,red){
		
		if (not == null)
			not = -1;
		
		var rand = Math.floor(26*Math.random());
		while (rand == not){
			var rand = Math.floor(26*Math.random());
		}
		
		var letImg;
		if (red)
			letImg = letters[1][rand];
		else
			letImg = letters[0][rand];
		
		var retLet = new Letter(letImg);
		retLet.code = rand;
		if (red)
			retLet.red = red;
		else
			retLet.red = false;
		return retLet;
	}
	
	
	
	this.isLoaded = function(){
		return _loaded == _total && this.tiles.isLoaded();
	}
	
	function handleLoad(){
		_loaded++;
	}
}

function TileRepo(){

	var _loaded = 0;
	var _total = 22;
	
	//INITIALIZE TILES
	var begin_bottom = new Image();
	var begin_topleft = new Image();
	var end_bottomright = new Image();
	var end_topright = new Image();
	
	var upright0 = new Image();
	var updown0 = new Image();
	var upleft0 = new Image();
	var rightdown0 = new Image();
	var rightdown0_flare = new Image();
	var rightleft0 = new Image();
	var rightleft0_flare = new Image();
	var rightleft1 = new Image();
	var rightleft1_flare = new Image();
	var downleft0 = new Image();
	var downleft0_flare = new Image();
	
	var uprightdown0 = new Image();
	var uprightleft0 = new Image();
	var uprightleft1 = new Image();
	var updownleft0 = new Image();
	var updownleft0_flare = new Image();
	var rightdownleft0 = new Image();
	
	var uprightdownleft0 = new Image();
	
	
	//SET LOAD HANDLER
	begin_bottom.onload = handleLoad;
	begin_topleft.onload = handleLoad;
	end_bottomright.onload = handleLoad;
	end_topright.onload = handleLoad;
	upright0.onload = handleLoad;
	updown0.onload = handleLoad;
	upleft0.onload = handleLoad;
	rightdown0.onload = handleLoad;
	rightdown0_flare.onload = handleLoad;
	rightleft0.onload = handleLoad;
	rightleft0_flare.onload = handleLoad;
	rightleft1.onload = handleLoad;
	rightleft1_flare.onload = handleLoad;
	downleft0.onload = handleLoad;
	downleft0_flare.onload = handleLoad;
	uprightdown0.onload = handleLoad;
	uprightleft0.onload = handleLoad;
	uprightleft1.onload = handleLoad;
	updownleft0.onload = handleLoad;
	updownleft0_flare.onload = handleLoad;
	rightdownleft0.onload = handleLoad;
	uprightdownleft0.onload = handleLoad;
	
	//SET SOURCE FILE
	begin_bottom.src = TILE_PATH+"corner_bottom-left.png";
	begin_topleft.src = TILE_PATH+"corner_top-left.png";
	end_bottomright.src = TILE_PATH+"corner_bottom-right.png";
	end_topright.src = TILE_PATH+"corner_top-right.png";
	upright0.src = TILE_PATH+"upright.png";
	updown0.src = TILE_PATH+"updown.png";
	upleft0.src = TILE_PATH+"upleft.png";
	
	rightdown0.src = TILE_PATH+"rightdown.png";
		rightdown0_flare.src = TILE_PATH+"rightdown_flare.png";
	
	rightleft0.src = TILE_PATH+"rightleft.png";
		rightleft0_flare.src = TILE_PATH+"rightleft_flare.png";
		rightleft1.src = TILE_PATH+"rightleft1.png";
			rightleft1_flare.src = TILE_PATH+"rightleft1_flare.png";
	
	downleft0.src = TILE_PATH+"downleft.png";
		downleft0_flare.src = TILE_PATH+"downleft_flare.png";
	
	uprightdown0.src = TILE_PATH+"uprightdown.png";
	
	uprightleft0.src = TILE_PATH+"uprightleft.png";
		uprightleft1.src = TILE_PATH+"uprightleft1.png";
	
	updownleft0.src = TILE_PATH+"updownleft.png";
		updownleft0_flare.src = TILE_PATH+"updownleft_flare.png";
	
	rightdownleft0.src = TILE_PATH+"rightdownleft.png";
	uprightdownleft0.src = TILE_PATH+"uprightdownleft.png";
	
	
	var tileSpecs = {
		"begin_bottom-left":{
			versions:1,
			version:[
				{
					hasFlare:false,
					noFlare:{
						image:begin_bottom,
						map:{
							center:new Point(75,75),
							left:[],
							right:[],
							up:[],
							down:[]
						}
					}
				}
			]
		},
		"begin_top-left":{
			versions:1,
			version:[
				{
					hasFlare:false,
					noFlare:{
						image:begin_topleft,
						map:{
							center:new Point(75,75),
							left:[],
							right:[],
							up:[],
							down:[]
						}
					}
				}
			]
		},
		"end_bottom-right":{
			versions:1,
			version:[
				{
					hasFlare:false,
					noFlare:{
						image:end_bottomright,
						map:{
							center:new Point(75,75),
							left:[],
							right:[],
							up:[],
							down:[]
						}
					}
				}
			]
		},
		"end_top-right":{
			versions:1,
			version:[
				{
					hasFlare:false,
					noFlare:{
						image:end_topright,
						map:{
							center:new Point(75,75),
							left:[],
							right:[],
							up:[],
							down:[]
						}
					}
				}
			]
		},
		"upright":{
			versions:1,
			version:[
				{
					hasFlare:false,
					noFlare:{
						image:upright0,
						map:{
							center:new Point(80,81),
							left:[],
							right:[new Point(108,79), new Point(132,67)],
							up:[new Point(60,60),new Point(66,10)],
							down:[]
						}
					}						
				}
			]
		},
		"updown":{
			versions:1,
			version:[
				{
					hasFlare:false,
					noFlare:{
						image:updown0,
						map:{
							center:new Point(86,66),
							left:[],
							right:[],
							up:[new Point(67,11)],
							down:[new Point(70,127)]
						}
					}
				}
			]
		},
		"upleft":{
			versions:1,
			version:[
				{
					hasFlare:false,
					noFlare:{
						image:upleft0,
						map:{
							center:new Point(104,93),
							left:[new Point(86,98),new Point(34,72),new Point(3,69)],
							right:[],
							up:[new Point(107,70),new Point(87,37),new Point(68,5)],
							down:[]
						}
					}
				}
			]
		},
		"rightdown":{
			versions:1,
			version:[
				{
					hasFlare:true,
					flareUsed:false,
					flare:{
						image:rightdown0_flare,
						map:{
							center:new Point(50,66),
							left:[],
							right:[new Point(108,62)],
							up:[],
							down:[new Point(51,112),new Point(67,130)]
						}
					},
					noFlare:{
						image:rightdown0,
						map:{
							center:new Point(50,66),
							left:[],
							right:[new Point(108,62)],
							up:[],
							down:[new Point(51,112),new Point(67,130)]
						}
					}
				}
			]
		},
		"rightleft":{
			versions:2,
			version:[
				{
					hasFlare:true,
					flareUsed:false,
					flare:{
						image:rightleft0_flare,
						map:{
							center:new Point(73,41),
							left:[new Point(7,67)],
							right:[new Point(131,68)],
							up:[],
							down:[]
						}
					},
					noFlare:{
						image:rightleft0,
						map:{
							center:new Point(73,41),
							left:[new Point(7,67)],
							right:[new Point(131,68)],
							up:[],
							down:[]
						}
					}
				},
				{
					hasFlare:true,
					flareUsed:false,
					flare:{
						image:rightleft1_flare,
						map:{
							center:new Point(75,90),
							left:[new Point(16,68)],
							right:[new Point(122,65)],
							up:[],
							down:[]
						}
					},
					noFlare:{
						image:rightleft1,
						map:{
							center:new Point(75,90),
							left:[new Point(16,68)],
							right:[new Point(122,65)],
							up:[],
							down:[]
						}
					}
				}
			]
		},
		"downleft":{
			versions:1,
			version:[
				{
					hasFlare:true,
					flareUsed:false,
					flare:{
						image:downleft0_flare,
						map:{
							center:new Point(106,40),
							left:[new Point(91,33),new Point(44,54),new Point(8,68)],
							right:[],
							up:[],
							down:[new Point(110,55),new Point(102,83),new Point(71,126)]
						}
					},
					noFlare:{
						image:downleft0,
						map:{
							center:new Point(106,40),
							left:[new Point(91,33),new Point(44,54),new Point(8,68)],
							right:[],
							up:[],
							down:[new Point(110,55),new Point(102,83),new Point(71,126)]
						}
					}
				}
			]
		},
		"uprightdown":{
			versions:1,
			version:[
				{
					hasFlare:false,
					noFlare:{
						image:uprightdown0,
						map:{
							center:new Point(78,45),
							left:[],
							right:[new Point(109,50), new Point(137,69)],
							up:[new Point(67,8)],
							down:[new Point(61,59),new Point(60,82),new Point(66,127)]
						}
					}
				}
			]
		},
		"uprightleft":{
			versions:2,
			version:[
				{
					hasFlare:false,
					noFlare:{
						image:uprightleft0,
						map:{
							center:new Point(87,60),
							left:[new Point(98,90),new Point(88,108),new Point(65,106),new Point(14,69)],
							right:[new Point(130,68)],
							up:[new Point(71,17)],
							down:[]
						}
					}
				},
				{
					hasFlare:false,
					noFlare:{
						image:uprightleft1,
						map:{
							center:new Point(89,57),
							left:[new Point(81,68),new Point(55,72),new Point(4,69)],
							right:[new Point(123,64)],
							up:[new Point(70,12)],
							down:[]
						}
					}
				}
			]
		},
		"updownleft":{
			versions:1,
			version:[
				{
					hasFlare:true,
					flareUsed:false,
					flare:{
						image:updownleft0_flare,
						map:{
							center:new Point(57,42),
							left:[new Point(13,68)],
							right:[],
							up:[new Point(68,11)],
							down:[new Point(72,69),new Point(66,124)]
						}
					},
					noFlare:{
						image:updownleft0,
						map:{
							center:new Point(57,42),
							left:[new Point(13,68)],
							right:[],
							up:[new Point(68,11)],
							down:[new Point(72,69),new Point(66,124)]
						}
					}
				}
			]
		},
		"rightdownleft":{
			versions:1,
			version:[
				{
					hasFlare:false,
					noFlare:{
						image:rightdownleft0,
						map:{
							center:new Point(97,72),
							left:[new Point(100,49),new Point(90,24),new Point(65,29),new Point(31,52),new Point(5,68)],
							right:[new Point(129,68)],
							up:[],
							down:[new Point(83,91),new Point(68,125)]
						}
					}
				}
			]
		},
		"uprightdownleft":{
			versions:1,
			version:[
				{
					hasFlare:false,
					noFlare:{
						image:uprightdownleft0,
						map:{
							center:new Point(66,68),
							left:[new Point(26,69)],
							right:[new Point(110,62)],
							up:[new Point(63,40),new Point(66,6)],
							down:[new Point(75,104),new Point(68,130)]
						}
					}
				}
			]
		}
	}
	
	
	this.getTile = function(code){
		
		var tileImg;
		var map;
		
		var chose = tileSpecs[code];
		var ver = Math.floor(chose.versions*Math.random());
	
		if (chose.version[ver].hasFlare && !chose.version[ver].flareUsed){
			if (Math.random() > Math.random()){
				tileImg = chose.version[ver].flare.image;
				map = chose.version[ver].flare.map;
				chose.version[ver].flareUsed = true;
				}
			else
				tileImg = chose.version[ver].noFlare.image;
				map = chose.version[ver].noFlare.map;
		}
		else{
			tileImg = chose.version[ver].noFlare.image;
			map = chose.version[ver].noFlare.map;
			}
		var theTile = new Tile(tileImg);
		theTile.version = ver;
		theTile.tileCode = code;
		theTile.map = cloneMap(map);
		return theTile;
		
	}
	
	function cloneMap(map){
		var ret = {
			center:map.center.clone(),
			left:[],
			right:[],
			up:[],
			down:[]
		}
		for (var i = 0; i < map.left.length;i++)
			ret.left[i] = map.left[i].clone();
		for (var i = 0; i < map.right.length;i++)
			ret.right[i] = map.right[i].clone();
		for (var i = 0; i < map.up.length;i++)
			ret.up[i] = map.up[i].clone();
		for (var i = 0; i < map.down.length;i++)
			ret.down[i] = map.down[i].clone();
			
		return ret;
	}
	
	this.reset = function(){
		tileSpecs = {
		"begin_bottom-left":{
			versions:1,
			version:[
				{
					hasFlare:false,
					noFlare:{
						image:begin_bottom,
						map:{
							center:new Point(75,75),
							left:[],
							right:[],
							up:[],
							down:[]
						}
					}
				}
			]
		},
		"begin_top-left":{
			versions:1,
			version:[
				{
					hasFlare:false,
					noFlare:{
						image:begin_topleft,
						map:{
							center:new Point(75,75),
							left:[],
							right:[],
							up:[],
							down:[]
						}
					}
				}
			]
		},
		"end_bottom-right":{
			versions:1,
			version:[
				{
					hasFlare:false,
					noFlare:{
						image:end_bottomright,
						map:{
							center:new Point(75,75),
							left:[],
							right:[],
							up:[],
							down:[]
						}
					}
				}
			]
		},
		"end_top-right":{
			versions:1,
			version:[
				{
					hasFlare:false,
					noFlare:{
						image:end_topright,
						map:{
							center:new Point(75,75),
							left:[],
							right:[],
							up:[],
							down:[]
						}
					}
				}
			]
		},
		"upright":{
			versions:1,
			version:[
				{
					hasFlare:false,
					noFlare:{
						image:upright0,
						map:{
							center:new Point(80,81),
							left:[],
							right:[new Point(108,79), new Point(132,67)],
							up:[new Point(60,60),new Point(66,10)],
							down:[]
						}
					}						
				}
			]
		},
		"updown":{
			versions:1,
			version:[
				{
					hasFlare:false,
					noFlare:{
						image:updown0,
						map:{
							center:new Point(86,66),
							left:[],
							right:[],
							up:[new Point(67,11)],
							down:[new Point(70,127)]
						}
					}
				}
			]
		},
		"upleft":{
			versions:1,
			version:[
				{
					hasFlare:false,
					noFlare:{
						image:upleft0,
						map:{
							center:new Point(104,93),
							left:[new Point(86,98),new Point(34,72),new Point(3,69)],
							right:[],
							up:[new Point(107,70),new Point(87,37),new Point(68,5)],
							down:[]
						}
					}
				}
			]
		},
		"rightdown":{
			versions:1,
			version:[
				{
					hasFlare:true,
					flareUsed:false,
					flare:{
						image:rightdown0_flare,
						map:{
							center:new Point(50,66),
							left:[],
							right:[new Point(108,62)],
							up:[],
							down:[new Point(51,112),new Point(67,130)]
						}
					},
					noFlare:{
						image:rightdown0,
						map:{
							center:new Point(50,66),
							left:[],
							right:[new Point(108,62)],
							up:[],
							down:[new Point(51,112),new Point(67,130)]
						}
					}
				}
			]
		},
		"rightleft":{
			versions:2,
			version:[
				{
					hasFlare:true,
					flareUsed:false,
					flare:{
						image:rightleft0_flare,
						map:{
							center:new Point(73,41),
							left:[new Point(7,67)],
							right:[new Point(131,68)],
							up:[],
							down:[]
						}
					},
					noFlare:{
						image:rightleft0,
						map:{
							center:new Point(73,41),
							left:[new Point(7,67)],
							right:[new Point(131,68)],
							up:[],
							down:[]
						}
					}
				},
				{
					hasFlare:true,
					flareUsed:false,
					flare:{
						image:rightleft1_flare,
						map:{
							center:new Point(75,90),
							left:[new Point(16,68)],
							right:[new Point(122,65)],
							up:[],
							down:[]
						}
					},
					noFlare:{
						image:rightleft1,
						map:{
							center:new Point(75,90),
							left:[new Point(16,68)],
							right:[new Point(122,65)],
							up:[],
							down:[]
						}
					}
				}
			]
		},
		"downleft":{
			versions:1,
			version:[
				{
					hasFlare:true,
					flareUsed:false,
					flare:{
						image:downleft0_flare,
						map:{
							center:new Point(106,40),
							left:[new Point(91,33),new Point(44,54),new Point(8,68)],
							right:[],
							up:[],
							down:[new Point(110,55),new Point(102,83),new Point(71,126)]
						}
					},
					noFlare:{
						image:downleft0,
						map:{
							center:new Point(106,40),
							left:[new Point(91,33),new Point(44,54),new Point(8,68)],
							right:[],
							up:[],
							down:[new Point(110,55),new Point(102,83),new Point(71,126)]
						}
					}
				}
			]
		},
		"uprightdown":{
			versions:1,
			version:[
				{
					hasFlare:false,
					noFlare:{
						image:uprightdown0,
						map:{
							center:new Point(78,45),
							left:[],
							right:[new Point(109,50), new Point(137,69)],
							up:[new Point(67,8)],
							down:[new Point(61,59),new Point(60,82),new Point(66,127)]
						}
					}
				}
			]
		},
		"uprightleft":{
			versions:2,
			version:[
				{
					hasFlare:false,
					noFlare:{
						image:uprightleft0,
						map:{
							center:new Point(87,60),
							left:[new Point(98,90),new Point(88,108),new Point(65,106),new Point(14,69)],
							right:[new Point(130,68)],
							up:[new Point(71,17)],
							down:[]
						}
					}
				},
				{
					hasFlare:false,
					noFlare:{
						image:uprightleft1,
						map:{
							center:new Point(89,57),
							left:[new Point(81,68),new Point(55,72),new Point(4,69)],
							right:[new Point(123,64)],
							up:[new Point(70,12)],
							down:[]
						}
					}
				}
			]
		},
		"updownleft":{
			versions:1,
			version:[
				{
					hasFlare:true,
					flareUsed:false,
					flare:{
						image:updownleft0_flare,
						map:{
							center:new Point(57,42),
							left:[new Point(13,68)],
							right:[],
							up:[new Point(68,11)],
							down:[new Point(72,69),new Point(66,124)]
						}
					},
					noFlare:{
						image:updownleft0,
						map:{
							center:new Point(57,42),
							left:[new Point(13,68)],
							right:[],
							up:[new Point(68,11)],
							down:[new Point(72,69),new Point(66,124)]
						}
					}
				}
			]
		},
		"rightdownleft":{
			versions:1,
			version:[
				{
					hasFlare:false,
					noFlare:{
						image:rightdownleft0,
						map:{
							center:new Point(97,72),
							left:[new Point(100,49),new Point(90,24),new Point(65,29),new Point(31,52),new Point(5,68)],
							right:[new Point(129,68)],
							up:[],
							down:[new Point(83,91),new Point(68,125)]
						}
					}
				}
			]
		},
		"uprightdownleft":{
			versions:1,
			version:[
				{
					hasFlare:false,
					noFlare:{
						image:uprightdownleft0,
						map:{
							center:new Point(66,68),
							left:[new Point(26,69)],
							right:[new Point(110,62)],
							up:[new Point(63,40),new Point(66,6)],
							down:[new Point(75,104),new Point(68,130)]
						}
					}
				}
			]
		}
	}
	}
	
	this.isLoaded = function(){
		return _total == _loaded;
	}
	
	function handleLoad(){
		_loaded++;
	}
}
































