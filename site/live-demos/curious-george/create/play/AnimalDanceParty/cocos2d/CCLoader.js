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

/**
 * A class to pre-load resources before engine start game main loop.
 * @class
 * @extends cc.Class
 */
cc.Loader = cc.Class.extend(/**  @lends cc.Loader# */{
    resourceCount:0,
    loadedResourceCount:0,
    timer:0,

    /**
     *  Check the loading status
     */
    isLoadedComplete:function () {
        var loaderCache = cc.Loader.shareLoader();
        if (loaderCache.loadedResourceCount == loaderCache.resourceCount) {
            if (loaderCache.onload) {
                loaderCache.timer = setTimeout(loaderCache.onload, 16);
            } else {
                cc.Assert(0, "cocos2d:no load callback defined");
            }
        } else {
            if (loaderCache.onloading) {
                loaderCache.timer = setTimeout(loaderCache.onloading, 16);
            }
            else {
                cc.LoaderScene.shareLoaderScene().draw();
            }
            loaderCache.timer = setTimeout(loaderCache.isLoadedComplete, 16);
        }
    },

    /**
     * Callback when loading resource error
     * @param {String} name
     * @example
     * //example
     * cc.Loader.shareLoader().onResLoadingErr(name);
     */
    onResLoadingErr:function (name) {
        cc.Log("cocos2d:Failed loading resource: " + name);
    },

    /**
     *Callback when a resource file loaded.
     * @example
     * //example
     * cc.Loader.shareLoader().onResLoaded();
     */
    onResLoaded:function () {
        this.loadedResourceCount++;
    },

    /**
     *  For loading percentage
     *  You can use this method to create a custom loading screen.
     * @return {Number}
     * @example
     * //example
     * cc.Log(cc.Loader.shareLoader().getProgressBar() + "%");
     */
    getProgressBar:function () {
        var per = this.loadedResourceCount / this.resourceCount;
        per = parseInt(per * 100);
        return per;
    },

    /**
     * status when resources loading success
     * @example
     *  //example
     * cc.Loader.shareLoader().onload = function () {
     *      cc.AppController.shareAppController().didFinishLaunchingWithOptions();
     * };
     */
    onload:undefined,

    /**
     *  status when res loading error
     * @example
     * //example
     * cc.Loader.shareLoader().onerror = function () {
     *      //do something
     * };
     */
    onerror:undefined,

    /**
     *  status when res loading
     * @example
     * //example
     * cc.Loader.shareLoader().onloading = function () {
     *       cc.LoaderScene.shareLoaderScene().draw();
     * };
     */
    onloading:undefined,

    /**
     * Pre-load the resources before engine start game main loop.
     * There will be some error without pre-loading resources.
     * @param {object} res
     * @example
     * //example
     * var res = [
     *               {type:"image", src:"hello.png"},
     *               {type:"tmx", src:"hello.tmx"}
     *     ]
     * cc.Loader.shareLoader().preload(res);
     */
    preload:function (res) {
        var sharedTextureCache = cc.TextureCache.sharedTextureCache();
        var sharedEngine = cc.AudioManager.sharedEngine();
        var shareParser = cc.SAXParser.shareParser();

        for (var i = 0; i < res.length; i++) {
            switch (res[i].type) {
                case "image":
                    sharedTextureCache.addImage(res[i].src);
                    this.resourceCount += 1;
                    break;
                case "bgm":
                    sharedEngine.preloadBackgroundMusic(res[i].src);
                    this.resourceCount += 1;
                    break;
                case "effect":
                    sharedEngine.preloadEffect(res[i].src);
                    this.resourceCount += 1;
                    break;
                case "plist":
                case "tmx":
                case "fnt":
                    shareParser.preloadPlist(res[i].src);
                    this.resourceCount += 1;
                    break;
                case "tga":
                    //cc.Log("cocos2d:not implemented yet")
                    break;
                default:
                    throw "cocos2d:unknow type : " + res[i].type;
                    break;
            }
        }
        this.isLoadedComplete();
    }
});

/**
 * Share Loader
 * @return {cc.Loader}
 */
cc.Loader.shareLoader = function () {
    if (!cc.shareLoader) {
        cc.shareLoader = new cc.Loader();
    }
    return cc.shareLoader;
};

/**
 * Default loading screen, you can customize the loading screen.
 * @class
 * @extends cc.Class
 */
cc.LoaderScene = cc.Class.extend(/**  @lends cc.LoaderScene# */{
    _logo:new Image(),

    /**
     * Constructor
     */
    ctor:function () {
    },

    /**
     * Draw loading screen
     */
    draw:function () {
        var logoWidth = (cc.canvas.width - this._logo.width) / 2;
        var logoHeight = (cc.canvas.height - this._logo.height) / 2;
        cc.renderContext.clearRect(0, -cc.canvas.height, cc.canvas.width, cc.canvas.height);
        cc.renderContext.fillStyle = "#009fc8";
        cc.renderContext.fillRect(0, -cc.canvas.height, cc.canvas.width, cc.canvas.height);
    }
});

/**
 * Shared loader scene
 * @return {cc.LoaderScene}
 */
cc.LoaderScene.shareLoaderScene = function () {
    if (!cc.shareLoaderScene) {
        cc.shareLoaderScene = new cc.LoaderScene();
    }
    return cc.shareLoaderScene;
};