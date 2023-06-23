/*! Main JS file for Curious George space theme test */

// Replace setInterval
window.originalSetInterval = window.setInterval;
window.setInterval = function(f, d) { var i = window.originalSetInterval(f, d); window.setInterval.intervals.push(i); return i };
window.clearAllIntervals = function() { var i; while (i = window.setInterval.intervals.pop()) window.clearInterval(i) };
window.setInterval.intervals = [];

;(function($) {
	// Prepare variables
	var History = window.History,
		document = window.document,
		$window = $(window),
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
	$.fn.ajaxify = function() {
		return this.each(function() {
			// Prepare variables
			var $this = $(this);
			
			$this.find("a:internal:not(.no-ajax)").click(function(event) {
				// Prepare variables
				var $this = $(this),
					url = $this.attr("href"),
					title = $this.data("title") || $this.attr("title") || null;
				
				if (url != "#") {
					// Avoid AJAX if the click is a Ctrl+Click
					if (event.which == 2 || event.metaKey) return true;
					
					// Only recognize state change if no transitions are occurring
					//else if (isTransitioning) return false;
					
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
					$(this).hide();
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
				next.fadeIn(settings.speed, function() {
					setTimeout($this.fadeSwapAnimate, settings.delay);
				});
				
				// Fade out old element
				setTimeout(function() {
					last.fadeOut(settings.speed, function() {
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
					settings = $.extend({ step: 100, steps: 10, speed: 83, x: 0, y: 0 }, options),
					currentFrame = 0,
					interval = function() {
						if (++currentFrame >= settings.steps) currentFrame = 0;
						$this[0].style.backgroundPosition = settings.x + "px " + (settings.y - currentFrame * settings.step) + "px";
						$this.data("currentFrame", currentFrame);
					};
				
				// Attach variables to object
				$(this)
					.data("interval", null)
					.data("func", interval)
					.data("settings", settings)
					.data("currentFrame", 0);
			});
		},
		
		start: function() {
			// Prepare variables
			var $this = $(this),
				settings = $this.data("settings"),
				interval = $this.data("interval");
			
			// Clear interval if exists
			if (interval) clearInterval(interval);
			
			// Build interval
			$this.data("interval", setInterval($this.data("func"), settings.speed));
			
			return this;
		},
		
		stop: function() {
			// Prepare variables
			var $this = $(this),
				interval = $this.data("interval");
			
			// Clear interval if exists
			if (interval) clearInterval(interval);
			
			// Nullify interval value
			$this.data("interval", null);
			
			return this;
		},
		
		next: function() {
			var func = $(this).data("func");
			
			// Run function
			if (func) {
				$(this).data("func")();
			} else {
				console.log(this, "'func' does not exist");
			}
			
			return this;
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
			page = /^[a-z]+/i.exec(History.getState().url.replace(baseUrl, "")) || "home",
			defaultTransitionType = "normal",
			loading = $("<div id=loading />"),
			stateQueue = [],
			sounds = {
				popIn: new Audio(baseUrl + "snds/pop-in.wav"),
				popOut: new Audio(baseUrl + "snds/pop-out.wav"),
				slideIn: new Audio(baseUrl + "snds/slide-in.wav"),
				slideOut: new Audio(baseUrl + "snds/slide-out.wav")
			};
		
		// Build loading
		loading.css({ width: 288, height: 273 }).filmstrip({ step: 273, steps: 8 }).appendTo($body);
		
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
		//$body.ajaxify();
		
		// Page handlers
		var doPage = {
			home: function() {
				// Space
				container.find(".curious .george").each(function() {
					var $this = $(this),
						children = $this.children("div"),
						first = children.eq(0),
						second = children.eq(1).hide(),
						isFirst = false;
					
					first.filmstrip({ step: 546, steps: 25, x: -25, y: -22, speed: 83 * 2 }).filmstrip("start");
					//first.filmstrip("next");
					//second.filmstrip("next").filmstrip("next");
					
					$this
						.weightless({ range: 16, delay: 2000, speed: 2000 })
						/*.fadeSwap({
							delay: 20,
							afterSwap: function() {
								if (isFirst) {
									second.filmstrip("next").filmstrip("next");
								} else {
									first.filmstrip("next").filmstrip("next");
								}
								
								isFirst = !isFirst;
							}
						}); */
				});
				
				container.find(".rocket").fadeSwap();
				
				container.find(".twinkles").twinkle({
					elements: 6,
					positions: [[18,374],[95,237],[189,215],[217,84],[274,166],[289,370],[348,284],[410,178],[468,396],[606,49],[615,251],[740,320],[775,33],[841,97],[843,404],[875,47],[876,204]]
				});
				
				// Animated buttons
				var buttons = [
					container.find(".games a"  ).data("filmstrip", { step: 200, steps: 8  }),
					container.find(".stories a").data("filmstrip", { step: 191, steps: 21 }),
					container.find(".create a" ).data("filmstrip", { step: 196, steps: 21 })
				];
				
				$(buttons).each(function() {
					var $this = $(this);
					$this
						.filmstrip($this.data("filmstrip"))
						.hover(
							function() { $this.filmstrip("start") },
							function() { $this.filmstrip("stop")  }
						);
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
							sounds.slideOut.currentTime = 0;
							//sounds.slideOut.play();
						} else {
							if (activeCollapsible && activeCollapsible != header) {
								activeCollapsible.removeClass("is-open").content.stop().slideUp();
								activeCollapsible.isOpen = false;
							}
							
							header.addClass("is-open").content.stop().slideDown();
							activeCollapsible = header;
							sounds.slideIn.currentTime = 0;
							//sounds.slideIn.play();
						}
						
						header.isOpen = !header.isOpen;
						
						// Cancel click action
						return false;
					});
				});
			},
			
			games: function() {
				$("div.games-container", container).each(function() {
					// Prepare variables
					var $this = $(this),
						list = $this.children(".bjqs"),
						elements = list.clone().children(),
						isMini = $this.hasClass("mini"),
						isLarge = $window.width() >= 1000,
						
						// Update layout
						update = function() {console.log("update");
							// Prepare variables
							var perPage = isMini || !isLarge ? 4 : 8,
								pages = Math.ceil(elements.length / perPage),
								i, j, element;
							
							// Empty the list
							$this.empty().append(list.empty());
							
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
								//.ajaxify();
							
							$this.bjqs({
								width: list.width(),
								height: list.height(),
								animation: 'slide',
								showMarkers: false,
								centerControls: false,
								automatic: false
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
				});
			},
			
			theme: function() {console.log("hi");
				$("ul.bjqs", container).each(function() {
					// Prepare variables
					var $this = $(this),
						parent = $this.parent(),
						elements = $this.clone().children(),
						isLarge = $window.width() >= 1000,
						
						// Update layout
						update = function() {console.log("update");
							// Prepare variables
							var perPage = $body.hasClass("themes") ? 8 : 6,
								pages = Math.ceil(elements.length / perPage),
								i, j, element;
							
							if (!isLarge) perPage /= 2;
							
							// Empty the list
							parent.empty().append($this.empty());
							
							// Rebuild list
							for (i = 0; i < pages; i++) {
								// Build next page
								element = $("<ul />");
								$this.append($("<li class='page'/>").append(element));
								
								for (j = 0; j < perPage; j++) {
									// Add list item and whitespace
									element
										.append(" ")
										.append(elements.eq(j + i * perPage).clone());
								}
							}
							
							// Initialize slider
							$this
								.attr("style", "")
								//.ajaxify();
							
							parent.bjqs({
								width: $this.width(),
								height: $this.height(),
								animation: 'slide',
								showMarkers: false,
								centerControls: false,
								automatic: false
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
				});
			}
		};
		
		doPage.create = doPage.games;
		doPage.stories = doPage.games;
		doPage.themes = doPage.games;
		
		/**
		 * Run the appropriate doPage page handler function
		 */
		function runPage() {
			if (page == "index") page = "home";
			if (page in doPage) doPage[page]();
			
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
			
			// Prepare variables
			var State = stateQueue.pop(),
				url = State.url,
				relativeUrl = url.replace(baseUrl, ""),
				nextPage = /^[a-z]+/i.exec(relativeUrl),
				currentHeight = container.height(),
				autoHeight = currentHeight,
				transitions = [],
				content = null;
			
			// Make sure a page is set
			if (!nextPage) {
				nextPage = "home";
				relativeUrl = "home" + relativeUrl;
				url += "home";
			}
			
			// Transition navigation and logo if leaving/entering home page
			if (page == "home" && nextPage != "home") {
				callToAction.css("position", "relative").animate({ top: -callToAction.height() }, function() {
					callToAction.hide();
					navigation.show().css({ position: "relative", top: -navigation.height() }).animate({ top: 0 }, function() {
						navigation.css("position", "static");
					});
				});
				
				if (!logo.hasClass("with-george")) {
					logo.fadeOut(200, function() {
						logo.addClass("with-george").fadeIn();
					});
				}
			} else if (page != "home" && nextPage == "home") {
				navigation.css("position", "relative").animate({ top: -navigation.height() }, function() {
					navigation.hide();
					callToAction.show().css({ position: "relative", top: -callToAction.height() }).animate({ top: 0 }, function() {
						callToAction.css("position", "static");
					});
				});
				
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
					sounds.slideOut.currentTime = 0;
					//sounds.slideOut.play();
					
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
				url: $.updateQueryString(url, "content-only", "true"),
				success: function(data) { content = $(data) },
				error: function() { document.location.href = url }
			})])).done(function() {
				// Clear transitions
				transitions = [];
				
				// Remove old content
				container.empty();
				
				// Change page
				page = nextPage;
				$body[0].className = relativeUrl.replace(/[?#].+/, "").replace("/", "-");
				
				// Add new content
				container.append(content).ajaxify();
				//$head.find("link[data-dynamic]").remove();
				//container.find("link").appendTo($head);
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
						sounds.slideIn.currentTime = 0;
						//sounds.slideIn.play();
						
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
		if (page == "home") {
			callToAction.show();
			navigation.hide();
		} else {
			logo.addClass("with-george");
		}
		
		// Set up navigation hovers
		navigation.find("a").each(function() {
			var $this = $(this),
				interval = 200,
				max = 5;
			
			$this
				.hover(function() {
					$this.stop().animate({ top: 0 }, ((0 - (parseInt($this.css("top")) || 0)) / 5) * interval);
				}, function() {
					$this.stop().animate({ top: -5 }, ((5 - (parseInt($this.css("top")) || 0)) / 5) * interval);
				})
				//.mousedown(function() { /*sounds.popOut.pause();*/ sounds.popIn.currentTime = 0;  sounds.popIn.play()  })
				//.mouseup(function()   { /*sounds.popIn.pause();*/  sounds.popOut.currentTime = 0; sounds.popOut.play() });
		});
	});
}(jQuery));
