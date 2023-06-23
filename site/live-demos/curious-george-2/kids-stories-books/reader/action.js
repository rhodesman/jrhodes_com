// JavaScript Document
var page="";
var page1="";
var arrWord=new Array();
var xmldoc="";
var lastValue="";
var endTime="";
var side="";
var xx=0;
var a=2,b=3;
var j=0;
var sValue=0;
var StoreValue;

var TimeControl;

function init(e,x)
{
	//alert(e+"---"+x)
	//console.log(e+"--"+x)
	if(x==undefined)
	{
	xx=0;
	}
	else
	{
	xx=x;
	}
	
	a=a+xx;
	b=b+xx;
	side=e;
	document.getElementById('pageLeft').src="page"+a+".html";
	document.getElementById('pageLeft').onload=CallSpanLeft;
	document.getElementById('pageRight').src="page"+b+".html";
	document.getElementById('pageRight').onload=CallSpanRight;
	document.getElementById('pageLeft').name="page"+a;
	document.getElementById('pageRight').name="page"+b;	
	
	page=document.getElementById(e).name;	
	//alert(page)
	xmldoc=getXmlData(page+".xml");	
	getxmlValue();
}


function getxmlValue()
{
	arrWord=new Array();
	var par=xmldoc.getElementsByTagName('body')[0].childNodes;
	if(par.length==1)
	{
		init("pageRight");
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
					arrWord.push({ide:TimeSec.getAttribute("id"),start:TimeSec.getAttribute("clipBegin"),end:TimeSec.getAttribute("clipEnd")})
				}
			}
			
		}
	}
	
	
	for(var k=0;k<1;k++)
	{
		var s1=arrWord[k].start.replace("s","");
		console.log(s1)
		sValue=s1;
		StoreValue=s1;
		document.getElementById('lastTimeValue').innerHTML=sValue;			
	}
	
	nextPageAction();
	
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




function function1()
{

	$("#jquery_jplayer_1").jPlayer({
		ready: function (event) {
				$(this).jPlayer("setMedia", {
				m4a:"audio/pan.mp3",
				oga:"audio/pan.ogg"
			})
			
		},
		timeupdate:onTimeUpdate,
		swfPath: "js",
		supplied: "m4a, oga",
		wmode: "window"
	});
}


$(document).ready(function(){	
setTimeout(function1 ,500);
});


function onTimeUpdate(e){
document.getElementById('timeValue').innerHTML= e.jPlayer.status.currentTime;
	for(var k=0;k<arrWord.length;k++)
	{
	var s1=arrWord[k].start.replace("s","");
	var s2=arrWord[k].end.replace("s","");
	var s3=arrWord[k].ide;
	lastValue=arrWord[arrWord.length-1].ide;
	endTime=arrWord[arrWord.length-1].end;	

	  if(side=="pageLeft")
	  {
	 	 document.getElementById('chk').innerHTML="";	
		if(document.getElementById('timeValue').innerHTML>=s1 && document.getElementById('timeValue').innerHTML<=s2)
				 {				 
				  if(document.getElementById("pageLeft").contentWindow.document.getElementById(s3)!=null)
					 {				 
					 document.getElementById("pageLeft").contentWindow.document.getElementById(s3).style.color="red";
					 
						if(document.getElementById("pageLeft").contentWindow.document.getElementById(lastValue).style.color=="red")
						 {
							 setTimeout(function(){document.getElementById("pageLeft").contentWindow.document.getElementById(s3).style.color="#000";},500)
								init("pageRight");
						 }
					}
				 }
				 else
				 {
					 if(document.getElementById("pageLeft").contentWindow.document.getElementById(s3)!=null)
					 {
						document.getElementById("pageLeft").contentWindow.document.getElementById(s3).style.color="#000"; 
					 }
					
					
				 }
	  }
  
	   if(side=="pageRight")
		  {
			
			 var aa=parseInt(arrWord[0].ide.replace("w0",""))-1;
			 aa="w0"+aa;
			 if(lastValue==aa)
			 {				
				return;
			 }
		 
				if(document.getElementById('timeValue').innerHTML>=s1 && document.getElementById('timeValue').innerHTML<=s2)
						 {
						
						 if(document.getElementById("pageRight").contentWindow.document.getElementById(s3)!=null)
						 {
							 document.getElementById("pageRight").contentWindow.document.getElementById(s3).style.color="red"; 
						 
							
							if(document.getElementById("pageRight").contentWindow.document.getElementById(lastValue).style.color=="red")
							 {
									var nextPageValue=parseFloat(document.getElementById('timeValue').innerHTML)+1;
									var roundValue=Math.round(nextPageValue);
								   var endT=Number(endTime.replace("s",""));							 
								
									if(TimeControl!=s3)
									{										
										TimeControl=s3;
										setTimeout(nextPage,800);										 
									}
								
							 }
							
						 }
						 
						 }
						 else
						 {
							 if(document.getElementById("pageRight").contentWindow.document.getElementById(s3)!=null)
							 {
							  document.getElementById("pageRight").contentWindow.document.getElementById(s3).style.color="#000";	
							 }
														 
						 }
		 	 }
  

}
 	
 
}

function nextPage()
{
	sValue=StoreValue;
	//$("#jquery_jplayer_1").jPlayer("stop");
	pageCount += 2;
	loadHtmlContent_1();
	init("pageLeft",2);
	
	
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
	$("#jquery_jplayer_1").jPlayer("play",Number(sValue));	
	}
	
}

function EventPlay()
{
	console.log(sValue);
	
	$("#jquery_jplayer_1").jPlayer("play",Number(sValue));
}

function EventStop()
{
	$("#jquery_jplayer_1").jPlayer("stop");
	sValue=StoreValue;
}

function EventPause()
{
	$("#jquery_jplayer_1").jPlayer("pause");
	 sValue=document.getElementById("timeValue").innerHTML;
}

function CallSpanLeft()
{
	
		//alert("CallSpanLeft")
		var spanArr=document.getElementById('pageLeft').contentWindow.document.getElementsByTagName("span");
		for(var i=0;i<spanArr.length;i++)
		{
			if(spanArr[i].id!="")
			{
			spanArr[i].onclick=SpanStartPlay;	
			}
			
			//console.log(spanArr[i].id)
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
			
			//console.log(spanArr[i].id)
		}
}
function SpanStartPlay()
{
	//alert("span--->"+this.id)
	for(var j=0;j<arrWord.length;j++)
	{
		if(arrWord[j].ide==this.id)
		{
			//alert(arrWord[j].start)
			sValue=arrWord[j].start.replace("s","");
			$("#jquery_jplayer_1").jPlayer("pause");
			$("#jquery_jplayer_1").jPlayer("play",Number(sValue));
			return;
		}
	}
}