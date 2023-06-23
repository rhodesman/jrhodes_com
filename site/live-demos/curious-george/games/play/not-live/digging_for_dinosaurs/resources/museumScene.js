var MuseumScene = cc.Layer.extend({
	helpBtn: null,
	currentBone: 1,
	myBone: null,
	bonePicked: false,
	boneHolder: null,
	dinoCompleted: false,
	boneMatched: null,
	init:function () {
        this._super();
		var size = cc.Director.sharedDirector().getWinSize();

		var museumBg = cc.Sprite.create('resources/images/bg_museum_dino'+CURRENT_LEVEL+'.jpg');
		museumBg.setAnchorPoint(cc.ccp(0,0));
		museumBg.setPosition(cc.ccp(0,0));
		this.addChild(museumBg, 1);

		var boneHolder = cc.Sprite.create('resources/images/bone_holder.png');
		boneHolder.setAnchorPoint(cc.ccp(0,0));
		boneHolder.setPosition(cc.ccp(655,30));
		this.addChild(boneHolder,2);
		
		this.boneHolder = boneHolder;

		var helpBtn = cc.Sprite.create('resources/images/btn_help.png', cc.RectMake(0,0,77,76));
		helpBtn.setAnchorPoint(cc.ccp(0,0));
		helpBtn.setPosition(cc.ccp((size.width-helpBtn.getContentSize().width), (size.height-helpBtn.getContentSize().height)));
		helpBtn.setTag("help");
		this.addChild(helpBtn, 3);

		this.helpBtn = helpBtn;

		for(var i = 0; i < DINOSAUR[CURRENT_LEVEL - 1].bones; i++) {
			var bone = new sortedBones(CURRENT_LEVEL, (i+1));
			this.addChild(bone,3);
		}

		var lazyLayer = new cc.LazyLayer();
        this.addChild(lazyLayer);
        return true;
    },
	onEnter:function() {
		this._super();
		cc.$('#diggingGame').style.cursor = "default";
		this.schedule(this.boneToSort, 11.5);
	},
	ccTouchesBegan:function (touches, event) {

		var boneChildren = this.getChildren();

		if(!this.dinoCompleted) {
			if(cc.Rect.CCRectContainsPoint(this.helpBtn.boundingBox(),  touches[0].locationInView(touches[0].view()))) {
				this.presentActivity();
			} else if(cc.Rect.CCRectContainsPoint(this.boneHolder.boundingBox(),  touches[0].locationInView(touches[0].view()))) {

			} else {
				for(var i = 0; i < boneChildren.length; i++) {
					if((cc.Rect.CCRectContainsPoint(boneChildren[i].boundingBox(), touches[0].locationInView(touches[0].view()))) && (boneChildren[i].getTag() == (100+this.currentBone))) {
						this.boneMatched = boneChildren[i];
					}
				}
				if(this.boneMatched) {
					this.moveBone();
				} else {
					cc.Application.sharedApplication().playSound(BAD_JOB[Math.floor(Math.random()*BAD_JOB.length)]);
				}
			}
		} else {
			if(CURRENT_LEVEL < 3) {
				this.digAgain();
			} else {
				this.goExhibition();
			}
		}
	},
    ccTouchesMoved:function (touches, event) {

		if(cc.Rect.CCRectContainsPoint(this.helpBtn.boundingBox(),  touches[0].locationInView(touches[0].view()))) {
			this.helpBtn.setTextureRect(cc.RectMake(77,0,77,76));
			cc.$('#diggingGame').style.cursor = "pointer";
		} else {
			this.helpBtn.setTextureRect(cc.RectMake(0,0,77,76));
			cc.$('#diggingGame').style.cursor = "default";
		}

		if(this.bonePicked) {
			var boneElements = this.getChildren();
			for(var i = 0; i < boneElements.length; i++) {
				if(cc.Rect.CCRectContainsPoint(boneElements[i].boundingBox(), touches[0].locationInView(touches[0].view())) && (boneElements[i].getTag() > 100)) {
					boneElements[i].setOpacity(100);
					cc.$('#diggingGame').style.cursor = "pointer";
				} else {
					if(boneElements[i].getTag() > 100) {
						boneElements[i].setOpacity(0);
					}
					cc.$('#diggingGame').style.cursor = "default";
				}
			}
		}

	},
	ccTouchesEnded:function (touches, event) {

	},
	moveBone:function() {
		var boneChildren = this.getChildren();
		this.bonePicked = false;
		this.currentSound = this.defaultSound;
		for(var i = 0; i < boneChildren.length; i++) {
			if(boneChildren[i].getTag() > 100) {
				boneChildren[i].setOpacity(0);
			}
		}
		this.boneMatched.setTag("matched");
		if(this.currentBone < DINOSAUR[CURRENT_LEVEL-1].bones) {
			this.setIsTouchEnabled(false);
			this.myBone.runAction(
				cc.Sequence.create(
					cc.MoveTo.create(1, cc.ccp((DINOSAUR[CURRENT_LEVEL-1].tomatch[this.currentBone-1].width + this.myBone.getContentSize().width/2), (DINOSAUR[CURRENT_LEVEL-1].tomatch[this.currentBone-1].height + this.myBone.getContentSize().height/2))),
					cc.CallFunc.create(this, this.resetBone) 
				)
			)
		} else {
			this.myBone.removeFromParentAndCleanup(true);
			this.showDino();
		}
		if(this.currentBone < DINOSAUR[CURRENT_LEVEL-1].bones) {
			cc.Application.sharedApplication().playSound(DINOSAUR[CURRENT_LEVEL-1].tomatch[this.currentBone].sound);
			this.currentBone++;
		};
	},
	resetBone:function() {
		this.boneMatched.setOpacity(255);
		this.myBone.removeFromParentAndCleanup(true);
		this.boneMatched = null;
		if(this.currentBone <= DINOSAUR[CURRENT_LEVEL-1].bones) {
			this.boneToSort(this.currentBone);
		} else {
			this.showDino();
		}
		this.setIsTouchEnabled(true);
	},
	presentActivity:function() {
		cc.Application.sharedApplication().playSound(DINOSAUR[CURRENT_LEVEL-1].tomatch[this.currentBone-1].sound, DINOSAUR[CURRENT_LEVEL-1].tomatch[this.currentBone-1].sndtime);
	},
	boneToSort:function(bone_nr) {
		this.setIsTouchEnabled(true);
		this.unschedule(this.boneToSort);
		bone_nr = this.currentBone;
		var myBone = cc.Sprite.create('resources/images/d'+CURRENT_LEVEL+'_b'+bone_nr+'.png');
		myBone.setAnchorPoint(cc.ccp(0.5,0.5));
		myBone.setPosition(cc.ccp(775,115));
		myBone.setTag("tomatch");
		this.addChild(myBone, 4);
		this.myBone = myBone;
		this.bonePicked = true;
	},
	showDino:function() {
		this.boneHolder.runAction(cc.FadeOut.create(0.5));
		SOUND_TIMER = 0;
		cc.Application.sharedApplication().playSound(DINOSAUR[CURRENT_LEVEL-1].sound);

		var dinoLook = cc.Sprite.create('resources/images/dino'+CURRENT_LEVEL+'_skin.png');
		dinoLook.setAnchorPoint(cc.ccp(0,0));
		dinoLook.setPosition(cc.ccp(0,0));
		dinoLook.setOpacity(0);
		this.addChild(dinoLook, 5);
		dinoLook.runAction(cc.FadeIn.create(0.5));
		this.setIsTouchEnabled(false);
		// imi trebuie si durata dupa care sa fac trecerea
		if(CURRENT_LEVEL < 3) {
			this.schedule(this.digAgain, DINOSAUR[CURRENT_LEVEL-1].more);
		} else {
			this.schedule(this.goExhibition, DINOSAUR[CURRENT_LEVEL-1].more);
		}
		this.dinoCompleted = true;
	},
	digAgain: function() {
		var digging = DiggingScene.scene();
		cc.Director.sharedDirector().replaceScene(cc.TransitionFade.create(1, digging, cc.ccp(0,0,0)));
		this.unschedule(this.digAgain);
	},
	goExhibition:function() {
		var exhibition = ExhibitionScene.scene();
		cc.Director.sharedDirector().replaceScene(cc.TransitionFade.create(1, exhibition, cc.ccp(0,0,0)));
	},
	visit:function() {
		this._super();
		if(SOUND_TIMER > 0) {
			SOUND_TIMER--;
		}
	}
});

MuseumScene.scene = function () {
    // 'scene' is an autorelease object
    var scene = cc.Scene.create();

    // 'layer' is an autorelease object
    var layer = this.node();
    scene.addChild(layer);
    return scene;
};

// implement the "static node()" method manually
MuseumScene.node = function () {
    var ret = new MuseumScene();

    // Init the helloworld display layer.
    if (ret && ret.init()) {
        return ret;
    }

    return null;
};
