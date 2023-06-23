(function(window) {

function George(standbmp, yawn, inpreload, insoundmanager, inotherchitter) {
    this.oldX = 0;
    this.oldY = 0;
    this.radius = 38;
    this.scale = 1;
    this.bedIndex = 0;
    this.preload = inpreload;
    this.soundManager = insoundmanager;
    this.otherChitter = inotherchitter;
    this.shouldIdle = false;
    //this.initialize();
    
    //this.stand
   // this.imageSource = imageSource;
    //this.sleepImageSource = sleepImageSource;
    this.sitBMP = standbmp.clone();
    this.lastIdleTime = new Date().getTime();
   // this.sleepBMP = sleepbmp.clone();

    var ss = new createjs.SpriteSheet({
    // image to use
    images: [yawn],
    // width, height & registration point of each sprite
    frames: {width: 130, height: 222},//, regX: 96, regY: 136},
    animations: {
        celeb: [0, 11, "stand",2],
        stand: [11]
    }
    });
    createjs.SpriteSheetUtils.addFlippedFrames(ss, true, true, true);
    // create a BitmapAnimation instance to display and play back the sprite sheet:
    this.yawnBMP = new createjs.BitmapAnimation(ss);
    this.yawnBMP.x = 103;
    this.yawnBMP.y = -42;
    this.yawnBMP.scaleX = 1;
    this.yawnBMP.scaleY = 1;
    
//createjs.SpriteSheetUtils.addFlippedFrames(ss, true, true, true);
    //this.bmpAnimation.direction = -90;
    var jumpImage = this.preload.getResult('jump').result;

   var ss2 = new createjs.SpriteSheet({
    // image to use
    images: [jumpImage],
    // width, height & registration point of each sprite
     frames: {width: 162.5, height: 252, regX: 96, regY: 136},
    animations: {
        celeb: [0, 7,0,7,false,2],
        stand: [11]
    }
    });
createjs.SpriteSheetUtils.addFlippedFrames(ss2, true, true, true);
    this.jumpBA = new createjs.BitmapAnimation(ss2);
    this.jumpBA.x = 38;
    this.jumpBA.y = 68;


    var clapImage = this.preload.getResult('clap').result;

   var ss3 = new createjs.SpriteSheet({
    // image to use
    images: [clapImage],
    // width, height & registration point of each sprite
   frames: {width: 192, height: 272, regX: 96, regY: 136},
    animations: {
        celeb: [0, 10, false,2],//"stand"],
        stand: [10]
    }
    });
    createjs.SpriteSheetUtils.addFlippedFrames(ss3, true, false, false);
    this.clapBA = new createjs.BitmapAnimation(ss3);
    this.clapBA.scaleX = .68;
    this.clapBA.scaleY = .68;
    this.clapBA.x = 36;
    this.clapBA.y = 88;

    //createjs.SpriteSheetUtils.addFlippedFrames(ss3, true, false, false);


    var danceImage = this.preload.getResult('dance').result;

   var ss4 = new createjs.SpriteSheet({
    // image to use
    images: [danceImage],
    // width, height & registration point of each sprite
    frames: {width: 157, height: 268.7, regX: 96, regY: 136},
    animations: {
        celeb: [0, 11, false,3],
        stand: [11]
    }
    });
    createjs.SpriteSheetUtils.addFlippedFrames(ss4, true, false, false);
    this.danceBA = new createjs.BitmapAnimation(ss4);
    this.danceBA.x = 34;
    this.danceBA.y = 50;

    var cheerImage = this.preload.getResult('cheer').result;

   var ss5 = new createjs.SpriteSheet({
    // image to use
    images: [cheerImage],
    // width, height & registration point of each sprite
    frames: {width: 208, height: 312},
    animations: {
        celeb: [0, 8, false,6],
        celeb2: [0,8, false,2]
    }
    });
    createjs.SpriteSheetUtils.addFlippedFrames(ss5, true, false, false);
    this.cheerBA = new createjs.BitmapAnimation(ss5);
    this.cheerBA.x = 110;
    this.cheerBA.y = -22;
    this.cheerBA.scaleX = .65;
    this.cheerBA.scaleY = .65;

    var mouthopenImage = this.preload.getResult('mouthopen').result;

    //georgeMouthOpenClose.png
    var ss66 = new createjs.SpriteSheet({
    // image to use
    images: [mouthopenImage],
    // width, height & registration point of each sprite
    frames: {width: 96, height: 168},
        animations: {
            celeb: [ 0,1, false,10],//"stand"],
            stand: [11]
        }
    });
    this.mouthOpenBA = new createjs.BitmapAnimation(ss66);
   /* this.mouthOpenBA.scaleX = .65;
    this.mouthOpenBA.scaleY = .65;
    this.mouthOpenBA.x = 41;
    this.mouthOpenBA.y = 88;*/
    //createjs.SpriteSheetUtils.addFlippedFrames(ss6, true, false, false);

     var chestImage = this.preload.getResult('chestbeat').result;
   var ss6 = new createjs.SpriteSheet({
    // image to use
    images: [chestImage],
    // width, height & registration point of each sprite
    frames: {width: 200, height: 272, regX: 100, regY: 136},
        animations: {
            celeb: [0, 9, false,5],//"stand"],
            stand: [11]
        }
    });
    this.chestBA = new createjs.BitmapAnimation(ss6);
    this.chestBA.scaleX = .65;
    this.chestBA.scaleY = .65;
    this.chestBA.x = 41;
    this.chestBA.y = 88;
    createjs.SpriteSheetUtils.addFlippedFrames(ss6, true, false, false);



    var blinkImage = this.preload.getResult('georgeBlink').result;

   var ss7 = new createjs.SpriteSheet({
    // image to use
    images: [blinkImage],
    // width, height & registration point of each sprite
    frames: {width: 96, height: 168},//, regX: 100, regY: 136},
        animations: {
            blink: [0, 2, false,2],//"stand"],
             stand: [0]
        }
    });
    this.blinkBA = new createjs.BitmapAnimation(ss7);

    var kissingImage = this.preload.getResult('georgeKissing').result;

   var ss8 = new createjs.SpriteSheet({
    // image to use
    images: [kissingImage],
    // width, height & registration point of each sprite
    frames: {width: 200, height: 176, regX: 55, regY:5},//, regY: 136},
        animations: {
           celeb: [0, 10, false, 3],//"stand"],
             stand: [0]
        }
    });
    this.kissBA = new createjs.BitmapAnimation(ss8);

    var rockingImage = this.preload.getResult('georgeRocking').result;

   var ss9 = new createjs.SpriteSheet({
    // image to use
    images: [rockingImage],
    // width, height & registration point of each sprite
    frames: {width: 200, height: 176, regX:55, regY:5},//, regX: 100, regY: 136},
        animations: {
            celeb: [0,10, false,10],//"stand"],
             stand: [0]
        }
    });
    this.rockBA = new createjs.BitmapAnimation(ss9);
    this.timeout = null;
    //createjs.SpriteSheetUtils.addFlippedFrames(ss7, true, false, false);

    this.initialize();


}

George.prototype = new createjs.Container();

George.prototype.vx = 0;
George.prototype.vy = 0;
George.prototype.oldX;
George.prototype.oldY;
George.prototype.radius;
George.prototype.scale;
George.prototype.bounce;
George.prototype.imageSource;
George.prototype.bedIndex;
    George.prototype.timeout;

George.prototype.startX;
George.prototype.startY;
George.prototype.sleepImageSource;
George.prototype.sitBMP;
George.prototype.sleepBMP;
George.prototype.bmpAnimation;
George.prototype.preload;
George.prototype.jumpBA;
George.prototype.yawnBA;
    George.prototype.danceBA;
    George.prototype.cheerBA;
    George.prototype.clapBA;
    George.prototype.chestbeatBA;
    George.prototype.blinkBA;
    George.prototype.rockBA;
    George.prototype.kissBA;
    George.prototype.animationHolder;
    George.prototype.standBMP;
    George.prototype.blinkInterval;
    George.prototype.soundManager;
    George.prototype.lastIdleTime;
    George.prototype.shouldIdle;
    George.prototype.otherChitter;
    George.prototype.mouthOpenBA;

George.prototype.Container_initialize = George.prototype.initialize;
    George.prototype.initialize = function() {
        this.Container_initialize();
        this.timeout = null;
        this.addChild(this.blinkBA);
        this.blink();
    }

    George.prototype.blink = function()
    {
        //console.log('george blink');
        clearInterval(this.blinkInterval);
        clearTimeout(this.timeout);
        var interval = Math.round(Math.random()*5000+500);

        this.timeout = setTimeout(this.blink.bind(this), interval);
        this.blinkBA.gotoAndPlay('blink');
    }

    Function.prototype.bind = function(parent)
    {
        var f = this;
        var args = [];

        for (var a = 1; a < arguments.length; a++) {
            args[args.length] = arguments[a];
        }

        var temp = function() {
            return f.apply(parent, args);
        }

        return(temp);
    }
    George.prototype.idle = function()
    {
        if (this.shouldIdle == false){
            return;
        }

        var soundArray = ['georgeAhh1Sound', 'georgeAhh2Sound', 'georgeAwwSound', 'georgeLovingSound'];
        var randSoundIndex = Math.floor(Math.random()* soundArray.length);

        this.soundManager.getSoundById(soundArray[randSoundIndex]).play();
    }
    George.prototype.openMouth = function()
    {
        console.log('openMouth()');
        this.removeChild(this.blinkBA);
        this.removeChild(this.animationHolder);
        var anim = this.mouthOpenBA;
        anim.onAnimationEnd = this.onCelebEnd.bind(this);
        this.addChild(anim);
        anim.gotoAndPlay('celeb');
        this.animationHolder = anim;
    }
    George.prototype.shouldPlayCelebrateSound = function(beforeSleep)
    {
        var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/i) ? true : false );
        if (iOS){
            if (beforeSleep){
                return true;
            }else{
                return false;
            }
        }else{
            return true;
        }
    }
    George.prototype.celebrate = function(bool, round, beforeSleep)
    {
        console.log('celebrate()');
        this.removeChild(this.blinkBA);
        this.removeChild(this.animationHolder);

        var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/i) ? true : false );

        if (!bool){
        //var randInt = 2;//2;//Math.floor(Math.random()* 2);
        var celebs = [this.clapBA, this.chestBA, this.danceBA, this.cheerBA, /*this.jumpBA,*/ this.yawnBMP, this.kissBA, this.rockBA];
        var randInt = 0;//3;// Math.floor(Math.random()* celebs.length);
            if (beforeSleep){
                randInt = Math.round(Math.random()* 3);
            }else{
                randInt = Math.floor(Math.random()* 3+4);
            }

        var anim = celebs[randInt];
            anim.onAnimationEnd = this.onCelebEnd.bind(this);
            console.log('randInt:'+randInt);
        }else{
            var anim = this.jumpBA;
            anim.onAnimationEnd = this.onEndCelebDone.bind(this);
             anim.gotoAndPlay('celeb_h');
            if ( this.shouldPlayCelebrateSound(beforeSleep) ){
            this.soundManager.getSoundById('Chitters_YAY').play();
            }
        }
        //anim.direction = -90;
        this.addChild(anim);
        var p = this;

        //anim.gotoAndPlay('celeb_h');
        this.animationHolder = anim;
        if (bool){
            return;
        }

        switch(randInt){
            case 0:
            // Clap
              if ( this.shouldPlayCelebrateSound(beforeSleep) ){
                this.soundManager.getSoundById('NightyNight').play();
            }
            break;
            case 1:
                  if ( this.shouldPlayCelebrateSound(beforeSleep) ){
                this.soundManager.getSoundById('Excited').play();
            }
            break;
            case 2:
                  if ( this.shouldPlayCelebrateSound(beforeSleep) ){
                this.soundManager.getSoundById('Excited').play();
            }
            break;
            case 3:
                 if ( this.shouldPlayCelebrateSound(beforeSleep) ){
                this.soundManager.getSoundById('Laugh1').play();

            }
            break;
                 case 4:
                  if ( this.shouldPlayCelebrateSound(beforeSleep) ){
                this.soundManager.getSoundById('georgeLovingSound').play();
            }
            break;

        }


        if(randInt == 5){//this.kissBA){
            console.log('playing Kiss1');
             if ( this.shouldPlayCelebrateSound(beforeSleep) ){
           this.soundManager.getSoundById('Kiss1').play();
            }

        }
        if (randInt == 6){
             if ( this.shouldPlayCelebrateSound(beforeSleep) ){
            this.soundManager.getSoundById('hum').play();
            }
        }
        if(randInt == 5 || randInt == 6){
            anim.gotoAndPlay('celeb');

        }else{
            anim.gotoAndPlay('celeb_h');
           
               //

        }

    }
    George.prototype.onEndCelebDone = function()
    {
        console.log('onEndCelebDone()');
        //return;
        this.removeChild(this.blinkBA);
        this.removeChild(this.animationHolder);

        var anim = this.clapBA;
            anim.onAnimationEnd = this.onCelebEnd.bind(this);

        this.addChild(anim);

        //anim.gotoAndPlay('celeb_h');
        this.animationHolder = anim;
        var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/i) ? true : false );
          if (!iOS){
                this.soundManager.getSoundById('NightyNight').play();
            }

            anim.gotoAndPlay('celeb_h');

    }
    George.prototype.onIdleEnd = function()
    {
        console.log('onIdleEnd()');
        this.removeChild(this.animationHolder);
        this.addChild(this.blinkBA);
        this.blink();
    }
    George.prototype.onCelebEnd = function()
    {
        console.log('onCelebEnd()');
        this.removeChild(this.animationHolder);
        this.addChild(this.blinkBA);
    }
    George.prototype.yawn = function()
    {
        //this.bmpAnimation.gotoAndPlay("yawn_h");     //animate
    }
    George.prototype.goToSleep = function(skew)
    {
        this.removeChild(this.sitBMP);
        this.addChild(this.sleepBMP);
       //this.sleepBMP.skewX = -20;
        this.sleepBMP.scaleY = .8;
       // this.sleepBMP.skewX = skew;
        console.log('bedIndex:' + this.bedIndex);
        //this.sleepBMP.y += (3- this.bedIndex) * 30;//   (this.bedIndex * 30);// 15;
        this.sleepBMP.skewX = (3- this.bedIndex) * 2;//
        this.sleepBMP.y += 25
        //this.sleepBMP.skewY = 20;
    }
    function getInBed()
    {
        
    }
    function handleImageLoad() {
       var bmp = new Bitmap(this.img);
       this.addChild(bmp);
    }

window.George = George;
}(window));