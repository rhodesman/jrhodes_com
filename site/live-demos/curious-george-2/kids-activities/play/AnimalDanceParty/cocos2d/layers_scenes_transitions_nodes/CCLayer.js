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

/** cc.Layer is a subclass of cc.Node that implements the TouchEventsDelegate protocol.<br/>
 * All features from cc.Node are valid, plus the following new features:<br/>
 * It can receive iPhone Touches<br/>
 * It can receive Accelerometer input
 * @class
 * @extends cc.Node
 */
cc.Layer = cc.Node.extend(/** @lends cc.Layer# */{
    _isTouchEnabled:false,
    _isAccelerometerEnabled:false,
    _isKeypadEnabled:false,

    /**
     * Constructor
     * @return {Boolean} return false if director fails
     */
    ctor:function () {
        this._super();
        this.setAnchorPoint(cc.ccp(0.5, 0.5));
        this._ignoreAnchorPointForPosition = true;

        //this.initLayer();
        var director = cc.Director.sharedDirector();
        this.setContentSize(director.getWinSize());
        this._isTouchEnabled = false;
        this._isAccelerometerEnabled = false;
    },

    /**
     *
     * @return {Boolean}
     */
    init:function () {
        /*var director = cc.Director.sharedDirector();
         if (!director) {
         return false;
         }
         this.setContentSize(director.getWinSize());
         this._isTouchEnabled = false;*/

        // success
        return true;
    },

    /**
     * If isTouchEnabled, this method is called onEnter. Override it to change the<br/>
     * way CCLayer receives touch events.<br/>
     */
    registerWithTouchDispatcher:function () {
        cc.Director.sharedDirector().getTouchDispatcher().addStandardDelegate(this, 0);
    },

    /**
     * whether or not it will receive Touch events.<br/>
     * You can enable / disable touch events with this property.<br/>
     * Only the touches of this node will be affected. This "method" is not propagated to it's children.<br/>
     * @return {Boolean}
     */
    isTouchEnabled:function () {
        return this._isTouchEnabled;
    },

    /**
     * Enable touch events
     * @param {Boolean} enabled
     */
    setTouchEnabled:function (enabled) {
        if (this._isTouchEnabled != enabled) {
            this._isTouchEnabled = enabled;

            if (this._isRunning) {
                if (enabled) {
                    this.registerWithTouchDispatcher();
                } else {
                    // have problems?
                    cc.Director.sharedDirector().getTouchDispatcher().removeDelegate(this);
                }
            }
        }
    },

    /**
     * whether or not it will receive Accelerometer events<br/>
     * You can enable / disable accelerometer events with this property.
     * @return {Boolean}
     */
    isAccelerometerEnabled:function () {
        return this._isAccelerometerEnabled;
    },

    /**
     * isAccelerometerEnabled setter
     * @param enabled
     */
    setAccelerometerEnabled:function (enabled) {
        if (enabled != this._isAccelerometerEnabled) {
            this._isAccelerometerEnabled = enabled;

            if (this._isRunning) {
                var director = cc.Director.sharedDirector();
                if (enabled) {
                    director.getAccelerometer().setDelegate(this);
                } else {
                    director.getAccelerometer().setDelegate(null);
                }
            }
        }
    },

    /**
     * whether or not it will receive keypad events<br/>
     * You can enable / disable accelerometer events with this property.<br/>
     * it's new in cocos2d-x
     * @return {Boolean}
     */
    isKeypadEnabled:function () {
        return this._isKeypadEnabled;
    },

    /**
     * Enable Keyboard interaction
     * @param {Boolean} enabled
     */
    setKeypadEnabled:function (enabled) {
        if (enabled != this._isKeypadEnabled) {
            this._isKeypadEnabled = enabled;
            if (this._isRunning) {
                var director = cc.Director.sharedDirector();
                if (enabled) {
                    director.getKeypadDispatcher().addDelegate(this);
                } else {
                    director.getKeypadDispatcher().removeDelegate(this);
                }
            }
        }
    },

    /**
     * This is run when ever a layer just become visible
     */
    onEnter:function () {
        var director = cc.Director.sharedDirector();
        // register 'parent' nodes first
        // since events are propagated in reverse order
        if (this._isTouchEnabled) {
            this.registerWithTouchDispatcher();
        }

        // then iterate over all the children
        this._super();

        // add this layer to concern the Accelerometer Sensor
        if (this._isAccelerometerEnabled) {
            director.getAccelerometer().setDelegate(this);
        }

        // add this layer to concern the kaypad msg
        if (this._isKeypadEnabled) {
            director.getKeypadDispatcher().addDelegate(this);
        }
    },

    /**
     * @function
     */
    onExit:function () {
        var director = cc.Director.sharedDirector();
        if (this._isTouchEnabled) {
            director.getTouchDispatcher().removeDelegate(this);
        }

        // remove this layer from the delegates who concern Accelerometer Sensor
        if (this._isAccelerometerEnabled) {
            director.getAccelerometer().setDelegate(null);
        }

        // remove this layer from the delegates who concern the kaypad msg
        if (this._isKeypadEnabled) {
            director.getKeypadDispatcher().removeDelegate(this);
        }

        this._super();
    },

    /**
     * this is called when ever a layer is a child of a scene that just finished a transition
     */
    onEnterTransitionDidFinish:function () {
        if (this._isAccelerometerEnabled) {
            cc.Director.sharedDirector().getAccelerometer().setDelegate(this);
        }
        this._super();
    },

    /**
     * default implements are used to call script callback if exist<br/>
     * you must override these touch functions if you wish to utilize them
     * @param {cc.Touch} touch
     * @param {event} event
     * @return {Boolean}
     */
    ccTouchBegan:function (touch, event) {
        cc.Assert(false, "Layer#ccTouchBegan override me");
        return true;
    },

    /**
     * callback when a touch event moved
     * @param {cc.Touch} touch
     * @param {event} event
     */
    ccTouchMoved:function (touch, event) {
    },

    /**
     * callback when a touch event finished
     * @param {cc.Touch} touch
     * @param {event} event
     */
    ccTouchEnded:function (touch, event) {
    },

    /**
     * @param {cc.Touch} touch
     * @param {event} event
     */
    ccTouchCancelled:function (touch, event) {
    },

    /**
     * Touches is the same as Touch, except this one can handle multi-touch
     * @param {cc.Touch} touch
     * @param {event} event
     */
    ccTouchesBegan:function (touch, event) {
    },

    /**
     * when a touch moved
     * @param {cc.Touch} touch
     * @param {event} event
     */
    ccTouchesMoved:function (touch, event) {
    },

    /**
     * when a touch finished
     * @param {cc.Touch} touch
     * @param {event} event
     */
    ccTouchesEnded:function (touch, event) {
    },

    /**
     * @param touch
     * @param event
     */
    ccTouchesCancelled:function (touch, event) {
    },

    didAccelerate:function (pAccelerationValue) {
    }
});

/**
 * creates a layer
 * @example
 * // Example
 * var myLayer = cc.Layer.create();
 * //Yes! it's that simple
 * @return {cc.Layer|Null}
 */
cc.Layer.create = function () {
    var ret = new cc.Layer();
    if (ret && ret.init()) {
        return ret;
    }
    return null;
};


/**
 * CCLayerColor is a subclass of CCLayer that implements the CCRGBAProtocol protocol.<br/>
 *  All features from CCLayer are valid, plus the following new features:<br/>
 * <ul><li>opacity</li>
 * <li>RGB colors</li></ul>
 * @class
 * @extends cc.Layer
 */
cc.LayerColor = cc.Layer.extend(/** @lends cc.LayerColor# */{
    _squareVertices:[],
    _squareColors:[],
    _opacity:0,
    _color:new cc.Color3B(255, 255, 255),
    _blendFunc:new cc.BlendFunc(cc.BLEND_SRC, cc.BLEND_DST),

    /**
     * Constructor
     */
    ctor:function () {
        this._squareVertices = [new cc.Vertex2F(0, 0), new cc.Vertex2F(0, 0), new cc.Vertex2F(0, 0), new cc.Vertex2F(0, 0)];
        this._squareColors = [new cc.Color4F(0, 0, 0, 1), new cc.Color4F(0, 0, 0, 1), new cc.Color4F(0, 0, 0, 1), new cc.Color4F(0, 0, 0, 1)];
        this._color = new cc.Color4B(0, 0, 0, 0);
        this._super();
    },

    /**
     * opacity getter
     * @return {Number}
     */
    getOpacity:function () {
        return this._opacity;
    },

    /**
     * opacity setter
     * @param {Number} Var a number between 0 and 255, 0 is totally transparent
     */
    setOpacity:function (Var) {
        this._opacity = Var;
        this._updateColor();

        //this._addDirtyRegionToDirector(this.boundingBoxToWorld());
        this.setNodeDirty();
    },

    /**
     * color getter
     * @return {cc.Color3B}
     */
    getColor:function () {
        return this._color;
    },

    /**
     * color setter
     * @param {cc.Color3B} Var
     */
    setColor:function (Var) {
        this._color = Var;
        this._updateColor();

        //this._addDirtyRegionToDirector(this.boundingBoxToWorld());
        this.setNodeDirty();
    },

    /**
     * blendFunc getter
     * @return {cc.BlendFunc}
     */
    getBlendFunc:function () {
        return this._blendFunc;
    },

    /**
     * blendFunc setter
     * @param {cc.BlendFunc} Var
     */
    setBlendFunc:function (Var) {
        this._blendFunc = Var;
    },

    /**
     * @param color
     * @return {Boolean}
     */
    initWithColor:function (color, width, height) {
        var winSize = cc.Director.sharedDirector().getWinSize();

        width = width || winSize.width;
        height = height || winSize.height;

        this._blendFunc.src = cc.BLEND_SRC;
        this._blendFunc.dst = cc.BLEND_DST;

        this._color = new cc.Color3B(color.r, color.g, color.b);
        this._opacity = color.a;

        for (var i = 0; i < this._squareVertices.length; i++) {
            this._squareVertices[i].x = 0.0;
            this._squareVertices[i].y = 0.0;
        }
        this._updateColor();

        this.setContentSize(new cc.Size(width, height));
        //this.setShaderProgram(cc.ShaderCache.sharedShaderCache().programForKey(kCCShader_PositionColor));

        return true;
    },

    /**
     * override contentSize
     * @param {cc.Size} size
     */
    setContentSize:function (size) {
        this._squareVertices[1].x = size.width;
        this._squareVertices[2].y = size.height;
        this._squareVertices[3].x = size.width;
        this._squareVertices[3].y = size.height;
        this._super(size);
    },

    /**
     * change width and height in Points
     * @param {Number} w width
     * @param {Number} h height
     */
    changeWidthAndHeight:function (w, h) {
        this.setContentSize(cc.SizeMake(w, h));
    },

    /**
     * change width in Points
     * @param {Number} w width
     */
    changeWidth:function (w) {
        this.setContentSize(cc.SizeMake(w, this._contentSize.height));
    },

    /**
     * change height in Points
     * @param {Number} h height
     */
    changeHeight:function (h) {
        this.setContentSize(cc.SizeMake(this._contentSize.width, h));
    },

    _updateColor:function () {
        for (var i = 0; i < 4; i++) {
            this._squareColors[i].r = this._color.r / 255;
            this._squareColors[i].g = this._color.g / 255;
            this._squareColors[i].b = this._color.b / 255;
            this._squareColors[i].a = this._opacity / 255;
        }
    },

    setOpacityModifyRGB:function (value) {
    },
    isOpacityModifyRGB:function () {
        return false;
    },

    /**
     * renders the layer
     * @param {CanvasContext|Null} ctx
     */
    draw:function (ctx) {
        var context = ctx || cc.renderContext;

        if (cc.renderContextType == cc.CANVAS) {
            //context.globalAlpha = this.getOpacity() / 255;
            var tWidth = this.getContentSize().width;
            var tHeight = this.getContentSize().height;
            var apip = this.getAnchorPointInPoints();
            var tGradient = context.createLinearGradient(-apip.x, apip.y,
                -apip.x + tWidth, -(apip.y + tHeight));

            tGradient.addColorStop(0, "rgba(" + Math.round(this._squareColors[0].r * 255) + "," + Math.round(this._squareColors[0].g * 255) + ","
                + Math.round(this._squareColors[0].b * 255) + "," + this._squareColors[0].a.toFixed(4) + ")");
            tGradient.addColorStop(1, "rgba(" + Math.round(this._squareColors[3].r * 255) + "," + Math.round(this._squareColors[3].g * 255) + ","
                + Math.round(this._squareColors[3].b * 255) + "," + this._squareColors[3].a.toFixed(4) + ")");

            context.fillStyle = tGradient;
            context.fillRect(-apip.x, apip.y, tWidth, -tHeight);
        } else {
            /*cc.NODE_DRAW_SETUP();
             ccGLEnableVertexAttribs( kCCVertexAttribFlag_Position | kCCVertexAttribFlag_Color );

             //
             // Attributes
             //
             glVertexAttribPointer(kCCVertexAttrib_Position, 2, GL_FLOAT, GL_FALSE, 0, m_pSquareVertices);
             glVertexAttribPointer(kCCVertexAttrib_Color, 4, GL_FLOAT, GL_FALSE, 0, m_pSquareColors);
             ccGLBlendFunc( m_tBlendFunc.src, m_tBlendFunc.dst );
             glDrawArrays(GL_TRIANGLE_STRIP, 0, 4);   */
        }
        this._super(context);

        cc.INCREMENT_GL_DRAWS(1);
    }
});

/**
 * creates a cc.Layer with color, width and height in Points
 * @param {cc.Color4B} color
 * @param {Number|Null} width
 * @param {Number|Null} height
 * @return {cc.LayerColor}
 * @example
 * // Example
 * //Create a yellow color layer as background
 * var yellowBackground = cc.LayerColor.create(cc.ccc4(255,255,0,255));
 * //If you didnt pass in width and height, it defaults to the same size as the canvas
 *
 * //create a yellow box, 200 by 200 in size
 * var yellowBox = cc.LayerColor.create(cc.ccc3(255,255,0,255), 200, 200);
 */
cc.LayerColor.create = function (color, width, height) {
    var ret = new cc.LayerColor();
    switch (arguments.length) {
        case 0:
            ret.init();
            break;
        case 1:
            ret.initWithColor(color);
            break;
        case 3:
            ret.initWithColor(color, width, height);
            break;
        default :
            ret.init();
            break;
    }
    return ret;
};


/**
 * CCLayerGradient is a subclass of cc.LayerColor that draws gradients across<br/>
 * the background.<br/>
 *<br/>
 * All features from cc.LayerColor are valid, plus the following new features:<br/>
 * <ul><li>direction</li>
 * <li>final color</li>
 * <li>interpolation mode</li></ul>
 * <br/>
 * Color is interpolated between the startColor and endColor along the given<br/>
 * vector (starting at the origin, ending at the terminus).  If no vector is<br/>
 * supplied, it defaults to (0, -1) -- a fade from top to bottom.<br/>
 * <br/>
 * If 'compressedInterpolation' is disabled, you will not see either the start or end color for<br/>
 * non-cardinal vectors; a smooth gradient implying both end points will be still<br/>
 * be drawn, however.<br/>
 *<br/>
 * If ' compressedInterpolation' is enabled (default mode) you will see both the start and end colors of the gradient.
 * @class
 * @extends cc.LayerColor
 */
cc.LayerGradient = cc.LayerColor.extend(/** @lends cc.LayerGradient# */{
    _startColor:new cc.Color3B(0, 0, 0),
    _endColor:new cc.Color3B(0, 0, 0),
    _startOpacity:null,
    _endOpacity:null,
    _alongVector:null,
    _compressedInterpolation:false,

    /**
     * Constructor
     * @function
     */
    ctor:function () {
        this._startColor = new cc.Color3B(0, 0, 0);
        this._endColor = new cc.Color3B(0, 0, 0);
        this._super();
    },

    /**
     * get the starting color
     * @return {cc.Color3B}
     */
    getStartColor:function () {
        return this._color;
    },

    /**
     * set the starting color
     * @param {cc.Color3B} color
     * @example
     * // Example
     * myGradientLayer.setStartColor(cc.ccc3(255,0,0));
     * //set the starting gradient to red
     */
    setStartColor:function (color) {
        this.setColor(color);
    },

    /**
     * set the end gradient color
     * @param {cc.Color3B} color
     * @example
     * // Example
     * myGradientLayer.setEndColor(cc.ccc3(255,0,0));
     * //set the ending gradient to red
     */
    setEndColor:function (color) {
        this._endColor = color;
        this._updateColor();
    },

    /**
     * get the end color
     * @return {cc.Color3B}
     */
    getEndColor:function () {
        return this._endColor;
    },

    /**
     * set starting gradient opacity
     * @param {Number} o from 0 to 255, 0 is transparent
     */
    setStartOpacity:function (o) {
        this._startOpacity = o;
        this._updateColor();
    },

    /**
     * get the starting gradient opacity
     * @return {Number}
     */
    getStartOpacity:function () {
        return this._startOpacity;
    },

    /**
     * set the end gradient opacity
     * @param {Number} o
     */
    setEndOpacity:function (o) {
        this._endOpacity = o;
        this._updateColor();
    },

    /**
     * get the end gradient opacity
     * @return {Number}
     */
    getEndOpacity:function () {
        return this._endOpacity;
    },

    /**
     * set vector
     * @param {cc.Point} Var
     */
    setVector:function (Var) {
        this.alongVector = Var;
        this._updateColor();
    },

    /**
     * @return {cc.Point}
     */
    getVector:function () {
        return this.alongVector;
    },

    /**
     * @return {Boolean}
     */
    isCompressedInterpolation:function () {
        return this._compressedInterpolation;
    },

    /**
     * @param {Boolean} compress
     */
    setCompressedInterpolation:function (compress) {
        this._compressedInterpolation = compress;
        this._updateColor();
    },

    /**
     * @param {cc.Color3B} start starting color
     * @param {cc.Color3B} end
     * @param {cc.Point|Null} v
     * @return {Boolean}
     */
    initWithColor:function (start, end, v) {
        var argnum = arguments.length;
        if (argnum == 2) {
            // Initializes the CCLayer with a gradient between start and end.
            v = cc.ccp(0, -1);
        }

        // Initializes the CCLayer with a gradient between start and end in the direction of v.
        this._startColor.r = start.r;
        this._startColor.g = start.g;
        this._startColor.b = start.b;
        this._startOpacity = start.a;

        this._endColor.r = end.r;
        this._endColor.g = end.g;
        this._endColor.b = end.b;
        this._endOpacity = end.a;

        this.alongVector = v;

        this._compressedInterpolation = true;

        return this._super(cc.ccc4(start.r, start.g, start.b, 255));
    },

    _updateColor:function () {
        //todo need fixed for webGL
        this._super();
        /*
         this._squareColors[0].r = Math.round(this._startColor.r);
         this._squareColors[0].g = Math.round(this._startColor.g);
         this._squareColors[0].b = Math.round(this._startColor.b);
         this._squareColors[0].a = Math.round(this._startColor.a);

         this._squareColors[3].r = Math.round(this._endColor.r);
         this._squareColors[3].g = Math.round(this._endColor.g);
         this._squareColors[3].b = Math.round(this._endColor.b);
         this._squareColors[3].a = Math.round(this._endColor.a);
         return;
         */


        var h = cc.ccpLength(this.alongVector);
        if (h == 0)
            return;

        var c = Math.sqrt(2.0);
        var u = cc.ccp(this.alongVector.x / h, this.alongVector.y / h);

        // Compressed Interpolation mode
        if (this._compressedInterpolation) {
            var h2 = 1 / ( Math.abs(u.x) + Math.abs(u.y) );
            u = cc.ccpMult(u, h2 * c);
        }

        var opacityf = this._opacity / 255.0;

        var S = new cc.Color4F(this._startColor.r / 255, this._startColor.g / 255, this._startColor.b / 255, (this._startOpacity * opacityf) / 255);

        var E = new cc.Color4F(this._endColor.r / 255, this._endColor.g / 255, this._endColor.b / 255, (this._endOpacity * opacityf) / 255);

        // (-1, -1)
        this._squareColors[0].r = parseInt((E.r + (S.r - E.r) * ((c + u.x + u.y) / (2.0 * c))));
        this._squareColors[0].g = parseInt((E.g + (S.g - E.g) * ((c + u.x + u.y) / (2.0 * c))));
        this._squareColors[0].b = parseInt((E.b + (S.b - E.b) * ((c + u.x + u.y) / (2.0 * c))));
        this._squareColors[0].a = parseInt((E.a + (S.a - E.a) * ((c + u.x + u.y) / (2.0 * c))));
        // (1, -1)
        this._squareColors[1].r = parseInt((E.r + (S.r - E.r) * ((c - u.x + u.y) / (2.0 * c))));
        this._squareColors[1].g = parseInt((E.g + (S.g - E.g) * ((c - u.x + u.y) / (2.0 * c))));
        this._squareColors[1].b = parseInt((E.b + (S.b - E.b) * ((c - u.x + u.y) / (2.0 * c))));
        this._squareColors[1].a = parseInt((E.a + (S.a - E.a) * ((c - u.x + u.y) / (2.0 * c))));
        // (-1, 1)
        this._squareColors[2].r = parseInt((E.r + (S.r - E.r) * ((c + u.x - u.y) / (2.0 * c))));
        this._squareColors[2].g = parseInt((E.g + (S.g - E.g) * ((c + u.x - u.y) / (2.0 * c))));
        this._squareColors[2].b = parseInt((E.b + (S.b - E.b) * ((c + u.x - u.y) / (2.0 * c))));
        this._squareColors[2].a = parseInt((E.a + (S.a - E.a) * ((c + u.x - u.y) / (2.0 * c))));
        // (1, 1)
        this._squareColors[3].r = parseInt((E.r + (S.r - E.r) * ((c - u.x - u.y) / (2.0 * c))));
        this._squareColors[3].g = parseInt((E.g + (S.g - E.g) * ((c - u.x - u.y) / (2.0 * c))));
        this._squareColors[3].b = parseInt((E.b + (S.b - E.b) * ((c - u.x - u.y) / (2.0 * c))));
        this._squareColors[3].a = parseInt((E.a + (S.a - E.a) * ((c - u.x - u.y) / (2.0 * c))));
    }
});

/**
 * creates a gradient layer
 * @param {cc.Color3B} start starting color
 * @param {cc.Color3B} end ending color
 * @param {cc.Point|Null} v
 * @return {cc.LayerGradient}
 */
cc.LayerGradient.create = function (start, end, v) {
    var layer = new cc.LayerGradient();
    switch (arguments.length) {
        case 2:
            /** Creates a full-screen CCLayer with a gradient between start and end. */
            if (layer && layer.initWithColor(start, end)) {
                return layer;
            }
            break;
        case 3:
            /** Creates a full-screen CCLayer with a gradient between start and end in the direction of v. */
            if (layer && layer.initWithColor(start, end, v)) {
                return layer;
            }
            break;
        case 0:
            layer.init();
            break;
        default:
            throw "Arguments error ";
            break;
    }
    return null;
};


/**
 * CCMultipleLayer is a CCLayer with the ability to multiplex it's children.<br/>
 * Features:<br/>
 *  <ul><li>- It supports one or more children</li>
 *  <li>- Only one children will be active a time</li></ul>
 *  @class
 *  @extends cc.Layer
 */
cc.LayerMultiplex = cc.Layer.extend(/** @lends cc.LayerMultiplex# */{
    _enabledLayer:0,
    _layers:null,

    /**
     * Constructor
     */
    ctor:function () {
        this._super();
    },

    /**
     * @param {cc.Layer} layer
     * @deprecated merged with initWithLayers
     * @return {Boolean}
     */
    initWithLayer:function (layer) {
        this._layers = [];
        this._layers.push(layer);
        this._enabledLayer = 0;
        this.addChild(layer);
        return true;
    },

    /**
     * @param {Array} args an array of cc.Layer
     * @return {Boolean}
     */
    initWithLayers:function (args) {
        this._layers = args;
        this._enabledLayer = 0;
        this.addChild(this._layers[this._enabledLayer]);
        return true;
    },

    /**
     * switches to a certain layer indexed by n.<br/>
     * The current (old) layer will be removed from it's parent with 'cleanup:YES'.
     * @param {Number} n the layer index to switch to
     */
    switchTo:function (n) {
        cc.Assert(n < this._layers.length, "Invalid index in MultiplexLayer switchTo message");

        this.removeChild(this._layers[this._enabledLayer], true);

        this._enabledLayer = n;

        this.addChild(this._layers[n]);
    },

    /** release the current layer and switches to another layer indexed by n.<br/>
     * The current (old) layer will be removed from it's parent with 'cleanup:YES'.
     * @param {Number} n the layer index to switch to
     */
    switchToAndReleaseMe:function (n) {
        cc.Assert(n < this._layers.count(), "Invalid index in MultiplexLayer switchTo message");

        this.removeChild(this._layers[this._enabledLayer], true);

        //[layers replaceObjectAtIndex:_enabledLayer withObject:[NSNull null]];
        this._layers[this._enabledLayer] = null;

        this._enabledLayer = n;

        this.addChild(this._layers[n]);
    },

    /**
     * @param {cc.Layer} layer
     */
    addLayer:function (layer) {
        cc.Assert(this._layers, "cc.Layer addLayer");
        this._layers.push(layer);
    }
});


/**
 * creates a cc.LayerMultiplex with one or more layers using a variable argument list.
 * @return {cc.LayerMultiplex|Null}
 * @example
 * // Example
 * var multiLayer = cc.LayerMultiple.create(layer1, layer2, layer3);//any number of layers
 */
cc.LayerMultiplex.create = function (/*Multiple Arguments*/) {
    var multiplexLayer = new cc.LayerMultiplex();
    if (multiplexLayer.initWithLayers(arguments)) {
        return multiplexLayer;
    }
    return null;
};


/**
 * a layer that does not get redraw if not needed, and its always gets placed on the bottom layer
 * @class
 * @extends cc.Node
 * @example
 * // Example
 * var veryLazy = new cc.LazyLayer();
 * veryLazy.addChild(mySprite);
 */
cc.LazyLayer = cc.Node.extend(/** @lends cc.LazyLayer# */{
    _layerCanvas:null,
    _layerContext:null,
    _isNeedUpdate:false,
    _canvasZOrder:-10,
    _layerId:"",

    /**
     * Constructor
     */
    ctor:function () {
        this._super();
        this.setAnchorPoint(new cc.Point(0, 0));
        //setup html
        this._setupHtml();
    },

    /**
     * @param {Number} zOrder
     */
    setLayerZOrder:function (zOrder) {
        if (zOrder >= 0) {
            throw "LazyLayer zOrder must Less than Zero.Because LazyLayer is a background Layer!";
        }
        this._canvasZOrder = zOrder;
        this._layerCanvas.style.zIndex = this._canvasZOrder;
    },

    /**
     *
     * @return {Number}
     */
    getLayerZOrder:function () {
        return this._canvasZOrder;
    },

    _setupHtml:function () {
        this._layerCanvas = document.createElement("canvas");
        this._layerCanvas.width = cc.canvas.width;
        this._layerCanvas.height = cc.canvas.height;
        this._layerId = "lazyCanvas" + Date.now();
        this._layerCanvas.id = this._layerId;
        this._layerCanvas.style.zIndex = this._canvasZOrder;
        this._layerCanvas.style.position = "absolute";
        this._layerCanvas.style.top = "0";
        this._layerCanvas.style.left = "0";
        this._layerContext = this._layerCanvas.getContext("2d");
        this._layerContext.fillStyle = "rgba(0,0,0,1)";
        this._layerContext.translate(0, this._layerCanvas.height);
        cc.container.appendChild(this._layerCanvas);
        var selfPointer = this;
        window.addEventListener("resize", function (event) {
            selfPointer.adjustSizeForCanvas();
        });
    },

    /**
     * make it the same size as canvas, in case canvas resized
     */
    adjustSizeForCanvas:function () {
        this._isNeedUpdate = true;
        this._layerCanvas.width = cc.canvas.width;
        this._layerCanvas.height = cc.canvas.height;
        var xScale = cc.canvas.width / cc.originalCanvasSize.width;
        var yScale = cc.canvas.height / cc.originalCanvasSize.height;
        if (xScale > yScale) {
            xScale = yScale;
        }
        this._layerContext.translate(0, this._layerCanvas.height);
        this._layerContext.scale(xScale, xScale);
    },

    /**
     * return lazylayer's canvas
     * @return {HTMLCanvasElement}
     */
    getLayerCanvas:function () {
        return this._layerCanvas;
    },

    /**
     * same as cc.Node
     * @param {cc.Node} child
     * @param {Number|Null} zOrder
     * @param {Number|Null} tag
     */
    addChild:function (child, zOrder, tag) {
        this._isNeedUpdate = true;
        this._super(child, zOrder, tag);
    },

    /**
     * @param {cc.Node} child
     * @param {Boolean} cleanup
     */
    removeChild:function (child, cleanup) {
        this._isNeedUpdate = true;
        this._super(child, cleanup);
    },

    /**
     * stuff gets drawn in here
     */
    visit:function () {
        // quick return if not visible
        if (!this._isVisible) {
            return;
        }
        if (!this._isNeedUpdate) {
            return;
        }

        this._isNeedUpdate = false;
        var context = this._layerContext;
        context.save();
        context.clearRect(0, 0, this._layerCanvas.width, -this._layerCanvas.height);

        if (this._children && this._children.length > 0) {
            this.sortAllChildren();
            // draw children zOrder < 0
            for (var i = 0; i < this._children.length; i++) {
                this._children[i].visit(context);
            }
        }

        context.restore();
    },

    onExit:function () {
        this._super();

        //clear canvas element from parent element
        if (this._layerCanvas.parentNode) {
            this._layerCanvas.parentNode.removeChild(this._layerCanvas);
        }
    },

    _setNodeDirtyForCache:function () {
        this._isCacheDirty = true;
        this._isNeedUpdate = true;
    }
});
