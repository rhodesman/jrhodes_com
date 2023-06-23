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

/**
 * Whether the sound on or not
 * @type Boolean
 */
cc.sound = true;

/**
 * Support audio format
 * @type Boolean
 */
cc.capabilities = {
    mp3:false,
    ogg:false,
    wav:false
};

/**
 * Offer a VERY simple interface to play background music & sound effect.
 * @class
 * @extends   cc.Class
 */
cc.AudioManager = cc.Class.extend(/** @lends cc.AudioManager# */{
    _initialized:false,
    _supportedFormat:[ "mp3", "ogg", "wav" ],
    _requestedFormat:null,
    _sound_enable:true,
    _audioList:{},
    _activeAudioExt:-1,
    _bgmList:{},
    _isBgmPlaying:false,
    _playingBgm:null,
    _effectsVolume:1,
		_timer:null,
		_recordTimer:null,
		_loopTimer:null,
		_recording:false,
		_playList:null,
		_currentTrack:0,
    /**
    * Constructor
    */
    ctor:function () {
        if (this._initialized)
            return;

        // init audio
        var au = document.createElement('audio');
        if (au.canPlayType) {
            cc.capabilities.ogg = ("no" != au.canPlayType('audio/ogg; codecs="vorbis"'))
                && ("" != au.canPlayType('audio/ogg; codecs="vorbis"'));
								
            cc.capabilities.mp3 = ("no" != au.canPlayType("audio/mpeg"))
                && ("" != au.canPlayType("audio/mpeg"));

            cc.capabilities.wav = ("no" != au.canPlayType('audio/wav; codecs="1"'))
                && ("" != au.canPlayType('audio/wav; codecs="1"'));

            // enable sound if any of the audio format is supported
            cc.sound = cc.capabilities.mp3 || cc.capabilities.ogg || cc.capabilities.wav;
        }
				
				// init playlist
				this._playList = new Array();
				
        this._initialized = true;
    },
    /**
     * Initialize sound type
     * @param {String} audioType
     * @return {Boolean}
     * @example
     * //example
     * cc.AudioManager.sharedEngine().init("mp3,ogg");
     */
    init:function (audioType) {
        if (audioType) {
            this._requestedFormat = new String(audioType)
        }
        else {
            // if no param is given to init we use mp3 by default
            this._requestedFormat = new String("mp3");
        }

        // detect the prefered audio format
        this._activeAudioExt = this._getSupportedAudioFormat();
        return this._sound_enable;
    },
    _getSupportedAudioFormat:function () {
        var extIdx = 0;
        // check for sound support by the browser
        if (!cc.sound) {
            this._sound_enable = false;
            return;
        }

        // check for MP3
        if ((this._requestedFormat.search(/mp3/i) != -1) && cc.capabilities.mp3) {
            return this._supportedFormat[extIdx];
        }

        // check for OGG/Vorbis
        if ((this._requestedFormat.search(/ogg/i) != -1) && cc.capabilities.ogg) {
            return this._supportedFormat[++extIdx];
        }

        // check for WAV
        if ((this._requestedFormat.search(/wav/i) != -1) && cc.capabilities.wav) {
            return this._supportedFormat[++extIdx];
        }

        // deactivate sound
        this._sound_enable = false;

        return -1;
    },

    /**
     *The volume of the effects max value is 1.0,the min value is 0.0 .
     * @return {Number}
     * @example
     * //example
     * var effectVolume = cc.AudioManager.sharedEngine().getEffectsVolume();
     */
    getEffectsVolume:function () {
        return this._effectsVolume;
    },

    /**
     * Set the volume of sound effecs.
     * @param {Number} volume Volume must be in 0.0~1.0 .
     * @example
     * //example
     * cc.AudioManager.sharedEngine().setEffectsVolume(0.5);
     */
    setEffectsVolume:function (volume) {
        if (volume > 1) {
            this._effectsVolume = 1;
        }
        else if (volume < 0) {
            this._effectsVolume = 0;
        }
        else {
            this._effectsVolume = volume;
        }
        if (this._audioList) {
            for (var i in this._audioList) {
                this._audioList[i].volume = this._effectsVolume;
            }
        }
    },
		
		setEffectTimer:function () {
			this._timer = setInterval( function() {
				playCurrentTime += 100;
				//DEBUG document.getElementById('timerp').innerHTML = playCurrentTime;
			}, 100 );
		},
		
		clearEffectTimer:function () {
			clearInterval( this._timer );
			this._timer = null;
		},
		
		setRecordTimer:function () {
			this._recordTimer = setInterval( function() {
				recordCurrentTime += 100;
				//DEBUG document.getElementById('timerr').innerHTML = recordCurrentTime;
			}, 100 );
		},
		
		clearRecordTimer:function () {
			clearInterval( this._recordTimer );
			this._recordTimer = null;
		},
		
		setLoopTimer:function () {
		  
		  document.addEventListener('spriteloopback', function(){
		    loopCurrentTime = 0;
		  }, false);
		  
			if (this._loopTimer === null) {
				this._loopTimer = setInterval( function() {
					if (loopCurrentTime < 8) {
						loopCurrentTime += 0.1;
					}
					else {
						loopCurrentTime = 0;
					}
					//DEBUG document.getElementById('timerl').innerHTML = loopCurrentTime;
				}, 100 );
			}
		},
		
		clearLoopTimer:function () {
			clearInterval( this._loopTimer );
			this._loopTimer = null;
			loopCurrentTime = 0;
			//DEBUG document.getElementById('timerl').innerHTML = loopCurrentTime;
		},
		
		startRecording:function() {
			this._recording = true;
			this._playList = new Array();
			recordCurrentTime = 0;
		},
		
		stopRecording:function() {
			this.addToPlayList(null, 'STOP_ALL', false, false, 0);
			this._recording = false;
			this.clearRecordTimer();
		},
		
		addToPlayList:function(animationIndex, audio_path, start, loop, activeSounds) {
			var play_item = {
					animationIndex: animationIndex,
					path: audio_path,
					time: recordCurrentTime,
					start: start,
					loop: loop,
					activeSounds: activeSounds};
			this._playList.push(play_item);
      //DEBUG $('#recorded').append('<li>{' + animationIndex + '} added at [' + play_item.time + '] sound "' + play_item.path + '"</li>');
      cc.Log( '<li>{' + animationIndex + '} added at [' + play_item.time + '] sound "' + play_item.path + '"</li>');
			return play_item;
		},
		
		initializePlayback:function() {
			this._currentTrack = 0;
			return this._playList[this._currentTrack] != undefined;
		},
		
		getNextSound:function() {
			if (this._playList[this._currentTrack] != undefined && this._playList[this._currentTrack].time <= playCurrentTime) {
					return this._playList[this._currentTrack++];
			}
			if (this._playList.length <= this._currentTrack) {
					return -1;
			}
			return false;
		},

    /**
     * Play sound effect.
     * @param {String} path The path of the sound effect  without filename extension.
     * @param {Boolean} loop Whether to loop the effect playing, default value is false
     * @example
     * //example
     * var soundId = cc.AudioManager.sharedEngine().playEffect(path);
     */
    playEffect:function (animationIndex, path, activeSounds, loop, record) {
      this.stopVOIntro();
        var soundCache = this._getEffectList(path);
        if (soundCache) {
						this.setLoopTimer();
						if (record) {
								if (this._recordTimer == null) {
									this.setRecordTimer();
								}
								var play_item = this.addToPlayList(animationIndex, path, true, loop, activeSounds);
						}
            soundCache.loop = loop || false;
						if (path.substr(0, 15) != 'res/audio/notes') { // notes do not need to sync to animal loops

						  if(iOS){
						    cg_Sprite.play(path, loopCurrentTime, loop);
						  } else {
  						  try {
                  soundCache.currentTime = loopCurrentTime;
                  soundCache.play();
                }
                catch(e) {
                  soundCache.play();
                }
							}
						} else {
              soundCache.play();
            }
        }
        return path;
    },
		playVO: function (path, nextSoundPath, iOS_durations_array) {
		  this.stopVOIntro();
  		  if(iOS){
          cg_Sprite.play(path, 0, false);
          return;
        } 
				var soundCache = this._getEffectList(path);
				if (soundCache) {
					//alert('dur:' + soundCache.duration);
						if (nextSoundPath) {
								if (nextSoundPath instanceof Array) {
										//alert(nextSoundPath.length);
										var nextSound = nextSoundPath.shift();
										// TODO : iOS doesn't allow audio to be played with events such as onended
										/*if (iOS) {
												var current_sound_duration = iOS_durations_array[iOS_durations_array.length - nextSoundPath.length - 2];
												setTimeout(function() { alert('en ' + current_sound_duration + ' suena ' + nextSoundPath); cc.AudioManager.sharedEngine().playVO(nextSound, nextSoundPath, iOS_durations_array); }, current_sound_duration + 1000);
										}
										else {
												soundCache.addEventListener('ended', function() { setTimeout( function() { cc.AudioManager.sharedEngine().playVO(nextSound, nextSoundPath); }, 1000) }, false);
										}*/
										soundCache.addEventListener('ended', function() { setTimeout( function() { cc.AudioManager.sharedEngine().playVO(nextSound, nextSoundPath); }, 1000) }, false);
								}
								else {
										/*if (iOS) {
												var current_sound_duration = iOS_durations_array[iOS_durations_array.length - 1];
												setTimeout(function() { alert('en ' + current_sound_duration + ' suena al ultimo ' + nextSound); cc.AudioManager.sharedEngine().playVO(nextSound); }, current_sound_duration + 1000);
										}
										else {
												soundCache.addEventListener('ended', function() { setTimeout( function() { cc.AudioManager.sharedEngine().playVO(nextSoundPath); }, 1000) }, false);
										}*/
										soundCache.addEventListener('ended', function() { setTimeout( function() { cc.AudioManager.sharedEngine().playVO(nextSoundPath); }, 1000) }, false);
								}
						}
						soundCache.play();
						//alert('SONADO ' + path);
				}
		},
		stopVOIntro:function(){
      if(this._audioList[vo_load_merged].currentTime > 0)
      this._audioList[vo_load_merged].pause();
		},

    /**
     * Pause playing sound effect.
     * @param {String} path The return value of function playEffect.
     * @example
     * //example
     * cc.AudioManager.sharedEngine().pauseEffect(path);
     */
    pauseEffect:function (path) {
        if (this._audioList[path]) {
						this.clearEffectTimer();
            this._audioList[path].pause();
        }
    },

    /**
     * Pause all playing sound effect.
     * @example
     * //example
     * cc.AudioManager.sharedEngine().pauseAllEffects();
     */
    pauseAllEffects:function () {
        if (this._audioList) {
						this.clearEffectTimer();
            for (var i in this._audioList) {
                this._audioList[i].pause();
            }
        }
    },

    /**
     * Resume playing sound effect.
     * @param {String} path The return value of function playEffect.
     * @example
     * //example
     * cc.AudioManager.sharedEngine().resumeEffect(path);
     */
    resumeEffect:function (path) {
        if (this._audioList[path]) {
            this._audioList[path].play();
        }
    },

    /**
     * Resume all playing sound effect
     * @example
     * //example
     * cc.AudioManager.sharedEngine().resumeAllEffects();
     */
    resumeAllEffects:function () {
        if (this._audioList) {
            for (var i in this._audioList) {
                this._audioList[i].play();
            }
        }
    },

    /**
     * Stop playing sound effect.
     * @param {String} path The return value of function playEffect.
     * @example
     * //example
     * cc.AudioManager.sharedEngine().stopEffect(path);
     */
    stopEffect:function (animationIndex, path, activeSounds, record) {
        if (this._audioList[path]) {
						if (activeSounds == 0) {
								this.clearEffectTimer();
								this.clearLoopTimer();
						}
						if (record) {
								this.addToPlayList(animationIndex, path, false, false, activeSounds);
						}
            this._audioList[path].pause();
            if(!iOS){
              this._audioList[path].currentTime = 0;
            } else {
              if(!activeSounds){
                cg_Sprite.Stop();
              }
            }
        }
				/*if (animationIndex != null) {
						mainGame._animalSprites[animationIndex].setDisplayFrame(cc.SpriteFrameCache.sharedSpriteFrameCache().spriteFrameByName(mainGame._animalData[animationIndex].prefix + '0000'));
				}*/
    },

    /**
     * Stop all playing sound effects.
     * @example
     * //example
     * cc.AudioManager.sharedEngine().stopAllEffects();
     */
    stopAllEffects:function () {
				this.clearEffectTimer();
				this.clearRecordTimer();
				this.clearLoopTimer();
				playCurrentTime = 0;
        if (this._audioList) {
            for (var i in this._audioList) {
								this._audioList[i].pause();
							  try {
										this._audioList[i].currentTime = 0;
								}
								catch (e) {
										// iOS
								}
            }
        }
    },

    /**
     * Preload sound effect resource.
     * This method is called when cc.Loader preload  resources.
     * @param {String} path The path of the sound effect file without filename extension.
     */
    preloadEffect:function (path) {
        if (this._sound_enable) {
            if (this._activeAudioExt == -1) return;
            var soundPath = path + "." + this._activeAudioExt;
            
            if(!iOS){
              var soundCache = new Audio(soundPath);
              soundCache.preload = 'auto';
  
              soundCache.addEventListener('canplaythrough', function (e) {
                  this.removeEventListener('canplaythrough', arguments.callee,
                      false);
              }, false);
              
              soundCache.addEventListener("error", function (e) {
                  cc.Loader.shareLoader().onResLoadingErr();
              }, false);
            } else {
              var soundCache = new Audio(); //don't create audio objects for ios here
            }
            // load it
            if(!iOS) soundCache.load();
            this._audioList[path] = soundCache;
        }
        cc.Loader.shareLoader().onResLoaded();
    },

    /**
     * Unload the preloaded effect from internal buffer
     * @param {String} path
     * @example
     * //example
     * cc.AudioManager.sharedEngine().unloadEffect(EFFECT_FILE);
     */
    unloadEffect:function (path) {
        if (this._audioList.hasOwnProperty(path)) {
            delete this._audioList[path];
        }
    },
    _getEffectList:function (elt) {
        if (this._audioList != null) {
            return this._audioList[elt];
        }
        else {
            return null;
        }
    },
    /**
     *  Stop all background music and sound effects
     * @example
     * //example
     * cc.AudioManager.sharedEngine().end();
     */
    end:function () {
        this.stopBackgroundMusic();
        this.stopAllEffects();
    }
});

/**
 * Get the shared Engine object, it will new one when first time be called.
 * @return {cc.AudioManager}
 */
cc.AudioManager.sharedEngine = function () {
    if (!cc.sharedEngine) {
        cc.sharedEngine = new cc.AudioManager();
    }
    return cc.sharedEngine;
};