// Replace setInterval and setTimeout
window.originalSetInterval = window.setInterval;
window.originalSetTimeout = window.setTimeout;

window.setInterval = function(f, d) {
  var i = window.originalSetInterval(f, d); window.setInterval.intervals.push(i);
  return i;
};
window.setTimeout = function(f, d) {
  var i = window.originalSetTimeout(f, d); window.setTimeout.timeouts.push(i);
  return i;
};

window.setInterval.intervals = [];
window.setTimeout.timeouts = [];

window.clearAllIntervals = function() {
  var i; while (i = window.setInterval.intervals.shift()) window.clearInterval(i);
};
window.clearAllTimeouts = function() {
  var i; while (i = window.setTimeout.timeouts.shift()) window.clearTimeout(i);
};

// Set up SoundManager
soundManager.isReady = false;
soundManager.original_play = soundManager.play;
soundManager.play = function() {
  // Queue play for when soundManager is ready
  window.sound.queuedPlays.push({ context: this, arguments: arguments });
};

soundManager.setup({
  url: window.History.getBaseHref() + "Sites/CG/Javascript/",
  preferFlash: false,
  useHTML5Audio: true,
  flashLoadTimeout: 0,
  onready: function() {
    var soundsToLoad = 0,
      readyActionsPerformed = false;

    soundManager.isReady = true;
    soundManager.play = soundManager.original_play;

    if (sessionStorage && sessionStorage.getItem("muted") == "true") {
      setTimeout(function() { $("#mute").click() }, 100);
    }

    // Put ready actions into a callback
    var readyActions = function() {
      if (!readyActionsPerformed) {
        readyActionsPerformed = true;

        while (window.sound.readyActions.length) {
          window.sound.readyActions.shift().apply(this);
        }
      }
    };

    // Build queued sounds
    while (window.sound.queuedSounds.length) {
      var nextSound = window.sound.queuedSounds.pop();
      nextSound.onload = function() {
        if (!--soundsToLoad) {
          readyActions();
        }
      };

      soundsToLoad++;
      soundManager.createSound(nextSound);
    }

    // Play queued plays
    var nextPlay = null;
    while (window.sound.queuedPlays.length) {
      nextPlay = window.sound.queuedPlays.shift();
      soundManager.play.apply(nextPlay.context, nextPlay.arguments); // won't autoplay on iOS4.2+ without user interaction
    }

    // Play ready actions after 10 seconds if the sound loading is taking too long
    setTimeout(readyActions, 10000);
  },
  ontimeout: function(status) {
    alert("SM2 failed to start. Flash missing, blocked or security error?");
    alert("The status is " + status.success + ", the error type is " + status.error.type);
  }
});

// Centralize sound handling
window.sound = function(data) {
  var name = data;
  data = {
    id: name,
    url: data,
    autoLoad: true
  };

  if (soundManager.isReady) {
    soundManager.createSound(data);
  } else {
    for (var i = 0; i < window.sound.queuedSounds.length; i++) {
      if (window.sound.queuedSounds[i].id == data.id) {
        return name;
      }
    }

    window.sound.queuedSounds.push(data);
  }

  return name;
};

window.sound.queuedSounds = [];
window.sound.queuedPlays = [];
window.sound.isPlaying = null;
window.sound.readyActions = [];

window.stopSounds = soundManager.stopAll;

if (!$.hoverIntent) {
  $.fn.hoverIntent = $.fn.hover;
}

;(function($) {
  // Prepare variables
  var History = window.History,
    document = window.document,
    $window = $(window),
    isMobile = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/),
    isIOS = isMobile && navigator.userAgent.match(/(iPhone|iPod|iPad)/),
    audioExt = (!Modernizr.audio || Modernizr.audio.mp3) ? '.mp3' : '.wav',
    rootUrl = History.getRootUrl(),
    baseUrl = History.getBaseHref(),
    titleSuffix = " - Curious George",
    isTransitioning = false;

  // Helper to find internal links
  $.expr[":"].internal = function(element, index, meta, stack) {
    var $this = $(element),
      url = $this.attr("href") || "";

    // Accept URLs with the root URL or that don't provide a scheme
    return url.substring(0, rootUrl.length) === rootUrl || url.indexOf(":") === -1;
  };

  // Store or restore original CSS of element
  $.fn.restore = function(restore) {
    // Prepare variables
    var $this = $(this);

    // Set or get restore value
    if (restore) {
      $this.data("restore", restore);
    } else {
      $this.css($this.data("restore") || {});
    }

    return $this;
  };

  // AJAXify links
  $.fn.ajaxify = function() { //return this; // cancel transitions
    return this.each(function() {
      // Prepare variables
      var $this = $(this);

      $this.find("a:internal:not(.no-ajax)[href]").click(function(event) {
        // Prepare variables
        var $this = $(this),
          url = $this.attr("href") || baseUrl,
          title = $this.data("title") || $this.attr("title") || null;

        if (url != "#") {
          // Avoid AJAX if the click is a Ctrl+Click
          if (event.which == 2 || event.metaKey) return true;

          // Change state
          History.pushState(null, title + titleSuffix, url);
        }

        // Cancel click action
        event.preventDefault();
        return false;
      });
    });
  };

  // Float around as if weightless in space
  $.fn.weightless = function(options) {
    return this.each(function() {
      // Prepare variables
      var $this = $(this),
        settings = $.extend({
          range: 4,
          delay: 500,
          speed: 800,
          position: {
            top: parseInt($this.css("top"), 10),
            left: parseInt($this.css("left"), 10)
          }
        }, options),
        bounds = {},
        position = {
          x: settings.position.left,
          y: settings.position.top
        };

      // Update bounds
      $this.updateBounds = function() {
        bounds = {
          left: settings.position.left - settings.range,
          right: settings.position.left + settings.range,
          top: settings.position.top - settings.range,
          bottom: settings.position.top + settings.range
        };
      };

      // Animate element
      $this.weightlessAnimate = function() {
        // End plugin if element is no longer visible
        if (!$this.is(":visible")) return;

        // Prepare variables
        var x = Math.floor(Math.random() * settings.range),
          y = settings.range - x,
          direction = {
            x: Math.round(Math.random()) ? 1 : -1,
            y: Math.round(Math.random()) ? 1 : -1
          };

        // Change position
        position.x = Math.max(bounds.left, Math.min(direction.x * x + position.x, bounds.right));
        position.y = Math.max(bounds.top, Math.min(direction.y * y + position.y, bounds.bottom));

        // Animate to new position
        $this.animate({
          left: position.x,
          top: position.y
        }, settings.speed, function() {
          setTimeout($this.weightlessAnimate, settings.delay)
        });
      };

      // Initialize actions
      $this.updateBounds();
      $this.weightlessAnimate();
    });
  };

  // Randomly fade in and out children
  $.fn.twinkle = function(options) {
    return this.each(function() {
      // Prepare variables
      var $this = $(this),
        settings = $.extend({
          speed: 400,
          delay: 1200,
          elements: 3,
          positions: [[0, 0]]
        }, options),
        elements = null;

      // Create elements
      $this.empty();

      for (var i = 0; i < settings.elements; i++) {
        $this.append("<div />");
      }

      elements = $this.children().hide();

      // Twinkle an element
      $this.twinkleElement = function(element, position) {
        element
          .css({ left: position[0], top: position[1] })
          .fadeIn(settings.speed, function() {
            element.fadeOut(settings.speed);
          });
      };

      // Animate elements
      $this.twinkleAnimate = function() {
        // End plugin if element is no longer visible
        if (!$this.is(":visible")) return;

        // Prepare variables
        var twinklers = [];

        // Select twinklers, overwriting duplicates
        for (var i = 0; i < elements.length; i++) {
          twinklers[Math.floor(Math.random() * settings.positions.length)] = true;
        }

        // Run twinklers
        for (var i = 0, j = 0; i < twinklers.length && j < elements.length; i++) {
          if (twinklers[i]) {
            $this.twinkleElement(elements.eq(j++), settings.positions[i]);
          }
        }

        setTimeout($this.twinkleAnimate, settings.delay);
      };

      // Initialize actions
      $this.twinkleAnimate();
    });
  };

  // Swap frames by fading
  $.fn.fadeSwap = function(options) {
    return this.each(function() {
      // Prepare variables
      var $this = $(this),
        settings = $.extend({
          speed: 800,
          delay: 800,
          beforeSwap: null,
          afterSwap: null
        }, options),
        elements = $this.children(),
        currentElement = 0;

      // Hide elements that shouldn't be visible
      elements.each(function(index) {
        if (index != currentElement) {
            $(this).css({ opacity: 0 });
        }
      });

      // Animate elements
      $this.fadeSwapAnimate = function() {
        // End plugin if element is no longer visible
        if (!$this.is(":visible")) return;

        // Run beforeSwap callback
        if (settings.beforeSwap) settings.beforeSwap();

        // Prepare variables
        var last = elements.eq(currentElement),
          next = null;

        // Get the next element
        if (++currentElement >= elements.length) {
          currentElement = 0;
        }

        next = elements.eq(currentElement);

        // Fade in new elemnet
          next.animate({ opacity: 1 }, settings.speed, function() {
          setTimeout($this.fadeSwapAnimate, settings.delay);
        });

        // Fade out old element
        setTimeout(function() {
            last.animate({ opacity: 0 }, settings.speed, function() {
            // Run afterSwap callback
            if (settings.afterSwap) settings.afterSwap();
          });
        }, settings.speed * .5);
      };

      // Initialize actions
      $this.fadeSwapAnimate();
    });
  };

  // Animate an element as a filmstrip
  $.fn.filmstrip = function(methodOrOptions) {
    if ($.fn.filmstrip.methods[methodOrOptions]) {
      return $.fn.filmstrip.methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof methodOrOptions === 'object' || ! methodOrOptions) {
       return $.fn.filmstrip.methods.init.apply(this, arguments);
    } else {
      $.error("Method '" + methodOrOptions + "' does not exist in $.filmstrip");
    }
  };

  $.fn.filmstrip.methods = {
    init: function(options) {
      return this.each(function() {
        // Prepare variables
        var $this = $(this),
          settings = $.extend({
              step: 100,
              steps: 10,
              speed: 83,
              x: 0,
              y: 0,
              finish: true,
              reset: true
            }, options),
          currentFrame = 0,
          interval = function() {
            // Stop animating if flag is set
            if ($this.data("filmstrip.stop") && (settings.finish ? currentFrame == 0 : true)) {
              $this.data("filmstrip.stop", false);
              clearInterval($this.data("filmstrip.interval"));

              // Reset to first frame
              if (settings.reset && currentFrame != 0) {
                currentFrame = 0;
                $this[0].style.backgroundPosition = settings.x + "px " + (settings.y - currentFrame * settings.step) + "px";
                $this.data("filmstrip.currentFrame", 0);
              }

              return;
            }

            // Go to next frame
            if (++currentFrame >= settings.steps) currentFrame = 0;
            $this[0].style.backgroundPosition = settings.x + "px " + (settings.y - currentFrame * settings.step) + "px";
            $this.data("filmstrip.currentFrame", currentFrame);
          };

        // Attach variables to object
        $this
          .data("filmstrip.stop", false)
          .data("filmstrip.interval", null)
          .data("filmstrip.func", interval)
          .data("filmstrip.settings", settings)
          .data("filmstrip.currentFrame", 0);
      });
    },

    start: function() {
      // Prepare variables
      var $this = $(this),
        settings = $this.data("filmstrip.settings"),
        interval = $this.data("filmstrip.interval");

      // Reset stop flag
      $this.data("filmstrip.stop", false);

      // Clear interval if exists
      if (interval) clearInterval(interval);

      // Build interval
      $this.data("filmstrip.interval", setInterval($this.data("filmstrip.func"), settings.speed));

      return this;
    },

    stop: function() {
      // Prepare variables
      var $this = $(this),
        interval = $this.data("filmstrip.interval");

      // Set stop flag to queue interval clear
      if (interval) $this.data("filmstrip.stop", true);

      return this;
    },

    next: function() {
      var func = $(this).data("filmstrip.func");

      // Run function
      if (func) {
        $(this).data("filmstrip.func")();
      }

      return this;
    }
  };

  // Attach voice-overs to an element
  $.fn.voiceOver = function(methodOrOptions) {
    if ($.fn.voiceOver.methods[methodOrOptions]) {
      return $.fn.voiceOver.methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof methodOrOptions === 'object' || ! methodOrOptions) {
       return $.fn.voiceOver.methods.init.apply(this, arguments);
    } else {
      $.error("Method '" + methodOrOptions + "' does not exist in $.voiceOver");
    }
  };

  $.fn.voiceOver.methods = {
    init: function(options) {
      return this.each(function() {
        // Prepare variables
        var $this = $(this),
          settings = $.extend({ data: {}, startAnim: $.noop, endAnim: $.noop, overlapVolume: 1, isTracked: true }, options),
          voiceOvers = {};

        for (var i in settings.data) {
          voiceOvers[i] = sound(settings.data[i]);
        }

        // Attach variables to object
        $this
          .data("voiceOver.startAnim", settings.startAnim)
          .data("voiceOver.stopAnim", settings.stopAnim)
          .data("voiceOver.volume", settings.overlapVolume)
          .data("voiceOver.isTracked", settings.isTracked)
          .data("voiceOver.voiceOvers", voiceOvers)
          .data("voiceOver.active", null);
      });
    },

    play: function(voiceOver) {
      // Prepare variables
      var $this = $(this),
        start = $this.data("voiceOver.startAnim"),
        active = $this.data("voiceOver.active"),
        voiceOvers = $this.data("voiceOver.voiceOvers"),
        volume = $this.data("voiceOver.volume"),
        isTracked = $this.data("voiceOver.isTracked"),
        currentVoiceOver = null,
        doubleCheck = null;

      if (!voiceOver in voiceOvers) {
        //console.log("Voice-over '" + voiceOver + "' does not exist.");
      } else if (active == voiceOver && soundManager.getSoundById(voiceOvers[voiceOver]).playState) {
        //console.log("Voice-over '" + voiceOver + "' is already playing.");
      } else {
        // Cancel active voice-over
        if (active) {
          $this.voiceOver("stop", active);
        }

        // Run the animation
        if ($.isFunction(start)) {
          start();
        }

        // Set as isPlaying
        if (isTracked) {
          window.sound.isPlaying = voiceOvers[voiceOver];
        }

        // Play audio
        $this.data("voiceOver.active", voiceOver);
        soundManager.play(voiceOvers[voiceOver], {
          volume: (window.sound.isPlaying ? volume : 1) * 100,
          onfinish: function() {
            clearInterval(doubleCheck);
            $this.voiceOver("stop", voiceOver);

            // Clear isPlaying
            if (isTracked && window.sound.isPlaying == voiceOvers[voiceOver]) {
              window.sound.isPlaying = null;
            }
          }
        });
      }

      return this;
    },

    stop: function(voiceOver) {
      // Prepare variables
      var $this = $(this),
        stop = $this.data("voiceOver.stopAnim"),
        active = $this.data("voiceOver.active"),
        isTracked = $this.data("voiceOver.isTracked"),
        voiceOver = voiceOver || active,
        voiceOvers = $this.data("voiceOver.voiceOvers");

      if (!voiceOver || !voiceOvers || !(voiceOver in voiceOvers)) {
        //console.log("There is currently no voice-over to stop.");
      } else {
        // Stop animation
        if ($.isFunction(stop) && voiceOver == active) {
          $this.data("voiceOver.active", null)
          stop();
        }

        soundManager.stop(voiceOvers[voiceOver]);

        // Clear from isPlaying
        if (isTracked && window.sound.isPlaying == voiceOvers[voiceOver]) {
          window.sound.isPlaying = null;
        }
      }
    },

    stopAnim: function() {
      // Prepare variables
      var stop = $(this).data("voiceOver.stopAnim");

      // Stop animation
      if ($.isFunction(stop)) {
        stop();
      }
    },

    add: function(name, voiceOver) {
      // Prepare variables
      var $this = $(this),
        voiceOvers = $this.data("voiceOver.voiceOvers");

      // Build sound
      voiceOvers[name] = sound(voiceOver);
      $this.data("voiceOver.voiceOvers", voiceOvers);

      return this;
    }
  };

  // Handle idled actions
  $.fn.idler = function(methodOrOptions) {
    if ($.fn.idler.methods[methodOrOptions]) {
      return $.fn.idler.methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof methodOrOptions === 'object' || ! methodOrOptions) {
       return $.fn.idler.methods.init.apply(this, arguments);
    } else {
      $.error("Method '" + methodOrOptions + "' does not exist in $.idler");
    }
  };

  $.fn.idler.methods = {
    init: function(options) {
      return this.each(function() {
        // Prepare variables
        var $this = $(this),
          settings = $.extend({ actions: [], delay: 5000 }, options);

        // Attach variables to object
        $this
          .data("idler.actions", settings.actions)
          .data("idler.delay", settings.delay)
          .data("idler.timeout", null)
          .data("idler.position", 0)
          .data("idler.isStarted", false);
      });
    },

    start: function() {
      // Prepare variables
      var $this = $(this);

      // Sadly, in order to get sounds to work, we have to assume that idler depends on SoundManager2
      if (!soundManager.isReady) {
        window.sound.readyActions.push(function() {
          if (!$this.data("idler.isStarted")) {
            $this.data("idler.isStarted", true);
            $this.idler("next");
          }
        });
      } else if (!$this.data("idler.isStarted")) {
        $this.data("idler.isStarted", true);
        $this.idler("next");
      }
    },

    next: function() {
      // Prepare variables
      var $this = $(this),
        actions = $this.data("idler.actions"),
        timeout = $this.data("idler.timeout"),
        position = $this.data("idler.position");

      // Clear current timeout
      if (timeout) {
        clearTimeout(timeout);
        $this.data("idler.timeout", null);
      }

      // Perform action
      if (actions && actions.length) {
        // Perform next action
        actions[position]();
        $this.data("idler.position", ++position < actions.length ? position : 0);

        // Build new timeout, only if not at last action
        if (position < actions.length) {
          $this.data("idler.timeout", setTimeout(function() {
            $this.idler("next");
          }, $this.data("idler.delay")));
        }
      }
    },

    reset: function() {
      // Prepare variables
      var $this = $(this),
        timeout = $this.data("idler.timeout"),
        position = $this.data("idler.position");

      // Clear current timeout
      if (timeout) {
        clearTimeout(timeout);

        // Rebuilding new timeout
        $this.data("idler.timeout", setTimeout(function() {
          $this.idler("next");
        }, $this.data("idler.delay")));

        // Go back a position
        $this.data("idler.position", position > 0 ? position - 1 : 0);
      }
    }
  };

  // Update query string parameter
  $.updateQueryString = function(a, k, v) {
    var re = new RegExp("([?|&])" + k + "=.*?(&|$)", "i"),
      separator = a.indexOf('?') !== -1 ? "&" : "?";

    if (a.match(re)) return a.replace(re, '$1' + k + "=" + v + '$2');
    else return a + separator + k + "=" + v;
  };

  $(function() {
    // Prepare variables
    var $body = $(document.body),
      $head = $("head"),
      container = $("#content"),
      logo = $("#main header nav h1"),
      navigation = $("#main header nav ul"),
      callToAction = $("#mobile-app"),
      urlSegments = History.getState().url.replace(baseUrl, "").split("?")[0].split("/"),
      defaultTransitionType = "normal",
      loading = $("<div id=loading />"),
      turning = $("<div id=turn-it />").append("<div>").append("<div>"),
      needsTurning = false,
      stateQueue = [],
      sounds = {
        gamesButton: sound(baseUrl + "Sites/CG/Sounds/voice/kids/CG_Game-NavigationButtons_Games_2Kids" + audioExt),
        storiesButton: sound(baseUrl + "Sites/CG/Sounds/voice/kids/CG_Game-NavigationButtons_Stories_2Kids" + audioExt),
        createButton: sound(baseUrl + "Sites/CG/Sounds/voice/kids/CG_Game-NavigationButtons_Create_2Kids" + audioExt),
        curiousButton: sound(baseUrl + "Sites/CG/Sounds/voice/kids/CG_Game-NavigationButtons_Curious_2Kids" + audioExt),
        likeButton: sound(baseUrl + "Sites/CG/Sounds/voice/kids/CG_Game-NavigationButtons_ILikeThis_Girl" + audioExt)
      };

    // Clean hash to fix IE glitch
    if (window.location.hash && window.location.hash.indexOf("?") > 0) {
      window.location.hash = window.location.hash.replace(/\?.+/, "");
    }

    // Build loading
    loading.css({ width: 288, height: 273 }).filmstrip({ step: 273, steps: 8 }).appendTo($body);

    // Build tablet turning notification
    turning.css({ width: 636, height: 456 }).appendTo($body);

    // Watch resizing
    var resizeTimer = null,
      resizeWatcher = function() {
        if (needsTurning && isMobile) {
          clearTimeout(resizeTimer);
          resizeTimer = setTimeout(doResizeWatcher, 250);
        }
      },
      doResizeWatcher = function() {
        if (isMobile) {
          var isLarge = $window.width() >= 916,
            isVisible = turning.is(":visible");

          if (!(isLarge || isVisible)) {
            turning.fadeIn().fadeSwap({ speed: 400 });
          } else if (isLarge && isVisible) {
            turning.fadeOut();
          }
        }
      };

    if (isMobile) $window.resize(resizeWatcher);

    /**
     * Transition an element, then restore it to it's original state
     * @param {jQuery} element
     * @param {Object} from CSS rules to start animation with
     * @param {Object} to CSS rules to end animation with
     * @param {boolean} [isHidden=false] Whether the hide the element after animation
     * @param {integer} [delay=0] Amount of milliseconds to delay animation by
     * @return {jQuery.Deferred}
     */
    var buildTransition = function(element, from, to, isHidden, delay) {
      // Prepare variables
      if (!arguments.callee.instants) {
        arguments.callee.instants = ["position"];
      }

      var css = from,
        animate = {},
        restore = {};

      // Separate rules into instant CSS changes or gradual animation changes
      for (var i in to) {
        if ($.inArray(i, arguments.callee.instants) == -1) {
          animate[i] = to[i];
        } else {
          css[i] = to[i];
        }

        restore[i] = element.css(i);
      }

      // Finish restoration object
      for (var i in from) {
        if (!(i in restore)) {
          restore[i] = element.css(i);
        }
      }

      // Save restoration properties
      element.restore(restore);

      // Perform animation
      return element.stop().show().css(css).delay(delay || 0).animate(animate);
    };

    // Build transitions
    var doTransition = {};

    /**
     * Normal transition
     * @param {boolean} isAppearing Whether the transition is coming in or going out
     * @param {jQuery|HTMLElement} element
     * @param {integer} [offset=0] Pixel offset to move
     * @param {integer} [delay=0] Amount of milliseconds to delay animation by
     * @return {jQuery.Deferred}
     */
    doTransition.normal = function(isAppearing, element, offset, delay) {
      // Prepare variables
      var $this = $(element),
        inner = {
          position: $this.css("position") || "static",
          left: $this.css("left"),
          opacity: 1
        },
        outer = {
          position: "relative",
          left: (isNaN(inner.left) ? 0 : inner.left) + (isAppearing ? 1 : -1) * (offset || $window.width()),
          opacity: 0
        };

      // Make sure a numerical value is provided for the position
      if (isNaN(inner.left)) {
        inner.left = 0;
      }

      // Build transition and get deferred object
      return buildTransition($this, isAppearing ? outer : inner, isAppearing ? inner : outer, isAppearing ? false : true, delay || 0);
    };

    /**
     * Sliding transition
     * @param {boolean} isAppearing Whether the transition is coming in or going out
     * @param {jQuery|HTMLElement} element
     * @param {integer} offset Pixel offset to move
     * @return {jQuery.Deferred[]}
     */
    doTransition.slide = function(isAppearing, element, offset) {
      // Prepare variables
      var transitions = [];
      offset = offset || $window.width();

      // Build transitions for all children
      $(element).show().children().each(function(i) {
        // Build transition using existing "normal" transition
        transitions.push(doTransition.normal(isAppearing, $(this), offset, 100 * i));
      });

      // Get deferred objects
      return transitions;
    };

    /**
     * Fading transition
     * @param {boolean} isAppearing Whether the transition is coming in or going out
     * @param {jQuery|HTMLElement} element
     * @return {jQuery.Deferred[]}
     */
    doTransition.fade = function(isAppearing, element, offset) {
      // Prepare variables
      var transitions = [];

      // Build transitions for all children
      $(element).show().children().each(function(i) {
        // Prepare variables
        var $this = $(this),
          visible = { opacity: 1 },
          invisible = { opacity: 0 };

        // Build transition
        transitions.push(buildTransition($this, isAppearing ? invisible : visible, isAppearing ? visible : invisible, isAppearing ? false : true, 100 * i));
      });

      // Get deferred objects
      return transitions;
    };

    // Ajaxify all links
    $body.ajaxify();

    /**
     * Build the man in the yellow hat
     * @param {jQuery|HTMLElement} element Main element
     * @param {Object} voiceOverData Formatted data for translation into voice-overs
     * @param {string} prefix Prefix for voice-over file names
     * @param {string} suffix Suffix for voice-over file names
     * @return {jQuery}
     */
    var buildMan = function(element, voiceOverData, delay) {
      // Prepare variables
      var man = $(element),
        voiceOvers = {},
        actions = [],
        makeHandler = function(i) {
          return function() {
            man
              .data("idler.delay", voiceOverData[i].length + delay)
              .voiceOver("play", i);
          };
        };

      // Format voiceover data
      for (var i in voiceOverData) {
        if (voiceOverData[i] && "file" in voiceOverData[i]) {
          if (!("length" in voiceOverData[i]) || isNaN(voiceOverData[i].length)) {
            voiceOverData[i].length = 2000;
          }

          voiceOvers[i] = baseUrl + voiceOverData[i].file + audioExt;
          actions.push(makeHandler(i));
        }
      }

      // Build the man in the yellow hat (animation, voice-over, voice-over progression handler, and click handler)
      return man
        .voiceOver({
          startAnim: function() { man.addClass("is-talking") },
          stopAnim: function() { man.removeClass("is-talking") },
          data: voiceOvers
        })
        .idler({ delay: delay, actions: actions })
        .click(function() { stopSounds(); man.idler("next") });
    };

    /**
     * Build a paged list
     * @param {jQuery|HTMLElement} parent Parent element
     * @param {jQuery|HTMLElement} list List element
     * @param {jQuery} man Man in the yellow hat element with $.fn.voiceOver attached
     * @param {boolean} manIsSpeaking Whether the voiceover is coming from the man in the yellow hat
     * @param {integer} smallPerPage List elements per page when window is small
     * @param {integer} largePerPage List elements per page when window is large
     */
    var buildList = function(parent, list, man, manIsSpeaking, smallPerPage, largePerPage) {
      // Convert elements to jQuery objects
      var parent = $(parent),
        list = $(list);

      // Remove Flash games on mobile
      if (isIOS) {
        $("li.is-flash", list).remove();
      }

      // Prepare variables
      var elements = list.clone(true, true).children(),
        isLarge = $window.width() >= 1000,
        update = null;

      // Build updater
      update = function() {
        // Prepare variables
        var perPage = isLarge ? largePerPage : smallPerPage,
          pages = Math.ceil(elements.length / perPage),
          i, j, element;

        // Empty the list
        parent.empty().append(list.empty());

        // Rebuild list
        for (i = 0; i < pages; i++) {
          // Build next page
          element = $("<ul />");
          list.append($("<li class='page'/>").append(element));

          for (j = 0; j < perPage; j++) {
            // Add list item and whitespace
            element
              .append(" ")
              .append(elements.eq(j + i * perPage).clone());
          }
        }

        // Initialize slider
        list
          .attr("style", "")
          .ajaxify();

        parent.bjqs({
          width: list.width(),
          height: list.height(),
          animation: "slide",
          showMarkers: false,
          centerControls: false,
          automatic: false
        });

        // Attach voiceovers to links
        $("a", list).each(function() {
          // Prepare variables
          var $this = $(this),
            audio = $this.data("voiceover") || null,
            title = $this.attr("title"),
            isUnreleased = $this.hasClass("coming-soon");

          // Change audio for unreleased content
          if (isUnreleased) {
            audio = "Sites/CG/Sounds/voice/kids/CG_Game-NavigationButtons_ComingSoon_Boy_1";
          }

          // Add voice-over
          if (audio) {
            if (manIsSpeaking) {
              man.voiceOver("add", title, sound(baseUrl + audio + audioExt));
            } else {
              var voData = {};
              voData[title] = sound(baseUrl + audio + audioExt);

              $this.voiceOver({ data: voData });
            }

            // Activate on rollover
            $this.hoverIntent(function() {
              if (manIsSpeaking) {
                man.voiceOver("play", title);
              } else {
                man.voiceOver("stop");
                stopSounds();
                $this.voiceOver("play", title);
              }

              man.idler("reset");
            }, $.noop);
          }
        });
      };

      // Update when window size changes from large to small
      $window.resize(function() {
        var largeCheck = $window.width() >= 1000;

        if (largeCheck != isLarge) {
          isLarge = largeCheck;
          update();
        }
      });

      // Initial update
      update();

      return list;
    };

    var buildGameSelector = function(isPlayer, perPage, voiceOverData, manIsSpeaking) {
      // Set needsTurning
      needsTurning = true;
      doResizeWatcher();

      // Prepare variables
      var main = $("div.games-container", container),
        list = $(".bjqs", container),
        man = $("#man, .man .sprite", container),
        halfPerPage = Math.ceil(perPage / 2);

      // Make sure a main element is selected
      if (!main.length) main = list.parent();

      // Remove "more" from voiceOverData if needed
      if (list.children().length <= perPage && "more" in voiceOverData) {
        voiceOverData["more"] = null;
      } else if ("less" in voiceOverData) {
        voiceOverData["less"] = null;
      }

      // Remove "extra" from voiceOverData
      if ("extra" in voiceOverData) {
        // Add voice-over to .more-games element
        $(".more-games")
          .voiceOver({
            data: { more: sound(baseUrl + voiceOverData["extra"]["file"] + audioExt) },
            overlapVolume: 0.3,
            isTracked: false
          })
          .hoverIntent(function() { $(this).voiceOver("play", "more") }, $.noop);

        voiceOverData["extra"] = null;
      }

      // Hide nav elements and footer in mobile
      if (isPlayer && isMobile) {
        $("header nav").fadeOut();
        $("header").animate({ height: 8 });
        $("footer").fadeOut();
      }

      $("h1", container).each(function() {
        var $this = $(this),
          voiceOver = $this.data("voiceover");

        if (voiceOver) {
          $this
            .css("cursor", "pointer")
            .voiceOver({
              data: { "voice": sound(baseUrl + voiceOver + audioExt) },
              overlapVolume: 0.3,
              isTracked: false
            })
            .hoverIntent(function() { $this.voiceOver("play", "voice") }, $.noop);
        }
      });

      // Build man
      man = buildMan(man, voiceOverData, 2000);

      // Build list
      list = buildList(main, list, man, manIsSpeaking || false, halfPerPage, isPlayer ? halfPerPage : perPage);

      // Start idler
      if (isPlayer) {
        man.unbind("click").click(function() {
          man.voiceOver("play", "intro");
        });
      } else {
        man.idler("start");
      }
    };

    var interpretVODefinition = function(definition) {
      // Split up mobile version and desktop version
      var vo = definition.split(" ");
      vo = (vo.length > 1) ? (isMobile ? vo[1] : vo[0]) : vo[0];

      // Determine length
      var len = vo.split(":");
      vo = len[0];
      len = (len.length > 1) ? parseInt(len[1]) : 0;

      return { file: vo, length: len };
    };

    // Page handlers
    var doPage = {
      home: function() {
        // Get voice-over data
        var parent = $("#home-navigation .curious > * > div"),
          introVoiceOvers = parent.data("voiceover"),
          hoverVoiceOver = parent.data("hover"),
          voiceOverData = {},
          voiceOvers = {},
          actions = [],
          delay = parent.data("length") || 2000,
          makeHandler = function(i) {
            return function() {
              parent
                .data("idler.delay", voiceOverData[i].length + delay)
                .voiceOver("play", i);
            };
          };

        // Build intro voice-overs
        if (introVoiceOvers) {
          // Convert to array if scalar
          if (!$.isArray(introVoiceOvers)) {
            introVoiceOvers = [introVoiceOvers];
          }

          // Convert array to object
          for (var i = 0; i < introVoiceOvers.length; i++) {
            if (introVoiceOvers[i]) {
              voiceOverData[i] = interpretVODefinition(introVoiceOvers[i]);
              voiceOvers[i] = baseUrl + voiceOverData[i].file + audioExt;
              actions.push(makeHandler(i));
            }
          }

          // Build voice-over and idler
          parent
            .voiceOver({ data: voiceOvers })
            .idler({ delay: delay, actions: actions })
            .idler("start");
        }

        // Build hover voice-over
        if (hoverVoiceOver) {
          var hoverButton = parent.parent();
          hoverButton.voiceOver({
            data: { hover: baseUrl + hoverVoiceOver + audioExt },
            overlapVolume: 0.3,
            isTracked: false
          });
          hoverButton.hoverIntent(function() { hoverButton.voiceOver("play", "hover") }, $.noop);
        }

        // Animated buttons
        var voData = { games: sounds.gamesButton, stories: sounds.storiesButton, create: sounds.createButton },
          voiceOvers = $(".games").voiceOver({ data: voData, overlapVolume: 0.3, isTracked: false }),
          buttons = [
            container.find(".games a"  ).data("voiceover", "games"),
            container.find(".stories a").data("voiceover", "stories"),
            container.find(".create a" ).data("voiceover", "create"),
          ];

        $(buttons).each(function() {
          var $this = $(this),
            voiceOver = $this.data("voiceover");

          $this.hoverIntent(function() { voiceOvers.voiceOver("play", voiceOver) }, $.noop);
        });

        // Content collapsibles
        var activeCollapsible = null;

        container.children("div").children().each(function() {
          // Prepare variables
          var $this = $(this),
            header = $this.children("h1").children("a").first();

          header.content = $this.children("div").first().hide();
          header.isOpen = false;

          // Open content when clicked
          header.click(function(event) {
            // Stop click from bubbling
            event.stopPropagation();
            event.preventDefault();

            // Toggle content
            if (header.isOpen) {
              if (activeCollapsible && activeCollapsible == header) {
                activeCollapsible = null;
              }

              header.removeClass("is-open").content.stop().slideUp();
            } else {
              if (activeCollapsible && activeCollapsible != header) {
                activeCollapsible.removeClass("is-open").content.stop().slideUp();
                activeCollapsible.isOpen = false;
              }

              header.addClass("is-open").content.stop().slideDown(200, function() {
                var windowHeight = $window.height(),
                  windowTop = $body.scrollTop(),
                  elementBottom = $this.position().top + $this.height();

                if ((windowTop + windowHeight) < elementBottom) {
                  $body.animate({ scrollTop: elementBottom - windowHeight });
                }
              });

              activeCollapsible = header;
            }

            header.isOpen = !header.isOpen;

            // Cancel click action
            return false;
          });
        });
      },

      games: function() {
        // Prepare variables
        var prefix = "Sites/CG/Sounds/voice/man/CG-ManInYellowHat_WonderBean_SiteNavigation_",
          isPlayer = $("#more-games", container).length,
          isThemePlayer = isPlayer && $("#themes-play").length;

        if (isPlayer && !$("object", container).length && !Modernizr.canvas) {
          container.empty().html("<div class=error><span class=george></span><h1>Warning: <br> Unsupported Browser</h1><p>You are viewing this page with an outdated or unsupported Web browser. This Web site works best with Microsoft Internet Explorer 9.0 or later.</p><a href='" + rootUrl + "'>Return to Homepage</a></div>");
        } else {
          buildGameSelector(isPlayer, 8, (!isPlayer) ? {
            intro: { file: prefix + "GamesLandingPage_VO_" + (isMobile ? "1_04" : "1_03"), length: 2000 },
            idle:  { file: prefix + "GamesLandingPage_VO_1_14",                            length: 6000 },
            more:  { file: prefix + "GamesLandingPage_VO_" + (isMobile ? "2_01" : "1_19"), length: 2000 }
          } : {
            intro: { file: "Sites/CG/Sounds/voice/man/Site_Nav-M_00" + (isThemePlayer ? "6" : "3"),   length: 4000 },
            more:  { file: prefix + "GamesPlayingPage_VO_1_05",                            length: 2000 },
            extra: { file: "Sites/CG/Sounds/voice/kids/Gen-Nav-C_016" }
          }, false);
        }
      },

      stories: function() {
        // Prepare variables
        var prefix = "Sites/CG/Sounds/voice/man/CG-ManInYellowHat_WonderBean_SiteNavigation_",
          isPlayer = $("#more-games", container).length,
          isThemePlayer = isPlayer && $("#themes-play").length;

        buildGameSelector(isPlayer, 8, (!isPlayer) ? {
          intro: { file: prefix + "StoriesLandingPage_VO_1_08",                            length: 2000 },
          idle:  { file: prefix + "GamesLandingPage_VO_1_14",                              length: 6000 },
          more:  { file: prefix + "StoriesLandingPage_VO_" + (isMobile ? "1_11" : "1_10"), length: 2000 }
        } : {
          intro: { file: "Sites/CG/Sounds/voice/man/Site_Nav-M_00" + (isThemePlayer ? "6" : "4"),     length: 3000 },
          less:  { file: prefix + "StoriesPlayingPage_VO_1_14-noNav",                      length: 7000 },
          extra: { file: "Sites/CG/Sounds/voice/kids/Gen-Nav-C_017" }
        }, false);
      },

      create: function() {
        // Prepare variables
        var prefix = "Sites/CG/Sounds/voice/man/CG-ManInYellowHat_WonderBean_SiteNavigation_",
          isPlayer = $("#more-games", container).length,
          isThemePlayer = isPlayer && $("#themes-play").length;

        if (isPlayer && !$("object", container).length && !Modernizr.canvas) {
          container.empty().html("<div class=error><span class=george></span><h1>Warning: <br> Unsupported Browser</h1><p>You are viewing this page with an outdated or unsupported Web browser. This Web site works best with Microsoft Internet Explorer 9.0 or later.</p><a href='" + rootUrl + "'>Return to Homepage</a></div>");
        } else {
          buildGameSelector(isPlayer, 8, (!isPlayer) ? {
            intro: { file: prefix + "CreateLandingPage_VO_1_15",                            length: 4000 },
            idle:  { file: prefix + "GamesLandingPage_VO_1_14",                             length: 6000 },
            more:  { file: prefix + "CreateLandingPage_VO_" + (isMobile ? "2_02" : "2_01"), length: 3000 }
          } : {
            intro: { file: "Sites/CG/Sounds/voice/man/Site_Nav-M_00" + (isThemePlayer ? "6" : "5"),    length: 3000 },
            less:  { file: prefix + "CreatePlayingPage_VO_1_05-noNav",                      length: 7000 },
            extra: { file: "Sites/CG/Sounds/voice/kids/Gen-Nav-C_018" }
          }, false);
        }
      },

      themes: function(page) {
        // Prepare variables
        var prefix = "Sites/CG/Sounds/voice/man/CG-ManInYellowHat_WonderBean_SiteNavigation_",
          isPlayer = $("#more-games", container).length,
          man = $("#man, .man .sprite", container),
          button = $(".more-theme"),
          themeElements = $(".theme-elements");

        buildGameSelector(isPlayer, $("#themes").length ? 8 : 6, isPlayer ? {
          intro: { file: "Sites/CG/Sounds/voice/man/Site_Nav-M_00" + (isMobile ? "7" : "6"), length: 4000 }
        } : themeElements.length ? {
          intro: man.data("no-intro") ? null : { file: prefix + "CuriousAbout_AllThemesPage_VO_1_03", length: 2000 },
          idle:  { file: man.data("voiceover") || null,                 length: man.data("length") || 0 },
          more:  { file: prefix + "GamesLandingPage_VO_1_14",           length: 6000 }
        } : {
          intro: { file: prefix + "CuriousAbout_ThemeLandingPage_VO_" + (isMobile ? "1_12" : "1_09"), length: (isMobile ? 2000 : 4000) },
          idle:  { file: prefix + "GamesLandingPage_VO_1_14",                                         length: 6000 },
          more:  { file: prefix + "CuriousAbout_ThemeLandingPage_VO_" + (isMobile ? "1_15" : "1_14"), length: 2000 }
        }, false);

        // Build hover voice-over for theme button
        if (button.length) {
          vo = button.data("voiceover");

          if (vo) {
            button
              .voiceOver({ data: { more: baseUrl + vo + audioExt } })
              .hoverIntent(function() { button.voiceOver("play", "more") }, $.noop);
          }
        }
      }
    };

    /**
     * Run the appropriate doPage page handler function
     */
    function runPage() {
      switch (urlSegments[0]) {
				case "kids-games": urlSegments[0] = "games"; break;
				case "kids-stories-books": urlSegments[0] = "stories"; break;
				case "kids-activities": urlSegments[0] = "create"; break;
			}

      // Normalize "home" definition
      if (urlSegments[0] == "home" || urlSegments[0] == "index" || urlSegments[0] == "index.html" || urlSegments[0].match(/^index-/g)) {
        urlSegments[0] = "";
      }

      if (!urlSegments[0]) {
        doPage.home.apply(undefined, urlSegments);
      } else if (urlSegments[0] in doPage) {
        doPage[urlSegments[0]].apply(undefined, urlSegments);
      }

      // Set up modals
      $("a[data-target]").on("click", function(event) {
        $($(this).data("target")).modal();
        event.preventDefault();
        return false;
      });

      // Set up collapsibles
      $(".collapser").each(function() {
        var $this = $(this),
          child = $this.siblings(".collapsed").first(),
          isOpen = false;

        if (child) {
          child.hide();

          $this.click(function(event) {
            if (isOpen) {
              $this.removeClass("is-open");
              child.stop().slideUp();
            } else {
              $this.addClass("is-open");
              child.stop().slideDown();
            }

            isOpen = !isOpen;
            event.preventDefault();
            return false;
          });
        }
      });
    };

    // Process state queue
    var processStateQueue = function() {
      if (isTransitioning) return false;
      isTransitioning = true;

      // Reset needsTurning
      needsTurning = false;

      // Stop all sounds
      stopSounds();

      // Prepare variables
      var State = stateQueue.pop(),
        url = State.url,
        relativeUrl = url.replace(baseUrl, ""),
        nextUrlSegments = relativeUrl.split("?")[0].split("/"),
        currentHeight = container.height(),
        autoHeight = currentHeight,
        transitions = [],
        content = null,
        scripts = null;

      // Transition navigation and logo if leaving/entering home page
      if (!urlSegments[0] && nextUrlSegments[0]) {
        /*callToAction.css("position", "relative").animate({ top: -callToAction.height() }, function() {
          callToAction.hide();
          navigation.show().css({ position: "relative", top: -navigation.height() }).animate({ top: 0 }, function() {
            navigation.css("position", "static");
          });
        });*/

        if (!logo.hasClass("with-george")) {
          logo.fadeOut(200, function() {
            logo.addClass("with-george").fadeIn();
          });
        }
      } else if (urlSegments[0] && !nextUrlSegments[0]) {
        /*navigation.css("position", "relative").animate({ top: -navigation.height() }, function() {
          navigation.hide();
          callToAction.show().css({ position: "relative", top: -callToAction.height() }).animate({ top: 0 }, function() {
            callToAction.css("position", "static");
          });
        });*/

        if (logo.hasClass("with-george")) {
          logo.fadeOut(200, function() {
            logo.removeClass("with-george").fadeIn();
          });
        }
      }

      // Transition out
      container
        .height(currentHeight) // Save height to avoid popping
        .children().each(function() {
          // Prepare variables
          var $this = $(this),
            transitionType = $this.data("transition") || defaultTransitionType;

          // Perform transition
          var nextTransition = doTransition[transitionType](false, $(this));

          if ($.isArray(nextTransition)) {
            transitions = transitions.concat(nextTransition);
          } else {
            transitions.push(nextTransition);
          }
        });

      // Start loading animation
      loading.filmstrip("start").fadeIn();

      // Load request
      $.when.apply($, transitions.concat([$.ajax({
        url: url, //$.updateQueryString(url, "content-only", "true"),
        success: function(data) {
          var $data = $(data);

          scripts = $data.filter("script");
          content = $data.find("#content");
        },
        error: function() { document.location.href = url }
      })])).done(function() {
        // Clear transitions
        transitions = [];

        // Remove old content
        container.empty();

        // Change page
        urlSegments = nextUrlSegments;
        $body[0].className = relativeUrl.replace(/[?#].+/, "").replace("/", "-");

        // Add new content
        var mainIsFound = false,
          fullContent = "";

        scripts.each(function(i) {
          if (mainIsFound && this.src) $.getScript(this.src);
          else if (mainIsFound) fullContent += this.outerHTML;
          else if (this.src && this.src.match(/main\.js$/)) mainIsFound = true;
        });
        console.log(fullContent);
        container.html(fullContent + content.html()).ajaxify();
        runPage();

        // Get the new height of the container
        container.height("auto");
        autoHeight = container.height();
        container.height(currentHeight);
        container.children().hide();

        // Animate container to new height
        container.animate({ height: autoHeight }, function() {
          // Transition in new content
          container.children().each(function() {
            // Prepare variables
            var $this = $(this),
              transitionType = $this.data("transition") || defaultTransitionType;

            // Perform transition
            var nextTransition = doTransition[transitionType](true, $this);

            if ($.isArray(nextTransition)) {
              transitions = transitions.concat(nextTransition);
            } else {
              transitions.push(nextTransition);
            }
          });

          // Clear loader
          loading.filmstrip("stop").fadeOut();

          // Finish transitions
          $.when.apply($, transitions).done(function() {
            // Clear height value
            container.height("auto");

            // Change transitioning flag
            isTransitioning = false;

            // Continue processing queue
            if (stateQueue.length) {
              return processStateQueue();
            }
          });
        });
      }).fail(function() {
        // Failsafe
        document.location.href = url;
      });
    };

    // Hook into state change
    $window.bind("statechange", function() {
      // Queue next state
      stateQueue.push(History.getState());

      // Process queue
      processStateQueue();
    });

    // Run current page
    runPage();

    // Show call-to-action if on the home page
    /*if (!urlSegments[0]) {
      callToAction.show();
      navigation.hide();
    } else {
      logo.addClass("with-george");
    }*/
    navigation.show();
    // Check if the device needs to be turned
    if (needsTurning) {
      doResizeWatcher();
    }

    // Set up navigation hovers
    var navVoiceOvers = navigation.voiceOver({
      data: { games: sounds.gamesButton, stories: sounds.storiesButton, create: sounds.createButton, curious: sounds.curiousButton },
      overlapVolume: 0.3,
      isTracked: false
    });

    navigation.find("a").each(function() {
      // Prepare variables
      var $this = $(this),
        interval = 200,
        max = 5,
        voiceOver = $this.attr("class").replace("nav-", "");

      // Build events
      $this.hover(
        function() { $this.stop().animate({ top: -6 }, ((0 - (parseInt($this.css("top")) + 6 || 0)) / 5) * interval) },
        function() { $this.stop().animate({ top: -11 }, ((5 - (parseInt($this.css("top")) + 6 || 0)) / 5) * interval) }
      ).hoverIntent(function() { navVoiceOvers.voiceOver("play", voiceOver) }, $.noop);
    });

    // Add voiceover to all "I like this" buttons
    $("#game .share a").live("mouseenter", function() { soundManager.play(sounds.likeButton) });

    // Disable click on all "Coming Soon" buttons
    $("a.coming-soon").live("click", function(e) { e.preventDefault(); return false });

    // Mute button
    if (!isMobile) {
      $("#mute").click(function() {
        soundManager.muted ? soundManager.unmute() : soundManager.mute();
        $(this).toggleClass("muted", soundManager.muted).text(soundManager.muted ? "Muted" : "Mute");
        if (sessionStorage) sessionStorage.setItem("muted", soundManager.muted);
      });
    } else {
      $("#mute").hide();
    }
  });
}(jQuery));
