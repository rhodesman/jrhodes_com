var SortingLayer = cc.Layer.extend({
    sortType:global.sortType,
    fishesToSort: global.fishesCaught,
    successfulFishCount:0,
    fishOptions:[],
    world:null,
    airGravity: 0.4,
    waterGravity: 11,
    air_water_limit: 8,
    fishBodies:[],
    sortOptionReady:false,
    init:function () {
      var winSize = cc.Director.sharedDirector().getWinSize();
      
      //background
      var skyBackground = cc.Sprite.create(s_sky);
      skyBackground.setPosition(cc.ccp(winSize.width / 2,winSize.height / 2));
      this.addChild(skyBackground, -1);
      
      
      var cloudsGroup = cc.Node.create();
      var clouds = cc.Sprite.create(s_clouds);
          clouds.setPosition(cc.ccp(winSize.width / 2,winSize.height / 2));
      var clouds2 = cc.Sprite.create(s_clouds);
          clouds2.setPosition(cc.ccp(winSize.width * 1.5,winSize.height / 2));
          
      this.addChild(cloudsGroup, -1);
      cloudsGroup.addChild(clouds);
      cloudsGroup.addChild(clouds2);
      cloudsGroup.runAction(cc.RepeatForever.create(
        cc.Sequence.create(cc.MoveBy.create(global.cloudSpeed, cc.ccp(-winSize.width, 0)), cc.MoveTo.create(0, cc.ccp(0, 0)) )
      ));
      
      
      var sortingDockBackground = cc.Sprite.create(s_dock_george);
      sortingDockBackground.setPosition(cc.ccp(winSize.width / 2,winSize.height / 2));
      this.addChild(sortingDockBackground, -1);
      
      var sortingDockForeground = cc.Sprite.create(s_tank_front);
      sortingDockForeground.setPosition(cc.ccp(winSize.width / 2,winSize.height / 2));
      this.addChild(sortingDockForeground, 10);
      
      // this.sortingLabel = cc.LabelTTF.create("Sorting Fish by: " + global.sortType.attribute, "Arial", 70);
      // this.sortingLabel.setHorizontalAlignment('left');
      // this.sortingLabel.setPosition(cc.ccp(winSize.width / 2, winSize.height-100));
      // this.addChild(this.sortingLabel, 5);
      
      this.waterBackground = cc.Sprite.create(s_water_dock, cc.RectMake(0, 540, 900, 500));
      
      
      
      //adding the container world
        var b2Vec2 = Box2D.Common.Math.b2Vec2
          , b2BodyDef = Box2D.Dynamics.b2BodyDef
          , b2Body = Box2D.Dynamics.b2Body
          , b2FixtureDef = Box2D.Dynamics.b2FixtureDef
          , b2World = Box2D.Dynamics.b2World
          , b2DebugDraw = Box2D.Dynamics.b2DebugDraw
          , b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;

      this.world = new b2World(new b2Vec2(0, 10), true);
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
      fixDef.restitution = 0.1;
      // upper
      var upperOffsetX = 0.5;
      
      this.anchorInitialPosition = new b2Vec2();
      this.anchorInitialPosition.x = winSize.width/2 / PTM_RATIO +upperOffsetX;
      this.anchorInitialPosition.y = winSize.height / PTM_RATIO + 10;
      
      bodyDef.position.Set(this.anchorInitialPosition.x, this.anchorInitialPosition.y);
      
        
       
        
      fixDef.shape.SetAsBox(20, 2);
      // bottom
      bodyDef.position.Set(10, -0.5);
      this.world.CreateBody(bodyDef).CreateFixture(fixDef);
      
      //shrot vertical wall
      fixDef.shape.SetAsBox(0.2, 3);

      // middleleft
      bodyDef.position.Set(11.4, 3);
      this.world.CreateBody(bodyDef).CreateFixture(fixDef);
      // middleright
      bodyDef.position.Set(19, 3);
      this.world.CreateBody(bodyDef).CreateFixture(fixDef);
      
      
      //tall vertical wall
      fixDef.shape.SetAsBox(0.2, 10);
      
      // left
      bodyDef.position.Set(3, 3);
      this.world.CreateBody(bodyDef).CreateFixture(fixDef);
      // right
      bodyDef.position.Set(27.5, 3);
      this.world.CreateBody(bodyDef).CreateFixture(fixDef);
      
      
      // end of container world init
      
      // fishOptions      
      
      var s_fishsigns = s_containersigns;
      
      if(global.sortType.attribute == 'Size'){
        //small
        var firstSortOption = cc.RectMake(0, 204, 156, 102);
        var firstSortOptionSelected = firstSortOption;
        //med
        var secondSortOption = cc.RectMake(156, 204, 156, 102);
        var secondSortOptionSelected = secondSortOption;
        //large
        var thirdSortOption = cc.RectMake(312, 204, 156, 102);
        var thirdSortOptionSelected = thirdSortOption;
      } else
      if (global.sortType.attribute == 'Shape'){
        //fit
        var firstSortOption = cc.RectMake(312, 0, 156, 102);
        var firstSortOptionSelected = firstSortOption;
        //fat
        var secondSortOption = cc.RectMake(156, 0, 156, 102);
        var secondSortOptionSelected = secondSortOption;
        //flat
        var thirdSortOption = cc.RectMake(0, 0, 156, 102);
        var thirdSortOptionSelected = thirdSortOption;
      } else
      if (global.sortType.attribute == 'Color'){
        //red
        var firstSortOption = cc.RectMake(156, 102, 156, 102);
        var firstSortOptionSelected = firstSortOption;
        //yellow
        var secondSortOption = cc.RectMake(0, 102, 156, 102);
        var secondSortOptionSelected = secondSortOption;
        //blue
        var thirdSortOption = cc.RectMake(312, 102, 156, 102);
        var thirdSortOptionSelected = thirdSortOption;
      }
      
      var fishOptionSprites = [];
      
      // ~ fishOptions ~ 1
      var fishOptionNormal = cc.Sprite.create(s_fishsigns, firstSortOption);
      var fishOptionSelected = cc.Sprite.create(s_fishsigns, firstSortOptionSelected);
          fishOptionSelected.setRotation(1);
      var fishOptionDisabled = cc.Sprite.create(s_fishsigns, firstSortOption);
      fishOptionSprites.push(fishOptionNormal, fishOptionSelected, fishOptionDisabled);
          
      var firstFishOptionButton = cc.MenuItemSprite.create(fishOptionNormal, fishOptionSelected, fishOptionDisabled, this, function () {
          this.onFishOptionSelect(0);
      });
      this.fishOptions.push(firstFishOptionButton);
      // ~ fishOptions ~ 2
      var fishOptionNormal = cc.Sprite.create(s_fishsigns, secondSortOption);
      var fishOptionSelected = cc.Sprite.create(s_fishsigns, secondSortOptionSelected);
          fishOptionSelected.setRotation(1);
      var fishOptionDisabled = cc.Sprite.create(s_fishsigns, secondSortOption);
      fishOptionSprites.push(fishOptionNormal, fishOptionSelected, fishOptionDisabled);
          
      var SecondFishOptionButton = cc.MenuItemSprite.create(fishOptionNormal, fishOptionSelected, fishOptionDisabled, this, function () {
          this.onFishOptionSelect(1);
      });
      this.fishOptions.push(SecondFishOptionButton);
      // ~ fishOptions ~ 3
      var fishOptionNormal = cc.Sprite.create(s_fishsigns, thirdSortOption);
      var fishOptionSelected = cc.Sprite.create(s_fishsigns, thirdSortOptionSelected);
          fishOptionSelected.setRotation(1);
      var fishOptionDisabled = cc.Sprite.create(s_fishsigns, thirdSortOption);
      fishOptionSprites.push(fishOptionNormal, fishOptionSelected, fishOptionDisabled);
          
      var ThirdFishOptionButton = cc.MenuItemSprite.create(fishOptionNormal, fishOptionSelected, fishOptionDisabled, this, function () {
          this.onFishOptionSelect(2);
      });
      this.fishOptions.push(ThirdFishOptionButton);
      
      //making the fish labels clickable array bigger
      var newButtonsSize = cc.SizeMake(239, 360); // was 124, 69
      for (var i = 0; i < fishOptionSprites.length; i++) {
        fishOptionSprites[i]._offsetPosition.x = newButtonsSize.width/2-78;
        fishOptionSprites[i]._offsetPosition.y = newButtonsSize.height/2-51;
        fishOptionSprites[i].setContentSize(newButtonsSize);
      }
      firstFishOptionButton.setContentSize(newButtonsSize);
      SecondFishOptionButton.setContentSize(newButtonsSize);
      ThirdFishOptionButton.setContentSize(newButtonsSize);
      
      
      this.fishOptionMenu = cc.Menu.create(firstFishOptionButton,SecondFishOptionButton,ThirdFishOptionButton);
    
      this.fishOptionMenu.alignItemsHorizontallyWithPadding(10);
      this.fishOptionMenu.setPosition(cc.ccp(winSize.width / 2 +41, 51));
      this.addChild(this.fishOptionMenu, 11, 100);
      
      //this.addFishLabels();
      
      //setup debug draw
      if(global.useSortingDebugCanvasOverlay){
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
      global.containerWorld = this.world;
      this.setTouchEnabled(true);
      this.schedule(this.updateBox);
      this.schedule(this.impulseAllFish, 1/10);
      this.addSampleFish();
      this.addMoreFishToSortIfNeeded();
      return true;
    },
    sortStarted:false,
    onSortStart:function(){
      this.sortStarted = true;
      var sortingByString = global.sortType.attribute.toLowerCase();
      var numeringVoiceDelay = 3.5;
      
      playSound(snd_sorting_welcome_1,0);
      playSound(window['snd_sort_by_' + sortingByString + '_1' ], numeringVoiceDelay);
      
      //adding the sign highlight sprite
      var signHighlight = cc.Sprite.create(s_containersigns, cc.RectMake(0, 0, 156, 102));
      var signHighlightPositions = [];
      var signHighlightPad = 468;
      signHighlightPositions.push( {position: cc.PointMake(242,51)} );
      signHighlightPositions.push( {position: cc.PointMake(491,51)} );
      signHighlightPositions.push( {position: cc.PointMake(740,51)} );
      signHighlightPositions.push( {position: cc.PointMake(-120,51)} );
      
      signHighlight.setPosition(signHighlightPositions[3].position);
      this.addChild(signHighlight, 10);
      
      //defining the timing..
      switch(sortingByString){
        case 'color':
         signHighlightPositions[0].second = 3.4;
         signHighlightPositions[1].second = 3.9;
         signHighlightPositions[2].second = 4.5;
         signHighlightPositions[3].second = 5.5;
         signHighlightPositions[0].rect = cc.RectMake(signHighlightPad+156, 102, 156, 102);
         signHighlightPositions[1].rect = cc.RectMake(signHighlightPad+0, 102, 156, 102);
         signHighlightPositions[2].rect = cc.RectMake(signHighlightPad+312, 102, 156, 102);
         signHighlightPositions[3].rect = signHighlightPositions[0].rect;
         break;
        case 'size':
         signHighlightPositions[0].second = 3.12;
         signHighlightPositions[1].second = 3.73;
         signHighlightPositions[2].second = 4.3;
         signHighlightPositions[3].second = 5.7;
         signHighlightPositions[0].rect = cc.RectMake(signHighlightPad+0, 204, 156, 102);
         signHighlightPositions[1].rect = cc.RectMake(signHighlightPad+156, 204, 156, 102);
         signHighlightPositions[2].rect = cc.RectMake(signHighlightPad+312, 204, 156, 102);
         signHighlightPositions[3].rect = signHighlightPositions[0].rect;
         break;
        case 'shape':
         signHighlightPositions[0].second = 3.2;
         signHighlightPositions[1].second = 4;
         signHighlightPositions[2].second = 4.6;
         signHighlightPositions[3].second = 5.5;
         signHighlightPositions[0].rect = cc.RectMake(signHighlightPad+312, 0, 156, 102);
         signHighlightPositions[1].rect = cc.RectMake(signHighlightPad+156, 0, 156, 102);
         signHighlightPositions[2].rect = cc.RectMake(signHighlightPad+0, 0, 156, 102);
         signHighlightPositions[3].rect = signHighlightPositions[0].rect;
         break;
      }
      
      //moving the images
      for (var i = 0; i < signHighlightPositions.length; i++){
        this.runAction(cc.Sequence.create(cc.DelayTime.create(numeringVoiceDelay + signHighlightPositions[i].second), cc.CallFunc.create(this, function(i){
          var loop = signHighlightPositions.splice(0,1)[0];
          signHighlight.setTextureRect( loop.rect);
          signHighlight.setPosition(loop.position);
        })));  
      };
      
      this.runAction(cc.Sequence.create(cc.DelayTime.create(13.5), cc.CallFunc.create(this, function(){
        this.sortAFish();
      })));
      
    },
    onEnterTransitionDidFinish:function(){
      this.onSortStart();
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

        //Iterate over the bodies in the physics world
        for (var b = this.world.GetBodyList(); b; b = b.GetNext()) {
            if (b.GetUserData() != null ) {
              if(b.itemType == 'fish') {
                
                if(!b.air_water_limit){
                  b.air_water_limit = this.air_water_limit;
                  b.air_water_limit -= Math.random()*3;
                }
                
                if(b.GetPosition().y > b.air_water_limit){
                  b.currentGravity = 'air';
                } else if(b.GetPosition().y < b.air_water_limit - 2){
                  if(b.currentGravity == 'air'){
                    b.enteredWater = true;
                  }
                  b.currentGravity = 'water';
                  
                  if(b.enteredWater){
                    b.enteredWater = false;
                    b.isInWater = true;
                    b.SetLinearVelocity(new Box2D.Common.Math.b2Vec2(b.GetLinearVelocity().x/2,0));
                   
                  }
                  b.ApplyImpulse(cc.PointMake(0 , b.GetMass()*this.waterGravity*dt), b.GetWorldCenter());
                }
                
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
                
                var degreeDif = (targetDegree-degrees)/30;
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
                
              } else {
                //Synchronize the AtlasSprites position and rotation with the corresponding body
                var myActor = b.GetUserData();
                myActor.setPosition(cc.PointMake(b.GetPosition().x * PTM_RATIO, b.GetPosition().y * PTM_RATIO));
                myActor.setRotation(-1 * cc.RADIANS_TO_DEGREES(b.GetAngle()));
                
              }
            }
        }
    },
    onFishOptionSelect:function(num){
      if(this.sortOptionReady){
        if(this.currentFish[global.sortType.attribute] == global.sortType.values[num]){
          this.onCorrectSelection(num);
          this.sortOptionReady = false;
        } else {
          this.onWrongSelection(num);
        }
      }
      
      if(!this.sortStarted){
        this.onSortStart();
      }
    },
    onCorrectSelection:function(num){
      var winSize = cc.Director.sharedDirector().getWinSize();
      var leaveLocation = cc.MoveBy.create(1, cc.ccp(0, 0));
      var callBackObj = this;
      cc.ArrayRemoveObject(this.fishesToSort,this.currentFish);
      
      
      if(this.fishesToSort.length){
        playRandomSound([snd_sort_correct_1, snd_sort_correct_2, snd_sort_correct_3, snd_sort_correct_4, snd_sort_correct_5, snd_sort_correct_6]);
      }else{
        playSound(snd_sorting_outro);
      }
      
      this.currentFish.runAction(cc.Sequence.create(leaveLocation, cc.DelayTime.create(2), cc.CallFunc.create(this, function(){ /*callBackObj.removeChild(callBackObj.currentFish);*/ callBackObj.sortAFish();  })));
      this.successfulFishCount++;
      
      var fishPoint = this.currentFish.getPosition(); //cc.ccp(winSize.width / 2+70, winSize.height /2+50);
      this.currentFish.setPosition(fishPoint);
      
      // Define the dynamic body.
      var b2BodyDef = Box2D.Dynamics.b2BodyDef
          , b2Body = Box2D.Dynamics.b2Body
          , b2FixtureDef = Box2D.Dynamics.b2FixtureDef
          , b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;

      var bodyDef = new b2BodyDef();
      bodyDef.type = b2Body.b2_dynamicBody;
      
      bodyDef.userData = this.currentFish;
      //bodyDef.linearDamping = 0.3;
      bodyDef.angularDamping = 2;
      
      //initial fish position
      bodyDef.position.Set(fishPoint.x / PTM_RATIO, fishPoint.y / PTM_RATIO);
      
      var body = this.world.CreateBody(bodyDef);

      // Define another box shape for our dynamic body.
      var dynamicBox = new b2PolygonShape();
      dynamicBox.SetAsBox(this.currentFish.getContentSize().width/PTM_RATIO/2, this.currentFish.getContentSize().height/PTM_RATIO/2);//These are mid points for our 1m box

      // Define the dynamic body fixture.
      var fixtureDef = new b2FixtureDef();
      fixtureDef.shape = dynamicBox;
      fixtureDef.density = 1.0;
      fixtureDef.friction = 0.3;
      fixtureDef.restitution = 0.01;
      fixtureDef.filter.groupIndex = -2;
      body.CreateFixture(fixtureDef);
      
      body.itemType = 'fish';
      body.isInWater = false;

      this.fireFish(body, num);
      this.fishBodies.push(body);
      
    },
    fireFish:function(body, option_num){
        
        var force = 7;
        var fishMass = body.GetMass();
        var bodyPosition = body.GetPosition();
        var randomBias = -0.5 + 1*Math.random();
        
        switch(option_num){
          case 2:
            force = force * fishMass;
            var angle = 0.698131701;
            body.GetUserData()._flipX = true;
            bodyPosition.x -= 0.1 * fishMass;
            break;
          case 1:
            force = force * fishMass * 0.5;
            var angle = 1.57079633;
            bodyPosition.x -= 0.3 * randomBias;;
            break;
          case 0:
            force = force * fishMass;
            var angle = 2.7925268;
            bodyPosition.x += 0.1 * fishMass;
            break;
        }
        
        angle += randomBias*0.2;
        
        var impulse = new Box2D.Common.Math.b2Vec2( Math.cos(angle) * force, Math.sin(angle) * force);
        body.ApplyImpulse( impulse, bodyPosition );
    },
    impulseFish:function(body){
      if(body.isInWater){
        if(Math.random() < 0.02 ){
          
          var force = 0.5;
          var fishMass = body.GetMass();
          force = force * fishMass;
          
          var inverted = Math.random() > 0.5 ? false : true;
          
          var randomBias = -1 + Math.random()*2;
          var angle = body.GetAngle();
          if (inverted) angle-=2.7925268;
          
          var bodyPosition = body.GetPosition();
          
          if(inverted){
            bodyPosition.x -= 0.2 * fishMass;
            
            if(body.GetUserData()._flipX)
            body.GetUserData()._flipX = false;

          } else {
            bodyPosition.x += 0.2 * fishMass;
            if(!body.GetUserData()._flipX)
            body.GetUserData()._flipX = true;
          }
          
          var impulse = new Box2D.Common.Math.b2Vec2( Math.cos(angle) * force, Math.sin(angle) * force);
          body.ApplyImpulse( impulse, bodyPosition );
        }
      }
    },
    impulseAllFish:function(){
      for (var fid = 0; fid < this.fishBodies.length; fid++) {
        var fishBody = this.fishBodies[fid];
        this.impulseFish(fishBody);
      }
    },
    onWrongSelection:function(num){
      var fishWrong = [];
      for(var i = 1; i<=1; i++) if(suspect = window['snd_sort_' + global.sortType.values[num].toLowerCase() + '_wrong_' + i]) fishWrong.push( suspect );
      playRandomSound(fishWrong);
    },
    sortAFish:function(){
      if(this.fishesToSort.length){
        var fishWhere = []
        if(this.sortedOnce){
          for(var i = 1; i<=12; i++) fishWhere.push( window['snd_which_tank_more_'+i] );
        } else {
          for(var i = 1; i<=3; i++) fishWhere.push( window['snd_which_tank_'+i] );
        }
        this.sortedOnce = true;
        playRandomSound(fishWhere);
          
        this.currentFish = this.fishesToSort[0];
        
        if(!global.autoCatchFish){
          this.currentFish.schedule(this.currentFish.updateSprite, 1/10);  
        }
        
        this.currentFish.setRotation(0);
        this.currentFish._flipY = false;
        this.currentFish._flipX = false;
        this.sortTheFish();
        //cc.ArrayRemoveObject(global.fishContainer,this);
      } else {
        this.onDoneSorting();
      }
      
    },
    addMoreFishToSortIfNeeded:function(){
      var add_this_many = global.minFishToSort - this.fishesToSort.length;
      if(add_this_many > 0){
        //creating the fish sprites
        if(global.sortType.attribute == 'Color' || global.sortType.attribute == 'Shape'){
          var fishOptions = global.varyColorAndShape;
        } else if (global.sortType.attribute == 'Size'){
          var fishOptions = global.varySize[global.sortType.fixedShape];
        }
        
        fishOptions = shaffuru(fishOptions); //randomizing the array
        
        for(var i=0; i<add_this_many; i++){
          var iteration = FishType[ fishOptions[i] ];
          this.fishesToSort.push(new Fish(iteration));
        }  
      }
    },
    addSampleFish:function(){
      this.sampleFish = [];
      var sampleNum = 3;
      
      var winSize = cc.Director.sharedDirector().getWinSize();
      
      //creating the fish sprites
      if(global.sortType.attribute == 'Color' || global.sortType.attribute == 'Shape'){
        var fishOptions = global.varyColorAndShape;
      } else if (global.sortType.attribute == 'Size'){
        var fishOptions = global.varySize[global.sortType.fixedShape];
      }
      fishOptions = shaffuru(fishOptions); //randomizing the array
      for(var i=0; i<sampleNum; i++){
        var optionString = global.sortType.values[i];
        for(var o=0; o<fishOptions.length; o++){
          if(!this.sampleFish[optionString]){
            var iteration = FishType[ fishOptions[o] ];
            if(iteration[global.sortType.attribute] == optionString){ 
              this.sampleFish[i] = new Fish(iteration);
            }
          }
        }
      }
      
      for(var i=0; i<this.sampleFish.length; i++){
        this.sampleFish[i].setAnchorPoint(new cc.Point(0.5, 0.5));
      }
      
      //setting the fish starting position
      this.sampleFish[0].setPosition(cc.ccp(winSize.width/2-210, winSize.height /2));
      this.sampleFish[1].setPosition(cc.ccp(winSize.width/2+40, winSize.height /2));
      this.sampleFish[2].setPosition(cc.ccp(winSize.width/2+290, winSize.height /2));
      
      //adding the fish to the stage and creating their bodies
      for(var i=0; i<this.sampleFish.length; i++){
        var oneFish = this.sampleFish[i];
        this.addChild(oneFish , 5);
        
        var fishPoint = oneFish.getPosition(); //cc.ccp(winSize.width / 2+70, winSize.height /2+50);
        
        // Define the dynamic body.
        var b2BodyDef = Box2D.Dynamics.b2BodyDef
            , b2Body = Box2D.Dynamics.b2Body
            , b2FixtureDef = Box2D.Dynamics.b2FixtureDef
            , b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
  
        var bodyDef = new b2BodyDef();
        bodyDef.type = b2Body.b2_dynamicBody;
        
        bodyDef.userData = oneFish;
        //bodyDef.linearDamping = 0.3;
        bodyDef.angularDamping = 2;
        
        //initial fish position
        bodyDef.position.Set(fishPoint.x / PTM_RATIO, fishPoint.y / PTM_RATIO);
        
        var body = this.world.CreateBody(bodyDef);
  
        // Define another box shape for our dynamic body.
        var dynamicBox = new b2PolygonShape();
  
        dynamicBox.SetAsBox(oneFish.getContentSize().width/PTM_RATIO/2, oneFish.getContentSize().height/PTM_RATIO/2);//These are mid points for our 1m box
  
        // Define the dynamic body fixture.
        var fixtureDef = new b2FixtureDef();
        fixtureDef.shape = dynamicBox;
        fixtureDef.density = 1.0;
        fixtureDef.friction = 0.3;
        fixtureDef.restitution = 0.01;
        fixtureDef.filter.groupIndex = -2;
        body.CreateFixture(fixtureDef);
        
        body.itemType = 'fish';
        body.isInWater = true;
  
        this.fishBodies.push(body);
      }
    },
    sortTheFish:function(){
      var winSize = cc.Director.sharedDirector().getWinSize();

      this.currentFish.setAnchorPoint(new cc.Point(0.5, 0.5));

      this.addChild(this.currentFish , 5);
      this.currentFish.setPosition(cc.ccp(winSize.width+50, winSize.height /2+50));
      
      var centerLocation = cc.MoveTo.create(1, cc.ccp(winSize.width / 2+40, winSize.height /2+50));
      this.currentFish.runAction(cc.Sequence.create(centerLocation));
      
      var readyVar = this;
      
      this.currentFish.runAction(cc.Sequence.create(centerLocation, cc.CallFunc.create(this, function(){
        readyVar.sortOptionReady = true;
      })));
      
    },
    onDoneSorting:function(){
      global.roundNumber++;
      this.runAction(cc.Sequence.create(cc.DelayTime.create(4), cc.CallFunc.create(this, function(){
        if( global.roundNumber < global.sortTypes.length ){
          global.scenes.CastingScene = cc.Scene.create();
          global.scenes.CastingScene.addChild(GameLayer.create());
          cc.Director.sharedDirector().replaceScene(cc.TransitionFade.create(1.2, global.scenes.CastingScene));
        } else {
          global.roundNumber = 0;
          global.scenes.TitleScreen = cc.Scene.create();
          global.scenes.TitleScreen.addChild(TitleScreen.create());
          cc.Director.sharedDirector().replaceScene(cc.TransitionFade.create(1.2, global.scenes.TitleScreen));
        }
      })));  
    }
});

SortingLayer.create = function () {
    var sg = new SortingLayer();
    if (sg && sg.init()) {
        global.layers.SortingLayer = sg;
        return sg;
    }
    return null;
};

SortingLayer.scene = function () {
    var scene = cc.Scene.create();
    var layer = SortingLayer.create();
    scene.addChild(layer, 1);
    return scene;
};