var NeighbourhoodLayer = cc.Layer.extend({
	ctor:function () {

		this._super();

		var size = cc.Director.sharedDirector().getWinSize();

		var neighbourhood = cc.Sprite.create('resources/images/neighbourhood.jpg');
		neighbourhood.setAnchorPoint(cc.ccp(0, 0));
		neighbourhood.setPosition(cc.ccp(0, 0));
		this.addChild(neighbourhood);

		this.neighbourhood = neighbourhood;

		for(var i = 0; i < CHARACTERS.length; i++) {
			var charSpot = cc.LayerColor.create(cc.ccc4(145, 83, 35, 255), CHARACTERS[i].width, CHARACTERS[i].height);
			charSpot.setAnchorPoint(cc.ccp(0,0));
			charSpot.setPosition(cc.ccp(CHARACTERS[i].posX,CHARACTERS[i].posY));
			charSpot.setTag(CHARACTERS[i].tag);
			charSpot.setOpacity(0);
			this.addChild(charSpot,5);
		}

        var lazyLayer = new cc.LazyLayer();
        this.addChild(lazyLayer);
        return true;

	},
	onEnter:function() {
		this._super();
	}
});