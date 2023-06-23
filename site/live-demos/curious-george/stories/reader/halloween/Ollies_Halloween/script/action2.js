// JavaScript Document
var page="";
var page1="";
var arrWord=new Array();
var xmldoc="";
var lastValue="";
var endTime="";
var side="";
var xx=0;
var a=0,b=1;
var j=0;
var sValue=0;
var StoreValue;
var pageEnd = false;

var isIpad = false;

var TimeControl;
var isIe = false;
var ieVer = 0;
var tid = 0;
var currentAudioPage = 'pageLeft';
var prevId = "";

var pageUpdate = 'no';
var spanId = "";
var initialSoundTime = 0;
var currentTime=0;

var firstPlay = false;

var audioLoaded = false;
var chromeBrowser = false

$(document).ready(function(){	
	
isIpad = getDeviceInfo();
if(isIpad)
{
	if(pageCount<1)
				{
					
				alert("Click the play button to start the audio")
				document.getElementById("playBtn").style.backgroundImage="url('images/play_audio.png')";	
				}
}	
	
 if(navigator.userAgent.match('MSIE')){
	 isIe = true;
	 var ieInd = navigator.userAgent.indexOf('MSIE');
	 ieVer = Number(navigator.userAgent.substr(ieInd+5,1));
	
 }
 
 if(navigator.userAgent.match("Chrome")){
	 chromeBrowser = true;
 }

 document.getElementById('progressCont').style.opacity = 1;
 document.getElementById('progressCont').style.filter = "alpha('opacity=100')";
 document.getElementById('progressCont').style.left = (document.getElementById('mainDiv').offsetLeft + (document.getElementById('mainDiv').offsetWidth/2) - (document.getElementById('progressCont').offsetWidth/2))+'px';
 document.getElementById('progressCont').style.top = (document.getElementById('mainDiv').offsetTop + (document.getElementById('mainDiv').offsetHeight/2) - (document.getElementById('progressCont').offsetHeight/2))+'px';
// document.getElementById('mainDiv').style.display = 'none' 

 loadAudioSound();
 
});

function initSound()
{
	
	isIpad = getDeviceInfo();
	
	prevId = "";
    if(currentAudioPage == 'pageLeft'){
		
		xmldoc=getXmlData("page"+pageCount+".xml");	
	}
	else{
		xmldoc=getXmlData("page"+(pageCount+1)+".xml");	
	} 
	
	
	getxmlValue();
	pageUpdate = 'no';
}

function togglePages(){
	
	(currentAudioPage == 'pageLeft')?currentAudioPage = 'pageRight' : currentAudioPage = 'pageLeft';
	// console.log("length------------------->"+currentAudioPage)
}

var par;

function getxmlValue()
{
	arrWord=new Array();
	//alert(xmldoc)
if(xmldoc!=null)
	{
		
	
		par=xmldoc.getElementsByTagName('body')[0].childNodes;
	
  //console.log(currentAudioPage+"length:"+par.length)
 /* if(currentAudioPage=="pageRight" && par.length==1)
  {
	
	  console.log("-------"+pageCount)
 } */
// console.log(currentAudioPage+""+pageCount)
 //alert(par.length)
   if(par.length == 0 && isIe){
	    togglePages();
        initSound();
		return;

   }
	if(par.length==1 && !isIe )
	{
		togglePages();
        initSound();
		return;
	}
	for(var i=0;i<par.length;i++)
	{
		var getSec=par[i];
		if(getSec.nodeType==1)
		{
			var audioValue=getSec.childNodes;			
			for(var j=0;j<audioValue.length;j++)
			{
				var TimeSec=audioValue[j];
				
				if(TimeSec.nodeType==1)
				{
					if(isIe && ieVer > 8){
						var _startTime = Number(TimeSec.getAttribute("clipBegin").replace("s",""))+4.05;
						var _endTime = Number( TimeSec.getAttribute("clipEnd").replace("s",""))+4.05;
						//var _startTime = TimeSec.getAttribute("clipBegin").replace("s","");
						//var _endTime = TimeSec.getAttribute("clipEnd").replace("s","");
					}
					else{
						var _startTime = TimeSec.getAttribute("clipBegin").replace("s","");
						var _endTime = TimeSec.getAttribute("clipEnd").replace("s","");
					}
					//alert(_startTime+"-"+_endTime)
					arrWord.push({ide:TimeSec.getAttribute("id"),start:_startTime,end:_endTime})
				}
			}
		}
	}
	sValue = arrWord[0].start;
	initialSoundTime = sValue;
		//alert("1:"+initialSoundTime)
		
	if(audioPlayed)
	{
	
		$("#jquery_jplayer_1").jPlayer("pause");
	
		EventPlay();
	}
	}
	else{
		par ="";	
	}
	
}


function getXmlData(xmlPath){
	
	 if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	 }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	  	  
	xmlhttp.open("GET",xmlPath,false);
	xmlhttp.send();
	return xmlhttp.responseXML;
	  
}

function loadAudioSound()
{
	var jpPlayTime = $("#jplayer_play_time");
	var jpTotalTime = $("#jplayer_total_time");
  
	$("#jquery_jplayer_1").jPlayer({
		ready: function () {
			isIpad = getDeviceInfo();
			
			this.element.jPlayer("setFile", "audio/OLLIES HALLOWEEN.mp3", "audio/OLLIES HALLOWEEN.ogg");
			
			
			;
			this.element.jPlayer("load");
			
			
			if(!isIpad){
				if(chromeBrowser)
				playAudio('playBtn');
			}
			else{
				
				 audioPlayed = false;
				document.getElementById("playBtn").style.backgroundImage="url('images/play_audio.png')";
			}
			
			
		},
		//solution:'flash,html',
		solution:'flash,html',
		volume: 0,
		supplied:"mp3,oga",
		preload: 'none'
	})
	
	.jPlayer("onProgressChange",onTimeUpdate)
	.jPlayer("onSoundComplete", function() {});

}

function onTimeUpdate(loadPercent, playedPercentRelative, playedPercentAbsolute, playedTime, totalTime){
 

	 if(loadPercent <= 100 && !audioLoaded)
	 {
	 	   
		            loadPercent = Math.round(loadPercent);
					
	    			//document.getElementById('progBar').style.width = (loadPercent * 2)+'px';
					
				   if(loadPercent == 100 || isIpad)
					{
						
						document.getElementById('progressCont').style.display = 'none';
						document.getElementById('mainDiv').style.display = 'block'
						audioLoaded = true;
						
						
				        $("#jquery_jplayer_1").jPlayer("volume",50);
						if(!isIpad && !chromeBrowser){
							playAudio('playBtn');
						}
						else if(chromeBrowser){
							
							$("#jquery_jplayer_1").jPlayer("playHeadTime",(0* 1000));
						}
						
					}
					return;
		 
	 }


  
  
   currentTime = Number(playedTime)/1000;
  
  // console.log(Number(playedTime)/1000);
  
    if(arrWord.length > 0)
	{
       if(currentTime >(Number(arrWord[arrWord.length-1].end)+0.5) && currentTime < (Number(arrWord[arrWord.length-1].end)+1.5) ){
		   $("#jquery_jplayer_1").jPlayer("pause");
		   
		    changePage(spanId);
			
			return;
	   }
    }

  
  for(var k = 0;k<arrWord.length;k++)
  {
	  if(currentTime > arrWord[k].start && currentTime < arrWord[k].end){
		  
		  if(prevId != arrWord[k].ide){
			 if(prevId != "")
			 {
				 clearPrevSpan(prevId);
			 }
			 spanId = arrWord[k].ide;
			 if(document.getElementById(currentAudioPage).contentWindow.document.getElementById(spanId)!=null)
			 {
			
			 document.getElementById(currentAudioPage).contentWindow.document.getElementById(spanId).style.color="red";
			 document.getElementById(currentAudioPage).contentWindow.document.getElementById(spanId).style.backgroundColor="yellow"; 
			 }
			
		  }
		  prevId = arrWord[k].ide;
		  return;
	  }
	   
  }
  
}

function changePage(spanId){
    
	//alert(spanId)
	if(currentAudioPage == "pageLeft")
	{
		
		clearPrevSpan(spanId);
		//togglePages();
		  
		 //initSound();
		 
		 if(pageCount < 31){ 
		    
			loadNextPage(); 
		}
		else{
			EventStop();
			audioPlayed = false;
			document.getElementById('playBtn').style.backgroundImage="url('images/play_audio.png')";
		}

	}
	else
	{
		if(pageCount < 31){ 
		    
			loadNextPage(); 
		}
		else{
			EventStop();
			audioPlayed = false;
			document.getElementById('playBtn').style.backgroundImage="url('images/play_audio.png')";
		}
	 }
					
}

function clearPrevSpan(spanId){
	console.log(sValue+"---id-->"+spanId)
	document.getElementById(currentAudioPage).contentWindow.document.getElementById(spanId).style.color="";
	document.getElementById(currentAudioPage).contentWindow.document.getElementById(spanId).style.backgroundColor=""; 
}

function loadNextPage(){
	//alert("next pag")
	pageCount += 2;
	loadHtmlContent_1();
	//sValue=StoreValue;
	//initSound("pageLeft",2);
}

function nextPage()
{
	sValue=StoreValue;
	//alert(sValue)
	initSound("pageLeft",2);

}


function nextPageAction()
{
	
	if(document.getElementById('timeValue').innerHTML==0)
	{
		$("#jquery_jplayer_1").jPlayer("stop");
	}
	else
	{
	$("#jquery_jplayer_1").jPlayer("pause");
	$("#jquery_jplayer_1").jPlayer("playHeadTime",(Number(sValue) * 1000));	
	}
	
}

function EventPlay()
{ 
	if(Number(sValue)<1)
	{
	$("#jquery_jplayer_1").jPlayer("playHeadTime",(Number(sValue) * 1000));	
	}
	else
	{
	$("#jquery_jplayer_1").jPlayer("playHeadTime",(Number(sValue) * 1000));
	}
}

function EventStop()
{
	$("#jquery_jplayer_1").jPlayer("stop");
	sValue = initialSoundTime;
}

function EventPause()
{
	$("#jquery_jplayer_1").jPlayer("pause");
	sValue = currentTime;
}

function CallSpanLeft()
{ 
       var spanArr=document.getElementById('pageLeft').contentWindow.document.getElementsByTagName("span");
		for(var i=0;i<spanArr.length;i++)
		{
			if(spanArr[i].id!="")
			{
			spanArr[i].onclick=SpanStartPlay;	
			}
		}
}

function CallSpanRight()
{
	
	var spanArr=document.getElementById('pageRight').contentWindow.document.getElementsByTagName("span");
	
		for(var i=0;i<spanArr.length;i++)
		{
			if(spanArr[i].id!="")
			{
			   spanArr[i].onclick=SpanStartPlay;	
			}
		}
}
function SpanStartPlay()
{
	
	for(var j=0;j<arrWord.length;j++)
	{
		if(arrWord[j].ide==this.id)
		{
			
			sValue=arrWord[j].start;
			$("#jquery_jplayer_1").jPlayer("pause");
			$("#jquery_jplayer_1").jPlayer("playHeadTime",(Number(sValue) * 1000));
			return;
		}
	}
}

function getDeviceInfo(){
	var ua = navigator.userAgent;
	
	return /iPad/i.test(ua) || /iPhone OS 3_1_2/i.test(ua) || /iPhone OS 3_2_2/i.test(ua);
}