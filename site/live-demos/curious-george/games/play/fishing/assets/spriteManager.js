//iOS 5 - audio managing
var cg_Sprite = {
    audio:null,
    _looptarget:null,
    _loopend:null,
    _loopTimeOut:null,
    _ready:false,
    _progress:0,
    _duration:855,
    _callback:null,
    _isinit:false,
    init:function(callback){ cc.Log('audio sprite init()');
      if(this._ready)return;
      this._ready = true;
      var src = 'assets/sounds/' + global.locale + '/sprite.mp3';
      this.audio = document.createElement('audio');
      this.audio.src = src;
      this.audio.autobuffer = true;
      this.audio.load();
      this._callback = callback;
      this.tickle();
      this.addProgressListener();
      this._isinit = true;
      
      //defining the loopback event
      if (document.createEvent) {
        this.loopBackEvent = document.createEvent("HTMLEvents");
        this.loopBackEvent.initEvent("spriteloopback", true, true);
      } else {
        this.loopBackEvent = document.createEventObject();
        this.loopBackEvent.eventType = "spriteloopback";
      }
      this.loopBackEvent.eventName = "spriteloopback";
      this.loopBackEvent.memo = this.loopBackEvent.memo || { };
    },
    tickle:function(){
      this.audio.play(); //play before pausing so it preloads
      setTimeout(function(){
        cg_Sprite.audio.pause();
      }, 10);
    },
    addProgressListener:function(){
      cg_Sprite.audio.addEventListener('canplaythrough', cg_Sprite.audio.progressCallback = function(e){
        cg_Sprite.audio.removeEventListener('canplaythrough', cg_Sprite.audio.progressCallback, false);
        cg_Sprite.updateCallBack();
      }, false);
    },
    updateCallBack:function(){
      if(this._callback !== null){
        this._callback();
      }
    },
    getSpriteValues:function(path){
      return this._spritejson[path.substring(path.lastIndexOf('/')+1)];
    },
    loopBack:function(){
      if(this._looptarget !== null){
        cg_Sprite.audio.currentTime = cg_Sprite._looptarget;
        cg_Sprite.audio.play();
        cg_Sprite._loopTimeOut = setTimeout( cg_Sprite.loopBack, (cg_Sprite._loopend-cg_Sprite._looptarget)*1000 );
        
        if (document.createEvent) {
          document.dispatchEvent(cg_Sprite.loopBackEvent);
        } else {
          document.fireEvent("on" + cg_Sprite.loopBackEvent.eventType, cg_Sprite.loopBackEvent);
        }
      }
    },
    end:function(){
      cg_Sprite.resetLoop();
      if(cg_Sprite.audio)
      cg_Sprite.audio.pause();
    },
    Stop:function(){
      cg_Sprite.audio.pause();
      this.audio.currentTime = 2; //silence
    },
    resetLoop:function(){
      this._looptarget = null;
      this._loopend = null;
      clearTimeout(this._loopTimeOut);
    },
    play:function(path, curtime, loop){ cc.Log('Playing sprite: ' + path);
      if(!this._isinit) return;
      this.resetLoop();
      var times = this.getSpriteValues(path);
      var startAt = times.start + curtime;
      
      if(loop) {
        this._looptarget = times.start;
        this._loopend = times.end;
        this._loopTimeOut = setTimeout( cg_Sprite.loopBack, (times.end-startAt)*1000 );
      } else {
        this._loopTimeOut = setTimeout( cg_Sprite.end, (times.end+0.9-startAt)*1000 );
      }
      
      this.audio.currentTime = startAt;
      this.audio.play();
      return;
    },
    
    _spritejson: {
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_CatchingFish_VO_2_02-1": {
        "start": 0,
        "end": 1.2536507936507937
      },
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_CatchingFish_VO_2_10": {
        "start": 3,
        "end": 6.291201814058956
      },
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_CatchingFish_VO_2_12": {
        "start": 8,
        "end": 10.533650793650793
      },
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_CountingFish_VO_1_16": {
        "start": 12,
        "end": 15.317324263038548
      },
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_CountingFish_VO_1_18": {
        "start": 17,
        "end": 20.50018140589569
      },
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_CountingFish_VO_2_01": {
        "start": 22,
        "end": 24.951609977324264
      },
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_CountingFish_VO_2_03": {
        "start": 26,
        "end": 28.089569160997733
      },
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_CountingFish_VO_2_05": {
        "start": 30,
        "end": 33.265079365079366
      },
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_CountingFish_VO_2_07": {
        "start": 35,
        "end": 38.7875283446712
      },
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_CountingFish_VO_2_09": {
        "start": 40,
        "end": 44.7540589569161
      },
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_CountingFish_VO_2_10-1": {
        "start": 46,
        "end": 48.92548752834467
      },
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_CountingFish_VO_2_11": {
        "start": 50,
        "end": 53.578548752834465
      },
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_CountingFish_VO_2_13": {
        "start": 55,
        "end": 58.52630385487528
      },
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_FedbckfrCrrctAnswrs_VO_1_09-1": {
        "start": 60,
        "end": 62.27242630385488
      },
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_FeedbackforWrngAnswrs_VO_1_05-edit": {
        "start": 64,
        "end": 68.51918367346939
      },
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_FeedbackforWrngAnswrs_VO_1_17": {
        "start": 70,
        "end": 74.91079365079365
      },
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_FeedbackfrCrrctAnswrs_VO_1_13": {
        "start": 76,
        "end": 78.11569160997732
      },
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_FeedbckfrWrngAnswrs_VO_1_03-1": {
        "start": 80,
        "end": 83.89201814058957
      },
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_FeedbckfrWrngAnswrs_VO_1_08-3": {
        "start": 85,
        "end": 90.0675283446712
      },
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_FeedbckfrWrngAnswrs_VO_1_10-1": {
        "start": 92,
        "end": 96.49283446712018
      },
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_FeedbckfrWrngAnswrs_VO_2_01-01-EDIT": {
        "start": 98,
        "end": 103.95591836734694
      },
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_Intsructions_05": {
        "start": 105,
        "end": 107.95160997732427
      },
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_Intsructions_12": {
        "start": 109,
        "end": 110.98507936507937
      },
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_SortingFish_VO_2_04-1": {
        "start": 112,
        "end": 114.74263038548753
      },
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_SortingFish_VO_2_04-2": {
        "start": 116,
        "end": 118.71650793650794
      },
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_SortingFish_VO_2_05-1": {
        "start": 120,
        "end": 122.92548752834468
      },
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_SortingFish_VO_2_05-2": {
        "start": 124,
        "end": 127.50018140589569
      },
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_SortingFish_VO_2_05-3": {
        "start": 129,
        "end": 132.4740589569161
      },
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_SortingFish_VO_2_13-1": {
        "start": 134,
        "end": 136.1679365079365
      },
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_SortingFish_VO_2_13-2": {
        "start": 138,
        "end": 140.63814058956916
      },
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_SortingFish_VO_2_13-3": {
        "start": 142,
        "end": 144.87324263038548
      },
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_SortingFish_VO_2_15-1": {
        "start": 146,
        "end": 147.5671201814059
      },
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_SortingFish_VO_2_15-2": {
        "start": 149,
        "end": 151.1679365079365
      },
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_SortingFish_VO_2_17-1": {
        "start": 153,
        "end": 154.14916099773242
      },
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_SortingFish_VO_2_17-2": {
        "start": 156,
        "end": 157.14916099773242
      },
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_SortingFish_VO_2_17-3": {
        "start": 159,
        "end": 160.30589569160998
      },
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_SortingFish_VO_2_19": {
        "start": 162,
        "end": 163.74997732426303
      },
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_SortingFish_VO_2_20": {
        "start": 165,
        "end": 166.61936507936508
      },
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_FishingWithGeorge_ToolPallette_04": {
        "start": 168,
        "end": 170.32467120181406
      },
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ButtonRollovers_Help_2": {
        "start": 172,
        "end": 172.67895691609976
      },
      "CG-ManInYellowHat_GENERIC_FeedbackforCorrectAnswers_VO_GreatJob-1": {
        "start": 174,
        "end": 175.5148752834467
      },
      "CG-ManInYellowHat_GENERIC_FeedbackforCorrectAnswers_VO_IKnewYouCouldDoIt-1": {
        "start": 177,
        "end": 178.5148752834467
      },
      "CG-ManInYellowHat_GENERIC_FeedbackforCorrectAnswers_VO_Perfect-1": {
        "start": 180,
        "end": 180.83569160997732
      },
      "CG-ManInYellowHat_GENERIC_FeedbackforCorrectAnswers_VO_YoureATerrificHelper-3": {
        "start": 182,
        "end": 183.72385487528345
      },
      "CG-ManInYellowHat_GENERIC_PlayButton_VO_IfYouWantToPlayAgainClickOrTapTheGreenButton-1": {
        "start": 185,
        "end": 188.23895691609977
      },
      "CG_Game-ActivityTitles_FishingWithGeorge_Boy": {
        "start": 190,
        "end": 191.70378684807255
      },
      "CG_Game-NavigationButtons_Cast_Girl": {
        "start": 193,
        "end": 194.05578231292517
      },
      "CG_Game-NavigationButtons_Play_Boy": {
        "start": 196,
        "end": 196.81578231292517
      },
      "FG_FWG_001": {
        "start": 198,
        "end": 201.86589569160998
      },
      "FG_FWG_001b": {
        "start": 203,
        "end": 205.8209977324263
      },
      "FG_FWG_002b": {
        "start": 207,
        "end": 210.4740589569161
      },
      "FG_FWG_003": {
        "start": 212,
        "end": 214.35079365079366
      },
      "FG_FWG_004": {
        "start": 216,
        "end": 217.61936507936508
      },
      "FG_FWG_005": {
        "start": 219,
        "end": 221.2463038548753
      },
      "FG_FWG_006b": {
        "start": 223,
        "end": 225.40303854875285
      },
      "FG_FWG_007": {
        "start": 227,
        "end": 234.83650793650793
      },
      "FG_FWG_008": {
        "start": 236,
        "end": 243.83650793650793
      },
      "FG_FWG_009": {
        "start": 245,
        "end": 253.69854875283445
      },
      "FG_FWG_013": {
        "start": 255,
        "end": 259.4144671201814
      },
      "FG_FWG_014": {
        "start": 261,
        "end": 264.63079365079363
      },
      "FG_FWG_015": {
        "start": 266,
        "end": 269.291201814059
      },
      "FG_FWG_020": {
        "start": 271,
        "end": 274.7875283446712
      },
      "FG_FWG_021": {
        "start": 276,
        "end": 278.92548752834466
      },
      "FG_FWG_022": {
        "start": 280,
        "end": 282.1156916099773
      },
      "FG_FWG_023": {
        "start": 284,
        "end": 288.3883446712018
      },
      "sorting_outro": {
        "start": 290,
        "end": 296.0601814058957
      }
    }
}
