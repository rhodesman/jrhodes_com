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

var cc = cc = cc || {};
/**
 @brief    The cocos2d Application.

 The reason for implement as private inheritance is to hide some interface call by CCDirector.
 */
cc.AppDelegate = cc.Application.extend({
    ctor:function () {
        this._super();
    },
    /**
     @brief    Implement for initialize OpenGL instance, set source path, etc...
     */
    initInstance:function () {
        return true;
    },

    /**
     @brief    Implement CCDirector and CCScene init code here.
     @return true    Initialize success, app continue.
     @return false   Initialize failed, app terminate.
     */
    applicationDidFinishLaunching:function () {
        // initialize director
        var director = cc.Director.sharedDirector();

        // enable High Resource Mode(2x, such as iphone4) and maintains low resource on other devices.
        //director->enableRetinaDisplay(true);

        // turn on display FPS
        director.setDisplayFPS(false);

        // director->setDeviceOrientation(CCDEVICE_ORIENTATION_LANDSCAPE_LEFT);

        // set FPS. the default value is 1.0/60 if you don't call this
        director.setAnimationInterval(1.0 / 60);

        // create a scene. it's an autorelease object
        var scene = introScene.scene();

        // run
        setTimeout(function() {director.runWithScene(scene);}, 2000);

        return true;
    },

  /* -- OLD 
	playSound:function(sound, startTime) {

		if((IS_IOS) && (sound == "intro_shovel")) {
			sound = "play_intro_shovel";
		}

		mySound = sounds[sound];

		if(NOW_PLAYING != null) {
			NOW_PLAYING.stop();
		}
		if(!startTime) {
			try {
				mySound.play();
				NOW_PLAYING = mySound;
			} catch (err) {
				NOW_PLAYING = null;
			}
		} else {
			try {
				NOW_PLAYING.setPosition(startTime*1000);
				NOW_PLAYING.play();
			} catch (err) {
				NOW_PLAYING = null;
			}
		}

	},
	*/
	
	/**
	 * Play a sound sprite
	 * - soundId: string, the ID of the sound to play
	 * - spriteStartTime: float, the offset in seconds since the regular sprite beginning in the sprite sheet
	 */
	playSound:function(soundId, spriteStartTime) {
    var spriteStartTime = spriteStartTime || 0;
    var spriteData = soundSprites[soundId];
    var spriteOffset = spriteData[0] + spriteStartTime * 1000; // sprite start time is specified as *seconds* passed since the sprite's beginning
    var msToPlay = spriteData[1] - spriteStartTime * 1000; // trimmed sprites (sprite offset is not zero) should last their duration minus offset
    // console.log('Should play "' + soundId + '" from ' + String(spriteOffset) + ' for ' + String(msToPlay) + 'ms');
    
    currentSoundSpriteStopPosition = spriteOffset + msToPlay;
    try {
      if (IS_IOS) {
        soundsSheet.pause();
        soundsSheet.setPosition(spriteOffset);          
        soundsSheet.play();
      } else {
        soundsSheet.mute();
        soundsSheet.setPosition(spriteOffset);
        soundsSheet.unmute();        
      }
    } catch(err) {
      console.log('Cannot seek to ' + spriteOffset);
    }
    
    // stop (mute) current sound sprite after playing for the desired time
    // Use a 10ms polling interval
    if (spritePlayTimeout == null) {
      spritePlayTimeout = setInterval(function() { 
        if (soundsSheet != null && currentSoundSpriteStopPosition && (soundsSheet.position >= currentSoundSpriteStopPosition)) {
          if (IS_IOS) {
            soundsSheet.pause();
          } else {
            soundsSheet.mute();          
          }
          // console.log('muting current sound sprite at ' + soundsSheet.position);
          currentSoundSpriteStopPosition = 0;
        } else if (soundsSheet != null && soundsSheet.position >= 404387) {
          // the end of the last element in the sheet (FIXME - harcoded)
          // rewind sound back
          soundsSheet.setPosition(1);
          // console.log('rewinding sound back');
        }
        
      }, 10);
      
    }
    
	},
	

//	cc.Application.sharedApplication().playSound('test');

    /**
     @brief  The function be called when the application enter background
     @param  the pointer of the application
     */
    applicationDidEnterBackground:function () {
        cc.Director.sharedDirector().pause();
    },

    /**
     @brief  The function be called when the application enter foreground
     @param  the pointer of the application
     */
    applicationWillEnterForeground:function () {
        cc.Director.sharedDirector().resume();
    }
});