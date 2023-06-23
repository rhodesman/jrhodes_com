var CURRENT_LEVEL = 0; 
var SOUND_TIMER = 0;
var USE_SHOVEL = 0;
var CURRENT_SOUND = null;
var NOW_PLAYING = null;
var tempInt = null;

//var HAS_PLAYED = new Array();

//var SND_INIT = false;

var introScene = cc.Layer.extend({
	playBtn: null,
	winsize: null,
	isOverPlayButton: false,
//	currentSound: null,
	init:function () {

        this._super();
		var size = cc.Director.sharedDirector().getWinSize();
		this.winsize = size;
        this.setIsTouchEnabled(true);

		var introGeorge = cc.Sprite.create('resources/images/bg_intro.jpg');
		introGeorge.setAnchorPoint(cc.ccp(0, 0));
		introGeorge.setPosition(cc.ccp(0, 0));
		this.addChild(introGeorge);

		var playBtn = cc.Sprite.create("resources/images/btn_play.png", cc.RectMake(0,0,180,119));
		playBtn.setAnchorPoint(cc.ccp(0,0));
		playBtn.setTag("playbtn");
		playBtn.setPosition(cc.ccp(size.width - playBtn.getContentSize().width - 25, 25));
		this.addChild(playBtn);

		this.playBtn = playBtn;
		this.isOverPlayButton = false;
		
		var lazyLayer = new cc.LazyLayer();
        this.addChild(lazyLayer);
        return true;
	},
	ccTouchesBegan:function (touches, event) {
		if(cc.Rect.CCRectContainsPoint(this.playBtn.boundingBox(), touches[0].locationInView(touches[0].view()))) {
		  if (IS_IOS) {
		    soundsSheet.autobuffer = true;
		    soundsSheet.load();
		    soundsSheet.play();
		    console.log('but play');
		    var game = this;
		    tempInt = setInterval(function(){
		      if (soundsSheet) {
		        if (soundsSheet.position > 800) {
		          soundsSheet.pause();
  		        console.log(soundsSheet.buffered.length);
  		        console.log(soundsSheet.buffered[0].start);
  		        console.log(soundsSheet.buffered[0].end);
  		        console.log(soundsSheet.buffered);
		          console.log('play stops.');
              // game.runAction(cc.Sequence.create(cc.DelayTime.create(10), cc.CallFunc.create(game, game.startGame)));
              if (soundsSheet.buffered[0].end > 60000 || soundsSheet.buffered[0].end == 0) {
                // we've buffered enough to be able to seek
                clearInterval(tempInt); 
                game.startGame();
    		        console.log(soundsSheet.buffered[0].end);
  		          console.log('clear interval. launch game start');                
              }
		        }
		      }
		    }, 100);
		    
		  } else {
  			this.startGame();  		  
		  }
		} else {
			if (!IS_IOS) {
			  cc.Application.sharedApplication().playSound("FG_Titles_002");
		  } else {
		    if (iosTitleSound != null) {
		      iosTitleSound.play();
		    }
		  }
		}
	},
  ccTouchesMoved:function (touches, event) {
  	if(cc.Rect.CCRectContainsPoint(this.playBtn.boundingBox(), touches[0].locationInView(touches[0].view()))) {
  		cc.$('#diggingGame').style.cursor = "pointer";
  		this.playBtn.setTextureRect(cc.RectMake(180,0,180,119));
  		if (!this.isOverPlayButton) {
  			cc.Application.sharedApplication().playSound("CG_Game-NavigationButtons_Play_Boy");
  			this.isOverPlayButton = true;
  		}
  	} else {
  		this.playBtn.setTextureRect(cc.RectMake(0,0,180,119));
  		cc.$('#diggingGame').style.cursor = "default";
  		this.isOverPlayButton = false;
  	}
  },
  iosPause:function() {
    if (IS_IOS) {
      soundsSheet.pause();
      console.log('preload pause');
    }
  },
	startGame:function(sender) {
		var game = DiggingScene.scene();
		cc.Director.sharedDirector().replaceScene(cc.TransitionFade.create(0.5, game, cc.ccp(0,0,0)));
		SOUND_TIMER = 0;
		USE_SHOVEL = 1200;
		cc.Application.sharedApplication().playSound("intro_shovel");
    // console.log('start game');
	},
	visit:function() {
		this._super();
//		if(SOUND_TIMER > 0) {
//			SOUND_TIMER--;
//		}
	},
	onEnter:function() {
		this._super();
		this.schedule(this.delayedEntry, 3);
	},
	delayedEntry:function() {
		cc.$('#diggingGame').style.visibility = "visible";
		cc.$('#canvasHolder').style.backgroundImage = "none";
		if (!IS_IOS) {
  		cc.Application.sharedApplication().playSound("FG_Titles_002");		
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
