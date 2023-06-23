(function(window) {

function Animal(animalname, sleepbmp, standbmp, blinkImage, tailImage) {
    this.oldX = 0;
    this.oldY = 0;
    this.radius = 38;
    this.scale = 1;
    this.bedIndex = 0;
    //this.stand
   // this.imageSource = imageSource;
    //this.sleepImageSource = sleepImageSource;
    this.sitBMP = standbmp.clone();
    this.sleepBMP = sleepbmp.clone();
    this.sleeping = false;

   // var clapImage = preload.getResult('clap').result;
    var imgHeight = 112;
    if (animalname == 'giraffe'){
        imgHeight = 144;
    }
   var ss = new createjs.SpriteSheet({
    // image to use
    images: [blinkImage],
    // width, height & registration point of each sprite
   frames: {width: 104, height: imgHeight, regX: 0, regY: 0}, //112
    animations: {
        blink: [0, 2,0],//, 10],//"stand"],
        stand: [0]
    }
    });
    //createjs.SpriteSheetUtils.addFlippedFrames(ss3, true, false, false);
    this.blinkAnimation = new createjs.BitmapAnimation(ss);

        this.tailAnimation = null;


  if (tailImage != null ){
    var ss2 = new createjs.SpriteSheet({
    // image to use
    images: [tailImage],
    // width, height & registration point of each sprite
   frames: {width: 104, height: imgHeight, regX: 0, regY: 0},
    animations: {
        wag: [0, 2,2],//, 10],//"stand"],
        stand: [0]
    }
    });
    //createjs.SpriteSheetUtils.addFlippedFrames(ss3, true, false, false);
    this.tailAnimation = new createjs.BitmapAnimation(ss2);
  }else{
      this.tailAnimation = null;
  }
    this.initialize();


}

Animal.prototype = new createjs.Container();

Animal.prototype.vx = 0;
Animal.prototype.vy = 0;
Animal.prototype.oldX;
Animal.prototype.oldY;
Animal.prototype.radius;
Animal.prototype.scale;
Animal.prototype.bounce;
Animal.prototype.imageSource;
Animal.prototype.bedIndex;

Animal.prototype.startX;
Animal.prototype.startY;
Animal.prototype.sleepImageSource;
Animal.prototype.sitBMP;
Animal.prototype.sleepBMP;
    Animal.prototype.blinkAnimation;
    Animal.prototype.tailAnimation;
    Animal.prototype.blinkInterval;
    Animal.prototype.sleeping;


Animal.prototype.Container_initialize = Animal.prototype.initialize;
    Animal.prototype.initialize = function() {
        this.Container_initialize();
        var bmp = this.sitBMP;// new Bitmap(this.imageSource);
        //this.addChild(bmp);
        this.addChild(this.blinkAnimation);
        if (this.tailAnimation != null){
             //this.addChild(this.tailAnimation);
        }

       // this.blinkAnimation.gotoAndPlay('blink');
        this.blink();
        //this.sleepBMP = new Bitmap(this.sleepImageSource);
        //this.sitBMP = bmp;

    }
    Animal.prototype.blink = function()
    {
        //return;
        clearInterval(this.blinkInterval);
        if (this.sleeping == true){
            return;
        }
        var interval = Math.round(Math.random()*5000+500);
        var tailChance = Math.round(Math.random()*3);
        if (tailChance == 0 && this.tailAnimation != null){
            this.removeChild(this.blinkAnimation);
            this.addChild(this.tailAnimation);
            this.tailAnimation.gotoAndPlay('wag');
        }else{
            this.removeChild(this.tailAnimation);
            this.addChild(this.blinkAnimation);
            this.blinkAnimation.gotoAndPlay('blink');
        }
       // this.blinkInterval = setInterval(this.blink,interval);
        
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

    Animal.prototype.goToSleep = function(skew)
    {
        this.removeChild(this.sitBMP);
        this.removeChild(this.blinkAnimation);
        this.removeChild(this.tailAnimation);
        this.blinkAnimation.gotoAndStop(0);
        this.sleeping = true;
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

window.Animal = Animal;
}(window));