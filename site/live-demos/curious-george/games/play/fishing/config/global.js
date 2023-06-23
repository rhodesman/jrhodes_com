var winSize = null;
var keys = [];
var global = {
    newGame:true,
    autoplay:null,
    locale:'en-us',
    level:1,
    //sound:false,
    maxCaughtFish:10,
    autoCatchFish:0,
    minFishToSort:5,
    fishContainer:[],
    fishesCaught:[],
    scenes:{},
    layers:{},
    sunUpdateRate:20,
    roundTimeout:120,
    roundTimeleft: null,
    useFishingDebugCanvasOverlay:false,
    useSortingDebugCanvasOverlay:false,
    fishSpriteDirection:{
      types:['linearAcc', 'bodyAngle'],
      follow:'bodyAngle'
    },
    sortTypes:[
      {
        attribute:'Color',
        values:['Red', 'Yellow', 'Blue']
      },
      {
        attribute:'Size',
        values:['Small', 'Medium', 'Large']
      },
      {
        attribute:'Shape',
        values:['Fit', 'Fat', 'Flat'] //bass flounder trout    - fit - fat - flat
      }
    ],
    varyColorAndShape:[3,4,5,7,8,9,11,12,13],
    varySize:{
      Fat : [0,3,4,5,6],
      Flat : [2,11,12,13,14],
      Fit : [1,7,8,9,10],
      types: ['Fat', 'Flat', 'Fit']
    },
    cloudSpeed:60,
    roundNumber:0,
    fishRecoveryPerSecond:0.5, //int
    fishMinStamina:0.3, //%%
    fishLossPerReel:0.5, //int
    fishStaminaAtBite:0.5, //%%
    fishStaminaAtFirstFishBite: 0.5 //%%
};

//debug code~
function getUrlVars(){
  var vars = [], hash;
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for(var i = 0; i < hashes.length; i++)
  {
    hash = hashes[i].split('=');                        
    vars[hash[0]] = hash[1];
  }
  return vars;
}

var url_vars = getUrlVars();
for(var i in url_vars)
{
  global[i] = url_vars[i];
}   
//end debug code~