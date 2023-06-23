var NOW_PLAYING = null;
var PLAYED = false;

//var ANIM_LEFT = CHARACTERS.slice(0);

var introScene = cc.Layer.extend({
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
			if(IS_IOS) {
				soundsSheet.autobuffer = true;
				soundsSheet.load();
				soundsSheet.play();
//				console.log('but play');
				var game = this;
				tempInt = setInterval(function(){
					if (soundsSheet) {
						if (soundsSheet.position > 888) {
							soundsSheet.pause();
							if (soundsSheet.buffered[0].end > 60000 || soundsSheet.buffered[0].end == 0) {
								// we've buffered enough to be able to seek
								clearInterval(tempInt);
								game.startGame();
//								console.log(soundsSheet.buffered[0].end);
//								console.log('clear interval. launch game start');
							}
						}
					} else {
						console.log('no sheet!');
					}
				}, 89);
			} else {
				this.startGame();
			}
		} else {
			if(!IS_IOS) {
				cc.Application.sharedApplication().playSound("George_sNeighborhood1");
			} else {
				console.log('iosTitleSound : ' + iosTitleSound);
				if (iosTitleSound != null) {
					iosTitleSound.play();
				}
			}
		
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
		cc.Application.sharedApplication().playSound("FG_GN_002");
	},
	visit:function() {
		this._super();
	},
	onEnter:function() {
		this._super();
		this.schedule(this.delayedEntry, 3);
		createAnim();
	},
	iosPause:function() {
		if (IS_IOS) {
			soundsSheet.pause();
			console.log('preload pause');
		}
	},
	delayedEntry:function() {
//		console.log(soundsSheet);
		if(!IS_IOS) {
			if(soundsSheet == null) {
				window.location.href=window.location.href;
			}
		}
		cc.$('#neighbourhoodGame').style.visibility = "visible";
		cc.$('#canvasHolder').style.backgroundImage = "none";
		if(!IS_IOS) {
			cc.Application.sharedApplication().playSound("George_sNeighborhood1");
		}
		this.unschedule(this.delayedEntry);
	}
});

introScene.scene = function () {
    // 'scene' is an autorelease object
    var scene = cc.Scene.create();

    // 'layer' is an autorelease object
    var layer = this.node();
    scene.addChild(layer);
    return scene;
};

// implement the "static node()" method manually
introScene.node = function () {
    var ret = new introScene();

    // Init the helloworld display layer.
    if (ret && ret.init()) {
        return ret;
    }

    return null;
};
