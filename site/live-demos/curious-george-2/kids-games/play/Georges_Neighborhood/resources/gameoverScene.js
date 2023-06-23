var GameoverScene = cc.Layer.extend({
	playBtn: null,
	winsize: null,
	init:function () {

        this._super();
		var size = cc.Director.sharedDirector().getWinSize();
		this.winsize = size;
        this.setIsTouchEnabled(true);

		var gameBg = cc.Sprite.create("resources/images/CG_neighbourhood_900x500.jpg");
		gameBg.setAnchorPoint(cc.ccp(0,0));
		gameBg.setPosition(cc.ccp(0,0));
		this.addChild(gameBg);

		var playBtn = cc.Sprite.create("resources/images/btn_play.png", cc.RectMake(0,0,180,119));
		playBtn.setAnchorPoint(cc.ccp(0,0));
		playBtn.setTag("playbtn");
		playBtn.setPosition(cc.ccp(size.width - playBtn.getContentSize().width - 20, 20));
		this.addChild(playBtn);

		this.playBtn = playBtn;

		var lazyLayer = new cc.LazyLayer();
        this.addChild(lazyLayer);
        return true;
	},
	ccTouchesBegan:function (touches, event) {
		if(cc.Rect.CCRectContainsPoint(this.playBtn.boundingBox(), touches[0].locationInView(touches[0].view()))) {
			this.startGame();
		}
	},
    ccTouchesMoved:function (touches, event) {
		if(cc.Rect.CCRectContainsPoint(this.playBtn.boundingBox(), touches[0].locationInView(touches[0].view()))) {
			cc.$('#neighbourhoodGame').style.cursor = "pointer";
			this.playBtn.setTextureRect(cc.RectMake(180,0,180,119));
			if(!IS_IOS && !PLAYED) {
				cc.Application.sharedApplication().playSound("CG_Game-NavigationButtons_Play_Boy");
				PLAYED = true;
			}
		} else {
			this.playBtn.setTextureRect(cc.RectMake(0,0,180,119));
			cc.$('#neighbourhoodGame').style.cursor = "default";
			PLAYED = false;
		}
    },
	startGame:function(sender) {
		var game = NeighbourhoodScene.scene();
		cc.Director.sharedDirector().replaceScene(cc.TransitionFade.create(0.5, game, cc.ccp(0,0,0)));
	},
	onEnter:function() {
		this._super();
		this.schedule(this.playAgain, 1);
	},
	playAgain:function() {
		this.unschedule(this.playAgain);
//		console.log("play again");
		cc.Application.sharedApplication().playSound("CG_ManInYellowHat_GENERIC_PlayButton_VO_IfYouWantT");
	}

});

GameoverScene.scene = function () {
    // 'scene' is an autorelease object
    var scene = cc.Scene.create();

    // 'layer' is an autorelease object
    var layer = this.node();
    scene.addChild(layer);
    return scene;
};

// implement the "static node()" method manually
GameoverScene.node = function () {
    var ret = new GameoverScene();

    // Init the helloworld display layer.
    if (ret && ret.init()) {
        return ret;
    }

    return null;
};