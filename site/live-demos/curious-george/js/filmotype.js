/* @license
 * MyFonts Webfont Build ID 2372339, 2012-09-25T23:10:58-0400
 * 
 * The fonts listed in this notice are subject to the End User License
 * Agreement(s) entered into by the website owner. All other parties are 
 * explicitly restricted from using the Licensed Webfonts(s).
 * 
 * You may obtain a valid license at the URLs below.
 * 
 * Webfont: Filmotype Modern by Filmotype
 * URL: http://www.myfonts.com/fonts/filmotype/modern/regular/
 * Copyright: Copyright (c) 2009 by Rian Hughes. All rights reserved.
 * Licensed pageviews: 500,000
 * 
 * Webfont: Filmotype Major by Filmotype
 * URL: http://www.myfonts.com/fonts/filmotype/major/regular/
 * Copyright: Copyright (c) 2012 by Rian Hughes/Filmotype. All rights reserved.
 * Licensed pageviews: unspecified
 * 
 * 
 * License: http://www.myfonts.com/viewlicense?type=web&buildid=2372339
 * 
 * © 2012 Bitstream Inc
*/


// safari 3.1: ttf
// safari 5.1: woff
// firefox 3.6+: woff
// firefox 3.5+: ttf
// chrome 4+: ttf
// chrome 6+: woff
// IE 5+: eot
// IE 9: woff
// opera 10.1+: ttf
// mobile safari 4.2+: ttf
// mobile safari: svg
// android: ttf

//change this to true to enable troubleshooting mode
var myfont_webfont_test = false;
// change this to false if you're having trouble with WOFFs
var woffEnabled = true;
// to place your webfonts in a custom directory, uncomment this and set it to where your webfonts are.
var customPath = "css/fonts/";

var browserName, browserVersion, webfontType;
 
if (typeof(customPath) == 'undefined')
	var customPath = false;


if (typeof(woffEnabled) == 'undefined')
	var woffEnabled = true;


if (/myfonts_test=on/.test(window.location.search))
	var myfonts_webfont_test = true;

else if (typeof(myfonts_webfont_test) == 'undefined')
	var myfonts_webfont_test = false;


if (customPath)
	var path = customPath;

else
{
	var scripts = document.getElementsByTagName("SCRIPT");
	var script = scripts[scripts.length-1].src;

	if (!script.match("://") && script.charAt(0) != '/')
		script = "./"+script;
		
	var path = script.replace(/\\/g,'/').replace(/\/[^\/]*\/?$/, '');
}


var wfpath = path + "";


if (myfonts_webfont_test)
	document.write('<script type="text/javascript" src="' + path + '/MyFontsWebfontsKit_test.js"></script>');


var haveWOFF = 1;
var haveTTF = 1;

if (/(Macintosh|Android)/.test(navigator.userAgent))
	var suffix = "_unhinted";
		
else
	var suffix = "";


if (/webfont=(woff|ttf|eot)/.test(window.location.search))
	webfontType = RegExp.$1;

else if (/MSIE (\d+\.\d+)/.test(navigator.userAgent))
{
	browserName = 'MSIE';
	browserVersion = new Number(RegExp.$1);
	if (haveWOFF && browserVersion >= 9.0 && woffEnabled)
		webfontType = 'woff';
	else if (browserVersion >= 5.0)
		webfontType = 'eot';
}
else if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent))
{
	browserName = 'Firefox';
	browserVersion = new Number(RegExp.$1);
	if (haveWOFF && browserVersion >= 3.6 && woffEnabled)
		webfontType = 'woff';
	else if (browserVersion >= 3.5)
		webfontType = 'ttf';
}
else if (/Chrome\/(\d+\.\d+)/.test(navigator.userAgent)) // must check before safari
{
	browserName = 'Chrome';
	browserVersion = new Number(RegExp.$1);

	if (haveWOFF && browserVersion >= 6.0 && woffEnabled)
		webfontType = 'woff';

	else if (browserVersion >= 4.0)
		webfontType = 'ttf';
		
}
else if (/Mozilla.*(iPhone|iPad).* OS (\d+)_(\d+).* AppleWebKit.*Safari/.test(navigator.userAgent))
{
	browserName = 'MobileSafari';
	browserVersion = new Number(RegExp.$2) + (new Number(RegExp.$3) / 10)
	suffix = "_unhinted";
	
	if(browserVersion >= 4.2 && (haveTTF || haveData))
		webfontType = 'ttf';

	else
		webfontType = 'svg';
}
else if (/Mozilla.*(iPhone|iPad|BlackBerry).*AppleWebKit.*Safari/.test(navigator.userAgent))
{
	browserName = 'MobileSafari';
	webfontType = 'svg';
}
else if (/Safari\/(\d+\.\d+)/.test(navigator.userAgent))
{
	browserName = 'Safari';
	if (/Version\/(\d+\.\d+)/.test(navigator.userAgent))
	{
		browserVersion = new Number(RegExp.$1);
		if (browserVersion >= 5.1 && haveWOFF)
			webfontType = 'woff';
		else if (browserVersion >= 3.1)
			webfontType = 'ttf';
	}
}
else if (/Opera\/(\d+\.\d+)/.test(navigator.userAgent))
{
	browserName = 'Opera';
	if (/Version\/(\d+\.\d+)/.test(navigator.userAgent))
	{
		browserVersion = new Number(RegExp.$1);
		
		if (haveWOFF && browserVersion >= 11.1 && woffEnabled)
			webfontType = 'woff';
		else if (browserVersion >= 10.1)
			webfontType = 'ttf';
	}
}

switch (webfontType)
{
		case 'eot':
				document.write("<style>\n");
							document.write("@font-face{font-family: 'FilmotypeModern';src:url(\"" + wfpath + "2432F3_0_0.eot\");font-weight:'normal';font-style:'normal';}\n");
									document.write("@font-face{font-family: 'FilmotypeMajor';src:url(\"" + wfpath + "2432F3_1_0.eot\");font-weight:'normal';font-style:'normal';}\n");
						document.write("</style>");
		break;
		
		case 'woff':
				document.write("<style>\n");
							document.write("@font-face{font-family: 'FilmotypeModern';src:url(\"" + wfpath + "2432F3_0" + suffix + "_0.woff\") format(\"woff\");font-weight:'normal';font-style:'normal';}\n");
									document.write("@font-face{font-family: 'FilmotypeMajor';src:url(\"" + wfpath + "2432F3_1" + suffix + "_0.woff\") format(\"woff\");font-weight:'normal';font-style:'normal';}\n");
						document.write("</style>");
		break;
	
		case 'ttf':
				document.write("<style>\n");
							document.write("@font-face{font-family: 'FilmotypeModern';src:url(\"" + wfpath + "2432F3_0" + suffix + "_0.ttf\");font-weight:'normal';font-style:'normal';}\n");
									document.write("@font-face{font-family: 'FilmotypeMajor';src:url(\"" + wfpath + "2432F3_1" + suffix + "_0.ttf\");font-weight:'normal';font-style:'normal';}\n");
						document.write("</style>");
		break;
		

		case 'svg':
				document.write("<style>\n");
							document.write("@font-face{font-family: 'FilmotypeModern';src:url(\"" + wfpath + "2432F3_0_0.svg#wf\") format(\"svg\");font-weight:'normal';font-style:'normal';}\n");
									document.write("@font-face{font-family: 'FilmotypeMajor';src:url(\"" + wfpath + "2432F3_1_0.svg#wf\") format(\"svg\");font-weight:'normal';font-style:'normal';}\n");
						document.write("</style>");
		break;
		
	default:
		break;
}