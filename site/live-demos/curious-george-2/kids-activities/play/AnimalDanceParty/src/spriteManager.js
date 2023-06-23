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
    init:function(callback){
      if(this._ready)return;
      this._ready = true;
      var src = 'res/audio/sprite.mp3';
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
      cg_Sprite.audio.addEventListener('progress', cg_Sprite.audio.progressCallback = function(e){
        cg_Sprite.audio.removeEventListener('progress', cg_Sprite.audio.progressCallback, false);
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
    play:function(path, curtime, loop){
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
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_AnimalDanceParty_Feedback_VO_12-2": {
        "start": 0,
        "end": 2.0895691609977325
      },
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_AnimalDanceParty_Feedback_VO_13-2": {
        "start": 4,
        "end": 6.376916099773243
      },
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_AnimalDanceParty_Feedback_VO_14-2": {
        "start": 8,
        "end": 9.384263038548752
      },
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_AnimalDanceParty_Feedback_VO_15-2": {
        "start": 11,
        "end": 13.403038548752834
      },
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_AnimalDanceParty_Feedback_VO_16-2": {
        "start": 15,
        "end": 16.697732426303855
      },
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_AnimalDanceParty_Instructions_VO_2_03": {
        "start": 18,
        "end": 22.074875283446712
      },
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_AnimalDanceParty_RolloverButtons_VO_PlayMyMusic": {
        "start": 24,
        "end": 25.123038548752834
      },
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_AnimalDanceParty_RolloverButtons_VO_Record": {
        "start": 27,
        "end": 27.705079365079364
      },
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_AnimalDanceParty_RolloverButtons_VO_Stop": {
        "start": 29,
        "end": 29.574467120181406
      },
      "CG-ManInYellowHat_FunnyGarbage_GameActivities_GeorgesPaintbox_ButtonRollovers_Help_2": {
        "start": 31,
        "end": 31.67895691609977
      },
      "CG_Game-ActivityTitles_AnimalDanceParty_Girl": {
        "start": 33,
        "end": 34.87179138321996
      },
      "CG_Game-NavigationButtons_Play_Girl_2": {
        "start": 36,
        "end": 37.07977324263039
      },
      "load_vo_merged_2": {
        "start": 39,
        "end": 81.19176870748299
      },
      "mix_e": {
        "start": 83,
        "end": 91.04571428571428
      },
      "mix_eg": {
        "start": 93,
        "end": 101.04571428571428
      },
      "mix_egh": {
        "start": 103,
        "end": 111.04571428571428
      },
      "mix_eghl": {
        "start": 113,
        "end": 121.04571428571428
      },
      "mix_eghlm": {
        "start": 123,
        "end": 131.0457142857143
      },
      "mix_eghlmp": {
        "start": 133,
        "end": 141.0457142857143
      },
      "mix_eghlp": {
        "start": 143,
        "end": 151.0457142857143
      },
      "mix_eghm": {
        "start": 153,
        "end": 161.0457142857143
      },
      "mix_eghmp": {
        "start": 163,
        "end": 171.0457142857143
      },
      "mix_eghp": {
        "start": 173,
        "end": 181.0457142857143
      },
      "mix_egl": {
        "start": 183,
        "end": 191.0457142857143
      },
      "mix_eglm": {
        "start": 193,
        "end": 201.0457142857143
      },
      "mix_eglmp": {
        "start": 203,
        "end": 211.0457142857143
      },
      "mix_eglp": {
        "start": 213,
        "end": 221.0457142857143
      },
      "mix_egm": {
        "start": 223,
        "end": 231.0457142857143
      },
      "mix_egmp": {
        "start": 233,
        "end": 241.0457142857143
      },
      "mix_egp": {
        "start": 243,
        "end": 251.0457142857143
      },
      "mix_eh": {
        "start": 253,
        "end": 261.04571428571427
      },
      "mix_ehl": {
        "start": 263,
        "end": 271.04571428571427
      },
      "mix_ehlm": {
        "start": 273,
        "end": 281.04571428571427
      },
      "mix_ehlmp": {
        "start": 283,
        "end": 291.04571428571427
      },
      "mix_ehlp": {
        "start": 293,
        "end": 301.04571428571427
      },
      "mix_ehm": {
        "start": 303,
        "end": 311.04571428571427
      },
      "mix_ehmp": {
        "start": 313,
        "end": 321.04571428571427
      },
      "mix_ehp": {
        "start": 323,
        "end": 331.04571428571427
      },
      "mix_el": {
        "start": 333,
        "end": 341.04571428571427
      },
      "mix_elm": {
        "start": 343,
        "end": 351.04571428571427
      },
      "mix_elmp": {
        "start": 353,
        "end": 361.04571428571427
      },
      "mix_elp": {
        "start": 363,
        "end": 371.04571428571427
      },
      "mix_em": {
        "start": 373,
        "end": 381.04571428571427
      },
      "mix_emp": {
        "start": 383,
        "end": 391.04571428571427
      },
      "mix_ep": {
        "start": 393,
        "end": 401.04571428571427
      },
      "mix_g": {
        "start": 403,
        "end": 411.04571428571427
      },
      "mix_gh": {
        "start": 413,
        "end": 421.04571428571427
      },
      "mix_ghl": {
        "start": 423,
        "end": 431.04571428571427
      },
      "mix_ghlm": {
        "start": 433,
        "end": 441.04571428571427
      },
      "mix_ghlmp": {
        "start": 443,
        "end": 451.04571428571427
      },
      "mix_ghlp": {
        "start": 453,
        "end": 461.04571428571427
      },
      "mix_ghm": {
        "start": 463,
        "end": 471.04571428571427
      },
      "mix_ghmp": {
        "start": 473,
        "end": 481.04571428571427
      },
      "mix_ghp": {
        "start": 483,
        "end": 491.04571428571427
      },
      "mix_gl": {
        "start": 493,
        "end": 501.04571428571427
      },
      "mix_glm": {
        "start": 503,
        "end": 511.04571428571427
      },
      "mix_glmp": {
        "start": 513,
        "end": 521.0457142857143
      },
      "mix_glp": {
        "start": 523,
        "end": 531.0457142857143
      },
      "mix_gm": {
        "start": 533,
        "end": 541.0457142857143
      },
      "mix_gmp": {
        "start": 543,
        "end": 551.0457142857143
      },
      "mix_gp": {
        "start": 553,
        "end": 561.0457142857143
      },
      "mix_h": {
        "start": 563,
        "end": 571.0457142857143
      },
      "mix_hl": {
        "start": 573,
        "end": 581.0457142857143
      },
      "mix_hlm": {
        "start": 583,
        "end": 591.0457142857143
      },
      "mix_hlmp": {
        "start": 593,
        "end": 601.0457142857143
      },
      "mix_hlp": {
        "start": 603,
        "end": 611.0457142857143
      },
      "mix_hm": {
        "start": 613,
        "end": 621.0457142857143
      },
      "mix_hmp": {
        "start": 623,
        "end": 631.0457142857143
      },
      "mix_hp": {
        "start": 633,
        "end": 641.0457142857143
      },
      "mix_l": {
        "start": 643,
        "end": 651.0457142857143
      },
      "mix_lm": {
        "start": 653,
        "end": 661.0457142857143
      },
      "mix_lmp": {
        "start": 663,
        "end": 671.0457142857143
      },
      "mix_lp": {
        "start": 673,
        "end": 681.0457142857143
      },
      "mix_m": {
        "start": 683,
        "end": 691.0457142857143
      },
      "mix_mp": {
        "start": 693,
        "end": 701.0457142857143
      },
      "mix_p": {
        "start": 703,
        "end": 711.0457142857143
      }
    }
}
