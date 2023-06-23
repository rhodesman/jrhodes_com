var LevelManager = cc.Class.extend({
    _currentLevel:null,
    _gameLayer:null,
    ctor:function(FishingLayer){
        if(!FishingLayer){
            throw "FishingLayer must be non-nil";
        }
        this._currentLevel = Level1;
        this._gameLayer = FishingLayer;
        this.setLevel(this._currentLevel);
    },

    setLevel:function(level){
        for(var i = 0; i< level.fishes.length; i++){
            this._currentLevel.fishes[i].ShowTime = this._minuteToSecond(this._currentLevel.fishes[i].ShowTime);
        }
    },
    _minuteToSecond:function(minuteStr){
        if(!minuteStr)
            return 0;
        if(typeof(minuteStr) !=  "number"){
            var mins = minuteStr.split(':');
            if(mins.length == 1){
                return parseInt(mins[0]);
            }else {
                return parseInt(mins[0] )* 60 + parseInt(mins[1]);
            }
        }
        return minuteStr;
    },

    loadLevelResource:function(deltaTime){
      //load fish
      for(var i = 0; i< this._currentLevel.fishes.length; i++){
        var selFish = this._currentLevel.fishes[i];
        if(selFish){
          if(global.fishContainer.length < this._currentLevel.fishCount){
            if(deltaTime % selFish.ShowTime == 0){
              for(var rIndex = 0; rIndex < selFish.Count;rIndex++ ){
                if(global.sortType.attribute == 'Color' || global.sortType.attribute == 'Shape'){
                 this.addFishToGameLayer( shaffuru(global.varyColorAndShape)[ 0 ]); 
                 
                } else if (global.sortType.attribute == 'Size'){
                 this.addFishToGameLayer( shaffuru(global.varySize[global.sortType.fixedShape])[0]); 
                }
              }
            }
          }
        }
      }
      
      //autocatch some fish to test
      if(global.fishesCaught.length < global.autoCatchFish){
        cc.Log('catchfish count var: ' + global.autoCatchFish);
        for(var i = 0; i< global.autoCatchFish-global.fishesCaught.length; i++){
          cc.Log('running autocatching');
          if(global.sortType.attribute == 'Color' || global.sortType.attribute == 'Shape'){
            var fishSprite = this.addFishToGameLayer( shaffuru(global.varyColorAndShape)[ 0 ], true); 
          } else if (global.sortType.attribute == 'Size'){
            var fishSprite = this.addFishToGameLayer( shaffuru(global.varySize[global.sortType.fixedShape])[0], true); 
          }
          global.fishesCaught.push(fishSprite);
          global.layers.CastingLayer.updateScoreLabels();
        }
      }
    },

    addFishToGameLayer:function(fishType, returnSprite){
      var addFish = new Fish( FishType[fishType] );
      if(returnSprite){
        return addFish;
      } else {
        global.fishContainer.push(addFish);
        this._gameLayer.addNewSprite(addFish);
      }
    }
});