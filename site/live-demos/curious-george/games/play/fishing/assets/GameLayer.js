var GameLayer = cc.Layer.extend({
    world:null,
    sprite:null,
    playDayOverSound:false,
    init:function () {
      var size = cc.Director.sharedDirector().getWinSize();
      
      global.newGame = true;
      this.playDayOverSound=false;
      //defining the sort type, and second fish variation we will use
      var availableSortTypes = global.sortTypes;
      
      //random sorting type
      //global.sortType = availableSortTypes[Math.floor(Math.random()*availableSortTypes.length)];
      //ordered sorting type
      global.sortType = availableSortTypes[ global.roundNumber % availableSortTypes.length  ];
      
      //when sorting by size, the shape will be consistent
      if(global.sortType.attribute == 'Size'){
        global.sortType.fixedShape = global.varySize.types[ Math.floor(Math.random()*global.varySize.types.length) ];
      }
      
      //clean up the fish, if there are any
      if (typeof global.aquaWorld !== 'undefined' ){
        for (var b = global.aquaWorld.GetBodyList(); b; b = b.GetNext()) {
          if (b.GetUserData() != null ) {
            if(b.itemType == 'fish') {
              cc.ArrayRemoveObject(global.fishContainer,b.GetUserData());
              b.GetUserData().getParent().removeChild(b.GetUserData(),true);
              global.aquaWorld.DestroyBody(b);
            }
          }
        }
        
        
      }
      //for (var b = this.world.GetBodyList(); b; b = b.GetNext()) {
      // sekai.DestroyBody(body.hookFish.m_bodyB);
      // cc.ArrayRemoveObject(global.fishContainer,this);
      
      this.castButtonRect = new cc.RectMake(700,30,175,90);
      var CastNormal = cc.Sprite.create(s_buttons, cc.RectMake(183, 0, 233, 152));
      var CastSelected = cc.Sprite.create(s_buttons, cc.RectMake(183, 154, 233, 152));
      var CastDisabled = cc.Sprite.create(s_buttons, cc.RectMake(183, 0, 233, 152));
      
      //setting the buttons size to be the whole screen
      var newSize = cc.SizeMake(size.width, size.height);
      var buttonsArray = new Array(CastNormal, CastSelected, CastDisabled);
      for (var i = 0; i < buttonsArray.length; i++) {
        buttonsArray[i]._offsetPosition.x = size.width - 228;
        buttonsArray[i]._offsetPosition.y = 1;
        buttonsArray[i].setContentSize(size);
      }

      var castLine = cc.MenuItemSprite.create(CastNormal, CastSelected, CastDisabled, this, function () {
        if(global.scenes.CastingScene == cc.Director.sharedDirector().getRunningScene()){
          this.onFishingGame();
          this.castLineButton._isEnabled = false;
        }
      });
      this.castLineButton = castLine;
      this.castMenu = cc.Menu.create(castLine);
      this.castMenu.setPosition(cc.ccp(size.width/2, size.height/2));
      this.addChild(this.castMenu, 1, 2);
      if(global.roundNumber === 0){
        this.castLineButton._isEnabled = false; 
        this.castLineButton.setOpacity(200);
      }
  
      //
      var CounterGroup = cc.Node.create();
      cc.SpriteFrameCache.sharedSpriteFrameCache().addSpriteFramesWithFile(s_counter_plist, s_counter);
 
      var counterNumLabel = cc.Sprite.create(s_counter, cc.RectMake(0, 0, 1, 1));
      this.counterNumLabel = counterNumLabel;
      counterNumLabel.setPosition(cc.ccp(513, 255+177));
      this.addChild(counterNumLabel, 5);
       
      
      CounterGroup.setPosition(cc.ccp(631, 393)); //325
      this.CounterGroup = CounterGroup;
      this.addChild(CounterGroup, 5);


      //background
      var skyBackground = cc.Sprite.create(s_sky);
      skyBackground.setPosition(cc.ccp(size.width / 2,size.height / 2));
      this.addChild(skyBackground, -1);
      
      
      var cloudsGroup = cc.Node.create();
      var clouds = cc.Sprite.create(s_clouds);
          clouds.setPosition(cc.ccp(size.width / 2,size.height / 2));
      var clouds2 = cc.Sprite.create(s_clouds);
          clouds2.setPosition(cc.ccp(size.width * 1.5,size.height / 2));
      
      cloudsGroup.addChild(clouds);
      cloudsGroup.addChild(clouds2);
      cloudsGroup.runAction(cc.RepeatForever.create(
        cc.Sequence.create(cc.MoveBy.create(global.cloudSpeed, cc.ccp(-size.width, 0)), cc.MoveTo.create(0, cc.ccp(0, 0)) )
      ));
      
      //SUN sprite
      var sunSprite = cc.Sprite.create(s_sun);
      this.sunSprite = sunSprite;
      sunSprite.setPosition(cc.ccp(0, 370));
      sunSprite._opacity = 0;
      sunSprite._radians = 0;
      var sunContainer = cc.Node.create();
      sunContainer.addChild(sunSprite);
      //add the sun
      this.addChild(sunContainer);
      //add the clouds
      this.addChild(cloudsGroup);
      
      sunContainer.setPosition(cc.ccp(size.width / 2, 40));
      var sunInitialPosition = sunContainer._radians = 90;
      sunContainer.setRotation(sunContainer._radians);
      
      global.roundTimeleft = global.roundTimeout;
      var sunMovementTarget = 180;
      var sunSpeed = sunMovementTarget / global.roundTimeout; //( move x degrees / over the round time )
      this.schedule(this.sunMovement = function(dt){
        if(global.scenes.CastingScene == cc.Director.sharedDirector().getRunningScene()){
          global.roundTimeleft -= 1*dt;
          if(global.roundTimeleft < 1 && global.fishesCaught.length){
            this.unschedule(this.sunMovement);
            this.onFishingDayDidFinish();
          }
          sunContainer._radians = global.roundTimeleft/global.roundTimeout*sunMovementTarget + sunMovementTarget+sunInitialPosition;
          sunContainer.setRotation(sunContainer._radians);
          sunSprite._radians = -sunContainer._radians;
          sunSprite.setRotation(sunSprite._radians);
        }
      }, 1 / global.sunUpdateRate);
      
      //background dock
      this.dockBackground = cc.Sprite.create(s_water_dock, cc.RectMake(0, 0, 900, 626));
      this.dockBackground.setPosition(cc.ccp(size.width / 2,size.height / 2 - 63));
      this.addChild(this.dockBackground);
      
      //george casting
      var frameCache = cc.SpriteFrameCache.sharedSpriteFrameCache();
          frameCache.addSpriteFramesWithFile(s_george_plist, s_george);
      
      var george = new cc.Sprite();
      george.setDisplayFrame(frameCache.spriteFrameByName('george0000'));
      this.addChild(george, 20);
      
      //george.setPosition(cc.ccp(95, -339));
      if(isMobile){
        george.setPosition(cc.ccp(96, -42));
        george.setScaleY(1.1);
        george.setScaleX(2);
      } else {
        george.setPosition(cc.ccp(96, -339));
      }
      
      this.georgeSprite = george;
      
      this.schedule(this.updateGeorge, 1/10);
      
      //sounds
      if(global.roundNumber === 0) {
        //if(!isIOS){
          playSound(snd_activity_listing, 1);
          playSound(snd_casting_welcome_1, 4.5);
          //playSound(snd_casting_welcome_2, 6.5);
          playSound(snd_post_intro, 9);
        // } else {
          // playSound(snd_ios_fishing_intro_1);
        // }
        this.runAction(cc.Sequence.create(cc.DelayTime.create(12), cc.CallFunc.create(this, function(){
          this.castLineButton._isEnabled = true;
          this.castLineButton.setOpacity(255);
        })));  
      } else {
        //if(!isIOS)
        playSound(snd_sort_done_catch_more,1.5);
      }
      global.scenes.CastingScene.replaySound = snd_post_intro;
      this.setTouchEnabled(true);
      document.getElementById('cgp-btn-help').setAttribute('style', 'display: block;');
      return true;
    },
    sunMovement:function(dt){
      
    },
    currentGeorgeFrame:0,
    currentGeorgeStatus:'standing',
    updateGeorge:function(){
      
      if(this.currentGeorgeStatus == 'standing'){
        var nextFrameIdx = 0;
      } else if (this.currentGeorgeStatus == 'waiting'){
        var nextFrameIdx = 21;
      } else if (this.currentGeorgeStatus == 'casting'){
        var nextFrameIdx = this.currentGeorgeFrame+1 > 21 ? 0 : this.currentGeorgeFrame+1;
      }
      
      var framesufix = '' + nextFrameIdx;
      while (framesufix.length < 2) {
          framesufix = '0' + framesufix;
      }
      
      //done casting
      if(nextFrameIdx == 21){
        this.currentGeorgeStatus = 'waiting';
      }
      if(this.currentGeorgeFrame != nextFrameIdx){
        this.georgeSprite.setDisplayFrame(cc.SpriteFrameCache.sharedSpriteFrameCache().spriteFrameByName('george00'  + framesufix ));
        this.currentGeorgeFrame = nextFrameIdx;
      }
      
      
    },
    ccTouchesMoved:function (touches, event) {
      if(global.scenes.CastingScene == cc.Director.sharedDirector().getRunningScene()){
        if( cc.Rect.CCRectContainsPoint(this.castButtonRect, touches[0]._point) ){
          if(this.touchTarget === null && this.castLineButton._isEnabled){
            soundsClear();
            playSound(snd_cast_btn, 0, true);
            this.touchTarget = 'castButtonRect';
            this.castLineButton.selected();
          }
        } else { //touching nothing
          if(this.touchTarget !== null){
            if(this.touchTarget ==  'castButtonRect'){
              this.castLineButton.unselected();
            }
          }
          //this.castLineButton
          
          this.touchTarget = null;
        }
      }
    },
    onFishingGame:function () {
      
      this.currentGeorgeStatus = 'casting';
      
      if (typeof global.scenes.FishingScene === 'undefined' ){
        global.scenes.FishingScene = cc.Scene.create();
        global.scenes.FishingScene.addChild(FishingLayer.create());
       // if(isIOS)   playSound(snd_fishing_welcome,0);
      }
      
      //this.runAction(cc.MoveBy.create(0.05, cc.ccp(0, 40)));
      //this.runAction(cc.Sequence.create(cc.DelayTime.create(3), cc.CallFunc.create(this, this.onFishingDayDidFinish)));
      
      soundsClear();
      
      this.runAction(cc.Sequence.create(cc.DelayTime.create(2), cc.MoveBy.create(0.06, cc.ccp(0, 40)), cc.CallFunc.create(this, function(){
        cc.Director.sharedDirector().pushScene(cc.TransitionSlideInT.create(1.2, global.scenes.FishingScene));
      })));
    },
    onEnter: function(){
      this._super();
      this.setPosition(cc.ccp(0,0));
      this.currentGeorgeStatus = 'standing';
      playSound(snd_not_casting, 18);
      if(!global.newGame && global.fishesCaught.length != global.maxCaughtFish) this.castLineButton._isEnabled = true;
      
      if(global.roundTimeleft < 1 && global.fishesCaught.length){
        this.castLineButton._isEnabled = false;
        this.removeChild(this.castMenu);
      }
      
      if(global.roundTimeleft > 3){
        global.layers.CastingLayer.playDayOverSound = true;
      }
    },
    onExit:function(){
      soundsClear();
      this.sunSprite._opacity = 0;
    },
    onEnterTransitionDidFinish:function(){
      var fadeIn = cc.FadeIn.create(1); 
      this.sunSprite.runAction(fadeIn);
    },
    updateScoreLabels:function(){

      this.counterNumLabel.setDisplayFrame(cc.SpriteFrameCache.sharedSpriteFrameCache().spriteFrameByName('Counter_' + global.fishesCaught.length));

      var counterFish = new cc.Sprite();
      var newPosition = new Object;
      newPosition.x_spacing = 86;
      newPosition.y_spacing = 66;
      newPosition.y_slot = Math.floor((global.fishesCaught.length-1)/2);
      newPosition.x_slot = global.fishesCaught.length % 2 ^ 1;
      counterFish.setDisplayFrame(cc.SpriteFrameCache.sharedSpriteFrameCache().spriteFrameByName('Counter_Fish'));
      var pos = cc.ccp( newPosition.x_slot * newPosition.x_spacing, -  newPosition.y_slot * newPosition.y_spacing );
      counterFish.setPosition(pos);
      this.CounterGroup.addChild(counterFish);

      if(global.fishesCaught.length == global.maxCaughtFish){
        var that = this;
        setTimeout(function(){
          that.onFishingDayDidFinish();
        }, 1000);
      }
      
      playSound( window['snd_caught_'+global.fishesCaught.length] );
      
    },
    returnToFishing: function(){
      this.onFishingGame();
    },
    onFishingDayDidFinish:function(){
      var transitionDelay = 3;
      
      this.playDayOverSound = true; // forcing it to always play
      if(this.playDayOverSound){
        transitionDelay = 7;
        this.runAction(cc.Sequence.create(cc.DelayTime.create(3), cc.CallFunc.create(this, function(){
          playSound(snd_day_over);
        })));
      }
      this.runAction(cc.Sequence.create(cc.DelayTime.create(transitionDelay), cc.CallFunc.create(this, function(){
        global.scenes.SortingScene = cc.Scene.create();
        global.scenes.SortingScene.addChild(SortingLayer.create());
        cc.Director.sharedDirector().replaceScene(cc.TransitionFade.create(1.2, global.scenes.SortingScene));
      })));
      this.castLineButton._isEnabled = false;
      this.removeChild(this.castMenu);
    }
});

GameLayer.create = function () {
    var sg = new GameLayer();
    if (sg && sg.init()) {
      global.layers.CastingLayer = sg;
      return sg;
    }
    return null;
};

GameLayer.scene = function () {
    var scene = cc.Scene.create();
    var layer = GameLayer.create();
    scene.addChild(layer, 1);
    return scene;
};