//SoundRepo.js


var AUDIO_PATH = "assets/audio/";

function SoundRepo(){
	
	FlashPlugin.BASE_PATH = "src/" ;
	
	SoundJS.registerPlugins([HTMLAudioPlugin,FlashPlugin]);
	
	var preload;
	var loaded = false;
	this.loaded = function() {return loaded}
	
	var playing = [];
	var chitter;
	
	var manifest = [
		{id:"musicPayoff",src:AUDIO_PATH+"musicPayoff.mp3|"+AUDIO_PATH+"musicPayoff.ogg",data:7},
		{id:"music",src:AUDIO_PATH+"music.mp3|"+AUDIO_PATH+"music.ogg",data:1},
		{id:"start", src:AUDIO_PATH+"start.mp3|"+AUDIO_PATH+"start.ogg", data:1},
		{id:"feedback1", src:AUDIO_PATH+"feedback1.mp3|"+AUDIO_PATH+"feedback1.ogg", data:1},
		{id:"feedback2", src:AUDIO_PATH+"feedback2.mp3|"+AUDIO_PATH+"feedback2.ogg", data:1},
		{id:"feedback3", src:AUDIO_PATH+"feedback3.mp3|"+AUDIO_PATH+"feedback3.ogg", data:1},
		{id:"feedback4", src:AUDIO_PATH+"feedback4.mp3|"+AUDIO_PATH+"feedback4.ogg", data:1},
		{id:"go", src:AUDIO_PATH+"go.mp3|"+AUDIO_PATH+"go.ogg", data:1},
		{id:"help", src:AUDIO_PATH+"help.mp3|"+AUDIO_PATH+"help.ogg", data:1},
		{id:"helpOver", src:AUDIO_PATH+"helpOver.mp3|"+AUDIO_PATH+"helpOver.ogg", data:1},
		{id:"inactive1", src:AUDIO_PATH+"inactive1.mp3|"+AUDIO_PATH+"inactive1.ogg", data:1},
		{id:"inactive2", src:AUDIO_PATH+"inactive2.mp3|"+AUDIO_PATH+"inactive2.ogg", data:1},
		{id:"intro1", src:AUDIO_PATH+"intro1.mp3|"+AUDIO_PATH+"intro1.ogg", data:1},
		{id:"intro2", src:AUDIO_PATH+"intro2.mp3|"+AUDIO_PATH+"intro2.ogg", data:1},
		{id:"intro3", src:AUDIO_PATH+"intro3.mp3|"+AUDIO_PATH+"intro3.ogg", data:1},
		{id:"payoff1", src:AUDIO_PATH+"payoff1.mp3|"+AUDIO_PATH+"payoff1.ogg", data:1},
		{id:"play", src:AUDIO_PATH+"play.mp3|"+AUDIO_PATH+"play.ogg", data:1},
		{id:"playAgain", src:AUDIO_PATH+"playAgain.mp3|"+AUDIO_PATH+"playAgain.ogg", data:1},
		{id:"pressGo", src:AUDIO_PATH+"pressGo.mp3|"+AUDIO_PATH+"pressGo.ogg", data:1},
		{id:"toPlay", src:AUDIO_PATH+"toPlay.mp3|"+AUDIO_PATH+"toPlay.ogg", data:1},
		{id:"almostDone", src:AUDIO_PATH+"almostDone.mp3|"+AUDIO_PATH+"almostDone.ogg", data:1},
		{id:"trickOrTreatChitter", src:AUDIO_PATH+"trickOrTreatChitter.mp3|"+AUDIO_PATH+"trickOrTreatChitter.ogg",data:0},
		{id:"nodChitter",src:AUDIO_PATH+"nodChitter.mp3|"+AUDIO_PATH+"nodChitter.ogg",data:0},
		{id:"nod2Chitter",src:AUDIO_PATH+"nod2Chitter.mp3|"+AUDIO_PATH+"nod2Chitter.ogg",data:0},
		{id:"yayChitter",src:AUDIO_PATH+"yayChitter.mp3|"+AUDIO_PATH+"yayChitter.ogg",data:0},
		{id:"excitedChitter",src:AUDIO_PATH+"excitedChitter.mp3|"+AUDIO_PATH+"excitedChitter.ogg",data:0},
		{id:"clothes0Chitter",src:AUDIO_PATH+"clothes0Chitter.mp3|"+AUDIO_PATH+"clothes0Chitter.ogg",data:0},
		{id:"clothes1Chitter",src:AUDIO_PATH+"clothes1Chitter.mp3|"+AUDIO_PATH+"clothes1Chitter.ogg",data:0},
		{id:"clothes2Chitter",src:AUDIO_PATH+"clothes2Chitter.mp3|"+AUDIO_PATH+"clothes2Chitter.ogg",data:0},
		{id:"witchLaugh",src:AUDIO_PATH+"witchLaugh.mp3|"+AUDIO_PATH+"witchLaugh.ogg",data:0},
		{id:"witchFall",src:AUDIO_PATH+"witchFall.mp3|"+AUDIO_PATH+"witchFall.ogg",data:0},
		{id:"doorCreak",src:AUDIO_PATH+"doorCreak.mp3|"+AUDIO_PATH+"doorCreak.ogg",data:0},
		{id:"pumpkin1",src:AUDIO_PATH+"pumpkin1.mp3|"+AUDIO_PATH+"pumpkin1.ogg",data:0},
		{id:"pumpkin2",src:AUDIO_PATH+"pumpkin2.mp3|"+AUDIO_PATH+"pumpkin2.ogg",data:0},
		{id:"howl",src:AUDIO_PATH+"howl.mp3|"+AUDIO_PATH+"howl.ogg",data:0},
	];
	
	 preload = new PreloadJS(true);
	    preload.installPlugin(createjs.SoundJS);
		preload.loadManifest(manifest);
	    preload.onFileLoad = handleFileLoad;
	    preload.onProgress = handleProgress;
	    preload.onComplete = handleComplete;
		preload.onError = function(e){alert("loading error");};
		
	function handleFileLoad(event){}
	function handleProgress(event){}
	function handleComplete(event){
		loaded = true;
		sRepo.startMusic();
	}
		
	this.play = function(sound, only){
		if (!isMobile){
		if (only)
			this.quiet();
		if (playing.length >= 1)
			playing.push(createjs.SoundJS.play(sound, createjs.SoundJS.INTERRUPT_ANY));
		else
			playing[1] = createjs.SoundJS.play(sound, createjs.SoundJS.INTERRUPT_ANY);
			}
	}
	this.playAll = function(sounds,only){
		if (!isMobile){
		if (only)
			this.quiet();
		playing.push(SoundJS.play(sounds[0],SoundJS.INTERRUPT_ANY));
		for (var i = 1; i < sounds.length;i++){
			var next = sounds[i];
			playing[playing.length-1].onComplete = function(event){
				playing.push(SoundJS.play(next,SoundJS.INTERRUPT_ANY));
			}
		}
		}
	}
	
	this.delayPlay = function(sound,delay){
		playing.push(SoundJS.play(sound,SoundJS.INTERRUPT_ANY,delay));
	}
	
	this.playChitter = function(chit){
		if (chitter)
			chitter.stop();
		chitter = SoundJS.play(chit+"Chitter",createjs.SoundJS.INTERRUPT_ANY);
	}
	
	this.startMusic = function(){
		if (playing[0])
			playing[0].pause();
		playing[0] = null;
		playing[0] = SoundJS.play("music",SoundJS.INTERRUPT_ANY,0,0,-1,0.2);
	}
	
	this.startPayoff = function(){
		playing[0].pause();
		playing[0] = SoundJS.play("musicPayoff",SoundJS.INTERRUPT_ANY,0,0,-1,0.2);
	}
	
	this.quiet = function(){
		while (playing.length > 1){
			playing.pop().stop();
		}
	}
	
	this.flipMusic = function(){
		if (!playing[0].paused)
			playing[0].pause();
		else
			playing[0].play();
	}
}