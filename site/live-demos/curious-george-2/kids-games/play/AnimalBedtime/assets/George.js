(function(window) {

function George(standbmp, yawn, inpreload) {
    this.oldX = 0;
    this.oldY = 0;
    this.radius = 38;
    this.scale = 1;
    this.bedIndex = 0;
    this.preload = inpreload;
    //this.initialize();
    
    //this.stand
   // this.imageSource = imageSource;
    //this.sleepImageSource = sleepImageSource;
    this.sitBMP = standbmp.clone();
   // this.sleepBMP = sleepbmp.clone();

    var ss = new createjs.SpriteSheet({
    // image to use
    images: [yawn],
    // width, height & registration point of each sprite
    frames: {width: 130, height: 222},//, regX: 96, regY: 136},
    animations: {
        celeb: [0, 11, "stand"],
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
        celeb: [0, 7,0,7,false],
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
        celeb: [0, 10, false],//"stand"],
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
        celeb: [0, 11, false],
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
        celeb: [0, 8, false],
        celeb2: [0,8, false]
    }
    });
    createjs.SpriteSheetUtils.addFlippedFrames(ss5, true, false, false);
    this.cheerBA = new createjs.BitmapAnimation(ss5);
    this.cheerBA.x = 110;
    this.cheerBA.y = -22;
    this.cheerBA.scaleX = .65;
    this.cheerBA.scaleY = .65;

    var chestImage = this.preload.getResult('chestbeat').result;

   var ss6 = new createjs.SpriteSheet({
    // image to use
    images: [chestImage],
    // width, height & registration point of each sprite
    frames: {width: 200, height: 272, regX: 100, regY: 136},
        animations: {
            celeb: [0, 9, false],//"stand"],
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
            blink: [0, 2, false],//"stand"],
             stand: [0]
        }
    });
    this.blinkBA = new createjs.BitmapAnimation(ss7);

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
    George.prototype.animationHolder;
    George.prototype.standBMP;
    George.prototype.blinkInterval;

George.prototype.Container_initialize = George.prototype.initialize;
    George.prototype.initialize = function() {
        this.Container_initialize();
        //return;
        this.addChild(this.blinkBA);
        //this.blinkBA.gotoAndPlay('blink');
        this.blink();
        //this.blinkBA.x = 200;
        //var bmp = this.sitBMP;// new Bitmap(this.imageSource);
        //this.addChild(bmp);
       // this.standBMP = bmp;
        //this.sleepBMP = new Bitmap(this.sleepImageSource);
        //this.sitBMP = bmp;
        //this.bmpAnimation.direction = 45;

        // start playing the first sequence:
       // this.bmpAnimation.gotoAndStop('stand_h');
        //this.addChild(this.bmpAnimation);
        //this.bmpAnimation.y = 60;
        //this.bmpAnimation.x = 45;
        //this.celebrate(true);


    }
    George.prototype.blink = function()
    {
        console.log('george blink');
        clearInterval(this.blinkInterval);

        var interval = Math.round(Math.random()*5000+500);

        this.blinkBA.gotoAndPlay('blink');
           // return;
       // this.blinkInterval = setInterval(this.blink,interval);
       // return;
        setTimeout(this.blink.bind(this), interval);
       // this.blinkAnimation.y+= 5;


    }
    Function.prototype.bind = function(parent) {
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

    George.prototype.celebrate = function(bool)
    {
        this.removeChild(this.blinkBA);
        this.removeChild(this.animationHolder);
        if (!bool){
        //var randInt = 2;//2;//Math.floor(Math.random()* 2);
        var celebs = [this.clapBA, this.chestBA, this.danceBA, this.cheerBA, /*this.jumpBA,*/ this.yawnBMP];
        var randInt = Math.floor(Math.random()* celebs.length);

        var anim = celebs[randInt];
        }else{
            var anim = this.jumpBA;
        }
        //anim.direction = -90;
        this.addChild(anim);
        var p = this;
        anim.onAnimationEnd = this.onCelebEnd.bind(this);
        anim.gotoAndPlay('celeb_h');
        this.animationHolder = anim;

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