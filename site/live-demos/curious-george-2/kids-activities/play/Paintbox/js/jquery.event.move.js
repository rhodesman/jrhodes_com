(function(jQuery,undefined){var threshold=6,add=jQuery.event.add,remove=jQuery.event.remove,trigger=function(node,type,data){jQuery.event.trigger(type,data,node);},requestFrame=(function(){return(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(fn,element){return window.setTimeout(function(){fn();},25);});})(),ignoreTags={textarea:true,input:true,select:true},mouseevents={move:'mousemove',cancel:'mouseup dragstart',end:'mouseup'},touchevents={move:'touchmove',cancel:'touchend',end:'touchend'};function Timer(fn){var callback=fn,active=false,running=false;function trigger(time){if(active){callback();requestFrame(trigger);running=true;active=false;}
else{running=false;}}
this.kick=function(fn){active=true;if(!running){trigger();}};this.end=function(fn){var cb=callback;if(!fn){return;}
if(!running){fn();}
else{callback=active?function(){cb();fn();}:fn;active=true;}};}
function returnFalse(e){return false;}
function preventDefault(e){e.preventDefault();}
function preventIgnoreTags(e){if(ignoreTags[e.target.tagName.toLowerCase()]){return;}
e.preventDefault();}
function isLeftButton(e){return(e.which===1&&!e.ctrlKey&&!e.altKey);}
function identifiedTouch(touchList,id){var i,l;if(touchList.identifiedTouch){return touchList.identifiedTouch(id);}
i=-1;l=touchList.length;while(++i<l){if(touchList[i].identifier===id){return touchList[i];}}}
function changedTouch(e,event){var touch=identifiedTouch(e.changedTouches,event.identifier);if(!touch){return;}
if(touch.pageX===event.pageX&&touch.pageY===event.pageY){return;}
return touch;}
function mousedown(e){var data;if(!isLeftButton(e)){return;}
data={target:e.target,startX:e.pageX,startY:e.pageY,pageX:e.pageX,pageY:e.pageY,timeStamp:e.timeStamp};add(document,mouseevents.move,mousemove,data);add(document,mouseevents.cancel,mouseend,data);}
function mousemove(e){var data=e.data;checkThreshold(e,data,e,removeMouse);}
function mouseend(e){removeMouse();}
function removeMouse(){remove(document,mouseevents.move,mousemove);remove(document,mouseevents.cancel,removeMouse);}
function touchstart(e){var touch,data;if(ignoreTags[e.target.tagName.toLowerCase()]){return;}
touch=e.changedTouches[0];data={target:touch.target,startX:touch.pageX,startY:touch.pageY,pageX:touch.pageX,pageY:touch.pageY,timeStamp:e.timeStamp,identifier:touch.identifier};add(document,touchevents.move+'.'+ touch.identifier,touchmove,data);add(document,touchevents.cancel+'.'+ touch.identifier,touchend,data);}
function touchmove(e){var data=e.data,touch=changedTouch(e,data);if(!touch){return;}
checkThreshold(e,data,touch,removeTouch);}
function touchend(e){var data=e.data,touch=identifiedTouch(e.changedTouches,data.identifier);if(!touch){return;}
removeTouch(data);}
function removeTouch(touchstart){remove(document,'.'+ touchstart.identifier,touchmove);remove(document,'.'+ touchstart.identifier,touchend);}
function checkThreshold(e,data,touch,fn){var distX=touch.pageX- data.startX,distY=touch.pageY- data.startY;if((distX*distX)+(distY*distY)<(threshold*threshold)){return;}
return triggerStart(e,data,touch,distX,distY,fn);}
function triggerStart(e,data,touch,distX,distY,fn){var node=data.target,events,touches,time;while(node!==document.documentElement){events=jQuery.data(node,'events');if(events&&(events.movestart||events.move||events.moveend)){touches=e.targetTouches;time=e.timeStamp- data.timeStamp;data.type='movestart';data.distX=distX;data.distY=distY;data.deltaX=distX;data.deltaY=distY;data.pageX=touch.pageX;data.pageY=touch.pageY;data.velocityX=distX/time;data.velocityY=distY/time;data.targetTouches=touches;data.finger=touches?touches.length:1;trigger(data.target,data,[data,e]);return fn(data);}
node=node.parentNode;}}
function activeMousemove(e){var event=e.data.event,timer=e.data.timer;updateEvent(event,e,e.timeStamp,timer);}
function activeMouseend(e){var event=e.data.event,timer=e.data.timer;removeActiveMouse();endEvent(event,timer,function(){setTimeout(function(){remove(event.target,'click',returnFalse);},0);});}
function removeActiveMouse(event){remove(document,mouseevents.move,activeMousemove);remove(document,mouseevents.end,activeMouseend);}
function activeTouchmove(e){var event=e.data.event,timer=e.data.timer,touch=changedTouch(e,event);if(!touch){return;}
e.preventDefault();event.targetTouches=e.targetTouches;updateEvent(event,touch,e.timeStamp,timer);}
function activeTouchend(e){var event=e.data.event,timer=e.data.timer,touch=identifiedTouch(e.changedTouches,event.identifier);if(!touch){return;}
removeActiveTouch(event);endEvent(event,timer);}
function removeActiveTouch(event){remove(document,'.'+ event.identifier,activeTouchmove);remove(document,'.'+ event.identifier,activeTouchend);}
function updateEvent(event,touch,timeStamp,timer){var time=timeStamp- event.timeStamp;event.type='move';event.distX=touch.pageX- event.startX;event.distY=touch.pageY- event.startY;event.deltaX=touch.pageX- event.pageX;event.deltaY=touch.pageY- event.pageY;event.velocityX=0.3*event.velocityX+ 0.7*event.deltaX/time;event.velocityY=0.3*event.velocityY+ 0.7*event.deltaY/time;event.pageX=touch.pageX;event.pageY=touch.pageY;timer.kick();}
function endEvent(event,timer,fn){timer.end(function(){event.type='moveend';trigger(event.target,event);return fn&&fn();});}
function isSetup(events){return((events.movestart?1:0)+
(events.move?1:0)+
(events.moveend?1:0))>1;}
function setup(data,namespaces,eventHandle){var events=jQuery.data(this,'events');if(isSetup(events)){return;}
add(this,'dragstart.move drag.move',preventDefault);add(this,'mousedown.move',preventIgnoreTags);return true;}
function teardown(namespaces){var events=jQuery.data(this,'events');if(isSetup(events)){return;}
remove(this,'dragstart drag',preventDefault);remove(this,'mousedown touchstart',preventIgnoreTags);return true;}
jQuery.event.special.movestart={setup:setup,teardown:teardown,_default:function(e,event,touchmove){var data={event:event,timer:new Timer(function(time){trigger(e.target,event);})};if(event.identifier===undefined){add(event.target,'click',returnFalse);add(document,mouseevents.move,activeMousemove,data);add(document,mouseevents.end,activeMouseend,data);}
else{touchmove.preventDefault();add(document,touchevents.move+'.'+ event.identifier,activeTouchmove,data);add(document,touchevents.end+'.'+ event.identifier,activeTouchend,data);}}};jQuery.event.special.move=jQuery.event.special.moveend={setup:setup,teardown:teardown};add(document,'mousedown.move',mousedown);add(document,'touchstart.move',touchstart);})(jQuery);(function(jQuery,undefined){var props=["changedTouches","targetTouches"],l=props.length;while(l--){if(jQuery.event.props.indexOf(props[l])===-1){jQuery.event.props.push(props[l]);}}})(jQuery);