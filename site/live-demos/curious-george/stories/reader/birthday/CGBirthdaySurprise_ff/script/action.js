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

var currentPlayer = 'jquery_jplayer_1'

$(document).ready(function(){	

	var isIpad=getDeviceInfo()
	
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
$("#jquery_jplayer_1").jPlayer({
		ready: function () {
			document.getElementById('progressCont').style.display = 'none';
			audioPlayed = true;
			loadAudioSound();
		},
		solution:'flash,html',
		ended: onSoundEnd,
		swfPath: "js",
		volume:100,
		supplied: "mp3,oga"
	});
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
	 loadAudioSound();
}

function togglePages(){
	
	(currentAudioPage == 'pageLeft')?currentAudioPage = 'pageRight' : currentAudioPage = 'pageLeft';
	// console.log("length------------------->"+currentAudioPage)
}

var par;

function getxmlValue()
{
	arrWord=new Array();
    if(xmldoc!=null)
	{
		par=xmldoc.getElementsByTagName('body')[0].childNodes;
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
							}
						else{
							var _startTime = TimeSec.getAttribute("clipBegin").replace("s","");
							var _endTime = TimeSec.getAttribute("clipEnd").replace("s","");
						}
						arrWord.push({ide:TimeSec.getAttribute("id"),start:_startTime,end:_endTime})
					}
				}
			}
		}
	
		sValue = arrWord[0].start;
		initialSoundTime = sValue;
	
		if(audioPlayed)
		{
		
			$("#"+currentPlayer).jPlayer("pause");
		
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
	soundPath = 'page'+pageCount;
	
	//alert("pageSnd="+soundPath+"svalue="+sValue);
	if(!isIpad){
		$("#jquery_jplayer_1").jPlayer("setMedia", {
					mp3: 'audio/'+soundPath+".mp3",
					ogg: 'audio/'+soundPath+".ogg"
		}).jPlayer("play").bind($.jPlayer.event.timeupdate, self.update_timer);
		
		if(!audioPlayed)
		{
					$("#jquery_jplayer_1").jPlayer('pause');
		}
	}
	
	else{
		
		$("#jquery_jplayer_1").jPlayer("setMedia", {
					mp3: 'audio/'+soundPath+".mp3",
					ogg: 'audio/'+soundPath+".ogg"
		}).bind($.jPlayer.event.timeupdate, self.update_timer);
		
		audioPlayed=false;
		document.getElementById('playBtn').style.backgroundImage="url('images/play_audio.png')";	
	
		
	}	
		
}

function update_timer(event){
	var currentTime = event.jPlayer.status.currentTime;
	
		currentTime += Number(sValue);


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

function onSoundEnd(){
	
	if(pageCount < 26)
	loadNextPage();
}


function changePage(spanId){
	if(currentAudioPage == "pageLeft")
	{
		clearPrevSpan(spanId);
		 if(pageCount <25){ 
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
		if(pageCount <25){ 
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
	document.getElementById(currentAudioPage).contentWindow.document.getElementById(spanId).style.color="";
	document.getElementById(currentAudioPage).contentWindow.document.getElementById(spanId).style.backgroundColor=""; 
}

function loadNextPage(){
	pageCount += 2;
	loadHtmlContent_1();
}

function nextPage()
{
	sValue=StoreValue;
	initSound("pageLeft",2);
}


function EventPlay()
{ 

	$("#"+currentPlayer).jPlayer("play");
}

function EventStop()
{
	$("#"+currentPlayer).jPlayer("stop");
	//sValue = initialSoundTime;
}

function EventPause()
{
	$("#"+currentPlayer).jPlayer("pause");
	//sValue = currentTime;
}

function CallSpanLeft()
{ 
       var spanArr=document.getElementById('pageLeft').contentWindow.document.getElementsByTagName("span");
		for(var i=0;i<spanArr.length;i++)
		{
			if(spanArr[i].id!="")
			{
				spanArr[i].style.cursor = 'pointer';
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
	if(!isIpad){
		if(!audioPlayed)
		return;
	}
	
	for(var j=0;j<arrWord.length;j++)
	{
		if(arrWord[j].ide==this.id)
		{
			//sValue=arrWord[j].start - initialSoundTime;
			$("#"+currentPlayer).jPlayer("pause");
			//alert(sValue)
			
			$("#"+currentPlayer).jPlayer("play",(Number(arrWord[j].start - initialSoundTime)));
			return;
		}
	}
}

function getDeviceInfo(){
	var ua = navigator.userAgent;
	return /iPad/i.test(ua) || /iPhone OS 3_1_2/i.test(ua) || /iPhone OS 3_2_2/i.test(ua);
}