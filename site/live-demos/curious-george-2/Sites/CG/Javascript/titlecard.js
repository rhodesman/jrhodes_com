/*! titlecard.js v1.0.4 */
;(function($) {
  "use strict";
  
  // Prepare variables
  var isMobile = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/),
    audioExt = Modernizr.audio.mp3 ? '.mp3' : '.wav',
    baseUrl = window.History.getBaseHref();
  
  // Set background position for sprites
  $.fn.bgPos = function(x, y) {
    return this.each(function() {
      var $this = $(this),
        pos = $this.css("background-position").split(" ");
      
      $this.css("background-position", (x === null ? pos[0] : x) + " " + (y === null ? pos[1] : y));
    });
  };
  
  // Build the titlecard
  $.fn.titleCard = function() {
    // Prepare variables
    var $this = $(this),
      items = $this.children();
    
    // Process the items
    $this.data("items", items.each(function() {
      // Prepare variables
      var item = $(this),
        settings = item.data();
      
      // Fix delays to allow truthy values
      if (settings.delay == 0) {
        settings.delay = 1;
      }
      
      // Initialize animating status
      item.data("isAnimating", false);
      
      // Process mouseover
      if (settings.mouseover) {
        $.fn.titleCard.methods.mouseover(item);
      }
      
      // Process voiceover (options: voiceover, voiceover-trigger)
      if (settings.voiceover) {
        $.fn.titleCard.methods.voiceover(item, settings.voiceover, settings.voiceoverTrigger);
      }
      
      // Process animation
      if (settings.animation) {
        switch (settings.animation) {
          case "filmstrip": $.fn.titleCard.methods.filmstrip(item, settings.frames, settings.customEvent, settings.speed, settings.delay); break;
          case "constant": $.fn.titleCard.methods.constant(item, settings.frames, settings.speed, settings.delay); break;
          case "fadeswap": $.fn.titleCard.methods.fadeswap(item, settings.frames, settings.speed, settings.delay); break;
        }
      }
      
      // Process trigger
      if (settings.trigger) {
        item.click(function() { items.trigger(settings.trigger, [item]) });
      }
    }));
    
    return $this;
  };
  
  $.fn.titleCard.methods = {
    // Add mouseover functionality
    mouseover: function(item) {
      return item
        .css("cursor", "pointer")
        .bgPos("0px", null)
        .hover(
          function() { item.bgPos(-item.width() + "px", null) },
          function() { item.bgPos("0px", null) }
        );
    },
    
    // Add voiceover functionality
    voiceover: function(item, voiceover, trigger) {
      // Prepare variables
      var trigger = trigger || "click";
      
      // Make item clickable if voiceover is onClick
      if (trigger == "click") item.css("cursor", "pointer");
      
      // Build voiceover
      return item.voiceOver({
        data: { noise: baseUrl + voiceover + audioExt },
        startAnim: function() { item.addClass("active") },
        stopAnim: function() { item.removeClass("active") },
        overlapVolume: 1,
        isTracked: false
      }).on(trigger, function() {
        if (!item.data("isAnimating")) {
          item.voiceOver("stop");
          item.voiceOver("play", "noise");
        }
      });
    },
    
    // Add filmstrip animation functionality
    filmstrip: function(item, frames, trigger, speed, delay) {
      // Prepare variables
      var frame = 0,
        height = 0,
        width = item.width(),
        frames = frames || 1,
        speed = speed || 83, // 12 frames per second
        delay = delay || 800,
        trigger = trigger || "click";
      
      // Make item clickable if animation is onClick
      if (trigger == "click") item.css("cursor", "pointer");
      
      item.on(trigger, function() {
        // Prevent overlap
        if (item.data("isAnimating")) return;
        
        // Prepare variables
        item.trigger("animationStart").data("isAnimating", true);
        height = item.height();
        width = item.width();
        frame = 0;
        
        // Animate
        var interval = setInterval(function() {
          if (frame >= frames) {
            clearInterval(interval);
            item.trigger("animationDelayStart");
            
            setTimeout(function() { // Build delay between animation
              item.trigger("animationDelayFinish");
              
              interval = setInterval(function() { // Build animation
                if (frame <= 0) {
                  clearInterval(interval);
                  item.trigger("animationFinish").data("isAnimating", false);
                } else {
                  item.bgPos(null, (--frame * -height) + "px");
                }
              }, speed);
            }, delay);
          } else {
            item.bgPos(null, (frame++ * -height) + "px");
          }
        }, speed);
      });
    },
    
    // Add constant animation functionality
    constant: function(item, frames, speed, delay) {
      // Prepare variables
      var frames = frames || 1,
        height = item.height(),
        speed = speed || 83, // 12 frames per second
        delay = delay || 800,
        frame = 0;
      
      var interval = setInterval(function() {
        if (frame >= frames) frame = 0;
        item.bgPos(null, (frame++ * -height) + "px");
      }, speed);
      
      // Resize the frames if the item changes size
      $(window).resize(function() {
        var newHeight = item.height();
        if (newHeight != height) height = newHeight;
      });
    },
    
    // Add fadeswap animation functionality
    fadeswap: function(item, frames, speed, delay) {
      // Prepare variables
      var frames = frames || 1,
        height = item.height(),
        speed = speed || 83, // 12 frames per second
        delay = delay || 0,
        itemFrames = [];
      
      // Empty item of any frames
      item.empty();
      
      // Build frames
      for (var i = 0; i < frames; i++) {
        itemFrames.push($("<div/>").appendTo(item).bgPos(null, (height * -i) + "px"));
      }
      
      // Build fadeswap
      item.fadeSwap({ speed: speed, delay: delay });
      
      // Resize the frames if the item changes size
      $(window).resize(function() {
        var newHeight = item.height();
        
        if (newHeight != height) {console.log("changed");
          height = newHeight;
          $.each(itemFrames, function(index) {console.log(this);
            $(this).bgPos(null, (height * -index) + "px");
          });
        }
      });
    }
  };
  
  $(function() { $("#titlecard").titleCard() });
}(jQuery));