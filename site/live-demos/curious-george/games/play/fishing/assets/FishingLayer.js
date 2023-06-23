var TAG_SPRITE_MANAGER = 1;
var PTM_RATIO = 32;

var FishingLayer = cc.Layer.extend({
    _time:null,
    _levelManager:null,
    _reelButtonSprites:{},
    world:null,
    fishBodies:[],
    init:function () {
        this.setTouchEnabled(true);
        var winSize = this.winSize = cc.Director.sharedDirector().getWinSize();
        
        //define some box2d variables..
        var b2Vec2 = Box2D.Common.Math.b2Vec2
          , b2BodyDef = Box2D.Dynamics.b2BodyDef
          , b2Body = Box2D.Dynamics.b2Body
          , b2FixtureDef = Box2D.Dynamics.b2FixtureDef
          , b2World = Box2D.Dynamics.b2World
          , b2DebugDraw = Box2D.Dynamics.b2DebugDraw
          , b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
        
        //create the world..
        this.world = new b2World(new b2Vec2(0, 0), true);
        this.world.SetContinuousPhysics(false);
        
        //world bodies?
        var fixDef = new b2FixtureDef;
        fixDef.density = 1.0;
        fixDef.friction = 0.5;
        fixDef.restitution = 0.2;

        var bodyDef = new b2BodyDef;

        //create ground
        bodyDef.type = b2Body.b2_staticBody;
        fixDef.shape = new b2PolygonShape;
        fixDef.shape.SetAsBox(2, 2);
        
        // upper
        var upperOffsetX = 0.5;
        
        this.anchorInitialPosition = new b2Vec2();
        this.anchorInitialPosition.x = winSize.width/2 / PTM_RATIO +upperOffsetX;
        this.anchorInitialPosition.y = winSize.height / PTM_RATIO + 10;
        
        bodyDef.position.Set(this.anchorInitialPosition.x, this.anchorInitialPosition.y);
        var topAnchor = this.world.CreateBody(bodyDef);
        topAnchor.itemType = 'anchor';
        this.topAnchor = topAnchor;
        global.topAnchor = topAnchor;
        topAnchor.CreateFixture(fixDef);        
        
        //a sprite batch fish
        this.addLine(topAnchor);
        
        var mgr = cc.SpriteBatchNode.create(s_fish, 150);
        this.addChild(mgr, 0, TAG_SPRITE_MANAGER);

        
        //water background        
        this.waterBackground = cc.Sprite.create(s_water_dock, cc.RectMake(0, 540, 900, 500));
        this.waterBackground.setPosition(cc.ccp(winSize.width / 2,winSize.height / 2));
        this.addChild(this.waterBackground, -1);
        Fish.sharedFish();

        this._levelManager = new LevelManager(this);
        
        // hook controls
        // add a "close" icon to exit the progress. it's an autorelease object
        var hookBottomNormal2 = cc.Sprite.create(s_buttons, cc.RectMake(418, 0, 122, 122));
        var hookBottomSelected2 = cc.Sprite.create(s_buttons, cc.RectMake(418, 118, 122, 122));
        var hookBottomDisabed2 = cc.Sprite.create(s_buttons, cc.RectMake(418, 0, 122, 122));
        
        var hookBottomNormal = cc.Sprite.create(s_buttons, cc.RectMake(542, 0, 122, 122));
        var hookBottomSelected = cc.Sprite.create(s_buttons, cc.RectMake(542, 118, 122, 122));
        var hookBottomDisabed = cc.Sprite.create(s_buttons, cc.RectMake(542, 0, 122, 122));
        
        //setting the width of the hook/reel buttons to the width of the screen
        var newButtonsSize = cc.SizeMake(winSize.width, 300);
        var hookSprites = new Array(hookBottomNormal2, hookBottomSelected2, hookBottomDisabed2, hookBottomNormal, hookBottomSelected, hookBottomDisabed);
        for (var i = 0; i < hookSprites.length; i++) {
          hookSprites[i]._offsetPosition.x = winSize.width/2-61;
          hookSprites[i]._offsetPosition.y = 150-61;
          hookSprites[i].setContentSize(newButtonsSize);
        }
            
        var hookBottomButton = cc.MenuItemSprite.create(hookBottomNormal, hookBottomSelected, hookBottomDisabed, this, function () {
          if(isAndroid){
            var pos = topAnchor.GetPosition();
            pos.y -= 4;
            topAnchor.SetPosition(pos);
          }
          topAnchor.stepDisplacement = 0;
        });
        
        var hookTopButton = cc.MenuItemSprite.create(hookBottomNormal2, hookBottomSelected2, hookBottomDisabed2, this, function () {
          if(isAndroid){
            var pos = topAnchor.GetPosition();
            pos.y += 4;
            topAnchor.SetPosition(pos);
          }
          topAnchor.stepDisplacement = 0;
        });
        hookBottomButton.hookDirection = -0.25;
        hookTopButton.hookDirection = 0.25;
        
        //overriding the touch began method..
        var menu = cc.Menu.create(hookTopButton, hookBottomButton);
        menu.menuParentTouchBegan = menu.ccTouchBegan;
        menu.ccTouchBegan = function(touch, e){
          if(this._itemForTouch(touch)){
            topAnchor.stepDisplacement = this._itemForTouch(touch).hookDirection/2;
          }
          return menu.menuParentTouchBegan(touch, e);
        };
        //menu.alignItemsVerticallyWithPadding(100);
        this.hook.control_menu = menu;
        this.addChild(menu, 1, 100);
    
        
        // reeling button
        ////state 1 green
        this._reelButtonSprites.reel1Normal = cc.Sprite.create(s_buttons, cc.RectMake(966, 0, 148, 138));
        this._reelButtonSprites.reel1Selected = cc.Sprite.create(s_buttons, cc.RectMake(966, 140, 148, 138));
        this._reelButtonSprites.reel1Disabed = cc.Sprite.create(s_buttons, cc.RectMake(966, 0, 148, 138));
        ////state 2 yelloish
        this._reelButtonSprites.reel2Normal = cc.Sprite.create(s_buttons, cc.RectMake(816, 0, 148, 138));
        this._reelButtonSprites.reel2Selected = cc.Sprite.create(s_buttons, cc.RectMake(816, 140, 148, 138));
        this._reelButtonSprites.reel2Disabed = cc.Sprite.create(s_buttons, cc.RectMake(816, 0, 148, 138));
        ////state 1 red
        this._reelButtonSprites.reel3Normal = cc.Sprite.create(s_buttons, cc.RectMake(666, 0, 148, 138));
        this._reelButtonSprites.reel3Selected = cc.Sprite.create(s_buttons, cc.RectMake(666, 140, 148, 138));
        this._reelButtonSprites.reel3Disabed = cc.Sprite.create(s_buttons, cc.RectMake(666, 0, 148, 138));
        
        //applying the expanded click area to the reel button
        //var newButtonsSize = cc.SizeMake(winSize.width, 300);
        var newReelButtonSize = cc.SizeMake(winSize.width, winSize.height);

        for (var i in this._reelButtonSprites) {
          this._reelButtonSprites[i]._offsetPosition.x = winSize.width/2-74;
          this._reelButtonSprites[i]._offsetPosition.y = winSize.height-60-69; //bottom-pad-halfofheight
          this._reelButtonSprites[i].setContentSize(newReelButtonSize);
        }

        var reelButton = cc.MenuItemSprite.create(this._reelButtonSprites.reel1Normal, this._reelButtonSprites.reel1Selected, this._reelButtonSprites.reel1Disabed, this, function () {
            if(this.hook.touchReeling){
              this.hook.touchReeling = false;
              //console.log('touch reeling false');
            }
            this.hook.reel();
            
           if(this.topAnchor.hookedFish){
              if(this.topAnchor.hookedFish.getPosition().y > 515 ){
                 this.topAnchor.hookedFish.lose( this.topAnchor.theHook );
              }
            }
              
        });

        var reel_menu = cc.Menu.create(reelButton);
        reelButton.setPosition(cc.ccp(-1000, 0));

        this.hook.reelButton = reelButton;
        this.hook.reelButtonSprites = this._reelButtonSprites;
        this.addChild(reel_menu, 1, 100);
        
        
        
        //overriding the touch began method..
        reel_menu.menuParentTouchBegan = reel_menu.ccTouchBegan;
        reel_menu.ccTouchBegan = function(touch, e){
          if(this._itemForTouch(touch)){
            global.layers.FishingLayer.hook.touchReeling = true;
          }
          return reel_menu.menuParentTouchBegan(touch, e);
        };

        //hook contact logic..
        this.addHookContact();

        //setup debug draw
        if(global.useFishingDebugCanvasOverlay){
          var debugDraw = new b2DebugDraw();
          debugDraw.SetSprite(document.getElementById("debugCanvas").getContext("2d"));
          debugDraw.SetDrawScale(32.0);
          debugDraw.SetFillAlpha(1);
          debugDraw.SetLineThickness(1.0);
          debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
          this.world.SetDebugDraw(debugDraw);
          window.setInterval(updateDeb, 1000/60);
          debugworld = this.world;
          function updateDeb() {
            debugworld.DrawDebugData();
          } 
        };
        global.aquaWorld = this.world;
       
        return true;
    },
    updateBox:function (dt) {
        //It is recommended that a fixed time step is used with Box2D for stability
        //http://gafferongames.com/game-physics/fix-your-timestep/
        var  winSize = cc.Director.sharedDirector().getWinSize();
        var  velocityIterations = 8;
        var  positionIterations = 1;

        // Instruct the world to perform a single step of simulation. It is
        // generally best to keep the time step and iterations fixed.
        this.world.Step(dt, velocityIterations, positionIterations);
        
        if(this.topAnchor.stepDisplacement && this.topAnchor.stepDisplacement != 0){
          var pos = this.topAnchor.GetPosition();
          
          
          if(this.topAnchor.hookedFish){
            if(this.topAnchor.hookedFish.getPosition().y > 515 ){
               if(this.hook.touchReeling){
                 if(!isIOS)  this.topAnchor.hookedFish.lose( this.topAnchor.theHook );
              }
            }
          }
          
          if(pos.y+this.topAnchor.stepDisplacement < 36.5 && pos.y+this.topAnchor.stepDisplacement > 20  ||
             pos.y+this.topAnchor.stepDisplacement < 37 && this.topAnchor.hookedFish && pos.y+this.topAnchor.stepDisplacement > 20  ){
            pos.y += this.topAnchor.stepDisplacement;
            this.topAnchor.SetPosition(pos);
          }
        }

        //line joint spring
        var rja = this.world.lineJoint.GetJointAngle();
        this.world.lineJoint.SetMaxMotorTorque(Math.abs((rja * 500) + (this.world.lineJoint.GetJointSpeed() * 100)));
        this.world.lineJoint.SetMotorSpeed(rja > 0 ? -100 : +100);

        //Iterate over the bodies in the physics world
        for (var b = this.world.GetBodyList(); b; b = b.GetNext()) {
            if (b.GetUserData() != null ) {
              var screenPadding = winSize.width/5;
              if(b.itemType == 'fish') {
              
                //looping left/right boundaries
                if(b.GetPosition().x * PTM_RATIO > winSize.width+screenPadding ){
                  var pos = b.GetPosition();
                  pos.x = -screenPadding/ PTM_RATIO;
                  b.SetPosition(pos);
                } else
                if(b.GetPosition().x * PTM_RATIO < -screenPadding ){
                  var pos = b.GetPosition();
                  pos.x = (winSize.width + screenPadding) / PTM_RATIO;
                  b.SetPosition(pos);
                }
                
                //looping top/bottom boundaries
                if(b.GetPosition().y * PTM_RATIO > winSize.height+screenPadding/4 ){
                  if(!b.GetUserData().HookedBy){
                    var pos = b.GetPosition();
                    pos.y = -screenPadding/PTM_RATIO;
                    b.SetPosition(pos);
                  }
                } else
                if(b.GetPosition().y * PTM_RATIO < -screenPadding ){
                  var pos = b.GetPosition();
                  pos.y = (winSize.height+screenPadding/4) / PTM_RATIO;
                  b.SetPosition(pos);
                }
                
                
                //Synchronize the AtlasSprites position and rotation with the corresponding body
                var myActor = b.GetUserData();
                myActor.setPosition(cc.PointMake(b.GetPosition().x * PTM_RATIO, b.GetPosition().y * PTM_RATIO));
                
                var degrees = cc.RADIANS_TO_DEGREES(b.GetAngle());
                if(degrees > 180){
                  degrees -= 360;
                } else 
                if (degrees < -180){
                  degrees += 360;
                }
                
                var targetDegree = 0;
                switch(true){
                  case (degrees > 90):
                    targetDegree = 180;
                    b.GetUserData()._flipY = true;
                    break;
                  case (degrees < -90):
                    targetDegree = -180;
                    b.GetUserData()._flipY = true;
                    break;
                  default:
                    b.GetUserData()._flipY = false;
                    break;
                }
                
                var degreeDif = (targetDegree-degrees)/40;
                degrees += degreeDif;
                
                b.SetAngle( cc.DEGREES_TO_RADIANS( degrees ) );
                
                //Sprite Rotation 1
                if(global.fishSpriteDirection.follow == 'bodyAngle'){
                  myActor.setRotation(-1 * degrees);
                } else 
                if(global.fishSpriteDirection.follow == 'linearAcc'){
                  if(b.GetLinearVelocity().x > 0){
                    b.GetUserData()._flipY = true;
                  } else {
                    b.GetUserData()._flipY = false;
                  }
                  myActor.setRotation(cc.RADIANS_TO_DEGREES(Math.atan2(b.GetLinearVelocity().x, b.GetLinearVelocity().y))+90);
                }
              
              } else if(b.itemType == 'hook_rope' && this.world.hookLineJoint){
                var hook_x_line = this.hookBody.GetWorldPoint(this.world.hookLineJoint.localAnchorB);
                
                var lineSprite = b.GetUserData();
                
                lineSprite.setPosition(cc.PointMake(hook_x_line.x * PTM_RATIO, hook_x_line.y * PTM_RATIO));
                
                var linespriteheight = 565; //var linespriteheight = lineSprite.getContentSize().height;
                var viewHeight = 500;
                
                lineSprite.setRotation(-1 * cc.RADIANS_TO_DEGREES(b.GetAngle()));
                lineSprite.setScaleY(  (viewHeight - hook_x_line.y * PTM_RATIO) / linespriteheight / Math.cos(b.GetAngle()));
              } else {
                //Synchronize the AtlasSprites position and rotation with the corresponding body
                var myActor = b.GetUserData();
                myActor.setPosition(cc.PointMake(b.GetPosition().x * PTM_RATIO, b.GetPosition().y * PTM_RATIO));
                myActor.setRotation(-1 * cc.RADIANS_TO_DEGREES(b.GetAngle()));
              }
              
            } 
        }
    },
    resetLineForces: function(){
     if(this.hookBody && this.lineBody){
       var b2Vec2 = Box2D.Common.Math.b2Vec2;
        
        this.hookBody.SetPosition(this.hookInitialPosition);
        this.hookBody.SetAngle(0);
        this.hookBody.SetAngularVelocity(0);
        this.hookBody.SetLinearVelocity(new b2Vec2(0,0));
        
        this.lineBody.SetPosition(this.lineInitialPosition);
        this.lineBody.SetAngle(0);
        this.lineBody.SetAngularVelocity(0);
        this.lineBody.SetLinearVelocity(new b2Vec2(0,0));
        
        this.topAnchor.stepDisplacement = 0;
        this.topAnchor.SetPosition(this.anchorInitialPosition);
        
        this.world.hook_rest_time = 3;
      }
    },
    onEnterTransitionDidFinish:function(){
      if(global.newGame){
        /*if(!isIOS)*/ playSound(snd_fishing_welcome,0);
        global.newGame = false;
      }
      global.scenes.FishingScene.replaySound = snd_fishing_welcome;
      global.layers.CastingLayer.playDayOverSound = false;
    },
    onEnter:function(){
      this._super();
      this.resetLineForces();
      this.hook.touchReeling = false;
      // schedule
      this.schedule(this.updateBox);
      this.schedule(this.impulseAllFish, 1/20);
      this.schedule(this.updateGlobalTimeout, 1 / global.sunUpdateRate);
      this.schedule(this.fishCounter, 1);
      
      this.hook.control_menu.alignItemsVerticallyWithPadding(100);
      
      this.hook.newHook.setDisplayFrame(cc.SpriteFrameCache.sharedSpriteFrameCache().spriteFrameByName('hook_worm'));
      this.world.hook_rest_time = 3;
      this.hook.newHook.letGo();

    },
    addHookContact:function(){
      
      var aquaWorld = this.world;
      
      var b2Listener = Box2D.Dynamics.b2ContactListener;
      
      //Add listeners for contact
      var listener = new b2Listener;
      
      listener.BeginContact = function(contact) {
          //console.log(contact.GetFixtureA().GetBody().GetUserData());
      }
      
      listener.EndContact = function(contact) {
          // console.log(contact.GetFixtureA().GetBody().GetUserData());
      }
      
      listener.PostSolve = function(contact, impulse) {

          if (contact.GetFixtureA().GetBody().itemType == 'fish' && contact.GetFixtureB().GetBody().itemType == 'hook_hook' || 
              contact.GetFixtureA().GetBody().itemType == 'hook_hook' && contact.GetFixtureB().GetBody().itemType == 'fish') {
              
              if (contact.GetFixtureA().GetBody().itemType == 'fish') {
                  var fishBody = contact.GetFixtureA().GetBody();
                  var hookBody = contact.GetFixtureB().GetBody();
                } else {
                  var fishBody = contact.GetFixtureB().GetBody();
                  var hookBody = contact.GetFixtureA().GetBody();
                }
              
              //let the fish rest after being.. captured/released/abused
              if(hookBody.beingBitten == false &&  fishBody.GetUserData().RestTime < 1){

                var b2RevoluteJointDef=Box2D.Dynamics.Joints.b2RevoluteJointDef;
                var myjoint = new b2RevoluteJointDef();
                myjoint.bodyA = hookBody;
                myjoint.bodyB = fishBody;
                myjoint.localAnchorA.Set(-0.6,0);
                myjoint.localAnchorB.Set(0.3,0);
                myjoint.collideConnected=false;
                
                hookBody.hookFish = aquaWorld.CreateJoint(myjoint);
                fishBody.GetUserData().bite( hookBody.GetUserData() );
              
              }
          }
      }
      
      listener.PreSolve = function(contact, oldManifold) {
          if (contact.GetFixtureA().GetBody().itemType == 'fish' && contact.GetFixtureB().GetBody().itemType == 'hook_hook' || 
              contact.GetFixtureA().GetBody().itemType == 'hook_hook' && contact.GetFixtureB().GetBody().itemType == 'fish') {
            
            if(aquaWorld.hook_rest_time > 0){
              contact.SetEnabled(false);
            }
          }
      }
      
      this.world.SetContactListener(listener);
      
    },
    addLine:function(anchor){
     
        var sprite = cc.Sprite.create(s_line);
        this.addChild(sprite, 0);
        //the anchor will be the hook joint
        sprite.setAnchorPoint(new cc.Point(0.5, 0))     
        
         var b2BodyDef = Box2D.Dynamics.b2BodyDef
            , b2Vec2 = Box2D.Common.Math.b2Vec2
            , b2Body = Box2D.Dynamics.b2Body
            , b2FixtureDef = Box2D.Dynamics.b2FixtureDef
            , b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape,
            b2RevoluteJointDef=Box2D.Dynamics.Joints.b2RevoluteJointDef;

        var bodyDef = new b2BodyDef();
        bodyDef.type = b2Body.b2_dynamicBody;
        bodyDef.userData = sprite;
        var body = this.world.CreateBody(bodyDef);
        body.itemType = 'hook_rope';

        // Define another box shape for our dynamic body.
        var dynamicBox = new b2PolygonShape();
        dynamicBox.SetAsBox(sprite.getContentSize().width/2 / PTM_RATIO, sprite.getContentSize().height/2 / PTM_RATIO);//These are mid points for our 1m box

        // Define the dynamic body fixture.
        var fixtureDef = new b2FixtureDef();
        fixtureDef.shape = dynamicBox;
        fixtureDef.density = 0.2;
        fixtureDef.friction = 0.3;
        fixtureDef.filter.groupIndex = -2;
        body.CreateFixture(fixtureDef);
        
        this.lineInitialPosition = new b2Vec2();
        this.lineInitialPosition.x = anchor.GetPosition().x;
        this.lineInitialPosition.y = anchor.GetPosition().y;
        
        body.SetPosition(this.lineInitialPosition);
        
        var myjoint = new b2RevoluteJointDef();
            myjoint.bodyA = anchor;
            myjoint.bodyB = body;
            myjoint.localAnchorA.Set(0,0.5);
            myjoint.localAnchorB.Set(0,11);
            myjoint.enableLimit = true;
            myjoint.enableMotor = true;
            myjoint.lowerAngle = -0.52;
            myjoint.upperAngle = 0.52;
            this.world.lineJoint = this.world.CreateJoint(myjoint);
            this.world.lineJoint.Set          
      this.lineBody = body;
      this.addHook(body);
      
    },
    addHook:function(rope){
      
      this.world.hook_rest_time = 0;
      
      var frameCache = cc.SpriteFrameCache.sharedSpriteFrameCache();
          frameCache.addSpriteFramesWithFile(s_Hook_plist, s_hook);
  
      var sprite = new cc.Sprite();
      sprite.setDisplayFrame(frameCache.spriteFrameByName('hook_worm'));
      this.addChild(sprite);

       var b2BodyDef = Box2D.Dynamics.b2BodyDef
          , b2Vec2 = Box2D.Common.Math.b2Vec2
          , b2Body = Box2D.Dynamics.b2Body
          , b2FixtureDef = Box2D.Dynamics.b2FixtureDef
          , b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape,
          b2RevoluteJointDef=Box2D.Dynamics.Joints.b2RevoluteJointDef;

      var bodyDef = new b2BodyDef();
      bodyDef.type = b2Body.b2_dynamicBody;
      bodyDef.userData = sprite;
      bodyDef.restitution = 0.9;
      bodyDef.angularDamping = 5;
      var body = this.world.CreateBody(bodyDef);
      body.itemType = 'hook_hook';
      body.beingBitten = false;
      
      oldHook = this.hook;
      oldHook.newHook = sprite;
      var sekai = this.world;
      var theLayer = this;
      sprite.setBusy = function(bool){
        oldHook.setBusy(bool);
        body.beingBitten = bool;
        if(bool)
          sprite.setDisplayFrame(frameCache.spriteFrameByName('hook_noworm'));
        else
          sekai.hook_rest_time = 3;
      };
      sprite.updateReelButton = function(huahua){
        huahua += 0.2;
        global.topAnchor.stepDisplacement = 0.25 - 0.5 * huahua;
        oldHook.updateReelButton(huahua);
      };
      sprite.letGo = function(){
        if(body.hookFish){
          sekai.DestroyJoint(body.hookFish);
          body.beingBitten = false;
        }
        this.SetHooked(null);
        this.setBusy(false);
      };
      var topAnchor = this.topAnchor;
          topAnchor.theHook = sprite;
      
      sprite.SetHooked = function(hooked){
        oldHook.hooked = hooked;
        //used to catch the fish if it gets near the surface
        topAnchor.hookedFish = hooked;
        if(hooked)
        this.setBusy(true);
      };
      sprite.destroyHookedFish = function(){
        if(body.hookFish){
         sekai.DestroyBody(body.hookFish.m_bodyB);
        }
      };
      sprite.initPosition = function(){
        global.topAnchor.stepDisplacement = -0.1;
      };
      this.hookBody = body;

      // Define another box shape for our dynamic body.
      var dynamicBox = new b2PolygonShape();
      dynamicBox.SetAsBox(sprite.getContentSize().width/2/ PTM_RATIO, sprite.getContentSize().height/2 / PTM_RATIO);//These are mid points for our 1m box

      // Define the dynamic body fixture.
      var fixtureDef = new b2FixtureDef();
      fixtureDef.shape = dynamicBox;
      fixtureDef.density = 7;
      fixtureDef.friction = 1;
      body.CreateFixture(fixtureDef);
      
      this.hookInitialPosition = new b2Vec2();
      this.hookInitialPosition.x = rope.GetPosition().x;
      this.hookInitialPosition.y = 13;
      
      body.SetPosition(this.hookInitialPosition);

      var myjoint = new b2RevoluteJointDef();
          myjoint.bodyA = rope;
          myjoint.bodyB = body;
          myjoint.localAnchorA.Set(0,-rope.GetUserData().getContentSize().height/2 / PTM_RATIO   + 0);
          myjoint.localAnchorB.Set(0,sprite.getContentSize().height/2 / PTM_RATIO -0.1);
          
          myjoint.enableLimit = true;
          myjoint.lowerAngle = -0.3;
          myjoint.upperAngle = 0.3;
          
      this.world.CreateJoint(myjoint);
      this.world.hookLineJoint = myjoint;
    },
    addNewSprite:function (sprite) {
      var winSize = cc.Director.sharedDirector().getWinSize();

      var batch = this.getChildByTag(TAG_SPRITE_MANAGER);

      batch.addChild(sprite);
      
      // Define the dynamic body.
      var b2BodyDef = Box2D.Dynamics.b2BodyDef
          , b2Body = Box2D.Dynamics.b2Body
          , b2FixtureDef = Box2D.Dynamics.b2FixtureDef
          , b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;

      var bodyDef = new b2BodyDef();
      bodyDef.type = b2Body.b2_dynamicBody;
      
      bodyDef.userData = sprite;
      bodyDef.linearDamping = 0.3;
      bodyDef.angularDamping = 2;
      
      //initial fish position
      var p = { x:-winSize.width/4, y:winSize.height * Math.random()  };
      bodyDef.position.Set(p.x / PTM_RATIO, p.y / PTM_RATIO);
      sprite.setPosition(cc.ccp(p.x,p.y));
      
      var body = this.world.CreateBody(bodyDef);
      body.itemType = 'fish';

      // Define another box shape for our dynamic body.
      var dynamicBox = new b2PolygonShape();

      dynamicBox.SetAsBox(sprite.getContentSize().width/PTM_RATIO/2/2, sprite.getContentSize().height/PTM_RATIO/2);//These are mid points for our 1m box

      // Define the dynamic body fixture.
      var fixtureDef = new b2FixtureDef();
      fixtureDef.shape = dynamicBox;
      fixtureDef.density = 1.0;
      fixtureDef.friction = 0.3;
      fixtureDef.filter.groupIndex = -2;
      body.CreateFixture(fixtureDef);
      
      sprite._flipX = true;
      if(Math.random() < 0.5 ){
        body.SetAngle( body.GetAngle()+3.14);
        sprite._flipY = true;
      }
      
      this.impulseFish(body, true);
      this.fishBodies.push(body);
        
    },
    impulseFish:function(body, forceImpulse){
      if(forceImpulse || Math.random() < 0.02 ){
        
        var force = 2;
        var fishMass = body.GetMass();
        force = force * fishMass;
        
        var randomBias = -1 + Math.random()*2;
        var angle = body.GetAngle()-randomBias;
        var bodyPosition = body.GetPosition();
        
        if(body.GetLinearVelocity().x < 0){
          bodyPosition.x -= 0.2 * fishMass;
        } else {
          bodyPosition.x += 0.2 * fishMass;
        }
        
        var impulse = new Box2D.Common.Math.b2Vec2( Math.cos(angle) * force, Math.sin(angle) * force);
        body.ApplyImpulse( impulse, bodyPosition );
      }
    },
    impulseAllFish:function(){
      
        for (var fid = 0; fid < this.fishBodies.length; fid++) {
          var fishBody = this.fishBodies[fid];
          this.impulseFish(fishBody);
        }
    },
    updateGlobalTimeout:function(dt){
      if(global.scenes.FishingScene == cc.Director.sharedDirector().getRunningScene()){
        global.roundTimeleft -= 1*dt;
        
        if(global.roundTimeleft < 1 && global.fishesCaught.length){
          //this.onFishingDayDidFinish(); //we wont end the game if we are still in the fishing scene
        } 
      }
    },
    hook: {
      busy:false,
      used_sounds:{},
      setBusy : function(is_busy){
        this.busy = is_busy;
        var winSize = cc.Director.sharedDirector().getWinSize();
        if(is_busy){
          //a way of hiding/disabling menu items..
          this.control_menu.alignItemsVerticallyWithPadding(3900);
          this.reelButton.setPosition(cc.ccp(0, 0));
          this.used_sounds = {};
        } else {
          //this.control_menu.alignItemsVerticallyWithPadding(100);
          this.reelButton.setPosition(cc.ccp(-1000, 0));
        }
        
      },
      control_menu : null,
      reelButton : null,
      reelButtonSprites : {},
      hooked: null,
      touchReeling:false,
      reel : function(){
        if(this.hooked){
          var fishRelativeStamina = this.hooked.pull(this.newHook);
          this.updateReelButton(fishRelativeStamina);
        }
      },
      updateReelButton : function(relative_stamina){
        var x = Math.round(relative_stamina*100);
        cc.Log('Stamina: ' + x + '%');
        switch (true) {
          case (x >= 80):
            if(this.used_sounds.high !== true)
            playSound(snd_reel_red, 0, true);
            this.used_sounds.high = true;
            this.reelButton.setNormalImage(this.reelButtonSprites.reel3Normal);
            this.reelButton.setSelectedImage(this.reelButtonSprites.reel3Selected);
            this.reelButton.setDisabledImage(this.reelButtonSprites.reel3Disabled);
            break;
          case (x > 60 && x < 80):
            if(this.used_sounds.mid !== true)
            playSound(snd_slow_tap, 0, true);
            this.used_sounds.mid = true;
            this.reelButton.setNormalImage(this.reelButtonSprites.reel2Normal);
            this.reelButton.setSelectedImage(this.reelButtonSprites.reel2Selected);
            this.reelButton.setDisabledImage(this.reelButtonSprites.reel2Disabled);
            break;
          case (x <= 60):
            this.reelButton.setNormalImage(this.reelButtonSprites.reel1Normal);
            this.reelButton.setSelectedImage(this.reelButtonSprites.reel1Selected);
            this.reelButton.setDisabledImage(this.reelButtonSprites.reel1Disabled);
            break;
        }
      }
    },
    fishCounter : function(){
      this.world.hook_rest_time--;
      this._time++;
      this._levelManager.loadLevelResource(this._time);
      if(this.hook.touchReeling == true){
        this.hook.reel();
        this.hook.reel();
      }
    },
    onFishingDayDidFinish:function(){
      if (this.world.hook_rest_time < 1 && !this.hook.busy){
        global.scenes.SortingScene = cc.Scene.create();
        global.scenes.SortingScene.addChild(SortingLayer.create());
        cc.Director.sharedDirector().replaceScene(cc.TransitionFade.create(1.2, global.scenes.SortingScene));
      }
    }
});

FishingLayer.create = function () {
    var sg = new FishingLayer();
    if (sg && sg.init()) {
      global.layers.FishingLayer = sg;
      return sg;
    }
    return null;
};

FishingLayer.scene = function () {
    var scene = cc.Scene.create();
    var layer = FishingLayer.create();
    scene.addChild(layer, 1);
    return scene;
};