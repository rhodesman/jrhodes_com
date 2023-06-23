var RESTORE_TIME = 0;

var ExhibitionScene = cc.Layer.extend({
	playBtn: null,
	myDino: null,
	myBones: null,
	helpBtn: null,
	toPresent: null,
	isOverPlayButton: false,

	init:function () {
        this._super();
        this.setIsTouchEnabled(true);
		var size = cc.Director.sharedDirector().getWinSize();

		var exhibitBg = cc.Sprite.create('resources/images/bg_exhibition.jpg');
		exhibitBg.setAnchorPoint(cc.ccp(0,0));
		exhibitBg.setPosition(cc.ccp(0,0));
		this.addChild(exhibitBg, 1);

		var helpBtn = cc.Sprite.create('resources/images/btn_help.png', cc.RectMake(0,0,77,76));
		helpBtn.setAnchorPoint(cc.ccp(0,0));
		helpBtn.setPosition(cc.ccp((size.width-helpBtn.getContentSize().width), (size.height-helpBtn.getContentSize().height)));
		helpBtn.setTag("help");
		this.addChild(helpBtn, 3);

		this.helpBtn = helpBtn;
		this.isOverPlayButton = false;
		
		for(var i = 0; i < DINOSAUR.length; i++) {
			var expoDino = new exhibitionDinosaur(i);
			if(i == 1) {
				this.addChild(expoDino,5);
			} else {
				this.addChild(expoDino,4);
			}
		}

		/* dino 1 click zones*/

		var dinoSpot = cc.LayerColor.create(cc.ccc4(145, 83, 35, 255), 300, 260);
		dinoSpot.setAnchorPoint(cc.ccp(0,0));
		dinoSpot.setPosition(cc.ccp(280,50));
		dinoSpot.setTag("dino1");
		dinoSpot.setOpacity(0);
		this.addChild(dinoSpot,6);

		var dinoSpot = cc.LayerColor.create(cc.ccc4(145, 83, 35, 255), 80, 100);
		dinoSpot.setAnchorPoint(cc.ccp(0,0));
		dinoSpot.setPosition(cc.ccp(210,170));
		dinoSpot.setTag("dino1");
		dinoSpot.setOpacity(0);
		this.addChild(dinoSpot,6);

		var dinoSpot = cc.LayerColor.create(cc.ccc4(0, 83, 35, 255), 120, 80);
		dinoSpot.setAnchorPoint(cc.ccp(0,0));
		dinoSpot.setPosition(cc.ccp(560,170));
		dinoSpot.setTag("dino1");
		dinoSpot.setOpacity(0);
		this.addChild(dinoSpot,6);

		var dinoSpot = cc.LayerColor.create(cc.ccc4(0, 30, 35, 255), 400, 70);
		dinoSpot.setAnchorPoint(cc.ccp(0,0));
		dinoSpot.setPosition(cc.ccp(250,60));
		dinoSpot.setTag("dino1");
		dinoSpot.setOpacity(0);
		this.addChild(dinoSpot,6);

		/* */

		var playBtn = cc.Sprite.create("resources/images/btn_play.png", cc.RectMake(0,0,180,119));
		playBtn.setAnchorPoint(cc.ccp(0,0));
		playBtn.setTag("playbtn");
		playBtn.setPosition(cc.ccp(size.width - playBtn.getContentSize().width - 15, 15));
		this.addChild(playBtn, 10);

		this.playBtn = playBtn;

		var lazyLayer = new cc.LazyLayer();
        this.addChild(lazyLayer);
        return true;
    },
	onEnter:function() {
		this._super();
	},
	ccTouchesBegan:function (touches, event) {
			var exposedDino = this.getChildren();
			for(var i = 0; i < exposedDino.length; i++) {
				if((cc.Rect.CCRectContainsPoint(exposedDino[i].boundingBox(), touches[0].locationInView(touches[0].view())))) {
					this.myDino = exposedDino[i];
				}
			}
			if(cc.Rect.CCRectContainsPoint(this.playBtn.boundingBox(), touches[0].locationInView(touches[0].view()))) {
				this.startGame();
			}
			if(cc.Rect.CCRectContainsPoint(this.helpBtn.boundingBox(), touches[0].locationInView(touches[0].view()))) {
				cc.Application.sharedApplication().playSound("FG_FD_033");
				this.myDino = null;
			}
			if((this.myDino != null) && (this.myDino.getTag() != -1)) {
				myTag = this.myDino.getTag();
				if(myTag == "dino") {
					if(cc.Rect.CCRectContainsPoint(this.getChildByTag("dino0").boundingBox(), touches[0].locationInView(touches[0].view()))) {
						this.toPresent = this.getChildByTag("dino0").getChildren()[0];
						this.myBones = 0;
						this.startPresentation(this.toPresent);
					}
					if(cc.Rect.CCRectContainsPoint(this.getChildByTag("dino2").boundingBox(), touches[0].locationInView(touches[0].view()))) {
						this.toPresent = this.getChildByTag("dino2").getChildren()[0];
						this.myBones = 2;
						this.startPresentation(this.toPresent);
					}
				}
				if((myTag == "dino0") || (myTag == "dino2")) {
						this.toPresent = this.getChildByTag(myTag).getChildren()[0];
						myTag == "dino0" ? this.myBones = 0 : this.myBones = 2;
						this.startPresentation(this.toPresent);
				}
				if(myTag == "dino1") {
//					myTag == "dino";
					this.toPresent = this.getChildByTag("dino").getChildren()[0];
					this.myBones = 1;
					this.startPresentation(this.toPresent);
				}
			}
	},
    ccTouchesMoved:function (touches, event) {
		cc.$('#diggingGame').style.cursor = "default";
		if(cc.Rect.CCRectContainsPoint(this.playBtn.boundingBox(), touches[0].locationInView(touches[0].view()))) {
			cc.$('#diggingGame').style.cursor = "pointer";
			this.playBtn.setTextureRect(cc.RectMake(180,0,180,119));
  		if (!this.isOverPlayButton) {
  			cc.Application.sharedApplication().playSound("CG_Game-NavigationButtons_Play_Boy");
  			this.isOverPlayButton = true;
  		}
		} else {
			this.playBtn.setTextureRect(cc.RectMake(0,0,180,119));
 			this.isOverPlayButton = false;
		}
		if(cc.Rect.CCRectContainsPoint(this.helpBtn.boundingBox(), touches[0].locationInView(touches[0].view()))) {
			cc.$('#diggingGame').style.cursor = "pointer";
			this.helpBtn.setTextureRect(cc.RectMake(77,0,77,76));
		} else {
			this.helpBtn.setTextureRect(cc.RectMake(0,0,77,76));
		}
	},
	ccTouchesEnded:function (touches, event) {
	
	},
	startPresentation:function(dino) {
		this.setIsTouchEnabled(false);
		dino.runAction(
			cc.Sequence.create(
				cc.FadeIn.create(1),
				cc.CallFunc.create(this, this.presentDino)
			)
		)
	},
	presentDino:function() {
		cc.Application.sharedApplication().playSound(DINOSAUR[this.myBones].exhibition);
		this.schedule(this.restoreStage, DINOSAUR[this.myBones].museum.snd);
	},
	restoreStage:function() {
		this.toPresent.runAction(cc.FadeOut.create(1));
		this.toPresent = null;
		this.setIsTouchEnabled(true);
		this.unschedule(this.restoreStage);
	},
	visit:function() {
		this._super();
		if(SOUND_TIMER > 0) {
			SOUND_TIMER--;
		}
		if(RESTORE_TIME > 0) {
			RESTORE_TIME--;
		}
		if(RESTORE_TIME == 1) {
			this.restoreStage();
		}
    },
	startGame:function(sender) {
		CURRENT_LEVEL = 0;
		SOUND_TIMER = 0;
		var game = DiggingScene.scene();
		cc.Director.sharedDirector().replaceScene(cc.TransitionFade.create(0.5, game, cc.ccp(0,0,0)));
		cc.Application.sharedApplication().playSound("intro_shovel");
	}
});

ExhibitionScene.scene = function () {
    // 'scene' is an autorelease object
    var scene = cc.Scene.create();

    // 'layer' is an autorelease object
    var layer = this.node();
    scene.addChild(layer);
    return scene;
};

// implement the "static node()" method manually
ExhibitionScene.node = function () {
    var ret = new ExhibitionScene();

    // Init the helloworld display layer.
    if (ret && ret.init()) {
        return ret;
    }

    return null;
};

