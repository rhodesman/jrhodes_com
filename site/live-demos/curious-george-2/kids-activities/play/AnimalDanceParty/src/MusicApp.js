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

AnimalPartyScene = cc.Scene.extend({
    ctor:function (bPortrait) {
        this._super();
        this.init();
    },
    onEnter:function () {
        this._super();
        var label = cc.LabelTTF.create("Play", "Arial", 20);
        var menuItem = cc.MenuItemLabel.create(label, this, this.playMusic);
				
				var menu = cc.Menu.create(menuItem, null);
        var s = cc.Director.sharedDirector().getWinSize();
        menu.setPosition(cc.PointZero());
        menuItem.setPosition(cc.PointMake(s.width - 50, 25));
				
        titleScreen = new TitleLayer();
        this.addChild(titleScreen, 1);
    }
});

TitleLayer = cc.Layer.extend({
		ctor:function (bPortrait) {
				this._super();
				this.init();
		},
		onEnter:function () {
				this._super();
				
				var s = cc.Director.sharedDirector().getWinSize();
				
				// Background
				var bg_sprite = cc.Sprite.create(res_title_bg);
				bg_sprite.setPosition(cc.PointMake(s.width / 2, s.height / 2));
				this.addChild(bg_sprite, 1);
				
				// Play initial VO
				cc.AudioManager.sharedEngine().playVO(vo_splash);
				
				// Show Play button
				buttonBehavior('cgp-btn-play', vo_play, true);
		},
		playButtonCallback:function () {
				var play_button = document.getElementById('cgp-btn-play');
				play_button.parentNode.removeChild(play_button);
				var scene = cc.Scene.create();
        mainGame = new AnimalPartyLayer();
        scene.addChild(mainGame);
        //cc.Director.sharedDirector().replaceScene(cc.TransitionFade.create(0.8, scene, cc.ccc3(167, 222, 130)));
				cc.Director.sharedDirector().replaceScene(scene);
				
				// show help, record & play buttons
				buttonBehavior('cgp-btn-help', vo_help, true);
				buttonBehavior('btn-playback', vo_playback, true);
				var record_button = document.getElementById('btn-record');
				buttonBehavior(record_button, null, true);
				if (!iOS) {
					record_button.addEventListener('mouseover', function() { if (mainGame._recording) cc.AudioManager.sharedEngine().playVO(vo_stop); else cc.AudioManager.sharedEngine().playVO(vo_record); }, false);
				}
				
				// Play opening VO
				cc.AudioManager.sharedEngine().playVO(vo_load_merged);
				//cc.AudioManager.sharedEngine().playVO(vo_load1, new Array(vo_load2, vo_load3, vo_load4, vo_load5, vo_load6, vo_load7, vo_load8, vo_load9), iOS_loadingVO_durations);
		}
});

AnimalPartyLayer = cc.Layer.extend({
		_animals:null,
		_activeSounds:0,
		_recording:false,
		_animalData:[],
		_animalSprites:[],
		_animalActions:[],
		
		// Class constructor
		ctor:function () {
        this._super();
				this.init();
				
				// Animal							 audio file path				bit offset	sprite file path		static image path						animation plist file				frame name prefix			x pos		y pos
				this._animalData[0] = {path: ELEPHANT_AUDIO,	offset: 1,	sprite: s_elephant,	static: s_elephant_static,	anim_list: s_elephantPlist,	prefix: 'elephant',		x:160,	y: 363};
				this._animalData[1] = {path: BIRD_AUDIO,			offset: 2,	sprite: s_bird,			static: s_bird_static,			anim_list: s_birdPlist,			prefix: 'parrot',			x:120,	y: 150};
				this._animalData[2] = {path: LION_AUDIO,			offset: 8,	sprite: s_lion,			static: s_lion_static,			anim_list: s_lionPlist,			prefix: 'lion',				x:490,	y: 399};
				this._animalData[3] = {path: HIPPO_AUDIO,			offset: 16,	sprite: s_hipo,			static: s_hipo_static,			anim_list: s_hipoPlist,			prefix: 'hippo',			x:765,	y: 323};
				this._animalData[4] = {path: GATOR_AUDIO,			offset: 32,	sprite: s_gator,		static: s_gator_static,			anim_list: s_gatorPlist,		prefix: 'crocodile',	x:647,	y: 119};
				this._animalData[5] = {path: MONKEY_AUDIO,		offset: 4,	sprite: s_george,		static: s_george_static,		anim_list: s_georgePlist,		prefix: 'george',			x:352,	y: 219};
    },
		
		// Initialization function
    onEnter:function () {
				this._super();
				var s = cc.Director.sharedDirector().getWinSize();
				
				// Background
				var bg_sprite = cc.Sprite.create(res_app_bg);
				bg_sprite.setPosition(cc.PointMake(s.width / 2, s.height / 2));
				this.addChild(bg_sprite, 1);
				
				// Animals buttons
				for (var i = 0; i < this._animalData.length; i++) {
					// Load sprites for this animal
					this.loadSpriteFrames(i);
					
					// Create menu item
					this.addMenuItem(i);
					
					// Setup animations
					var framesArray = [];
					for (var j = 0; j <= 95; j++) {
						framesArray.push(cc.SpriteFrameCache.sharedSpriteFrameCache().spriteFrameByName(this._animalData[i].prefix + leadingZeros(j, 4)));
					}
					var animalAnimation = cc.Animation.createWithSpriteFrames(framesArray, 0.084, 1);
					mainGame._animalActions[i] = cc.Animate.create(animalAnimation);
				}
				
				// Gator notes buttons
				var gator_notes_menu = cc.Menu.create();
				var gator_notes = [];
				for (var n = 1; n <= 8; n++) {
					gator_notes[n] = cc.MenuItemImage.create(res_gator_note, null, this, this.gatorNoteCallback);
					gator_notes[n].setOpacity(0);
					gator_notes_menu.addChild(gator_notes[n], n + 100);
				}
				gator_notes[1].setPosition(cc.PointMake(606, 177));
				gator_notes[2].setPosition(cc.PointMake(666, 183));
				gator_notes[3].setPosition(cc.PointMake(733, 189));
				gator_notes[4].setPosition(cc.PointMake(798, 181));
				gator_notes[5].setPosition(cc.PointMake(849, 150));
				gator_notes[6].setPosition(cc.PointMake(829, 77));
				gator_notes[7].setPosition(cc.PointMake(765, 53));
				gator_notes[8].setPosition(cc.PointMake(695, 49));
				gator_notes_menu.setPosition(cc.PointZero());
				this.addChild(gator_notes_menu, 100);

        // Set default volume
        cc.AudioManager.sharedEngine().setEffectsVolume(1);
    },
		
		// Load animal sprite frames (don't generate sprite from cache in iOS, which makes it slow)
		loadSpriteFrames: function(animal_id) {
				cc.SpriteFrameCache.sharedSpriteFrameCache().addSpriteFramesWithFile(this._animalData[animal_id].anim_list);
				if (iOS) {
						mainGame._animalSprites[animal_id] = cc.Sprite.create(this._animalData[animal_id].static);
				}
				else {
						//var batchNode = cc.SpriteBatchNode.create(this._animalData[i].sprite);
						mainGame._animalSprites[animal_id] = cc.Sprite.createWithSpriteFrame(this._animalData[animal_id].prefix + '0000');
				}
		},
		
		// Initialize and add the menu item for the specified animal
		addMenuItem: function(animal_id) {
				animalSprite = cc.MenuItemSprite.create(mainGame._animalSprites[animal_id], null, this, this.animalCallback);
				animalSprite.setPosition(cc.PointMake(this._animalData[animal_id].x, this._animalData[animal_id].y));
				var singleAnimalContainer = cc.Menu.create();
				singleAnimalContainer.addChild(animalSprite, 90 + animal_id); // zOrder is used to identify the animal in the callback
				singleAnimalContainer.setPosition(cc.PointZero());
				this.addChild(singleAnimalContainer, 90 + animal_id, animal_id);
		},
		
		// Animals buttons callback
		animalCallback: function(sender) {
			var animal_id = sender.getZOrder() - 90;
			if (this._activeSounds & this._animalData[animal_id].offset) {
				mainGame.stopAnimation(animal_id);
				cc.AudioManager.sharedEngine().stopEffect(animal_id, this._animalData[animal_id].path, this._activeSounds ^ this._animalData[animal_id].offset, this._recording);
			}
			else {
				if (iOS) { // iOS can only play one track at a time, so stop all other tracks
					this.stopAll(true);
					this._activeSounds = 0;
				}
				mainGame.runAnimation(animal_id);
				cc.AudioManager.sharedEngine().playEffect(animal_id, this._animalData[animal_id].path, this._activeSounds ^ this._animalData[animal_id].offset, true, this._recording);
			}
			this._activeSounds = this._activeSounds ^ this._animalData[animal_id].offset;
		},
		
		// Gator notes callback
		gatorNoteCallback: function(sender) {
			var note_id = sender.getZOrder() - 100;
			cc.AudioManager.sharedEngine().playEffect(null, 'res/audio/notes/gator_xylo_note0' + note_id, this._activeSounds, false, this._recording);
		},
		
		// Record button callback
		recordCallback: function(sender) {
			this.stopAll(true);
			this._activeSounds = 0;
			var record_button = document.getElementById('btn-record');
			if (this._recording) {
				this._recording = false;
				cc.AudioManager.sharedEngine().stopRecording();
				record_button.removeAttribute('class');
				if (iOS) {
					this.playVO(vo_stop);
				}
			}
			else {
				this._recording = true;
				cc.AudioManager.sharedEngine().startRecording();
				record_button.setAttribute('class', 'active');
				if (iOS) {
					this.playVO(vo_record);
				}
			}
			//this._playbackButton.setEnabled(true);
		},
		
		// get recording property
		isRecording: function() {
			return this._recording;
		},
		
		// Playback button callback
		playbackCallback: function(sender) {
			this.stopAll(true);
			if (this._recording) {
				this._recording = false;
				this._activeSounds = 0;
				cc.AudioManager.sharedEngine().stopRecording();
				var record_button = document.getElementById('btn-record');
				record_button.removeAttribute('class');
			}
			cc.AudioManager.sharedEngine().initializePlayback();
			//this.playNextSound();
			playbackTimer = setInterval(mainGame.playNextSound, 100);
		},
		
		// Plays the next sound in the recorded list
		playNextSound: function() {
			var nextSound = cc.AudioManager.sharedEngine().getNextSound();
			if (nextSound !== false) {
				if (nextSound.path == 'STOP_ALL') {
						cc.Log(playCurrentTime + ' STOP_ALL');
						mainGame.stopAll(true);
				}
				else if (nextSound === -1) {
					cc.Log(playCurrentTime + ' END ---');
					mainGame.playVO(mainGame.randomItem(new Array(vo_end_song1, vo_end_song2, vo_end_song3, vo_end_song4, vo_end_song5)), vo_end_song_final);
					clearInterval(playbackTimer);
				}
				else if (nextSound.start) {
					cc.Log(playCurrentTime + ' START anim {' + nextSound.animationIndex + '} path {' + nextSound.path + '}');
					if (nextSound.animationIndex !== null) {
						if (iOS) {
							mainGame.stopAll(true);
							mainGame._activeSounds = 0;
						}
						mainGame.runAnimation(nextSound.animationIndex);
					}
					cc.AudioManager.sharedEngine().playEffect(null, nextSound.path, nextSound.activeSounds, nextSound.loop, false);
				}
				else {
					cc.Log(playCurrentTime + ' STOP anim {' + nextSound.animationIndex + '} path {' + nextSound.path + '}');
					if (nextSound.animationIndex !== null) {
						mainGame.stopAnimation(nextSound.animationIndex);
					}
					cc.AudioManager.sharedEngine().stopEffect(nextSound.animationIndex, nextSound.path, nextSound.activeSounds, false);
				}
			}
			playCurrentTime += 100;
		},
		
		// Returns a random item from array
		randomItem: function (items) {
				return items[Math.floor(Math.random() * items.length)];
		},
		
		// Run an animal animation identified by animal_id
		runAnimation: function (animal_id) {
			if (!iOS) {
				var start_frame = Math.round(loopCurrentTime * 11.875); // conversion factor (95frames/8seconds)
				if (start_frame > 0) { // reorder frames according to the current audio loop time
					var frames = mainGame._animalActions[animal_id].getAnimation().getFrames();
					var first_frames = frames.splice(0, start_frame);
					mainGame._animalActions[animal_id].getAnimation().setFrames(frames.concat(first_frames));
				}
			}
			var action = cc.RepeatForever.create(mainGame._animalActions[animal_id]);
			mainGame._animalSprites[animal_id].runAction(action);
		},
		
		// Stop animations on an animal identified by animal_id
		stopAnimation: function (animal_id) {
			mainGame._animalSprites[animal_id].stopAllActions();
			if (iOS) {
				mainGame.removeChildByTag(animal_id, true);
				cc.SpriteFrameCache.sharedSpriteFrameCache().removeSpriteFrames();
				mainGame.loadSpriteFrames(animal_id)
				mainGame.addMenuItem(animal_id);
			}
			// reset frames
			if (!iOS) {
				var framesArray = [];
				for (var j = 0; j <= 95; j++) {
					framesArray.push(cc.SpriteFrameCache.sharedSpriteFrameCache().spriteFrameByName(this._animalData[animal_id].prefix + leadingZeros(j, 4)));
				}
				mainGame._animalActions[animal_id].setAnimation(cc.Animation.createWithSpriteFrames(framesArray, 0.084, 1));
			}
		},
		
		// Stop all audio and animations
		stopAll:function (stopAnimations) {
				cc.AudioManager.sharedEngine().stopAllEffects();
				if (stopAnimations) {
						for (var i = 0; i < mainGame._animalData.length; i++ ) {
								mainGame.stopAnimation(i);
						}
				}
		},
		
		// Play VO audio
		playVO: function (path, nextSoundPath) {
				nextSoundPath = nextSoundPath || false;
				cc.AudioManager.sharedEngine().playVO(path, nextSoundPath);
		},
		
		// Class destructor
		onExit:function () {
        this._super();
        cc.AudioManager.sharedEngine().end();
    }
});

// Add mouseover/mouseout events, which are different for desktop and iOS
function buttonBehavior(element, vo_audio, show) {
	if (typeof element == 'string') { element = document.getElementById(element); }
	var button_event = 'mouseover';
	if (iOS) button_event = 'touchstart';
	element.addEventListener(button_event, function(){
		if (element.className == '' || !new RegExp('\\bhover\\b').test(element.className)) element.className += (element.className ? ' ' : '') + 'hover';
		if (vo_audio) cc.AudioManager.sharedEngine().playVO(vo_audio);
	}, false);
	button_event = 'mouseout';
	if (iOS) button_event = 'touchend';
	element.addEventListener(button_event, function(){
		if (element.className != '' && new RegExp('\\bhover\\b').test(element.className)) element.className = element.className.replace((element.className.indexOf(' hover') >= 0 ? ' hover' : 'hover'), '');
	}, false);
	if (show) {
		element.setAttribute('style', 'display: block;');
	}
}

var soundId = null;

var playCurrentTime = 0;
var recordCurrentTime = 0;
var loopCurrentTime = 0;
var playbackTimer = null;

var mainGame = null;
var titleScreen = null;

function leadingZeros(number, maxlength) {
	number = "" + number;
	while (number.length < maxlength) {
		number = "0" + number;
	}
	return number;
}