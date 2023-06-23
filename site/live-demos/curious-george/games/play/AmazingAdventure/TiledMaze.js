//TiledMaze.js


function TiledMaze(){
	
	var MAZE_WIDTH = 6;
	var MAZE_HEIGHT = 3;
	var TILE_SIZE = 150;
	
	//directions
	var NORTH = "N";
	var SOUTH = "S";
	var EAST = "E";
	var WEST = "W";
	
	var ALPHA = ["ABCDE","FGHIJ","KLMNOP","QRSTU","VWXYZ"];	
	var usedAlpha = ["","","","",""]
	var _reactLetters;
	
	//variables
	var _width;
	var _height;
	var _segment;
	var _maze;
	var _mazeTiles;
	var _moves;
	var _start = new Point(0,0);
	var _end = new Point(0,0);
	var _route = new Array();
	var _altRoutes;
	var _letters = new Array();
	var _currentLetter;
	var _letPaths;
	var _maps;
	
	var _bg;
	var _newMazeButton;
	var _howToPlayButton;
	var _rat;
	var _cheese;
	var _container;
	
	this.rat = function(){return _rat;}
	this.cheeseCode = function(){
		if (_cheese)
			return _cheese.image.prize;
		else return false;
	}
	
	
	var tilesToLoad = 0;
	var tilesLoaded = 0;
	var rewardEarned = false;
	var needsRebuild = false;
	var imagesAdded = false;
	this.imagesAdded = function(){return imagesAdded;}
	var drawComplete = false;
	this.drawComplete = function(){return drawComplete;}
	this.x = 0;
	this.y = 50;
	
	var doublebuild = true;
	
	//MAZE UTILITY FUNCTIONS
	
	
	//MAZE CREATION FUNCTIONS
	this.build = function(){
	
		
		_width = MAZE_WIDTH *2 + 1;
		_height = MAZE_HEIGHT * 2 + 1;
		tilesToLoad = MAZE_WIDTH*MAZE_HEIGHT;
		tilesLoaded = 0;
		
		//var startY = Math.floor(MAZE_HEIGHT*Math.random()) * 2 + 1;
		_start.x = 1;
		_start.y = (MAZE_HEIGHT-1)*2+1;
		
		_end.x = MAZE_WIDTH-1;
		_end.y = Math.floor(2*Math.random())*(MAZE_HEIGHT-1);
		
		_letPaths = new Array();
		_maps = new Array();
		_letters = new Array();
		_altRoutes = new Array();
		_reactLetters = new Array();
		
		rewardEarned = false;
		imagesAdded = false;
		needsRebuild = false;
		drawComplete = false;
		
		this.generate();
	}
	
	this.generate = function(){
		
		initMaze();
		createMaze();
		loadMaze();
	}
	
	//INITIALIZE MAZE TILE ARRAYS
	initMaze = function(){
		_maze = new Array();
		
		for (var x = 0; x < _width; x++){
			_maze[x] = new Array();
			
			for (var y = 0; y < _height; y++){
				_maze[x][y] = true;
			}
		}
		
		_maze[_start.x][_start.y] = false;
	}
	

	//CREATE INITIAL RANDOMIZED MAZE LAYOUT
	createMaze = function(){
		var back;
		var move;
		var possibleDirections;
		var pos = new Point();
		pos.x = _start.x;
		pos.y = _start.y;
		
		_moves = new Array();
		_moves.push(pos.y + (pos.x * _width));
		
		while ( _moves.length )
		{
				possibleDirections = "";
				
				if ((pos.x + 2 < _width ) && (_maze[pos.x + 2][pos.y] == true) && (pos.x + 2 != false) && (pos.x + 2 != _width - 1) )
				{
					possibleDirections += SOUTH;
				}
				
				
				if ((pos.x - 2 >= 0 ) && (_maze[pos.x - 2][pos.y] == true) && (pos.x - 2 != false) && (pos.x - 2 != _width - 1) )
				{
					possibleDirections += NORTH;
				}
				
				if (((pos.y - 2) >= 0 ) && (_maze[pos.x][pos.y - 2] == true) && (pos.y - 2 != false) && (pos.y - 2 != _height - 1) )
				{
					possibleDirections += WEST;
				}
				
				if ((pos.y + 2 < _height ) && (_maze[pos.x][pos.y + 2] == true) && (pos.y + 2 != false) && (pos.y + 2 != _height - 1) )
				{
					possibleDirections += EAST;
				}
				
				if ( possibleDirections.length > 0 )
				{
					var randInt = Math.floor(Math.random()*(possibleDirections.length));
					move = randInt;
					
					switch ( possibleDirections.charAt(move) )
					{
						case NORTH: 
							_maze[pos.x - 2][pos.y] = false;
							_maze[pos.x - 1][pos.y] = false;
							pos.x -=2;
							break;
						
						case SOUTH: 
							_maze[pos.x + 2][pos.y] = false;
							_maze[pos.x + 1][pos.y] = false;
							pos.x +=2;
							break;
						
						case WEST: 
							_maze[pos.x][pos.y - 2] = false;
							_maze[pos.x][pos.y - 1] = false;
							pos.y -=2;
							break;
						
						case EAST: 
							_maze[pos.x][pos.y + 2] = false;
							_maze[pos.x][pos.y + 1] = false;
							pos.y +=2;
							break;        
					}
					
					_moves.push(pos.y + (pos.x * _height));
				}
				else
				{
					back = _moves.pop();
					pos.x = Math.floor(back / _height);
					pos.y = back % _height;
				}
		}
	}
	
	//ADJUST MAZE LAYOUT AND FINALIZE PATH AND IMAGES
	loadMaze = function(){
		
		if (_container){
			_container.removeAllChildren();
			stage.removeChild(_container);
			}
		_container = new Container();
		stage.addChild(_container);
		//_container.onDoubleClick = mazeClickHandle;
		
		_mazeTiles = new Array(MAZE_WIDTH);
		
		//GENERATE THE MAZE PATHS
		for ( var x = 0; x < MAZE_WIDTH; x++){
			_mazeTiles[x] = new Array(MAZE_HEIGHT);
			for (var y = 0; y < MAZE_HEIGHT; y++){
				
				loadTile(x,y);
			}
		}
		
		fixMaze();
		mapRoute();
		if(!needsRebuild){
		trimMap();
		buildPaths();
		}
		
	}
	
	//Generate basic ProtoTiles
	loadTile = function(tileX,tileY){
		
		var up = false;
		var right = false;
		var down = false;
		var left = false;
		var num = 0;
		
		var pTile = new ProtoTile(tileX,tileY);
		
		if (_maze[tileX*2+1][tileY*2] == false){
			pTile.up = true;
		}
		if (_maze[tileX*2+2][tileY*2+1] == false){
			pTile.right = true;
		}
		if (_maze[tileX*2+1][tileY*2+2] == false){
			pTile.down = true;
		}
		if (_maze[tileX*2][tileY*2+1] == false){
			pTile.left = true;
		}
		_mazeTiles[tileX][tileY] = pTile;
	}
	
	//Eliminate dead ends and encourage loops
	function fixMaze(){
		for ( var x = 0; x < MAZE_WIDTH; x++){
			for (var y = 0; y < MAZE_HEIGHT; y++){
				
				//Encourage loops by expanding 1/5 2 connection tiles
				if (_mazeTiles[x][y].num() == 2 && !((x == 0 || x == MAZE_WIDTH-1)&&(y ==0 || y == MAZE_HEIGHT-1))){
					var rand = Math.floor(5*Math.random());
					if (rand == 0){
						while (_mazeTiles[x][y].num() == 2){
							var add = Math.floor(4*Math.random());
					
							switch(add){
								case 0:
									if (!_mazeTiles[x][y].up && y != 0){
										_mazeTiles[x][y].up = true;
										_mazeTiles[x][y-1].down = true;
									}
									break;
								case 1:
									if (!_mazeTiles[x][y].right && x != MAZE_WIDTH-1){
										_mazeTiles[x][y].right = true;
										_mazeTiles[x+1][y].left = true;
									}
									break;
								case 2:
									if (!_mazeTiles[x][y].down && y != MAZE_HEIGHT-1 ){
										_mazeTiles[x][y].down = true;
										_mazeTiles[x][y+1].up = true;
									}
									break;
								case 3:
									if (!_mazeTiles[x][y].left && x != 0){
										_mazeTiles[x][y].left = true;
										_mazeTiles[x-1][y].right = true;
									}
									break;
							}
						}
					}
				}
				
				//eliminate dead ends
				while (_mazeTiles[x][y].num() == 1){
					var add = Math.floor(4*Math.random());
					
					switch(add){
						case 0:
							if (!_mazeTiles[x][y].up && y != 0){
								_mazeTiles[x][y].up = true;
								_mazeTiles[x][y-1].down = true;
							}
							break;
						case 1:
							if (!_mazeTiles[x][y].right && x != MAZE_WIDTH-1){
								_mazeTiles[x][y].right = true;
								_mazeTiles[x+1][y].left = true;
							}
							break;
						case 2:
							if (!_mazeTiles[x][y].down && y != MAZE_HEIGHT-1 ){
								_mazeTiles[x][y].down = true;
								_mazeTiles[x][y+1].up = true;
							}
							break;
						case 3:
							if (!_mazeTiles[x][y].left && x != 0){
								_mazeTiles[x][y].left = true;
								_mazeTiles[x-1][y].right = true;
							}
							break;
					}
				}
			}
		}
	}
	
	function mapRoute(){
	
		var posRoutes = new Array();
		var tryRoute = new Array();
		var begin = _mazeTiles[0][2];
		
		posRoutes = checkAllRoutes(tryRoute,begin);
		
		if (posRoutes.length == 0){
			needsRebuild = true;
			drawComplete = true;
			}
		else{
			var choice = Math.floor(posRoutes.length*Math.random());
			_route = posRoutes[choice];
			drawComplete = true;
			getReactLetters();
		}
		
		//Recursively checks for viable routes
		function checkAllRoutes(cRoute,nPoint){
		
			//If this route circles back on itself return nothing	
			var routes = new Array();
			var loc = nPoint.location;
			if (cRoute.indexOf(loc)!= -1 || cRoute.length > 9)
				return routes;
				
			cRoute.push(loc);
			
			//If it is a complete route return it
			if (nPoint == _mazeTiles[_end.x][_end.y] ){
				if (cRoute.length >= 9)
					routes.push(cRoute);
				return routes;
			}
			
			//recursively generate an array of branching paths
			//up
			if (nPoint.up){
				var upClone = cloneArray(cRoute);
				var uPoint = _mazeTiles[loc.x][loc.y-1];
				var upRoutes = checkAllRoutes(upClone,uPoint);
				for (var i = 0; i < upRoutes.length;i++){
					routes.push(upRoutes[i]);
				}
			}
			
			//right
			if (nPoint.right){
				var rightClone = cloneArray(cRoute);
				var rPoint = _mazeTiles[loc.x+1][loc.y];
				var rightRoutes = checkAllRoutes(rightClone,rPoint);
				for (var i = 0; i < rightRoutes.length;i++){
					routes.push(rightRoutes[i]);
				}
			}
			
			//down
			if (nPoint.down){
				var downClone = cloneArray(cRoute);
				var dPoint = _mazeTiles[loc.x][loc.y+1];
				var downRoutes = checkAllRoutes(downClone,dPoint);
				for (var i = 0; i < downRoutes.length;i++){
					routes.push(downRoutes[i]);
				}
			}
			
			//left
			if (nPoint.left){
				var leftClone = cloneArray(cRoute);
				var lPoint = _mazeTiles[loc.x-1][loc.y];
				var leftRoutes = checkAllRoutes(leftClone,lPoint);
				for (var i = 0; i < leftRoutes.length;i++){
					routes.push(leftRoutes[i]);
				}
			}
			
			return routes;
		}
	}
	
	function getReactLetters(){
		
		for (var i = 0; i < ALPHA.length;i++){
			var chLet = ALPHA[i].charAt(Math.floor(ALPHA[i].length*Math.random()));
			while (usedAlpha[i].indexOf(chLet) != -1){
				chLet = ALPHA[i].charAt(Math.floor(ALPHA[i].length*Math.random()));
			}
			_reactLetters.push(chLet);
			usedAlpha[i] += chLet;
		}
		
		if (usedAlpha[0].length == 5){
			var chLet = ALPHA[2].charAt(Math.floor(ALPHA[2].length*Math.random()));
			while (usedAlpha[2].indexOf(chLet) != -1){
				chLet = ALPHA[2].charAt(Math.floor(ALPHA[2].length*Math.random()));
			}
			_reactLetters.push(chLet);
			
			for (var i = 0; i < usedAlpha.length; i++){
				usedAlpha[i] = "";
			}
		}
	}
	
	function trimMap(){
		for (var i = 0; i < _route.length;i++){
			var p = _route[i];
			_mazeTiles[p.x][p.y].inRoute = true;
		}
		if(_route.length >1){
			if (_route[1].x == 1){
				_mazeTiles[0][1].down = false;
				_mazeTiles[0][2].up = false;
				
				_mazeTiles[0][1].up = true;
				_mazeTiles[0][1].right = true;
				_mazeTiles[0][0].down = true;
				_mazeTiles[1][1].left = true;
			}
			
			if (_route[1].x == 0){
				_mazeTiles[1][2].left = false;
				_mazeTiles[0][2].right = false;
				
				_mazeTiles[1][2].up = true;
				_mazeTiles[1][2].right = true;
				_mazeTiles[2][2].left = true;
				_mazeTiles[1][1].down = true;
			}
		
		
		if (_route[_route.length-2].x == MAZE_WIDTH-1){
			_mazeTiles[MAZE_WIDTH-2][_end.y].right = false;
			_mazeTiles[_end.x][_end.y].left = false;
			_mazeTiles[MAZE_WIDTH-2][_end.y].left = true;
			_mazeTiles[MAZE_WIDTH-3][_end.y].right = true;
			if (_end.y == 0){
				_mazeTiles[MAZE_WIDTH-2][_end.y].down = true;
				_mazeTiles[MAZE_WIDTH-2][_end.y+1].up = true;
			}
			else{
				_mazeTiles[MAZE_WIDTH-2][_end.y].up = true;
				_mazeTiles[MAZE_WIDTH-2][_end.y-1].down = true;
			}
		}
		else{
			_mazeTiles[_end.x][1].left = true;
			_mazeTiles[MAZE_WIDTH-2][1].right = true;
			if (_end.y == 0){
				_mazeTiles[_end.x][_end.y].down = false;
				_mazeTiles[_end.x][1].up = false;
				_mazeTiles[_end.x][1].down = true;
				_mazeTiles[_end.x][MAZE_HEIGHT-1].up = true;
			}
			else{
				_mazeTiles[_end.x][_end.y].up = false;
				_mazeTiles[_end.x][1].down = false;
				_mazeTiles[_end.x][1].up = true;
				_mazeTiles[_end.x][0].down = true;
			}
		} 
		}
	}
	
	function buildPaths(){
		
		var main = new Array();
		for (var i = 1; i < _route.length-1;i++ ){
			if (_route[i].x > _route[i-1].x)
				main.push("left");
			if (_route[i].x < _route[i-1].x)
				main.push ("right");
			if (_route[i].y > _route[i-1].y)
				main.push("up");
			if (_route[i].y < _route[i-1].y)
				main.push ("down");
			
			main.push("center");
			
			if (_route[i+1].x > _route[i].x)
				main.push("right");
			if (_route[i+1].x < _route[i].x)
				main.push ("left");
			if (_route[i+1].y > _route[i].y)
				main.push("down");
			if (_route[i+1].y < _route[i].y)
				main.push ("up");
		}
		
		_letPaths.push(main);
		
	}
	
	function drawTile(tileX,tileY){
	
				var code = "";
				if (_mazeTiles[tileX][tileY].up)
					code += "up";
				if (_mazeTiles[tileX][tileY].right)
					code+= "right";
				if (_mazeTiles[tileX][tileY].down)
					code+= "down";
				if (_mazeTiles[tileX][tileY].left)
					code+="left";
				if (tileX == 0 && tileY == 2){
					code = "begin_bottom-left";
					if (_mazeTiles[tileX][tileY].up)
						code+="-up";
					else
						code +="-right";
				}
				if (tileX == _end.x && tileY == _end.y){
					if (_end.y == 0)
						code = "end_top-right"
					else
						code = "end_bottom-right"
					if (_mazeTiles[tileX][tileY].up)
						code+= "-up";
					else if (_mazeTiles[tileX][tileY].down)
						code+= "-down";
					else
						code+= "-left";
				}
				
				var tile = repo.tiles.getTile(code);
				
				tile.x = tileX*TILE_SIZE;
				tile.y = tileY*TILE_SIZE;
				tile.fromProto(_mazeTiles[tileX][tileY]);
				_mazeTiles[tileX][tileY] = tile;
	}
	
	this.addImages = function(){
	
		stage.removeAllChildren();
		imagesAdded = true;
		_bg = new Bitmap(repo.bg);
		
	
		_newMazeButton = repo.getButton("newMaze");
		_newMazeButton.x = 670;
		_newMazeButton.y = -5;
		_newMazeButton.scaleX = 0.8;
		_newMazeButton.scaleY = 0.8;
		_newMazeButton.over = function(){sRepo.play("newMaze");}
		
		_howToPlayButton = repo.getButton("howToPlay");
		_howToPlayButton.x = screen_width - 82;
		_howToPlayButton.y = 0;
		_howToPlayButton.action = howToPlayClicked;
		
		for (var a = 0; a < MAZE_WIDTH;a++){
			for (var b = 0; b < MAZE_HEIGHT;b++){
				drawTile(a,b);
			}
		}
		
		//BUILD THE LETTER MAP FOR THE MAIN LETTER PATH
		_maps[0] = buildMap(_route,_letPaths[0]);
		_segment = getPathDist(_maps[0])/27;
		
		findAltPaths(1);
		
		repo.tiles.reset();
		_cheese  = new Bitmap(repo.getReward());
		_cheese.x = _end.x*TILE_SIZE +50;
		_cheese.y = _end.y*TILE_SIZE +50;
		_cheese.onClick = rewardListener;
		
		_rat = repo.getRat();
		_rat.x = 50;
		_rat.y = (MAZE_HEIGHT-1)*TILE_SIZE +80;
		_rat.pos().x = 50;
		_rat.pos().y = (MAZE_HEIGHT-1)*TILE_SIZE+30;
		
		
		placeLetters(_maps[0],false,26);
		for (var i = 1; i < _maps.length;i++){
			var d = getPathDist(_maps[i]);
			var len = Math.floor(d/_segment + 0.6);
			placeLetters(_maps[i],true,len);
		}
		_currentLetter = _letters[0];
		
		noDupes();
		noDupes();
		
		for ( var x = 0; x < MAZE_WIDTH; x++){
			for (var y = 0; y < MAZE_HEIGHT; y++){
				_container.addChild(_mazeTiles[x][y]);
				_mazeTiles[x][y].cache(0,0,150,150);
			}	
		}
			
		for (var i = 0; i < _letters.length;i++){
			_container.addChild(_letters[i]);
		}

			
		_container.addChild(_cheese);
		
		stage.addChild(_bg);
		stage.addChild(_container);
		stage.addChild(_newMazeButton);
		stage.addChild(_howToPlayButton);
		stage.addChild(_rat);
		_rat.gotoAndStop("toWalkF");
		
		_container.x = this.x;
		_container.y = this.y;
					
	}
	
	function placeLetters(map,rand,num){
		
		var to = 1;
		var at = map[0].clone();
		var remaining = 0;
		
		if (num && num < 100) 
		for (var i = 0; i < num; i++){
			var check = 0;
			while (remaining > 0 && check <100){
				check++;
				var dist = getDist(at,map[to]);
				if (dist < remaining){
					at = map[to].clone();
					to++;
				}
				else{
					at = alongPath(at,map[to],remaining);
				}
				remaining -= dist;
			}
			var let;
			if (!rand)
				let = repo.getLetter(i);
			else
				let = repo.getLetter(Math.floor(Math.random()*26));
			let.x = at.x;
			let.y = at.y;
			let.decoy = rand;
			let.index = _letters.length;
			let.nextIndex = let.index+1;
			if (let.index == 25)
				let.nextIndex = -1;
			let.onMouseOver = function(e){
				this.scaleX = 1.5;
				this.x -= 5;
				this.scaleY = 1.5;
				this.y -= 5;
			}
			let.onMouseOut = function(e){
				this.scaleX = 1.0;
				this.x += 5;
				this.scaleY = 1.0;
				this.y += 5;
			}
			let.onClick = letterClickHandler;
			_letters.push(let);
			remaining = _segment;
		}
	}
	
	function noDupes(){
	
		for (var i = 0; i < 26;i++){
		
			var main = new Point(_letters[i].x,_letters[i].y);
			
			for (var j = 26; j < _letters.length;j++){
				var sec = new Point(_letters[j].x,_letters[j].y);
				if (_letters[i].code == _letters[j].code && getDist(main,sec) < _segment*3){
					repo.changeLetter(_letters[j]);
				}
			}
		}
	}
	
	function buildMap(route, path){
		
		var built = new Array();
		
		
		for (var i = 0; i < route.length-2; i++){
			
			var tile = _mazeTiles[route[i+1].x][route[i+1].y];
			var enter = tile.map[path[i*3]];
			
			var center = tile.map.center.clone();
			
			var exit = tile.map[path[i*3+2]];
			
			while(enter.length > 0){
				var next = enter.pop().clone();
				next.x += tile.x;
				next.y += tile.y;
				built.push(next);
			}
			center.x += tile.x;
			center.y += tile.y;
			built.push(center);
			while (exit.length > 0){
				var next = exit.shift().clone();
				next.x += tile.x;
				next.y += tile.y;
				built.push(next);
			}
		}
		var last = _mazeTiles[_end.x][_end.y].map.center.clone();
		
		last.x += _mazeTiles[_end.x][_end.y].x;
		last.y += _mazeTiles[_end.x][_end.y].y;
		built.push(last);
		return built;
	}
	
	function findAltPaths(t){
		
		var current;
		var point;
		var altPaths = new Array();
		
		var traverse = new Array();
		
		for (var i = 0; i < MAZE_WIDTH;i++){
			for (var j = 0; j < MAZE_HEIGHT;j++){
				traverse.push(new Point(i,j));
			}
		}
		
		if (t < _route.length-1){
			point = _route[t].clone();
		}
		else{
			point = traverse[t-(_route.length-1)].clone();
		}
		current = _mazeTiles[point.x][point.y];
		
	
		
		if (current.map.up.length > 0)
			altPaths.push(buildAltPath(point,"up",t));
		else if (current.map.right.length > 0)
			altPaths.push(buildAltPath(point,"right",t));
		else if (current.map.down.length > 0)
			altPaths.push(buildAltPath(point,"down",t));
		else if (current.map.left.length > 0)
			altPaths.push(buildAltPath(point,"left",t));
		else if(t < (_route.length-1 + traverse.length-1))
			findAltPaths(t+1);
	}
	
	
	function buildAltPath(point,dir,t){
		
		var building = true;
		var letPath = new Array();
		while (building){
			tile = _mazeTiles[point.x][point.y];
			while(tile.map[dir].length > 0){
				var np = tile.map[dir].shift();
				np.x += tile.x;
				np.y += tile.y;
				letPath.push(np);
			}
			if (dir == "up"){
				point.y--;
				dir = "down"
			}
			else if (dir == "down"){
				point.y++;
				dir = "up"
			}
			else if (dir == "right"){
				point.x++;
				dir = "left"
			}
			else if (dir == "left"){
				point.x--;
				dir = "right"
			}
			
			tile = _mazeTiles[point.x][point.y];
			
			while(tile.map[dir].length > 0){
				var np = tile.map[dir].pop();
				np.x += tile.x;
				np.y += tile.y;
				letPath.push(np);
			}
			var c = tile.map.center.clone();
			c.x += tile.x;
			c.y += tile.y;
			letPath.push(c);
			
			var choices = "";
			
			if (tile.map.up.length > 0)
				choices += "U";
			if (tile.map.right.length > 0)
				choices += "R";
			if (tile.map.down.length > 0)
				choices += "D";
			if (tile.map.left.length > 0)
				choices += "L";
				
			if (choices.length == 0 || tile.inRoute){
				building = false;
			}
			else {
				switch(choices.charAt(Math.floor(choices.length*Math.random()))){
					case "U":
						dir = "up";
						break;
					case "R":
						dir = "right";
						break;
					case "D":
						dir = "down";
						break;
					case "L":
						dir = "left";
						break;
				}
			}
		}
		_maps.push(letPath);
		findAltPaths(t);
	}
	//LISTENERS	
	function mazeClickHandle(event){
		maze.build();
	}
	
	function howToPlayClicked(event){
		sRepo.play("help",true);
		if((isMobile)){
			var aud = new Audio();
			aud.src = AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_Introduction_VO_1_12"+SUFFIX;
	
			aud.play();	
		}
	}
	
	function letterClickHandler(event){
	
		sRepo.play("spoken"+this.character,true);
		
		if((isMobile)&& this == _currentLetter){
			var aud = new Audio();
			if (_reactLetters.indexOf(this.character)!=-1){
				var str = sRepo.soundSrc(this.code)
				aud.src = str.substr(0,str.indexOf("."))+SUFFIX;
			}
			else
				aud.src = AUDIO_PATH+"spoken"+this.character+SUFFIX;
			aud.play();
		}
		if (this != _currentLetter){
			
			if (this.code == _currentLetter.code)
				setTimeout(function() {sRepo.play("rightLetterWrong");},1000);
			else
				setTimeout(function() {sRepo.playWrong();},1000);
			setTimeout(function() {sRepo.wrongChitter();},1300);
			
			if(isMobile){
				var aud = new Audio();
				if (this.code == _currentLetter.code){
					aud.src = AUDIO_PATH+"rightLetterWrong"+SUFFIX;
				}
				else if (Math.random() > Math.random())
					aud.src = AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_Feedback_VO_1_24-1"+SUFFIX;
				else
					aud.src = AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_Feedback_VO_1_22-2"+SUFFIX;
				
				aud.play();
			}
				
			repo.changeColor(this);
			this.onMouseOver = function(){};
			if(!(isMobile))
				this.onMouseOut();
			this.onMouseOut = function(){};
			this.onClick = function(){};
		}
			
		if (this == _currentLetter){
			_rat.moving = false;
			
			if(_letters[this.nextIndex] && _letters[this.nextIndex].y + 21 > this.y - 37 && Math.abs(this.x - _letters[this.nextIndex].x) < 30){
				_rat.pos().y = this.y - 15;
				}
			else {_rat.pos().y = this.y - 25;
			}
			_rat.pos().x = this.x;
			
			if (Math.random()>Math.random()&&Math.random()>Math.random())
				sRepo.goodChitter();
			if (_reactLetters.indexOf(this.character)!=-1){
				var c = this.character;
				setTimeout(function() {sRepo.playLetter(c);},1000);
				repo.getReaction(this.code);
				}
			else if (this.code == 25){
				if (Math.random()>Math.random())
					setTimeout(function(){sRepo.play("keepGoing0");},600);
				else
					setTimeout(function(){sRepo.play("keepGoing1");},600);
					
				if (isMobile){
					var aud = new Audio();
					aud.src = AUDIO_PATH+"keepGoing1"+SUFFIX;
					aud.play();
				}
			}
			repo.turnGold(this);
			
			for (var i = this.code+1; i < _letters.length; i++){
				var let = _letters[i]
				if (let.red)
					repo.changeColor(let);
				let.onMouseOver = function(e){
					this.scaleX = 1.5;
					this.x -= 5;
					this.scaleY = 1.5;
					this.y -= 5;
				}
				let.onMouseOut = function(e){
					this.scaleX = 1.0;
					this.x += 5;
					this.scaleY = 1.0;
					this.y += 5;
				}
				let.onClick = letterClickHandler;
			}
			
			if (this.nextIndex != -1)
				_currentLetter = _letters[this.nextIndex];
			else
				rewardEarned = true;
		}
	}
	
	function rewardListener(event){
		if (rewardEarned){
			_rat.pos().x = this.x;
			_rat.pos().y = this.y - 25;
			Tween.get(this).to({alpha:0},300,Ease.linear);
			setTimeout(function() {_container.removeChild(_cheese);},300);
			sRepo.playPayoff();
			if(isMobile){
				var aud = new Audio();
				var str = AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_EndOfGame_VO_1_";
				switch (Math.floor(4*Math.random())){
					case 0:
						str += "02";
						break;
					case 1:
						str += "05-2";
						break;
					case 2:
						str += "07";
						break;
					case 3:
						str += "10-2";
						break;
				}
				aud.src = str+SUFFIX;
				aud.play();
			}
			setTimeout(function(){
				var cel = repo.celebrate();
				for (var i = 0; i < _letters.length; i++){
					if (!_letters[i].gold)
						Tween.get(_letters[i]).to({alpha:0},500,Ease.linear)
				}
				Tween.get(_newMazeButton).to({alpha:0},300);
				sRepo.rewardChitter();
				cel.x = _rat.x;
				cel.y = _rat.y - 50;
				stage.removeChild(_rat);
				_container.addChild(cel);
				cel.gotoAndPlay("go");
			},500);
			//alert ("This is where a celebratory \nanimation and audio will appear");
			addPlay();
			
			
			//maze.build();
		}
	}
	
	function addPlay(){
	
		var g = new Graphics();
		g.beginFill(Graphics.getRGB(200,200,200));
		g.drawRect(0,0,screen_width,screen_height);
		var back = new Shape(g);
		back.alpha = 0.4;
		back.onClick = function(event){};
		
		var again = new Container();
		again.addChild(back);
		
		var playBut = repo.getButton("play");
		playBut.x = 700;
		playBut.y = 375;
		playBut.action = function(event){
			maze.build();
			sRepo.introChitter();
			stage.removeChild(again)
		}
		playBut.over = function(){
			sRepo.play("play");
		}
		again.addChild(playBut);
		setTimeout(function(){
			sRepo.play("toPlayAgain",true);
			again.alpha = 0;
			stage.addChild(again);
			Tween.get(again).to({alpha:1},500);
			
		},6000);
	}
	
	
	this.tick = function(){
		if(needsRebuild){
			maze.build();
		}
		else if (doublebuild){
			setTimeout(function(){
				stage.removeChild(_rat);
				_rat = repo.getRat();
				_rat.x = 50;
				_rat.y = (MAZE_HEIGHT-1)*TILE_SIZE +80;
				_rat.pos().x = 50;
				_rat.pos().y = (MAZE_HEIGHT-1)*TILE_SIZE+30;
				stage.addChild(_rat);
				_rat.gotoAndStop("toWalkF");
			},100);
			doublebuild = false;
		}
		return true;
	}
	

}

function ProtoTile(x,y){

		this.up = false;
		this.right = false;
		this.down = false; 
		this.left = false;
		this.num = function(){
			var count = 0;
			if (this.up)
				count++;
			if (this.right)
				count++;
			if (this.down)
				count++;
			if (this.left)
				count++;
				
			return count;
		}
		
		this.inRoute = false;
		
		this.location = new Point(x,y);
}


(function (window){
	function Tile(image){
		this.initialize(image);
		
		this.up = false;
		this.right = false;
		this.down = false; 
		this.left = false;
		
		this.num = function(){
			var count = 0;
			if (this.up)
				count++;
			if (this.right)
				count++;
			if (this.down)
				count++;
			if (this.left)
				count++;
				
			return count;
		}
		this.inRoute = false;
		
		this.tileCode = "";
		this.version = 0;
		this.map;
		
		this.fromProto = function(old){
			this.up = old.up;
			this.right = old.right;
			this.down = old.down;
			this.left = old.left;
			this.inRoute = old.inRoute;
		}
	}
	Tile.prototype = new Bitmap();
	
	Tile.prototype.Bitmap_initialize = Tile.prototype.initialize;
	
	Tile.prototype.initialize = function(image){
		this.Bitmap_initialize(image);
		this.name = 'Tile';
		this.snapToPixel = true;
	}
	window.Tile = Tile;
}(window));

(function (window){
	function Rat(image){
		this.initialize(image);
		
		var maxSpeed = 2;
		var minSpeed = 1;
		
		this.moving = false;
		this.direction = 0;
		this.sequence = "walk"
		var pos = new Point(this.x,this.y);
		
		this.pos = function (){return pos};
		
		this.onTick = function(){
			if ((Math.abs(pos.x-this.x) >= 2 ||Math.abs(pos.y+50-this.y) >= 2)&& !this.moving){
				this.moving = true;
				if (Math.abs(pos.x-this.x) > Math.abs(pos.y+50-this.y)){
					if(pos.x - this.x > 0)
						this.sequence = "toWalkR";
					else
						this.sequence = "toWalkL";
				}
				else{
					if(pos.y+50 - this.y > 0)
						this.sequence = "toWalkF";
					else
						this.sequence = "toWalkB";
				}
				this.gotoAndPlay(this.sequence);
			}
			if ((Math.abs(pos.x-this.x) < 2 &&Math.abs(pos.y+50-this.y) < 2)&& this.moving){
				this.moving = false;
				this.gotoAndStop(this.sequence);
				this.x = pos.x;
				this.y = pos.y +50;
			}
			
			var cx = (pos.x - this.x)*0.10
			var cy = (pos.y+50 - this.y)*0.10
			
			if (cx > maxSpeed) cx = maxSpeed;
			if (cy > maxSpeed) cy = maxSpeed;
			
			this.x += cx;
			this.y += cy;
		}

	}
	Rat.prototype = new BitmapAnimation();
	
	Rat.prototype.BitmapAnimation_initialize = Rat.prototype.initialize;
	
	Rat.prototype.initialize = function(image){
		this.BitmapAnimation_initialize(image);
		this.name = 'Rat';
		this.snapToPixel = true;
	}
	
	window.Rat = Rat;
}(window));

(function (window){
	function Letter(image){
		this.initialize(image);
		
		this.code = 0;
		this.red = false;
		this.gold = false;
		this.index = 0;
		this.character;
		this.nextIndex;
		this.decoy = false;
		
		var hit = new Shape();
		hit.graphics.beginFill("#000").drawRect(-10,-10,40,40);
		this.hitArea = hit;
	}
	Letter.prototype = new Bitmap();
	
	Letter.prototype.Bitmap_initialize = Letter.prototype.initialize;
	
	Letter.prototype.initialize = function(image){
		this.Bitmap_initialize(image);
		this.name = 'Letter';
		this.snapToPixel = true;
	}
	window.Letter = Letter;
}(window));




