var SELECTED_TOOL = null;

var GO_TO_MUSEUM = 0;

var LAZY_COUNTER = 0;

var DiggingScene = cc.Layer.extend({
	winsize: null,
	shovelBtn: null,
	brushBtn: null,
	helpBtn: null,
	skipBtn: null,
	helpSnd: null,
	isShovelSelected: null,
	isBrushSelected: null,
	skipped: false,
	digTool: null,
//	currentSound: null,
	currentStep: 1,
	bonesToDig: 0,
	discoveredBones: 0,
	rightTool: true,
	doneDigging: false,
	doneShoveling: false,
	doneBrushing: false,
	lazy: 1,
	lazyInit: false,
	skipGo: 50,
	faceCount: 0,
	georgeState: null,
	init:function () {

		CURRENT_LEVEL++;

		if(CURRENT_LEVEL > 1) {
			this.skipped = true;
			this.schedule(this.loop, 20);
		}

        this._super();
		var size = cc.Director.sharedDirector().getWinSize();
		this.winsize = size;

        this.setIsTouchEnabled(true);

		this.helpSnd = "FG_FD_002";

		var toolsBg = cc.Sprite.create('resources/images/bg_tools.png');
		toolsBg.setAnchorPoint(cc.ccp(0,0));
		toolsBg.setPosition(cc.ccp(0,0));
		this.addChild(toolsBg, 3);

		var georgeState = cc.Sprite.create('resources/images/sprite_george.png');
		georgeState.setAnchorPoint(cc.ccp(0,0));
		georgeState.setPosition(cc.ccp(0,0));
		georgeState.setTextureRect(cc.RectMake(0,0,200,245));
		this.addChild(georgeState, 4);

		this.georgeState = georgeState;

		var diggingBg = cc.Sprite.create('resources/images/bg_rocks.jpg');
		diggingBg.setAnchorPoint(cc.ccp(0,0));
		diggingBg.setPosition(cc.ccp(0,0));
		this.addChild(diggingBg, 1);

		var skipBtn = cc.Sprite.create('resources/images/btn_skip.png');
		skipBtn.setAnchorPoint(cc.ccp(0,0));
		skipBtn.setPosition(cc.ccp(700,15));
		skipBtn.setTextureRect(cc.RectMake(0,0,187,124));
		if(CURRENT_LEVEL > 1) {
			skipBtn.setPosition(cc.ccp(size.width,15));
		}
		this.addChild(skipBtn, 10);

		this.skipBtn = skipBtn;

		for(var i = 0; i < 3; i++) {
			var dino = new Dinosaur(CURRENT_LEVEL,i+1,this.currentStep);
			dino.setPosition(cc.ccp(DINOSAUR[CURRENT_LEVEL-1].todig[i].width,DINOSAUR[CURRENT_LEVEL-1].todig[i].height));
			dino.setTag("todig");
			dino.setOpacity(0);
			this.addChild(dino,3);
		}

		/* create shovel */

		var shovelImg = 'resources/images/shovel.png';

		var myShovel = cc.Sprite.create(shovelImg, cc.RectMake(0,0,148,176));
		myShovel.setAnchorPoint(cc.ccp(0,0));
		myShovel.setPosition(cc.ccp(40,330));
		this.addChild(myShovel, 3);
		
		this.shovelBtn = myShovel;

		/* create brush */

		var brushImg = 'resources/images/brush.png';

		var myBrush = cc.Sprite.create(brushImg, cc.RectMake(0,0,131,157));
		myBrush.setAnchorPoint(cc.ccp(0,0));
		myBrush.setPosition(cc.ccp(40,215));
		this.addChild(myBrush, 4);

		this.brushBtn = myBrush;

		/* help button */

		var helpBtn = cc.Sprite.create('resources/images/btn_help.png', cc.RectMake(0,0,77,76));
		helpBtn.setAnchorPoint(cc.ccp(0,0));
		helpBtn.setPosition(cc.ccp((size.width-helpBtn.getContentSize().width), (size.height-helpBtn.getContentSize().height)));
		this.addChild(helpBtn, 1);

		this.helpBtn = helpBtn;

		var lazyLayer = new cc.LazyLayer();
        this.addChild(lazyLayer);
        return true;
    },
	onEnterTransitionDidFinish:function() {
		this.schedule(this.skipIntro, 30);
	},
	loop:function() {
		cc.Application.sharedApplication().playSound("FG_FD_002");
	},
	selectShovel:function() {
		if(!this.isShovelSelected) {
			this.isShovelSelected = true;
			this.isBrushSelected = false;
			SELECTED_TOOL = "shovel";
			this.shovelBtn.setTextureRect(cc.RectMake(148,0,148,176));
			this.brushBtn.setTextureRect(cc.RectMake(0,0,131,157));
		}
		cc.Application.sharedApplication().playSound("FG_FD_037");
		this.makeCursor();
		this.rightTool = true;
		USE_SHOVEL = 0;
		this.unschedule(this.loop);
		if(!this.lazyInit) {
			var boneChildren = this.getChildren();
			for(var i = 0; i < boneChildren.length; i++) {
				if((boneChildren[i].getTag() == "todig") || (boneChildren[i].getTag() == "digmore")) {
					this.bonesToDig++;
				}
			}
			LAZY_COUNTER = 480;
			this.lazyInit = true;
		}
	},
	selectBrush:function() {
		if(!this.isBrushSelected) {
			this.isBrushSelected = true;
			this.isShovelSelected = false;
			SELECTED_TOOL = "brush";
			this.shovelBtn.setTextureRect(cc.RectMake(0,0,148,176));
			this.brushBtn.setTextureRect(cc.RectMake(131,0,131,157));
		}
		cc.Application.sharedApplication().playSound("FG_FD_038");
		this.makeCursor();
		this.rightTool = true;
		USE_SHOVEL = 0;
	},
	makeCursor:function() {
		if(this.digTool != null) {
			this.digTool.removeFromParentAndCleanup(true);
		}
		this.digTool = cc.Sprite.create('resources/images/'+SELECTED_TOOL+'_cur.png');
		SELECTED_TOOL == "shovel" ? this.digTool.setAnchorPoint(cc.ccp(0.05,1)) : this.digTool.setAnchorPoint(cc.ccp(0.3, 0.9));
		this.digTool.setPosition(cc.ccp(-100,-100));
		this.addChild(this.digTool, 10);
	},
	ccTouchesBegan:function (touches, event) {

		this.posX = touches[0].locationInView(touches[0].view()).x;
		this.posY = touches[0].locationInView(touches[0].view()).y;

		if(cc.Rect.CCRectContainsPoint(this.skipBtn.boundingBox(), touches[0].locationInView(touches[0].view()))) {
		  this.skipped = true;
			this.skipIntro();
		}

		if(cc.Rect.CCRectContainsPoint(this.helpBtn.boundingBox(), touches[0].locationInView(touches[0].view()))) {
			this.presentGame();
		}

		this._super();

		if(this.digTool) {

			var boneChildren = this.getChildren();

			this.bonesToDig = 0;

			for(var i = 0; i < boneChildren.length; i++) {
				if((boneChildren[i].getTag() == "todig") || (boneChildren[i].getTag() == "digmore")) {
					this.bonesToDig++;
				}
			}

			if(this.bonesToDig == 0) {
					this.doneShoveling = true;
			}

			if(!this.doneShoveling && (SELECTED_TOOL == "brush") && (this.posX > 200)) {
				cc.Application.sharedApplication().playSound("FG_FD_002");
				this.rightTool = false;
			}
			if(this.doneShoveling && !this.doneBrushing && (SELECTED_TOOL == "shovel") && (this.posX > 200)) {
				cc.Application.sharedApplication().playSound("FG_FD_003");
				this.rightTool = false;
			}

			this.lazyAlert();

			if(this.rightTool) {

				if((this.posX > 200) && (SELECTED_TOOL != null)) {
					this.digTool.setPosition(cc.ccp(this.posX, this.posY));
				}
				for(var j = 0; j < boneChildren.length; j++) {
					if(cc.Rect.CCRectContainsPoint(boneChildren[j].boundingBox(), touches[0].locationInView(touches[0].view()))) {
						if(boneChildren[j].getTag() == "todig") {
							boneChildren[j].setTag("digmore");
							boneChildren[j].setOpacity(255);
							this.faceCount++;
						} else if(boneChildren[j].getTag() == "digmore") {
							boneChildren[j].setTag("todust");
							this.faceCount++;
							var newBone = boneChildren[j].getTexture().src.replace("_s1", "_s2");
							var newSand = boneChildren[j].getTexture().src.replace("d"+CURRENT_LEVEL+"_b", "bg_sand");
							var bone = new visibleBones(newBone);
							var sand = new sandPatch(newSand);
							this.addChild(sand,2);
							this.addChild(bone,3);
							this.bonesToDig--;
							if(this.bonesToDig == 0) {
								this.helpSnd = "FG_FD_003";
								cc.Application.sharedApplication().playSound("FG_FD_006");
							}
						} else if(boneChildren[j].getTag() == "todust") {
							if(this.bonesToDig == 0) {
								boneChildren[j].setTag("discovered");
								var newBone = boneChildren[j].getTexture().src.replace("_s1", "_s3");
								var bone = new visibleBones(newBone);
								this.faceCount++;
								this.addChild(bone,5);
								this.discoveredBones++;
								if(this.discoveredBones == 3) {
									this.setIsTouchEnabled(false);
									cc.$('#diggingGame').style.cursor = "none";
									this.digTool.removeFromParentAndCleanup(true);
									SELECTED_TOOL = null;
									CURRENT_LEVEL > 2 ? cc.Application.sharedApplication().playSound("allbones_museum_right") : cc.Application.sharedApplication().playSound("allbones_museum_front");
									this.schedule(this.goToMuseum, 3.6);
								}
							}
						}
					}
				}
				
			}

		}

		if(this.faceCount == 2) {
			this.georgeState.setTextureRect(cc.RectMake(200,0,200,245));
		}
		if(this.faceCount == 5) {
			this.georgeState.setTextureRect(cc.RectMake(400,0,200,245));
		}
		if(this.faceCount == 8) {
			this.georgeState.setTextureRect(cc.RectMake(600,0,200,245));
		}

		if(cc.Rect.CCRectContainsPoint(this.shovelBtn.boundingBox(), touches[0].locationInView(touches[0].view()))) {
			this.selectShovel();
			if(!this.skipped) {
				this.skipIntro();
			}
		}
		if(cc.Rect.CCRectContainsPoint(this.brushBtn.boundingBox(), touches[0].locationInView(touches[0].view()))) {
			this.selectBrush();
			if(!this.skipped) {
				this.skipIntro();
			}
		}
	},
    ccTouchesMoved:function (touches, event) {

		this.posX = touches[0].locationInView(touches[0].view()).x;
		this.posY = touches[0].locationInView(touches[0].view()).y;


		if((this.posX > 200) && (SELECTED_TOOL !== null)) {
			cc.$('#diggingGame').style.cursor = "none";
			this.digTool.setPosition(cc.ccp(this.posX,this.posY));
		} else {
			cc.$('#diggingGame').style.cursor = "default";
			if(this.digTool) { this.digTool.setPosition(cc.ccp(-100,-100)); }
		}

		if(cc.Rect.CCRectContainsPoint(this.shovelBtn.boundingBox(), touches[0].locationInView(touches[0].view()))) {
			cc.$('#diggingGame').style.cursor = "pointer";
		}
		if(cc.Rect.CCRectContainsPoint(this.brushBtn.boundingBox(), touches[0].locationInView(touches[0].view()))) {
			cc.$('#diggingGame').style.cursor = "pointer";
		}

		if(cc.Rect.CCRectContainsPoint(this.helpBtn.boundingBox(), touches[0].locationInView(touches[0].view()))) {
			if(this.digTool) { this.digTool.setOpacity(0); }
			cc.$('#diggingGame').style.cursor = "pointer";
			this.helpBtn.setTextureRect(cc.RectMake(77,0,77,76));
		} else {
			if(this.digTool) { this.digTool.setOpacity(255); }
			this.helpBtn.setTextureRect(cc.RectMake(0,0,77,76));
		}

		if(cc.Rect.CCRectContainsPoint(this.skipBtn.boundingBox(), touches[0].locationInView(touches[0].view()))) {
			cc.$('#diggingGame').style.cursor = "pointer";
			this.skipBtn.setTextureRect(cc.RectMake(0,124,187,124));
		} else {
			this.skipBtn.setTextureRect(cc.RectMake(0,0,187,124));
		}

	},
	ccTouchesEnded:function (touches, event) {
		this.posX = touches[0].locationInView(touches[0].view()).x;
		this.posY = touches[0].locationInView(touches[0].view()).y;

		if((this.posX > 200) && (SELECTED_TOOL != null)) {
			this.digTool.setPosition(cc.ccp(this.posX, this.posY));
		}
	},
	presentGame:function() {
		if(this.helpSnd) {
			cc.Application.sharedApplication().playSound(this.helpSnd);
		}
	},
	resetTags:function() {
		this.discoveredBones = 0;
		this.currentStep++;
	},
	visit:function() {
		this._super();
		if(USE_SHOVEL > 0) {
			USE_SHOVEL--;
		}
		if(USE_SHOVEL == 1) {
			this.schedule(this.loop, 20);
		}
		if(LAZY_COUNTER > 0) {
			LAZY_COUNTER--;
		}
		if(LAZY_COUNTER == 1) {
			this.doLazy();
		}
	},
	goToMuseum:function() {
		var museum = MuseumScene.scene();
		cc.Director.sharedDirector().replaceScene(cc.TransitionFade.create(1, museum, cc.ccp(0,0,0)));
		this.unschedule(this.goToMuseum);
	},
	skipIntro:function() {
		if(SELECTED_TOOL == null) {
			USE_SHOVEL = 2;
		}
		this.skipBtn.setPosition(cc.ccp(this.winsize.width, 0));
		this.skipBtn.removeFromParentAndCleanup(true);
    // this.skipped = true;
//		if(!this.skipped) {
		if(this.skipped && (SELECTED_TOOL == null)) {
			cc.Application.sharedApplication().playSound("FG_FD_002");
		};
		this.unschedule(this.skipIntro);
	},
	lazyAlert:function() {
		if(this.bonesToDig > 0) {
			LAZY_COUNTER = 480;
		}
	},
	doLazy:function() {
		if(this.bonesToDig > 0) {
			if(this.lazy == 1) {
				cc.Application.sharedApplication().playSound("more_bones");
				this.lazy++;
			} else {
				cc.Application.sharedApplication().playSound("keep_digging");
				this.lazy--;
			}
			this.lazyAlert();
		}
	}
});

DiggingScene.scene = function () {
    // 'scene' is an autorelease object
    var scene = cc.Scene.create();

    // 'layer' is an autorelease object
    var layer = this.node();
    scene.addChild(layer);
    return scene;
};

// implement the "static node()" method manually
DiggingScene.node = function () {

    var ret = new DiggingScene();

    // Init the helloworld display layer.
    if (ret && ret.init()) {
        return ret;
    }

    return null;

};