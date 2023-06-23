var NeighbourhoodScene = cc.Layer.extend({
	screensize: null,
	helpBtn: null,
	goLeft: null,
	goLeftHover: null,
	goRight: null,
	goRightHover: null,
	neighbourhood: null,
	origx: null,
	screenSlide: false,
	slideWith: 0,
	todo: null,
	chars: [],
	cheers: [],
	crtpos: 0,
	played: false,
	helpSnd: "FG_GN_002",
	randItems: 10,
	discovered: 0,
	presenting: true,
	clickOk: false,
	badClicks: 0,
	trymore: 0,
	action: null,
	init:function () {

        this._super();
//		this.setIsTouchEnabled(true);
		this.setIsTouchEnabled(false);
		this.screensize = cc.Director.sharedDirector().getWinSize();

		this.neighbourhood = new NeighbourhoodLayer();
		this.addChild(this.neighbourhood);

		/* make help button */
		var helpBtn = cc.Sprite.create('resources/images/btn_help.png', cc.RectMake(0,0,83,81));
		helpBtn.setAnchorPoint(cc.ccp(0,0));
		helpBtn.setPosition(cc.ccp((this.screensize.width-helpBtn.getContentSize().width), (this.screensize.height-helpBtn.getContentSize().height)));
		helpBtn.setTag("help");
		this.addChild(helpBtn, 3);

		this.helpBtn = helpBtn;

		var arrowsImg = 'resources/images/arrow.png';

		/* make goLeft arrow */
		var goLeft = cc.Sprite.create(arrowsImg, cc.RectMake(15,20,100,85));
		goLeft.setAnchorPoint(cc.ccp(0,0));
		goLeft.setPosition(cc.ccp(-300,-300));
		this.addChild(goLeft, 3);

		this.goLeft = goLeft;

		var goLeftHover = cc.Sprite.create(arrowsImg, cc.RectMake(135,10,130,105));
		goLeftHover.setAnchorPoint(cc.ccp(0,0));
		goLeftHover.setPosition(cc.ccp(-15,-10));
		goLeftHover.setOpacity(0);
		this.goLeft.addChild(goLeftHover,10);

		this.goLeftHover = goLeftHover;

		/* make goRight arrow */
		var goRight = cc.Sprite.create(arrowsImg, cc.RectMake(290,20,110,85));
		goRight.setAnchorPoint(cc.ccp(0,0));
		goRight.setPosition(cc.ccp(-300,-300));
		this.addChild(goRight, 3);

		this.goRight = goRight;

		var goRightHover = cc.Sprite.create(arrowsImg, cc.RectMake(405,10,125,105));
		goRightHover.setAnchorPoint(cc.ccp(0,0));
		goRightHover.setPosition(cc.ccp(-15,-10));
		goRightHover.setOpacity(0);
		this.goRight.addChild(goRightHover,10);

		this.goRightHover = goRightHover;

		var lazyLayer = new cc.LazyLayer();
        this.addChild(lazyLayer);
        return true;

    },
	onEnter:function() {

		this._super();
		cc.$('#neighbourhoodGame').style.cursor = "default";

		this.cheers = CHEERS.slice(0);
		this.cheers.sort(function() {return 0.5 - Math.random()});

		if(LVL == 1) {
			this.schedule(this.firstItem, 15);
		} else {
			this.schedule(this.firstItem, 1);
			this.presenting = false;
		}

		if(ANIM_LEFT.length < this.randItems) {
			createAnim();
		}

		for(var i = 0; i < this.randItems; i++) {
			var item = Math.round(Math.random()*(ANIM_LEFT.length-1));
			this.chars[i] = ANIM_LEFT[item];
			ANIM_LEFT.splice(item, 1);
		}

		this.todo = this.chars[this.discovered];

	},
	ccTouchesBegan:function (touches, event) {

		this.clickOk = false;

		if(this.presenting) {
			this.clickOk = true;
			this.firstItem();
		}

		var touch = touches[0].locationInView(touches[0].view());
		this.origx = this.neighbourhood.getPosition().x;

		if(cc.Rect.CCRectContainsPoint(this.helpBtn.boundingBox(), touch)) {
			this.playHelp();
			this.clickOk = true;
		}

		if(cc.Rect.CCRectContainsPoint(this.goLeft.boundingBox(), touch)) {
			this.screenSlide = true;
			this.slideWith = 30;
			cc.Application.sharedApplication().playSound("FG_GN_033b");
			this.clickOk = true;
		}

		if(cc.Rect.CCRectContainsPoint(this.goRight.boundingBox(), touch)) {
			this.screenSlide = true;
			this.slideWith = -30;
			cc.Application.sharedApplication().playSound("FG_GN_033b");
			this.clickOk = true;
		}

		if(!this.clickOk) {
			this.badClicks++;
		}

		for(var i = 0; i < CHARACTERS.length; i++) {
			if(!this.screenSlide && (CHARACTERS[i].posX < (touch.x-this.origx)) && (CHARACTERS[i].posX + CHARACTERS[i].width > (touch.x-this.origx)) && (CHARACTERS[i].posY < touch.y) && (CHARACTERS[i].posY + CHARACTERS[i].height > touch.y)) {
				this.doAnimation(i);
			}
		}

		if(this.badClicks == 3) {
			this.setIsTouchEnabled(false);
			this.runAction(cc.Sequence.create(
//				cc.DelayTime.create((ANIMATIONS[this.clicked].sfxtime+500)/1000),
				cc.CallFunc.create(this, this.tryAgain, true),
				cc.DelayTime.create(2),
//				cc.CallFunc.create(this, this.playHelp, true)
				cc.CallFunc.create(this, this.firstItem, true)
			))
			this.badClicks = 0;
			this.trymore++;
			if(this.trymore == 2) { this.trymore = 0; }
		}

	},
    ccTouchesMoved:function (touches, event) {

		cc.$('#neighbourhoodGame').style.cursor = "default";

		if(cc.Rect.CCRectContainsPoint(this.helpBtn.boundingBox(), touches[0].locationInView(touches[0].view()))) {
			cc.$('#neighbourhoodGame').style.cursor = "pointer";
			this.helpBtn.setTextureRect(cc.RectMake(83,0,83,81));
		} else {
			this.helpBtn.setTextureRect(cc.RectMake(0,0,83,81));
		}

		if(cc.Rect.CCRectContainsPoint(this.goLeft.boundingBox(), touches[0].locationInView(touches[0].view()))) {
			cc.$('#neighbourhoodGame').style.cursor = "pointer";
			this.goLeftHover.setOpacity(255);
		} else {
			this.goLeftHover.setOpacity(0);
		}

		if(cc.Rect.CCRectContainsPoint(this.goRight.boundingBox(), touches[0].locationInView(touches[0].view()))) {
			cc.$('#neighbourhoodGame').style.cursor = "pointer";
			this.goRightHover.setOpacity(255);
		} else {
			this.goRightHover.setOpacity(0);
		}

	},
	playHelp:function() {
		cc.Application.sharedApplication().playSound(this.helpSnd);
	},
	tryAgain:function() {
		cc.Application.sharedApplication().playSound(TRYMORE[this.trymore]);
	},
	ccTouchesEnded:function (touches, event) {


	},
	visit:function() {

		this._super();
		if(this.screenSlide) {
			this.goLeft.setPosition(cc.ccp(-300, -300));
			this.goRight.setPosition(cc.ccp(-300, -300));
			if((this.neighbourhood.getPosition().x <= 0) || (this.neighbourhood.getPosition().x >= -890)) {
				this.neighbourhood.setPosition(cc.ccp(this.neighbourhood.getPosition().x+this.slideWith,0));
			}
		}
		if(!this.presenting) {
			if(this.neighbourhood.getPosition().x == -900) {
				this.goRight.setPosition(cc.ccp(-300, -300));
				this.goLeft.setPosition(cc.ccp(10,10));
				this.screenSlide = false;
			}
			if(this.neighbourhood.getPosition().x == 0) {
				this.goLeft.setPosition(cc.ccp(-300, -300));
				this.goRight.setPosition(cc.ccp(790,10));
				this.screenSlide = false;
			}
		}

	},
	doAnimation:function(i) {

		var whichOne = this.neighbourhood.getChildByTag(CHARACTERS[i].tag);

		var animNr = null;
		for(var z = 0; z < ANIMATIONS.length; z++) {
			if(ANIMATIONS[z].name == CHARACTERS[i].tag)
			animNr = z;
		}

		this.removeAnim();

//		console.log('bad: '+this.badClicks);

		if(animNr !== null) {
			if(ANIMATIONS[animNr].name == this.todo.tag) {
				this.clickOk = true;
				this.badClicks = 0;
				this.foundItem(animNr);
			}
			if(ANIMATIONS[animNr].sfx != "") {
				if(this.badClicks <= 2) {
					cc.Application.sharedApplication().playSound(ANIMATIONS[animNr].sfx);
				}
			}
			this.dance = cc.Sprite.create("resources/images/"+ANIMATIONS[animNr].name+"_1.png");
			this.dance.setAnchorPoint(cc.ccp(0,0));
			this.dance.setPosition(cc.ccp(ANIMATIONS[animNr].posX,ANIMATIONS[animNr].posY));

			var animation = cc.Animation.create();
			for(var j = 0; j < ANIMATIONS[animNr].frames; j++) {
				animation.addFrameWithFileName("resources/images/"+ANIMATIONS[animNr].name+"_"+(j+1)+".png");
			}
			var action = cc.Animate.create(4, animation, false);
			this.dance.setTag("animdone");
			this.dance.setOpacity(0);
			this.neighbourhood.addChild(this.dance);

			if(ANIMATIONS[animNr].delayed) {
				this.dance.runAction(cc.Sequence.create(
					cc.DelayTime.create(ANIMATIONS[animNr].sfxtime/1000),
					cc.CallFunc.create(this, this.makeVisible)
				))
			} else {
				this.dance.setOpacity(255);
				this.dance.runAction(action);
			}
			
			if(ANIMATIONS[animNr].type == 2) {
				this.extra = cc.Sprite.create("resources/images/"+ANIMATIONS[animNr].name+"2.png");
				this.extra.setAnchorPoint(cc.ccp(ANIMATIONS[animNr].aX,ANIMATIONS[animNr].aY));
				this.extra.setPosition(cc.ccp(ANIMATIONS[animNr].posX2,ANIMATIONS[animNr].posY2));
				this.dance.addChild(this.extra);
				var rot1 = cc.RotateTo.create(1, ANIMATIONS[animNr].deg);
				var rot2 = cc.RotateTo.create(1, -(ANIMATIONS[animNr].deg));
				var rot0 = cc.RotateTo.create(1, 0);
				this.extra.runAction(cc.Sequence.create(rot1,rot2,rot1,rot2,rot0, null));
			}
			if(ANIMATIONS[animNr].type == 3) {
				this.dance.runAction(cc.Blink.create(ANIMATIONS[animNr].speed, ANIMATIONS[animNr].duration));
			}
			if(ANIMATIONS[animNr].type == 4) {
				this.extra = cc.Sprite.create("resources/images/"+ANIMATIONS[animNr].name+"4.png");
				this.extra.setAnchorPoint(cc.ccp(0,0));
				this.extra.setPosition(cc.ccp(ANIMATIONS[animNr].sX,ANIMATIONS[animNr].sY));
				this.dance.addChild(this.extra);
				var bezier = new cc.BezierConfig();
				bezier.controlPoint_1 = cc.PointMake(ANIMATIONS[animNr].pX, ANIMATIONS[animNr].pY);
				bezier.endPosition = cc.PointMake(ANIMATIONS[animNr].eX, ANIMATIONS[animNr].eY);
				this.extra.runAction(cc.BezierTo.create(ANIMATIONS[animNr].duration, bezier));
				// police car special for classroom
				if(ANIMATIONS[animNr].name == "classroom") {
					this.extra2 = cc.Sprite.create("resources/images/police_car_1.png");
					this.extra2.setAnchorPoint(cc.ccp(0,0));
					this.extra2.setPosition(cc.ccp(911,68));
					this.extra2.setTag("animdone");
					this.extra2.setIsVisible(false);
					this.neighbourhood.addChild(this.extra2, 6);
					this.extra2.runAction(cc.Sequence.create(
						cc.DelayTime.create(3.75),
						cc.Blink.create(1, 2)
					));
				}
			}
			if(ANIMATIONS[animNr].type == 5) {
				this.extra = cc.Sprite.create("resources/images/"+ANIMATIONS[animNr].name+"5.png");
				this.extra.setAnchorPoint(cc.ccp(0,0));
				this.extra.setPosition(cc.ccp(ANIMATIONS[animNr].sX,ANIMATIONS[animNr].sY));
				this.dance.addChild(this.extra);
				var myMove = cc.MoveTo.create(ANIMATIONS[animNr].duration, cc.PointMake(ANIMATIONS[animNr].eX,ANIMATIONS[animNr].eY));
				if(!ANIMATIONS[animNr].back) {
					this.extra.runAction(myMove);
				} else {
					var myMoveBack = cc.MoveTo.create(ANIMATIONS[animNr].duration, cc.PointMake(ANIMATIONS[animNr].sX,ANIMATIONS[animNr].sY));
					this.extra.runAction(cc.Sequence.create(myMove, myMoveBack));
				}
			}
			if(ANIMATIONS[animNr].type == 6) {
				for(var z = 0; z < ANIMATIONS[animNr].elem; z++) {
					var extra = cc.Sprite.create("resources/images/"+ANIMATIONS[animNr].name+(z+1)+".png");
					extra.setAnchorPoint(cc.ccp(0,0));
					extra.setPosition(cc.ccp(ANIMATIONS[animNr].position[z*2],ANIMATIONS[animNr].position[z*2+1]));
					this.dance.addChild(extra);
					var bezier = new cc.BezierConfig();
					bezier.controlPoint_1 = cc.PointMake(ANIMATIONS[animNr].position[z*2]+ANIMATIONS[animNr].radius[z],ANIMATIONS[animNr].position[z*2+1]-ANIMATIONS[animNr].radius[z]);
					bezier.endPosition = cc.PointMake(ANIMATIONS[animNr].position[z*2],ANIMATIONS[animNr].position[z*2+1]);
					extra.runAction(cc.BezierTo.create(5-z, bezier));
				}
			}
			if(ANIMATIONS[animNr].type == 7) {
				this.extra = cc.Sprite.create("resources/images/"+ANIMATIONS[animNr].name+"2.png", cc.RectMake(0,0,6,29));
				this.extra.setAnchorPoint(cc.ccp(ANIMATIONS[animNr].aX,ANIMATIONS[animNr].aY));
				this.extra.setPosition(cc.ccp(ANIMATIONS[animNr].posX2,ANIMATIONS[animNr].posY2));
				this.dance.addChild(this.extra);

				var cnt = 0;
				var times = 2;
				var yoyoBack = false;

				var extra = this.dance.getChildren()[0];
				var obHeight = extra.getContentSize().height;
				var obWidth = extra.getContentSize().width;
				var rectPos = 0;
				
				tempInt = setInterval(function(){
					if(!yoyoBack) {
						if(obHeight > 15 ) {
							obHeight -= 5;
							rectPos += 5;
						} else {
							yoyoBack = true;
						}
					} else {
						if(obHeight < 29) {
							obHeight += 5;
							rectPos -= 5;
						} else {
							yoyoBack = false;
							cnt++;
						}
					}
					extra.setTextureRect(cc.RectMake(0, rectPos, obWidth, obHeight));
					extra.setContentSize(new cc.Size(obWidth, obHeight));
					if(cnt == times) {
						clearInterval(tempInt);
					}
				}, 100);
			}
			this.dance.runAction(cc.Sequence.create(
				cc.DelayTime.create(ANIMATIONS[animNr].time),
				cc.CallFunc.create(this.dance, this.removeFromParentAndCleanup, true)
			))
		}

	},
	makeVisible:function() {
		this.dance.setOpacity(255);
	},
	removeAnim:function() {
		var anim = this.neighbourhood.getChildren();
		for(var i = 0; i < anim.length; i++) {
			if(anim[i].getTag() == "animdone") {
				anim[i].removeFromParentAndCleanup(true);
			}
		}
		this.unschedule(this.removeAnim);
	},
	firstItem:function() {
		this.presenting = false;
		this.unschedule(this.firstItem);
//		this.setIsTouchEnabled(false);
		this.runAction(cc.Sequence.create(
			cc.DelayTime.create((soundSprites[this.todo.sound][1]+250)/1000),
			cc.CallFunc.create(this, this.setIsTouchEnabled, true)
		));
		cc.Application.sharedApplication().playSound(this.todo.sound);
		this.helpSnd = this.todo.sound;
		if((this.todo.posX > 900) && (this.neighbourhood.getPosition().x == 0)) {
			this.screenSlide = true;
			this.slideWith = -30;
		}
		if((this.todo.posX < 900) && (this.neighbourhood.getPosition().x == -900)) {
			this.screenSlide = true;
			this.slideWith = 30;
		}
	},
	foundItem:function(animNr) {
		this.setIsTouchEnabled(false);
		this.schedule(this.doCheers, (ANIMATIONS[animNr].sfxtime + 1000)/1000);
		this.discovered++;
//		console.log(this.discovered);
		if(this.discovered < this.randItems) {
//			animation duration + 2 pauses + cheer time
			this.schedule(this.firstItem, (ANIMATIONS[animNr].sfxtime + 2500)/1000);
			this.todo = this.chars[this.discovered];
		} else {
			this.schedule(this.youKnowIt, (ANIMATIONS[animNr].sfxtime + 2000)/1000);
			this.schedule(this.gameOver, (ANIMATIONS[animNr].sfxtime + 3500)/1000);
		}
	},
	doCheers:function() {
		this.unschedule(this.doCheers);
		cc.Application.sharedApplication().playSound(this.cheers[0]);
		this.cheers.splice(0,1);
	},
	gameOver:function() {
		this.unschedule(this.gameOver);
		LVL++;
		var gameover = GameoverScene.scene();
		cc.Director.sharedDirector().replaceScene(cc.TransitionFade.create(0.5, gameover, cc.ccp(0,0,0)));
	},
	youKnowIt:function() {
		this.unschedule(this.youKnowIt);
		cc.Application.sharedApplication().playSound("FG_GN_034");
	}
});

NeighbourhoodScene.scene = function () {
    // 'scene' is an autorelease object
    var scene = cc.Scene.create();

    // 'layer' is an autorelease object
    var layer = this.node();
    scene.addChild(layer);
    return scene;
};

// implement the "static node()" method manually
NeighbourhoodScene.node = function () {
    var ret = new NeighbourhoodScene();

    // Init the helloworld display layer.
    if (ret && ret.init()) {
        return ret;
    }

    return null;
};
