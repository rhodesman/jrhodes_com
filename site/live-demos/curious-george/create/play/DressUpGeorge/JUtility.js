//JUtility.js

(function (window){
	function Button(){
		this.initialize();
		
		this.loaded = false;
		var active;
		var hover;
		var normal;
		var isActive = false;
		
		this.name;
		
		this.canBeActive = true;
		
		this.isActive = function(){return isActive;};
		
		this.over = function(){}
		this.out = function(){}

		this.load = function(norm,hov,act){
			active = act;
			hover = hov;
			normal = norm;
			this.addChild(active);
			this.addChild(hover);
			this.addChild(normal);
			
			active.visible = false;
			hover.visible = false;
			normal.visible = true;
		}
		
		this.deactivate = function(){
			
			active.visible = false;
			hover.visible = false;
			normal.visible = true;
			isActive = false;
		}
		
		this.activate = function(){
			if (this.canBeActive){
				active.visible = true;
				hover.visible = false;
				normal.visible = false;
				isActive = true;
			}
		}
		
		this.flipState = function(){
			if (isActive)
				this.deactivate();
			else
				this.activate();
		}
		
		this.onMouseOver = function(event){
			if (!isActive){
				active.visible = false;
				hover.visible = true;
				normal.visible = false;
			}
			document.body.style.cursor='pointer';
			this.over();
		}
		
		this.onMouseOut = function(event){
			if (!isActive){
				active.visible = false;
				hover.visible = false;
				normal.visible = true;
			}
			document.body.style.cursor='default';
			this.out();
		}
		
		this.onClick = function(e){
			this.flipState();
			this.action();
		}
		
		this.action = function(){};
	}
	
	Button.prototype = new Container();
	
	Button.prototype.Container_initialize = Button.prototype.initialize;
	
	Button.prototype.initialize = function(){
		this.Container_initialize();
		this.name = 'Button';
		this.snapToPixel = true;
	}
	
	window.Button = Button;
}(window));

//Create a clone of an array
function cloneArray(old){
	var young = new Array();
	for (var i = 0; i < old.length;i++)
		young[i] = old[i];
				
	return young;
}

//REQUIRE EASEL JS LIBRARY
function getDist(point1,point2){
	var a = Math.abs(point2.x - point1.x);
	var b = Math.abs(point2.y - point1.y);
	return Math.sqrt(a*a +b*b);
}

function getPathDist(points){

	var total = 0;
	for (var i = 0; i < points.length-1;i++){
		total += getDist(points[i],points[i+1]);
	}
	return total;
}

function alongPath(point1,point2,dist){

	var vect = new Point(point2.x-point1.x,point2.y-point1.y);
	var mag = getDist(new Point(0,0),vect);
	
	vect.x = dist*vect.x/mag;
	vect.y = dist*vect.y/mag;
	var ret = new Point(point1.x+vect.x,point1.y+vect.y);
	return ret;
	
}

function quickBlock(){
	var block = new Shape();
	block.graphics.beginFill("#000").drawRect(0,0,screen_width,screen_height);
	
	block.onClick = function(){};
	block.alpha = 0.01;
	stage.addChild(block);
	setTimeout(function(){stage.removeChild(block)},400);
}











