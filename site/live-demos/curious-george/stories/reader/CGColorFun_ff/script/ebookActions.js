// JavaScript Document


var chapterData = new Array();
var chId = 0;
var secId = 0;
var chapterCount = 1;
var sectionCount = 1;
var chapter_txt = null;
var section_txt = null;
var notes_arr = new Array();
var highLight_arr = new Array();
var pageInfo_arr = new Array();
var pageIndex = 0;
var pg_txt = null;
var current_path = "";
var currentpage = "bookpage";
var highlightTerm = false;
var imageData = new Array();
var imageWidth_min = 80;
var imageHeight_min = 50;			
var totalPage = 0;
var firstPage = null;
var frameY = 0;
var currentPageNo = 1;
var chapterListOpen = false;
var sectionListOpen = false;	
var currentPath = "";
var imageData_arr = new Array();
var page_arr = new Array();
var totalHeight = 0;			
var searchWord = '';
var isIe = false;
var courseName = "fluency";
var pageCount = 2;
var audioPlayed = false;
var getSwfDivBoundries;
/////////XML LOAD FUNCTIONS

			
			function getPageIndexByUrl(url_str)
			{
				for(var i = 0;i<pageInfo_arr.length;i++)
				{
					//console.log(pageInfo_arr[i].path +"=="+ url_str)
					if(pageInfo_arr[i].path == url_str)
					{
						
						return pageInfo_arr[i].page_no;
					}
				}
				return 1;
			}
			
			

			function truncateArray(){
				var p_no = 0;
				for(var i=0; i<pageInfo_arr.length; i++)
				{   
				  
					if(p_no == pageInfo_arr[i].page_no)
					{
						pageInfo_arr.splice((i-1),1);
					}
					p_no = pageInfo_arr[i].page_no;
				}
			}
			
			function loadXmlDoc(xmlFile)
			{
				  if (window.XMLHttpRequest)
				  {// code for IE7+, Firefox, Chrome, Opera, Safari
				  xmlhttp=new XMLHttpRequest();
				  }
				else
				  {// code for IE6, IE5
				  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
				  }
				xmlhttp.open("GET",xmlFile,false);
				xmlhttp.send();
				return xmlhttp.responseXML;
			}
			
			function init()
			{
				
			
				browserCheck();
				pg_txt = document.getElementById('pg');
				
				for(var i = 0;i<=14;i++){
					notes_arr.push(new Array());
					highLight_arr.push(new Array());
				}
				
				
				loadHtmlContent_1();

				//playAudio('playBtn');
				
			}
			
			
			
			
			function nextChapter()
			{
				
				if(pageCount < 19){
					pageCount += 2;
					loadHtmlContent_1();
					nextPage();
				}
				if(pageCount >= 19){
				
					EventStop();
					audioPlayed = false;
					document.getElementById('playBtn').style.backgroundImage="url('images/play_audio.png')";
				}
			}
				
				
			
			
			function previousChapter(){
				
				if(pageCount > 2){
					 pageCount -= 2;
					 loadHtmlContent_1();
				}
				
				
			}
	
			
	function loadHtmlContent_1(){
		
		//alert("page"+pageCount+".html")
		document.getElementById('pageLeft').src = "page"+pageCount+".html";
		document.getElementById('pageRight').src = "page"+(pageCount+1)+".html";
		
		currentAudioPage = 'pageLeft';
		initSound();
		
		pg_txt.value = (pageCount-2)+" - "+((pageCount+1)-2);
		//clearPagePins();
		//createPagePins();
	}
	
	function onPageLoad1(e){
		
		CallSpanLeft();
		//document.getElementById('pageLeft').contentWindow.document.onmouseup = highLightMouseUp1;
	}
	
	function onPageLoad2(e){
		CallSpanRight();
		//document.getElementById('pageRight').contentWindow.document.onmouseup = highLightMouseUp2;
	}
			
	function loadHtmlContent(htmlPath,pageIndex){
		
		    //pageIndex = findIndex(getPageIndexByUrl(htmlPath));
			//alert("af="+getPageIndexByUrl(htmlPath));
			pageIndex = findIndex(getPageIndexByUrl(htmlPath));
			//alert("bf="+findIndex(getPageIndexByUrl(htmlPath)));
		    htmlPath = 'pages/'+courseName+'/'+htmlPath;
		    currentpage = "bookpage";

            scrollToPage(pageIndex);

			document.getElementById('centerTitleDiv').innerHTML = pageInfo_arr[pageIndex].s_title;
			
			pg_txt.value = (pageIndex+1);
			
			//getSelectedChapter(0,pageIndex);
			//chapter_txt.value = pageInfo_arr[pageIndex].s_title;
			
		    if(currentPath != htmlPath || currentPath == "")
			{
				
				
				document.getElementById("image_gallery").style.visibility = "hidden";
				current_path = htmlPath;
				var bodyDiv = document.getElementById("BodyContent");
				
				if (document.getElementById('contentFrame').addEventListener)
				document.getElementById('contentFrame').addEventListener("load", resizeContent, false)
				else if (document.getElementById('contentFrame').attachEvent){
				document.getElementById('contentFrame').detachEvent("onload", resizeContent) // Bug fix line
				document.getElementById('contentFrame').attachEvent("onload", resizeContent)
				}
				document.getElementById("BodyContent").style.visibility = "hidden";
				document.getElementById("loadingDiv").style.visibility = "visible";
				currentPath = htmlPath;
				tabSelect("bpage");
			}
			
			if(highlightTerm)
			{
				doTextHighlight();
			}
	}





	 

	
    function browserCheck(){
		if(navigator.appName.match("Microsoft")){
			isIe = true;
		}
	}

function Signout()
{
	window.open("../index.html","_self");
}

function playAudio(_this){
	if(_this.id==undefined)
	{
		EventPlay();
		audioPlayed = true;
		document.getElementById("playBtn").style.backgroundImage="url('images/pause_audio.png')";
		return;
	}
 if(!audioPlayed){

 	EventPlay();
	audioPlayed = true;
	//alert("......."+_this);
	_this.style.backgroundImage="url('images/pause_audio.png')";
 }
 else{
	 EventPause();
	 audioPlayed = false;
	 _this.style.backgroundImage="url('images/play_audio.png')";
 }
}

function stopAudio(){
	EventStop();
	
	 audioPlayed = false;
	 document.getElementById('playBtn').style.backgroundImage="url('images/play_audio.png')";
	
}

