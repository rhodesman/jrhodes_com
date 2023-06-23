/****************************************************************************
 Copyright (c) 2010-2012 cocos2d-x.org
 Copyright (c) 2008-2010 Ricardo Quesada
 Copyright (c) 2011      Zynga Inc.

 http://www.cocos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

var TitleScreen = cc.Layer.extend({
    isMouseDown:false,

    init:function () {

      this._super();

      var size = cc.Director.sharedDirector().getWinSize();

      //title screen bg
      var titleScreen = cc.Sprite.create(s_title);
      titleScreen.setPosition(cc.ccp(size.width / 2, size.height / 2));
      this.addChild(titleScreen);

      this.setTouchEnabled(true);
      
      var newGameNormal = cc.Sprite.create(s_buttons, cc.RectMake(0, 0, 181, 119));
      var newGameSelected = cc.Sprite.create(s_buttons, cc.RectMake(0, 121, 181, 119));
      var newGameDisabled = cc.Sprite.create(s_buttons, cc.RectMake(0, 0, 181, 119));
      
      var newGame = cc.MenuItemSprite.create(newGameNormal, newGameSelected, newGameDisabled, this, function () {
        if(isIOS){
          cg_Sprite.init(this.onNewGame);
        } else {
          this.onButtonEffect();
          this.onNewGame();
        }
      });
      this.newGame = newGame;

      var menu = cc.Menu.create(newGame);
      
      menu.setPosition(cc.ccp(size.width - 112, 77));
      this.addChild(menu, 1, 2);
      this.schedule(this.update, 0.1);
      if(!global.autoplay){
        if(global.newGame){
          playSound(snd_fishing_wgeorge);
        } else {
          playSound(snd_if_play_again, 1.5);
        }
      } else {
        cc.AudioManager.sharedEngine().playEffect(window[global.autoplay]);
      }

      global.sortTypes = shaffuru(global.sortTypes);
      
      return true;
    },    // a selector callback
    menuCloseCallback:function (sender) {
        cc.Director.sharedDirector().end();
    },
    ccTouchesBegan:function (touches, event) {
        this.isMouseDown = true;
        if(isIOS){
          var splashAudio = splashAudio || new Audio('assets/sounds/' + global.locale + '/CG_Game-ActivityTitles_FishingWithGeorge_Boy.mp3');
          splashAudio.play();
        }
    },
    playButtonRect: new cc.RectMake(700,30,175,90),
    ccTouchesMoved:function (touches, event) {
      if(global.scenes.menuScene == cc.Director.sharedDirector().getRunningScene()){
        if( cc.Rect.CCRectContainsPoint(this.playButtonRect, touches[0]._point) ){
          if(this.touchTarget === null){
            soundsClear();
            playSound(snd_play,0,true);
            this.touchTarget = 'playButton';
            this.newGame.selected();
          }
        } else { //touching nothing
          if(this.touchTarget !== null){
            if(this.touchTarget ==  'playButton'){
              this.newGame.unselected();
            }
          }
          this.touchTarget = null;
        }
      }
    },
    ccTouchesEnded:function (touches, event) {
        this.isMouseDown = false;
    },
    ccTouchesCancelled:function (touches, event) {
        //console.log("ccTouchesCancelled");
    },
    onButtonEffect:function(){

    },
    onNewGame:function (pSender) {
      global.newGame = true;
      global.scenes.CastingScene = cc.Scene.create();
      global.scenes.CastingScene.addChild(GameLayer.create());
      cc.Director.sharedDirector().replaceScene(cc.TransitionFade.create(1.2, global.scenes.CastingScene));
    }
});

TitleScreen.create = function () {
    var sg = new TitleScreen();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};

TitleScreen.scene = function () {
    var scene = cc.Scene.create();
    var layer = TitleScreen.create();
    scene.addChild(layer);
    return scene;
};

var soundsQueue = [];
var playSound = function (effect_file, delay, ignorebackground) {
  if(delay > 0){
    soundsQueue.push ( window.setTimeout(function(){
      playSound(effect_file, 0);
    }, delay*1000) );
  } else if(!ignorebackground) {
    if (currentSound && currentSound != effect_file && !isIOS) cc.AudioManager.sharedEngine().stopEffect(currentSound);
    if(isIOS)
      cg_Sprite.play(effect_file, 0, false);
    else
      currentSound = cc.AudioManager.sharedEngine().playEffect(effect_file);
    if (arrayContains(replayAbleHelpSounds,effect_file)) {
      cc.Director.sharedDirector().getRunningScene().replaySound = effect_file;
    }
  } else if(ignorebackground){
    if(isIOS)
      cg_Sprite.play(effect_file, 0, false);
    else
      cc.AudioManager.sharedEngine().playEffect(effect_file);
  }
};
var replayAbleHelpSounds = [snd_post_intro,snd_fishing_welcome,snd_hooked_4,snd_which_tank_1,snd_which_tank_2,snd_which_tank_3];
var replayHelp = function(){
  if(cc.Director.sharedDirector().getRunningScene().replaySound){
    cc.AudioManager.sharedEngine().playEffect(cc.Director.sharedDirector().getRunningScene().replaySound);
  }
  
  if(global.scenes.SortingScene == cc.Director.sharedDirector().getRunningScene()){
    if(!global.layers.SortingLayer.sortStarted){
      global.layers.SortingLayer.onSortStart();
    }
  }
};

var currentSound = null;
var playRandomSound = function (effect_files, delay){
  playSound(effect_files[ Math.floor(Math.random()*effect_files.length) ], delay);
};

var soundsClear = function(){
  for (var i=0; i<soundsQueue.length; ++i){
    clearTimeout(soundsQueue[i]);
  }
};

if(global.autoplay){
    cc.AudioManager.sharedEngine().playEffect(window[global.autoplay]);
}
