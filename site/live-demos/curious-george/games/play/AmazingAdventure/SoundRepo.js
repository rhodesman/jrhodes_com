//SoundRepo.js


function SoundRepo(){
	
	
	FlashPlugin.BASE_PATH = "src/" ;
	
	SoundJS.registerPlugins([HTMLAudioPlugin,FlashPlugin]);
	
	var preload;
	var wrongs = 2;
	var payoffs = 4;
	var loaded = false;
	this.loaded = function() {return loaded}
	var playing = [];
	var chitter;
	this.soundSrc = function(code){
		return manifest[code+7].src;
	}
	
	var manifest = [
			{id:"music",src:AUDIO_PATH+"music.mp3|"+AUDIO_PATH+"music.ogg",data:7},
			{id:"wrong1", src:AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_Feedback_VO_1_22-2.mp3|"+AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_Feedback_VO_1_22-2.ogg", data:4},
			{id:"wrong2", src:AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_Feedback_VO_1_24-1.mp3|"+AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_Feedback_VO_1_24-1.ogg", data:3},
			{id:"help", src:AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_Introduction_VO_1_12.mp3|"+AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_Introduction_VO_1_12.ogg", data:2},
			{id:"start1",src:AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_Introduction_VO_1_05-1.mp3|"+AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_Introduction_VO_1_05-1.ogg",data:5},
			{id:"start2",src:AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_Introduction_VO_1_07.mp3|"+AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_Introduction_VO_1_07.ogg",data:6},
			{id:"intro", src:AUDIO_PATH+"CG_Game-ActivityTitles_A-MAZE-ingAdventure_Boy.mp3|"+AUDIO_PATH+"CG_Game-ActivityTitles_A-MAZE-ingAdventure_Boy.ogg", data:1},
			{id:"letterA",src:AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_1_04.mp3|"+AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_1_04.ogg",data:0},
			{id:"letterB",src:AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_1_06.mp3|"+AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_1_06.ogg",data:0},
			{id:"letterC",src:AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_1_08.mp3|"+AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_1_08.ogg",data:0},
			{id:"letterD",src:AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_1_10.mp3|"+AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_1_10.ogg",data:0},
			{id:"letterE",src:AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_1_12.mp3|"+AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_1_12.ogg",data:0},
			{id:"letterF",src:AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_1_14.mp3|"+AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_1_14.ogg",data:0},
			{id:"letterG",src:AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_1_16.mp3|"+AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_1_16.ogg",data:0},
			{id:"letterH",src:AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_1_18.mp3|"+AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_1_18.ogg",data:0},
			{id:"letterI",src:AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_1_20.mp3|"+AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_1_20.ogg",data:0},
			{id:"letterJ",src:AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_1_22.mp3|"+AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_1_22.ogg",data:0},
			{id:"letterK",src:AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_1_24.mp3|"+AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_1_24.ogg",data:0},
			{id:"letterL",src:AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_1_26.mp3|"+AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_1_26.ogg",data:0},
			{id:"letterM",src:AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_2_01.mp3|"+AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_2_01.ogg",data:0},
			{id:"letterN",src:AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_2_03.mp3|"+AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_2_03.ogg",data:0},
			{id:"letterO",src:AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_2_05.mp3|"+AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_2_05.ogg",data:0},
			{id:"letterP",src:AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_2_07.mp3|"+AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_2_07.ogg",data:0},
			{id:"letterQ",src:AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_2_09.mp3|"+AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_2_09.ogg",data:0},
			{id:"letterR",src:AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_2_11.mp3|"+AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_2_11.ogg",data:0},
			{id:"letterS",src:AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_2_13.mp3|"+AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_2_13.ogg",data:0},
			{id:"letterT",src:AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_2_15.mp3|"+AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_2_15.ogg",data:0},
			{id:"letterU",src:AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_2_17.mp3|"+AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_2_17.ogg",data:0},
			{id:"letterV",src:AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_2_19.mp3|"+AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_2_19.ogg",data:0},
			{id:"letterW",src:AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_2_21.mp3|"+AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_2_21.ogg",data:0},
			{id:"letterX",src:AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_2_23.mp3|"+AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_2_23.ogg",data:0},
			{id:"letterY",src:AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_2_25.mp3|"+AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_2_25.ogg",data:0},
			{id:"letterZ",src:AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_2_27.mp3|"+AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_PayoffPhrase_VO_2_27.ogg",data:0},
			{id:"payoff0",src:AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_EndOfGame_VO_1_02.mp3|"+AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_EndOfGame_VO_1_02.ogg",data:0},
			{id:"payoff1",src:AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_EndOfGame_VO_1_05-2.mp3|"+AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_EndOfGame_VO_1_05-2.ogg",data:0},
			{id:"payoff2",src:AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_EndOfGame_VO_1_07.mp3|"+AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_EndOfGame_VO_1_07.ogg",data:0},
			{id:"payoff3",src:AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_EndOfGame_VO_1_10-2.mp3|"+AUDIO_PATH+"CG-ManInYellowHat_BeanCreative_A-MAZE-ingAdventure_EndOfGame_VO_1_10-2.ogg",data:0},
			{id:"play",src:AUDIO_PATH+"play.mp3|"+AUDIO_PATH+"play.ogg",data:0},
			{id:"toPlay",src:AUDIO_PATH+"CG-ManInYellowHat_GENERIC_PlayButton_VO_ClickOrTapTheGreenButtonToPlay-1.mp3|"+AUDIO_PATH+"CG-ManInYellowHat_GENERIC_PlayButton_VO_ClickOrTapTheGreenButtonToPlay-1.ogg",data:0},
			{id:"toPlayAgain",src:AUDIO_PATH+"CG-ManInYellowHat_GENERIC_PlayButton_VO_IfYouWantToPlayAgainClickOrTapTheGreenButton-1.mp3|"+AUDIO_PATH+"CG-ManInYellowHat_GENERIC_PlayButton_VO_IfYouWantToPlayAgainClickOrTapTheGreenButton-1.ogg",data:0},
			{id:"helpOver",src:AUDIO_PATH+"help.mp3|"+AUDIO_PATH+"help.ogg",data:0},
			{id:"spokenA",src:AUDIO_PATH+"spokenA"+SUFFIX,data:0},
			{id:"spokenB",src:AUDIO_PATH+"spokenB"+SUFFIX,data:0},
			{id:"spokenC",src:AUDIO_PATH+"spokenC"+SUFFIX,data:0},
			{id:"spokenD",src:AUDIO_PATH+"spokenD"+SUFFIX,data:0},
			{id:"spokenE",src:AUDIO_PATH+"spokenE"+SUFFIX,data:0},
			{id:"spokenF",src:AUDIO_PATH+"spokenF"+SUFFIX,data:0},
			{id:"spokenG",src:AUDIO_PATH+"spokenG"+SUFFIX,data:0},
			{id:"spokenH",src:AUDIO_PATH+"spokenH"+SUFFIX,data:0},
			{id:"spokenI",src:AUDIO_PATH+"spokenI"+SUFFIX,data:0},
			{id:"spokenJ",src:AUDIO_PATH+"spokenJ"+SUFFIX,data:0},
			{id:"spokenK",src:AUDIO_PATH+"spokenK"+SUFFIX,data:0},
			{id:"spokenL",src:AUDIO_PATH+"spokenL"+SUFFIX,data:0},
			{id:"spokenM",src:AUDIO_PATH+"spokenM"+SUFFIX,data:0},
			{id:"spokenN",src:AUDIO_PATH+"spokenN"+SUFFIX,data:0},
			{id:"spokenO",src:AUDIO_PATH+"spokenO"+SUFFIX,data:0},
			{id:"spokenP",src:AUDIO_PATH+"spokenP"+SUFFIX,data:0},
			{id:"spokenQ",src:AUDIO_PATH+"spokenQ"+SUFFIX,data:0},
			{id:"spokenR",src:AUDIO_PATH+"spokenR"+SUFFIX,data:0},
			{id:"spokenS",src:AUDIO_PATH+"spokenS"+SUFFIX,data:0},
			{id:"spokenT",src:AUDIO_PATH+"spokenT"+SUFFIX,data:0},
			{id:"spokenU",src:AUDIO_PATH+"spokenU"+SUFFIX,data:0},
			{id:"spokenV",src:AUDIO_PATH+"spokenV"+SUFFIX,data:0},
			{id:"spokenW",src:AUDIO_PATH+"spokenW"+SUFFIX,data:0},
			{id:"spokenX",src:AUDIO_PATH+"spokenX"+SUFFIX,data:0},
			{id:"spokenY",src:AUDIO_PATH+"spokenY"+SUFFIX,data:0},
			{id:"spokenZ",src:AUDIO_PATH+"spokenZ"+SUFFIX,data:0},
			{id:"reward0",src:AUDIO_PATH+"rewardChitter0"+SUFFIX,data:0},
			{id:"reward1",src:AUDIO_PATH+"rewardChitter1"+SUFFIX,data:0},
			{id:"reward2",src:AUDIO_PATH+"rewardChitter2"+SUFFIX,data:0},
			{id:"wrongChitter0",src:AUDIO_PATH+"wrongChitter0"+SUFFIX,data:0},
			{id:"wrongChitter1",src:AUDIO_PATH+"wrongChitter1"+SUFFIX,data:0},
			{id:"wrongChitter2",src:AUDIO_PATH+"wrongChitter2"+SUFFIX,data:0},
			{id:"goodChitter0",src:AUDIO_PATH+"goodChitter0"+SUFFIX,data:0},
			{id:"goodChitter1",src:AUDIO_PATH+"goodChitter1"+SUFFIX,data:0},
			{id:"goodChitter2",src:AUDIO_PATH+"goodChitter2"+SUFFIX,data:0},
			{id:"goodChitter3",src:AUDIO_PATH+"goodChitter3"+SUFFIX,data:0},
			{id:"introChitter0",src:AUDIO_PATH+"introChitter0"+SUFFIX,data:0},
			{id:"introChitter1",src:AUDIO_PATH+"introChitter1"+SUFFIX,data:0},
			{id:"newMaze",src:AUDIO_PATH+"newMaze"+SUFFIX,data:0},
			{id:"rightLetterWrong",src:AUDIO_PATH+"rightLetterWrong"+SUFFIX,data:0},
			{id:"keepGoing0",src:AUDIO_PATH+"keepGoing0"+SUFFIX,data:0},
			{id:"keepGoing1",src:AUDIO_PATH+"keepGoing1"+SUFFIX,data:0},
			{id:"gotReward0",src:AUDIO_PATH+"gotReward0"+SUFFIX,data:0},
			{id:"gotReward1",src:AUDIO_PATH+"gotReward1"+SUFFIX,data:0},
			{id:"gotReward2",src:AUDIO_PATH+"gotReward2"+SUFFIX,data:0},
			{id:"gotReward3",src:AUDIO_PATH+"gotReward3"+SUFFIX,data:0},
			{id:"gotReward4",src:AUDIO_PATH+"gotReward4"+SUFFIX,data:0},
			{id:"closeOver",src:AUDIO_PATH+"closeOver"+SUFFIX,data:0}
			
		

		];
	
	 preload = new PreloadJS(true);
	    preload.installPlugin(createjs.SoundJS);
		preload.loadManifest(manifest);
	    preload.onFileLoad = handleFileLoad;
	    preload.onProgress = handleProgress;
	    preload.onComplete = handleComplete;
		preload.onError = function(){alert("sound loading error\n refresh the window");}

	
	this.playit = function(){}	
	function handleFileLoad(event){}
	function handleProgress(event){console.log(event.target.progress);}
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
	
	this.playLetter = function(code){
		this.quiet();
		playing.push(SoundJS.play("letter"+code,SoundJS.INTERRUPT_ANY));
	}
	
	this.playPayoff = function(){
		this.quiet();
		var rand = Math.floor(payoffs*Math.random());
		if (Math.random() > Math.random())
			this.play("payoff"+rand,true);
		else
			this.play("gotReward"+maze.cheeseCode(),true);
		//playing.push(SoundJS.play("payoff"+rand,SoundJS.INTERRUPT_ANY));
	}
	
	this.rewardChitter = function(){
		if (chitter)
			chitter.stop();
		chitter = SoundJS.play("reward" +Math.floor(3*Math.random()), createjs.SoundJS.INTERRUPT_ANY);
	}
	this.wrongChitter = function(){
		if (chitter)
			chitter.stop();
		chitter = SoundJS.play("wrongChitter" +Math.floor(3*Math.random()), createjs.SoundJS.INTERRUPT_ANY);	
	}
	
	this.goodChitter = function(){
		if (chitter)
			chitter.stop();
		chitter = SoundJS.play("goodChitter" +Math.floor(4*Math.random()), createjs.SoundJS.INTERRUPT_ANY);	
	}
	
	this.introChitter = function(){
		if (chitter)
			chitter.stop();
		chitter = SoundJS.play("introChitter" +Math.floor(2*Math.random()), createjs.SoundJS.INTERRUPT_ANY);	
	}
	
	this.startMusic = function(){
		playing[0] = SoundJS.play("music",SoundJS.INTERRUPT_ANY,0,0,-1,0.3);
	}
	
	this.playWrong = function(){
		var rand = Math.floor(wrongs*Math.random())+1;
		this.play("wrong"+rand,true);
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