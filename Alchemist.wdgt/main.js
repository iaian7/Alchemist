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
	updatePrefs();
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
			document.getElementById("feedback").innerHTML = "MP4, OGG, WebM 720p/540p";
			break;
		case 5:	// Desktop formats
			document.getElementById("feedback").innerHTML = "MP4, WMV 720p";
			break;
		case 6:	// Mobile devices
			document.getElementById("feedback").innerHTML = "MP4 480p/360p";
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
//	uri = uri.replace(/\%20/gi, "\\ "); // Decodes and escapes spaces
//	alert(uri);
	uri = unescape(uri);
//	alert(uri);
	uri = uri.replace(/ /gi, "\\ "); // Escape just spaces (trying to do this using \s in the next replace results in multiline breakdown)
	uri = uri.replace(/[\~\`\^\*\(\)\[\]\{\}\?\!\$\&\|\<\>\;\"'"\'"']/gi, "\\$&"); // Escape Unix command line characters (yes, you actually CAN use all of these in folder and file names!)
//	alert(uri);
	uri = uri.split("\n");
	uri = uri.sort(sortAlphaNum);
	for (var i=0; i<uri.length; i++) {
		uriParts[i] = uri[i].match(/(\/.+\/)(.+?)(\.\w{3,4})$/);
	}

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
				["ffmpegMultipass","-vcodec libx264 -vb 1536k -minrate 128k -maxrate 3072k -bufsize 224k -vf \"lutyuv=y=gammaval(1.2)\" -s 1280x720 -strict experimental -ab 160k -y",".720p.mp4"],
				["ffmpegMultipass","-vcodec libx264 -vb 1024k -minrate 128k -maxrate 2560k -bufsize 224k -vf \"lutyuv=y=gammaval(1.2)\" -s 960x540 -strict experimental -ab 128k -y",".540p.mp4"],
				["ffmpeg","-vcodec libx264 -q 18 -trellis 1 -me_range 32 -i_qfactor 0.71 -g 60 -sc_threshold 20 -qmin 4 -qmax 48 -qdiff 8 -vf \"lutyuv=y=gammaval(1.2)\" -s 1280x720 -strict experimental -ab 160k -y",".720p.Q.mp4"],
				["ffmpeg","-vcodec libx264 -q 18 -trellis 1 -me_range 32 -i_qfactor 0.71 -g 60 -sc_threshold 20 -qmin 4 -qmax 48 -qdiff 8 -vf \"lutyuv=y=gammaval(1.2)\" -s 960x540 -strict experimental -ab 128k -y",".540p.Q.mp4"],
				["ffmpeg2theora","-V 2560k -A 160k --two-pass --speedlevel 0 --max_size 1280x720 -o",".720p.ogg"],
				["ffmpeg2theora","-V 1920k -A 128k --two-pass --speedlevel 0 --max_size 960x540 -o",".540p.ogg"],
				["ffmpeg","-vcodec libvpx -vb 1280k -minrate 0k -maxrate 2048k -bufsize 224k -vf \"lutyuv=y=gammaval(1.1)\" -f webm -ab 160k -s 1280x720 -y",".720p.webm"],
				["ffmpeg","-vcodec libvpx -vb 1024k -minrate 0k -maxrate 1536k -bufsize 224k -vf \"lutyuv=y=gammaval(1.1)\" -f webm -ab 128k -s 960x540 -y",".540p.webm"]
			];
			break;
		case 5:	// Desktop formats
			type = [
				["ffmpegMultipass","-vcodec libx264 -vb 2048k -minrate 128k -maxrate 4096k -bufsize 224k -vf \"lutyuv=y=gammaval(1.2)\" -s 1280x720 -strict experimental -ab 160k -loglevel error -y",".720p.mp4"],
				["ffmpegMultipass","-vb 3072k -bt 2048k -vf \"lutyuv=y=gammaval(1.2)\" -s 1280x720 -ab 160k -y",".720p.wmv"]
			];
			break;
		case 6:	// Mobile devices
			type = [
				["ffmpegMultipass","-vcodec libx264 -vb 1024k -minrate 128k -maxrate 1536k -bufsize 224k -s 854x480 -strict experimental -ab 128k -y",".480p.mp4"],
				["ffmpegMultipass","-vcodec libx264 -vb 768k -minrate 128k -maxrate 1280k -bufsize 224k -s 640x360 -strict experimental -ab 128k -y",".360p.mp4"]
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
		var name = [uriParts[i][1],uriParts[i][2],uriParts[i][3]];
//		alert("name[0]+name[1] = "+name[0]+name[1]);
//		alert("name[2] = "+name[2]);

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
//	this prints out the root directory contents, making sure the command line has access to the QT_Tools export presets that are bundled with the widget
//	alert("AlchemistTest list root folder contents: "+widget.system("/bin/ls", null).outputString);
try {
	showSuccess(event);
//	alert("First File:\nstartEncode type: "+type[0][0]+"\nstartEncode string: "+type[0][1]+"\nstartEncode extension: "+type[0][2]);
	for (var i=0; i<type.length; i++) {
		if (type[i][0]=="qt_tools") {
			alert(prefLocation+"qt_export --loadsettings="+type[i][1]+" "+name[0]+name[1]+name[2]+" "+name[0]+name[1]+type[i][2]);
			widget.system(prefLocation+"qt_export --loadsettings="+type[i][1]+" "+name[0]+name[1]+name[2]+" "+name[0]+name[1]+type[i][2], (end)?endHandler:endHandlerFake);
		} else if (type[i][0]=="ffmpeg2theora") {
			alert(prefLocation3+"ffmpeg2theora "+name[0]+name[1]+name[2]+" "+type[i][1]+" "+name[0]+name[1]+type[i][2]);
			widget.system(prefLocation3+"ffmpeg2theora "+name[0]+name[1]+name[2]+" "+type[i][1]+" "+name[0]+name[1]+type[i][2], (end)?endHandler:endHandlerFake);
// Add PCastAction support at a later date? Keeping in mind that Lion kills it and replaces with something else
		} else {
			if (type[i][0]=="ffmpegMultipass") {
				var tempCommand = prefLocation2+"ffmpeg -i "+name[0]+name[1]+name[2]+" -pass 1 -passlogfile ~/.Trash/"+name[1]+type[i][2]+" "+type[i][1]+" "+name[0]+name[1]+type[i][2];
				var tempCommand = tempCommand+"\n";
				var tempCommand = tempCommand+prefLocation2+"ffmpeg -i "+name[0]+name[1]+name[2]+" -pass 2 -passlogfile ~/.Trash/"+name[1]+type[i][2]+" "+type[i][1]+" "+name[0]+name[1]+type[i][2];
				alert(tempCommand);
				widget.system(tempCommand, (end)?endHandler:endHandlerFake);
			} else {
				alert(prefLocation2+"ffmpeg -i "+name[0]+name[1]+name[2]+" "+type[i][1]+" "+name[0]+name[1]+type[i][2]);
				widget.system(prefLocation2+"ffmpeg -i "+name[0]+name[1]+name[2]+" "+type[i][1]+" "+name[0]+name[1]+type[i][2], (end)?endHandler:endHandlerFake);
			}
		}
	}

//	alert("startEncode end: "+end);
//	endHandler();
	return true;
} catch (ex) {
	alert("Problem encoding: " + ex);
	showFail(event);
	}
}

/**************************
//	Unused blocks of code
/**************************
function secondEncode(name,type,end) {
//	type[1] = type[1].replace("-pass 1","-pass 2");
try {
	alert("started pass 2");
	widget.system(prefLocation2+"ffmpeg -passlogfile "+name[0]+name[1]+type[2]+" -pass 2 -i "+name[0]+name[1]+name[2]+" "+type[1]+" "+name[0]+name[1]+type[2], cleanupEncode(name[0]+name[1]+type[2],end)).outputString;
//	endHandler();
	return true;
} catch (ex) {
	alert("Problem encoding pass 2: " + ex);
	showFail(event);
	}
}

function cleanupEncode(file,end) {
try {
	alert("cleaning log files\n"+file);
	alert("mv "+file+"*.log ~/.Trash/");
	widget.system("mv "+file+"*.log ~/.Trash/", (end)?endHandler:endHandlerFake);
//	endHandler();
	return true;
} catch (ex) {
	alert("Problem cleaning up: " + ex);
	showFail(event);
	}
}

function endHandler2(end) {
//	alert("endHandler, end? "+end);
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
*/

function endHandler(output) {
//	alert("output = "+output.outputString);
//	alert("endHandler: "+output);
	showMain();
}

function endHandlerFake(output) {
//	alert("output = "+output.outputString);
//	alert("endHandlerFake: "+output);
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
//			alert("you have an up to date version");
		}
	} else {
//		alert("there's been an error fetching HTTP data");
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