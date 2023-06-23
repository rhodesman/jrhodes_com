var Dinosaur = cc.Sprite.extend({
	ctor:function(lvl,part,step) {
		this._super();
		this.initWithFile('resources/images/d'+lvl+'_b'+part+'_s'+step+'.png');
		this.setAnchorPoint(cc.ccp(0,0));
	},
	onEnter:function() {
		this._super();
	}
});

var visibleBones = cc.Sprite.extend({
	ctor:function(bone) {
		this._super();
		this.initWithFile(bone);
		this.setAnchorPoint(cc.ccp(0,0));
		this.setPosition(cc.ccp(220,0));
	},
	onEnter:function() {
		this._super();
	}
});

var sandPatch = cc.Sprite.extend({
	ctor:function(part) {
		this._super();
		this.initWithFile(part.replace("_s1", ""));
		this.setAnchorPoint(cc.ccp(0,0));
		this.setPosition(cc.ccp(220,0));
	},
	onEnter:function() {
		this._super();
	}
});

var sortedBones = cc.Sprite.extend({
	ctor:function(lvl,part) {
		this._super();
		this.initWithFile('resources/images/d'+lvl+'_b'+part+'.png');
		this.setAnchorPoint(cc.ccp(0,0));
		this.setPosition(cc.ccp(DINOSAUR[lvl-1].tomatch[part-1].width,DINOSAUR[lvl-1].tomatch[part-1].height));
		this.setOpacity(0);
		this.setTag(100+part);
	},
	onEnter:function() {
		this._super();
	}
});

var exhibitionDinosaur = cc.Sprite.extend({
	ctor: function(lvl) {
		this._super();
		this.initWithFile('resources/images/d'+(lvl+1)+'_e_skin.png');
		this.setTag("dino"+lvl);
		if(lvl == 1) {
			this.setTag("dino");
		}
		this.setAnchorPoint(cc.ccp(0,0));
		this.setPosition(cc.ccp(DINOSAUR[lvl].museum.width,DINOSAUR[lvl].museum.height));
		var bones = cc.Sprite.create('resources/images/d'+(lvl+1)+'_e_bones.png');
		bones.setAnchorPoint(cc.ccp(0,0));
		bones.setPosition(cc.ccp(0,0));
		bones.setOpacity(0);
		this.addChild(bones);
	}
})

var fullDinosaur = cc.Sprite.extend({
	ctor:function(lvl) {
		this._super();
		this.initWithFile('resources/images/dino'+lvl+'_end.jpg');
		this.setAnchorPoint(cc.ccp(0,0));
		this.setOpacity(0);
	}
})