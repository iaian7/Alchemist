/* 
 This file was generated by Dashcode.
 You may edit this file to customize your widget or web page 
 according to the license.txt file included in the project.
 */

//
// Function: load()
// Called by HTML body element's onload event when the widget is ready to start
//
function load()
{
	dashcode.setupParts();
	loadPrefs();
	versionCheck();
}

//
// Function: remove()
// Called when the widget has been removed from the Dashboard
//
function remove()
{
	// Stop any timers to prevent CPU usage
	// Remove any preferences as needed
	// widget.setPreferenceForKey(null, dashcode.createInstancePreferenceKey("your-key"));
	erasePrefs();
}

//
// Function: hide()
// Called when the widget has been hidden
//
function hide()
{
	// Stop any timers to prevent CPU usage
//	savePrefs();
}

//
// Function: show()
// Called when the widget has been shown
//
function show()
{
	// Restart any timers that were stopped on hide
}

//
// Function: sync()
// Called when the widget has been synchronized with .Mac
//
function sync()
{
	// Retrieve any preference values that you need to be synchronized here
	// Use this for an instance key's value:
	// instancePreferenceValue = widget.preferenceForKey(null, dashcode.createInstancePreferenceKey("your-key"));
	//
	// Or this for global key's value:
	// globalPreferenceValue = widget.preferenceForKey(null, "your-key");
}

//
// Function: showBack(event)
// Called when the info button is clicked to show the back of the widget
//
// event: onClick event from the info button
//
function showBack(event)
{
	var front = document.getElementById("front");
	var back = document.getElementById("back");

	if (window.widget) {
		widget.prepareForTransition("ToBack");
	}

	front.style.display = "none";
	back.style.display = "block";

	if (window.widget) {
		setTimeout('widget.performTransition();', 0);
	}
}

//
// Function: showFront(event)
// Called when the done button is clicked from the back of the widget
//
// event: onClick event from the done button
//
function showFront(event)
{
	var front = document.getElementById("front");
	var back = document.getElementById("back");

	if (window.widget) {
		widget.prepareForTransition("ToFront");
		updatePrefs();
	}

	front.style.display="block";
	back.style.display="none";

	if (window.widget) {
		setTimeout('widget.performTransition();', 0);
	}
}

if (window.widget) {
	widget.onremove = remove;
	widget.onhide = hide;
	widget.onshow = show;
	widget.onsync = sync;
}



// ---------------------------- //
// Begin app-specific functions //
// ---------------------------- //



var wid = widget.identifier;
var prefType = loadPref(wid+"type",0);
var prefLocation = loadPref(wid+"location","/opt/local/bin/");
var prefLocation2 = loadPref(wid+"location2","/opt/local/bin/");
var prefLocation3 = loadPref(wid+"location3","/usr/local/bin/");
var prefSpacer = loadPref(wid+"spacer","_");
var prefDateSpacer = loadPref(wid+"dateSpacer","-");
var prefPrefix = loadPref(wid+"prefix","prefix");
var prefPreBox = loadPref(wid+"preBox",false);
var prefSuffix = loadPref(wid+"suffix","suffix");
var prefSufBox = loadPref(wid+"sufBox",false);
var prefDateBox = loadPref(wid+"dateBox",false);
var prefDateReverseBox = loadPref(wid+"dateReverseBox",true);

// Preference Saving

function loadPref(key,value) {
	var string = widget.preferenceForKey(key);
	if (string != null) {
		return string;
	} else {
		widget.setPreferenceForKey(value,key);
		return value;
	}
}

function loadPrefs() {
//	alert("ready!");
	document.getElementById("type").object.setSelectedIndex(prefType);
	document.getElementById("location").value = prefLocation;
	document.getElementById("location2").value = prefLocation2;
	document.getElementById("location3").value = prefLocation3;
	document.getElementById("spacer").value = prefSpacer;
	document.getElementById("dateSpacer").value = prefDateSpacer;
	document.getElementById("prefix").value = prefPrefix;
	document.getElementById("preBox").checked = prefPreBox;
	document.getElementById("suffix").value = prefSuffix;
	document.getElementById("sufBox").checked = prefSufBox;
	document.getElementById("dateBox").checked = prefDateBox;
	document.getElementById("dateReverseBox").checked = prefDateReverseBox;
}

function savePref(key,value) {
	if (window.widget) {
		widget.setPreferenceForKey(value,wid+key);
	}
}

function updatePrefs() {
	if (window.widget) {
		widget.setPreferenceForKey(prefType,wid+"type");
		widget.setPreferenceForKey(prefLocation,wid+"location");
		widget.setPreferenceForKey(prefLocation2,wid+"location2");
		widget.setPreferenceForKey(prefLocation3,wid+"location3");
		widget.setPreferenceForKey(prefSpacer,wid+"spacer");
		widget.setPreferenceForKey(prefDateSpacer,wid+"dateSpacer");
		widget.setPreferenceForKey(prefPrefix,wid+"prefix");
		widget.setPreferenceForKey(prefPreBox,wid+"preBox");
		widget.setPreferenceForKey(prefSuffix,wid+"suffix");
		widget.setPreferenceForKey(prefSufBox,wid+"sufBox");
		widget.setPreferenceForKey(prefDateBox,wid+"dateBox");
		widget.setPreferenceForKey(prefDateReverseBox,wid+"dateReverseBox");
	}
}

function erasePrefs() {
	if (window.widget) {
		widget.setPreferenceForKey(null,wid+"type");
		widget.setPreferenceForKey(null,wid+"location");
		widget.setPreferenceForKey(null,wid+"location2");
		widget.setPreferenceForKey(null,wid+"location3");
		widget.setPreferenceForKey(null,wid+"spacer");
		widget.setPreferenceForKey(null,wid+"dateSpacer");
		widget.setPreferenceForKey(null,wid+"prefix");
		widget.setPreferenceForKey(null,wid+"preBox");
		widget.setPreferenceForKey(null,wid+"suffix");
		widget.setPreferenceForKey(null,wid+"sufBox");
		widget.setPreferenceForKey(null,wid+"dateBox");
		widget.setPreferenceForKey(null,wid+"dateReverseBox");
	}
}

// Basic Functions

function updateType(event) {
	prefType = document.getElementById("type").object.getSelectedIndex();
	updatePrefs();
	updateFeedback();
}

function updateLocation(event) {
	prefLocation = document.getElementById("location").value;
}

function updateLocation2(event) {
	prefLocation2 = document.getElementById("location2").value;
}

function updateLocation3(event) {
	prefLocation3 = document.getElementById("location3").value;
}

function updateSpacer(event) {
	prefSpacer = document.getElementById("spacer").value;
}

function updateDateSpacer(event) {
	prefDateSpacer = document.getElementById("dateSpacer").value;
	updateDateReverseFeedback();
}

function updatePrefix(event) {
	prefPrefix = document.getElementById("prefix").value;
}

function updatePreBox(event) {
	prefPreBox = document.getElementById("preBox").checked;
}

function updateSuffix(event) {
	prefSuffix = document.getElementById("Suffix").value;
}

function updateSufBox(event) {
	prefSufBox = document.getElementById("SufBox").checked;
}

function updateDateBox(event) {
	prefDateBox = document.getElementById("dateBox").checked;
}

function updateDateReverseBox(event) {
	prefDateReverseBox = document.getElementById("dateReverseBox").checked;
	updateDateReverseFeedback();
}

function updateDateReverseFeedback(event) {
	document.getElementById("dateReverseFeedback").innerHTML = (prefDateReverseBox)?"yyyy"+prefDateSpacer+"mm"+prefDateSpacer+"dd":"dd"+prefDateSpacer+"mm"+prefDateSpacer+"yyyy";
}

function updateFeedback(event) {
	switch (prefType) {
		case 0:	// ProRes422
			document.getElementById("feedback").innerHTML = "Quicktime ProRes422";
			break;
		case 1:	// HDV 1080p
			document.getElementById("feedback").innerHTML = "Quicktime HDV 1080p";
			break;
		case 2:	// HDV 720p
			document.getElementById("feedback").innerHTML = "Quicktime HDV 720p";
			break;
		case 3:	// Apple Intermediate Codec
			document.getElementById("feedback").innerHTML = "Quicktime AIC";
			break;
		case 4:	// HTML5 formats
			document.getElementById("feedback").innerHTML = "MP4 720/540p, OGG 720/540p, WebM 720/540p";
			break;
		case 5:	// Desktop formats
			document.getElementById("feedback").innerHTML = "MP4 720p, WMV 720p";
			break;
		case 6:	// Mobile devices
			document.getElementById("feedback").innerHTML = "MP4 480/360p";
			break;
		default:
			document.getElementById("feedback").innerHTML = "";
		}
}


// Be sure to assign these handlers for the ondragenter and ondragover events on your drop target. These handlers prevent Web Kit from processing drag events so you can handle the drop when it occurs.

function dragEnter(event) {
	event.stopPropagation();
	event.preventDefault();
}

function dragOver(event) {
	event.stopPropagation();
	event.preventDefault();
}

var uri = [];
var uriParts = [];

function dragDrop(event) {
try {
	uri = event.dataTransfer.getData("text/uri-list");
	uri = uri.replace(/file:\/\/localhost/gi, "");
	uri = uri.replace(/\%20/gi, "\\ ");
	uri = uri.split("\n");
	uri = uri.sort(sortAlphaNum);
	for (var i=0; i<uri.length; i++) {
//		alert("i: "+i+"\nuriPart: "+uri[i]);
//		uriParts[i] = uri[i].match(/(.+?)(\.\w{3,4})$/);
		uriParts[i] = uri[i].match(/(\/.+\/)(.+?)(\.\w{3,4})$/);
	}
//	alert("uriParts:\n"+uriParts.join("\n"));

	var type = [];
	switch (prefType) {
		case 0:	// ProRes422
			type = [["qt_tools","qt_export_prores422.st",".prores422.mov"]];
			break;
		case 1:	// HDV 1080p
			type = [["qt_tools","qt_export_hdv_1080p.st",".hdv1080.mov"]];
			break;
		case 2:	// HDV 720p
			type = [["qt_tools","qt_export_hdv_720p.st",".hdv720.mov"]];
			break;
		case 3:	// Apple Intermediate Codec
			type = [["qt_tools","qt_export_aic.st",".aic.mov"]];
			break;
		case 4:	// HTML5 formats
			type = [
				["ffmpegMultipass","-pass 1 -vcodec libx264 -vb 2048k -minrate 128k -maxrate 3072k -bufsize 224k -vf \"lutyuv=y=gammaval(1.2)\" -s 1280x720 -strict experimental -ab 160k -y",".720p.mp4"],
				["ffmpegMultipass","-pass 1 -vcodec libx264 -vb 1280k -minrate 128k -maxrate 2560k -bufsize 224k -vf \"lutyuv=y=gammaval(1.2)\" -s 960x540 -strict experimental -ab 128k -y",".540p.mp4"],
				["ffmpeg2theora","--videobitrate 1920k --audiobitrate 160k --speedlevel 0 --max_size 1280x720 -o",".720p.ogg"],
				["ffmpeg2theora","--videobitrate 1536k --audiobitrate 128k --speedlevel 0 --max_size 960x540 -o",".540p.ogg"],
//				["ffmpeg2theora","-v 8 -a 2 --speedlevel 0 --max_size 1280x720 -o",".720p.Q.ogg"],
//				["ffmpeg2theora","-v 8 -a 2 --speedlevel 0 --max_size 960x540 -o",".540p.Q.ogg"],
				["ffmpeg","-vcodec libvpx -vb 1280k -minrate 0k -maxrate 2048k -bufsize 224k -vf \"lutyuv=y=gammaval(1.1)\" -f webm -ab 160k -s 1280x720 -y",".720p.webm"],
				["ffmpeg","-vcodec libvpx -vb 1024k -minrate 0k -maxrate 1536k -bufsize 224k -vf \"lutyuv=y=gammaval(1.1)\" -f webm -ab 128k -s 960x540 -y",".540p.webm"]
			];
			break;
		case 5:	// Desktop formats
			type = [
				["ffmpegMultipass","-pass 1 -vcodec libx264 -vb 1536k -minrate 128k -maxrate 2560k -bufsize 224k -vf \"lutyuv=y=gammaval(1.2)\" -s 1280x720 -strict experimental -ab 160k -y",".720p.mp4"],
				["ffmpeg","-vcodec libx264 -qmax 33 -vf \"lutyuv=y=gammaval(1.2)\" -s 1280x720 -strict experimental -ab 160k -y",".720p.Q.mp4"],
				["ffmpeg","-b 1536k -minrate 128k -maxrate 2560k -bufsize 224k -vf \"lutyuv=y=gammaval(1.2)\" -s 1280x720 -ab 160k -y",".720p.wmv"],
				["ffmpeg","-qmax 15 -vf \"lutyuv=y=gammaval(1.2)\" -s 1280x720 -ab 160k -y",".720p.Q.wmv"],
			];
			break;
		case 6:	// Mobile devices
			type = [
//				["ffmpeg"," -qmax 32 -s 854x480 -strict experimental -ab 128k -y",".480p.Q.mp4"],
//				["ffmpeg"," -qmax 32 -s 640x360 -strict experimental -ab 128k -y",".360p.Q.mp4"],
				["ffmpegMultipass","-pass 1 -vcodec libx264 -vb 1024k -minrate 128k -maxrate 1536k -bufsize 224k -s 854x480 -strict experimental -ab 128k -y",".480p.mp4"],
				["ffmpegMultipass","-pass 1 -vcodec libx264 -vb 768k -minrate 128k -maxrate 1280k -bufsize 224k -s 640x360 -strict experimental -ab 128k -y",".360p.mp4"]
			];
			break;
		default:
			return showFail(event);
		}

/*********************************************************
/*	OLD RENAMING CODE - UI ELEMENTS ARE CURRENTLY HIDDEN *
/*********************************************************

	if (prefPreBox || prefDateBox || prefSufBox) showStarted(event);
//	showSuccess(event);

	for (var i=0; i<uri.length; i++) {
		var name = uriParts[i][0];
		var newName = name;
		var rename = (prefPrefix.length > 0 && prefPreBox)?prefPrefix+prefSpacer:"";
		var rename2 = (prefSuffix.length > 0 && prefSufBox)?prefSpacer+prefSuffix:"";

		if (prefDateBox) {
			var getDate = widget.system("/usr/bin/GetFileInfo -d "+uriParts[i][0], null);
			var date = getDate.outputString;
			date = date.split(" ");
			date = date[0].split("/");
			date = (prefDateReverseBox)?date[2]+prefDateSpacer+date[0]+prefDateSpacer+date[1]:date[1]+prefDateSpacer+date[0]+prefDateSpacer+date[2];
			rename = rename+date+prefSpacer;
		}

		if (rename.length > 1 || rename2.length > 1) {
			rename = rename.replace(/ /g,"\\ ");
			rename2 = rename2.replace(/ /g,"\\ ");
			name = uriParts[i][1]+rename+uriParts[i][2]+uriParts[i][3];
			newName = uriParts[i][1]+rename+uriParts[i][2]+rename2+typeName;
	alert("name = "+name);
	alert("newName = "+newName);
//			widget.system("/bin/mv -n "+uriParts[i][0]+" "+uriParts[i][1]+rename+uriParts[i][2]+uriParts[i][3], null);
			widget.system("/bin/mv -n "+uriParts[i][0]+" "+name, null);
		} else {
			newName = uriParts[i][1]+rename+uriParts[i][2]+rename2+typeName;
		}
//	alert("name segments: "+uriParts[i].join("\n"));
//	alert("name = "+name);
//	alert("newName = "+newName);
//		alert("last file? "+(i+1)+"=="+uri.length);
		if (i+1==uri.length) showSuccess(event);
//		widget.system("qt_tools/qt_export --loadsettings="+type+" "+name+" "+newName, endHandler2((i+1==uri.length)?true:false));
		startEncode(name,newName,type,(i+1==uri.length)?true:false);
	}
//*/

	for (var i=0; i<uri.length; i++) {
//		alert("name segments: "+uriParts[i].join("\n"));
		var name = [uriParts[i][1]+uriParts[i][2],uriParts[i][3]];
		alert("name[0] = "+name[0]);
		alert("name[1] = "+name[1]);

		if (i+1==uri.length) showSuccess(event);
		startEncode(name,type,(i+1==uri.length)?true:false);
	}

//	showSuccess(event);
} catch (ex) {
	alert("Problem fetching URI: " + ex);
	showFail(event);
	}
	event.stopPropagation();
	event.preventDefault();
}

function startEncode(name,type,end) {
try {
	showSuccess(event);
//	alert("First File:\nstartEncode type: "+type[0][0]+"\nstartEncode string: "+type[0][1]+"\nstartEncode extension: "+type[0][2]);

	for (var i=0; i<type.length; i++) {
		if (type[i][0]=="qt_tools") {
			alert(prefLocation+"qt_export --loadsettings="+prefLocation+type[i][1]+" "+name[0]+name[1]+" "+name[0]+type[i][2]);
			widget.system(prefLocation+"qt_export --loadsettings="+prefLocation+type[i][1]+" "+name[0]+name[1]+" "+name[0]+type[i][2], (end)?endHandler:endHandlerFake);
		} else if (type[i][0]=="ffmpeg2theora") {
			alert(prefLocation3+"ffmpeg2theora "+name[0]+name[1]+" "+type[i][1]+" "+name[0]+type[i][2]);
			widget.system(prefLocation3+"ffmpeg2theora "+name[0]+name[1]+" "+type[i][1]+" "+name[0]+type[i][2], (end)?endHandler:endHandlerFake);
// Add PCastAction support at a later date? Keeping in mind that Lion kills it and replaces with something else
		} else {
			if (type[i][0]=="ffmpegMultipass") {
				alert(prefLocation2+"ffmpeg -i "+name[0]+name[1]+" "+type[i][1]+" "+name[0]+type[i][2]);
				widget.system(prefLocation2+"ffmpeg -i "+name[0]+name[1]+" "+type[i][1]+" "+name[0]+type[i][2], secondEncode(name,type[i],end));
			} else {
				alert(prefLocation2+"ffmpeg -i "+name[0]+name[1]+" "+type[i][1]+" "+name[0]+type[i][2]);
				widget.system(prefLocation2+"ffmpeg -i "+name[0]+name[1]+" "+type[i][1]+" "+name[0]+type[i][2], (end)?endHandler:endHandlerFake);
			}
		}
	}

//	alert("startEncode end: "+end);
//	endHandler();
	return true;
} catch (ex) {
	alert("Problem encoding 1: " + ex);
	showFail(event);
	}
}

function secondEncode(name,type,end) {
type[1] = type[1].replace("-pass 1","-pass 2");
try {
	widget.system(prefLocation2+"ffmpeg -i "+name[0]+name[1]+" "+type[1]+" "+name[0]+type[2], (end)?endHandler:endHandlerFake);
//	endHandler();
	return true;
} catch (ex) {
	alert("Problem encoding 2: " + ex);
	showFail(event);
	}
}

function endHandler(output) {
//	alert("output = "+output.outputString);
	alert("endHandler: "+output);
	showMain();
}

function endHandlerFake(output) {
//	alert("output = "+output.outputString);
	alert("endHandlerFake: "+output);
}

function endHandler2(end) {
	alert("endHandler, end? "+end);
	if (end) showMain();
}


function sortName(a, b) {
	var x = a.toLowerCase();
	var y = b.toLowerCase();
	return (x < y) ? -1 : ((x > y) ? 1 : 0);
}

function sortNumber(a, b) {
	return a - b;
}

function sortAlphaNum(a, b) {
	// the next four lines are designed specifically for OS X file arrays
	// and will need to be modified depending on the situation
	var x = a.split("/");
	var y = b.split("/");
	x = x[x.length-1].replace(/\\\s/g," ").split(/(\d+)/);
	y = y[y.length-1].replace(/\\\s/g," ").split(/(\d+)/);
	for (var i in x) {
		if (x[i] && !y[i] || isFinite(x[i]) && !isFinite(y[i])) {
			return -1;
		} else if (!x[i] && y[i] || !isFinite(y[i]) && isFinite(y[i])) {
			return 1;
		} else if (!isFinite(x[i]) && !isFinite(y[i])) {
			x[i] = x[i].toLowerCase();
			y[i] = y[i].toLowerCase();
			if (x[i] < y[i]) return -1;
			if (x[i] > y[i]) return 1;
		} else {
			x[i] = parseFloat(x[i]);
			y[i] = parseFloat(y[i]);
			if (x[i] < y[i]) return -1;
			if (x[i] > y[i]) return 1;
		}
	}
	return 0;
}



// Key listeners

function selectIt(event) {
	if(event.target){
		event = event.target
	}
//	event.focus();
	event.select();
}

// CurrentView animations

function showMain(event) {
	document.getElementById("stack").object.setCurrentView("main", false, true);
}

function showStarted(event) {
	alert("show Started panel!");
	document.getElementById("stack").object.setCurrentView("started", true, true);
}

function showSuccess(event) {
	document.getElementById("stack").object.setCurrentView("success", true, true);
}

function showFail(event) {
	document.getElementById("stack").object.setCurrentView("fail", true, true);
}

function showWrong(event) {
	document.getElementById("stack").object.setCurrentView("wrong", true, true);
}

function showUpdate(event) {
	document.getElementById("stack").object.setCurrentView("update", true, true);
}

// Get Key Value

function getKeyValue(plist, key) {
	var infoPlist = new XMLHttpRequest();
	infoPlist.open("GET", plist, false);
	infoPlist.send(null);
	infoPlist = infoPlist.responseText.replace(/(<([^>]+)>)/ig,"").replace(/\t/ig,"").split("\n");
	for (var i=0; i<infoPlist.length; i++)
		if (infoPlist[i] == key) return infoPlist[i+1];
	return false;
}

// Auto Update

function versionCheck(event) {
//	return null;
	var request = new XMLHttpRequest();
	var address = "http://iaian7.com/files/dashboard/alchemist/version.php?RandomKey=" + Date.parse(new Date());
	request.onload = function() { versionCheckEnd(request); };
	request.open("GET", address);
//	request.setRequestHeader("Cache-Control", "no-cache");
	request.send(null);
}

function versionCheckEnd(request){
	if (request.status == 200) {
		var versions = request.responseText.split("\n");
		var bundleVersion = getKeyValue("Info.plist", "CFBundleVersion");
		var websiteVersion = versions[0];
//		alert("bundleVersion: "+bundleVersion);
//		alert("websiteVersion: "+websiteVersion);

		if (websiteVersion > bundleVersion) {
			document.getElementById("newVersion").innerHTML = "version "+versions[0]+"<br/>"+versions[1];
			return showUpdate();
		} else {
			alert("you have an up to date version");
		}
	} else {
		alert("there's been an error fetching HTTP data");
	}
}

// Download File

function versionDownload() {
	widget.openURL("http://iaian7.com/files/dashboard/alchemist/Alchemist.zip");
	showMain();
}

// Visit the website

function iaian7(event)
{
	widget.openURL("http://iaian7.com/dashboard/alchemist");
}