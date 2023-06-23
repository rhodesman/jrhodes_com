(function(window) {
    function MyButton(stage, on, off) {
        this.onimg = on;
        this.offimg = off;
        this.stage = stage;
        this.initialize();
    }
    MyButton.prototype = new createjs.Container();
    MyButton.prototype.Container_initialize =  MyButton.prototype.initialize;
    MyButton.prototype.Container_tick =  MyButton.prototype._tick;

    //Animal.prototype.Container_initialize = Animal.prototype.initialize;
    //Animal.prototype.initialize = function() {

    //}
    MyButton.prototype.onimg;
    MyButton.prototype.offimg;
    MyButton.prototype.onBmp;
    MyButton.prototype.stage;

    MyButton.prototype.initialize = function () {
        this.Container_initialize();
        var off;
        var on;
        this.offBmp = new createjs.Bitmap(this.offimg);//ref of the image
        //this.addChild(this.offBmp);
        this.offBmp.alpha = 0.0;

        this.onBmp = new createjs.Bitmap(this.onimg); //ref of the image
        this.addChild(this.onBmp);
        this.onBmp.alpha = 1;

        this.addChild(this.offBmp);

       /* this.textValue = new Text("my button","10pt DaysRegular","#FFF");
        this.textValue.x = this.onBmp.image.width*.5;
        this.textValue.y = this.onBmp.image.height + 8;
        this.textValue.textAlign = "center";
        this.addChild(this.textValue);          */

        this.regX = this.onBmp.image.width*.5;
        this.regY = this.onBmp.image.height*.5;
        //this.scaleX = this.scaleY = 0.9;
        //this.addTween();
    }
    MyButton.prototype.setState = function(state){
        this.targetState = state;//"on" or "off"
    }
    //add listeners to the Bitmap.
    MyButton.prototype.addTween = function(){
        this.onBmp.onMouseOver = function(evt){
            console.log('Over');
            this.parent.expand();
        }
        this.onBmp.onMouseOut = function(evt){
            console.log('Out');
            this.parent.retract();
        }
        this.onBmp.onClick = function(evt){
            console.log('click');
            this.parent.goState();
        }
    }
    MyButton.prototype.goState = function(){
        //do something
    }
    MyButton.prototype.expand = function(){
        this.onBmp.alpha = 0.1;
        this.offBmp.alpha = 1;
        this.stage.update();
        console.log('expand');
       // var tween = createjs.Tween.get(this.offBmp, {loop:false})
          //  .to({alpha:0.1}, 1000, createjs.Ease.cubicIn());
        /*Tween.removeTweens(this);
        this.tweenSize = Tween.get(this).to({scaleX:1,scaleY:1},200);
        this.tweenAlpha = Tween.get(this.onBmp).to({alpha:1},200);      */
    }
    MyButton.prototype.retract = function(){
        this.onBmp.alpha = 1;
        this.offBmp.alpha = 0.0;
        this.stage.update();
        console.log('retract');
       // var tween = createjs.Tween.get(this.onBmp, {loop:false})
           // .to({alpha:0.1}, 1000, createjs.Ease.cubicIn());

        //Tween.removeTweens(this);
        //this.tweenSize = Tween.get(this).to({scaleX:0.9,scaleY:0.9},200);
        //if(this.bstate == "off") this.tweenAlpha = Tween.get(this.onBmp).to({alpha:0.01},200);
    }
    MyButton.prototype._tick = function(){
    }
    window.MyButton =  MyButton ;
}(window));
