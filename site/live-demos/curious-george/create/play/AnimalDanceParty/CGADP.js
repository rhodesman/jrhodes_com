var CGADP = cc.Layer.extend({
 init:function()
 {
  this._super();

  var s = cc.Director.sharedDirector().getWinSize();
  var layer1 = cc.LayerColor.layerWithColorWidthHeight(cc.ccc4(255, 255, 0, 255), 600, 600);
        layer1.setPosition(cc.ccp(s.width/2,s.height/2));
        layer1.setIsRelativeAnchorPoint(true);
        
  var helloLabel = cc.LabelTTF.labelWithString("Hello world", "Arial", 30);
  helloLabel.setPosition(cc.ccp(s.width/2,s.height/2));
  helloLabel.setColor(cc.ccc3(255,0,0));
  var rotationAmount = 0;
  var scale = 1;
  helloLabel.schedule(function()
   {
    this.setRotation(rotationAmount++);
    if(rotationAmount > 360)
     rotationAmount = 0;
    this.setScale(scale);
    scale+= 0.05;
    if(scale > 10)
     scale =1;
   });

  layer1.addChild(helloLabel);
        this.addChild(layer1);

        
  return true;
 }

});


CGADP.scene = function() {
 var scene = cc.Scene.node();
 var layer = this.node();
 
 scene.addChild(layer);
 return scene;
}

CGADP.node = function() {
 var pRet = new CGADP();

 if(pRet && pRet.init()){
  return pRet;
 }
 return null;
}