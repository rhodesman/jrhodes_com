var Fish = cc.Sprite.extend({
    Size:null,
    Color:null,
    Strenght:null,
    Stamina:null,
    MaxStamina:null,
    Shape:null,
    zOrder:1000,
    HookedBy:null,
    RestTime:2,
    animationFrames:[],
    animationCurrentFrame:0,
    delayTime:1,
    status:null, //pulled(up), //pulling(down)
    ctor:function (arg) {
        this.Color = arg.Color;
        this.Stamina = arg.Stamina;
        this.MaxStamina = arg.Stamina;
        this.Size = arg.Size;
        this.Strenght = arg.Strenght;
        this.Shape = arg.Shape;
        
        if(this.Shape == 'Fit'){
          //The Fit fish have the mouth at a lower point
          this.setAnchorPoint(new cc.Point(0.75, 0.3));
        }else{
          this.setAnchorPoint(new cc.Point(0.75, 0.5));
        }

        this.animationFrames = [];
        
        for (i=0; i<8; i++){
          this.animationFrames.push(cc.SpriteFrameCache.sharedSpriteFrameCache().spriteFrameByName(arg.Shape  + "_" + arg.Size + "_" + arg.Color + "000" + i))
        }
        this.setDisplayFrame(this.animationFrames[ this.animationCurrentFrame ]);
        this.schedule(this.update, this.delayTime);
        this.schedule(this.updateSprite, 1/10);
    },
    updateSprite:function (dt) {
      //animation
      var nextFrameIdx = this.animationCurrentFrame+2 > this.animationFrames.length ? 0 : this.animationCurrentFrame+1;
      this.setDisplayFrame(this.animationFrames[ nextFrameIdx ]);
      this.animationCurrentFrame = nextFrameIdx;
    },
    update:function (dt) {
      //stamina update
      if (this.Stamina < this.MaxStamina && this.RestTime < 1){
        this.Stamina += this.Strenght * global.fishRecoveryPerSecond*dt + 1.5*(1 - this.Stamina/this.MaxStamina);
        this.status = 'pulling';
        if(this.Stamina > this.MaxStamina) {
          this.Stamina = this.MaxStamina;
        }
        if(this.HookedBy){
          this.HookedBy.updateReelButton(this.Stamina/this.MaxStamina-0.2); //minus offset
        }
      };
      
      if (this.Stamina == this.MaxStamina) {
        if(this.HookedBy){
          this.release(this.HookedBy);
          
          //fish escaped, going back to the casting scene
          playSound(snd_fish_escaped_1); // too bad..
          global.layers.CastingLayer.runAction(cc.Sequence.create(cc.DelayTime.create(4), cc.CallFunc.create(global.layers.CastingLayer, function(){
            if(global.layers.CastingLayer.castLineButton._isEnabled)  playSound(snd_fish_escaped_2);
          })));

          // cast again to try another ...
          global.layers.CastingLayer.playDayOverSound=true;
          cc.Director.sharedDirector().pushScene(cc.TransitionFade.create(1.2, global.scenes.CastingScene));
        }
      };
      
      //rest time
      this.RestTime--;
    },
    pull:function (pulling_thing) {
      soundsClear();
      this.RestTime = 0; //takes rid of the VO delay
      this.status = 'pulled';
      if(this.Stamina/this.MaxStamina > global.fishMinStamina){
        this.Stamina -= global.fishLossPerReel+1.5*this.Stamina/this.MaxStamina;
      }
      if (this.Stamina < 1)
        this.Stamina = 0;
      this.HookedBy.updateReelButton(this.Stamina/this.MaxStamina -0.2); //minus offset
      
      return this.Stamina/this.MaxStamina;
    },
    lose:function(to_thing){
      this.release(to_thing);
      
      to_thing.destroyHookedFish();
      cc.ArrayRemoveObject(global.fishContainer,this);
      this.getParent().removeChild(this,true);
      
      global.fishesCaught.push(this);
      //going back to the casting scene
      global.layers.CastingLayer.updateScoreLabels();
      cc.Director.sharedDirector().pushScene(cc.TransitionFade.create(1.2, global.scenes.CastingScene));
    },
    bite:function(thing){
      this.HookedBy = thing;
      thing.SetHooked(this);
      this.Stamina = global.fishesCaught.length ? this.MaxStamina*global.fishStaminaAtBite  : this.MaxStamina*global.fishStaminaAtFirstFishBite ;
      if(!global.fishesCaught.length){
        playRandomSound([snd_hooked_1, snd_hooked_5]);
        playSound(snd_hooked_4, 2.2);
        this.RestTime = 6; // rest enough time to hear the instructions
      } else {
        playRandomSound([snd_hooked_1, snd_hooked_2, snd_hooked_3, snd_hooked_5]);
        this.RestTime = 2.5;
      }
      cc.Director.sharedDirector().getRunningScene().replaySound = snd_hooked_4;
    },
    release:function(thing){
      this.HookedBy = null;
      thing.letGo(this);
      for (var i = 0; i < global.fishContainer.length; i++) {
        global.fishContainer[i].RestTime = 2;
      }
      this.RestTime = 10;
    }
});

Fish.sharedFish = function(){
    cc.SpriteFrameCache.sharedSpriteFrameCache().addSpriteFramesWithFile(s_fish_plist, s_fish);
};
