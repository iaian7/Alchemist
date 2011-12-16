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
	document.getElementById("suffix").value = prefsuffix;
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

	var type = "";
	var typeName = "";
	switch (prefType) {
		case 0:
			type = "qt_export_prores422.st";
			typeName = ".pro422.mov";
			break;
		case 1:
			type = "qt_export_hdv_1080p.st";
			typeName = ".hdv1080.mov";
			break;
		case 2:
			type = "qt_export_hdv_720p.st";
			typeName = ".hdv720.mov";
			break;
		case 3:
			type = "qt_export_aic.st";
			typeName = ".aic.mov";
			break;
		default:
			return showFail(event);
			type = [];
			typeName = [];
			if (prefBatch1) {
				type.push("qt_export_youtube.st");
				typeName.push(".hd.mp4");
			}
			if (prefBatch2) {
				type.push("qt_export_540p.st");
				typeName.push(".540p.mp4");
			}
			if (prefBatch3) {
				type.push("ffmpeg");
				typeName.push(".hd.wmv");
			}
			if (prefBatch4) {
				type.push("ffmpeg");
				typeName.push(".540p.wmv");
			}
			if (prefBatch5) {
				type.push("qt_export_ios.st");
				typeName.push(".appletv.m4v");
			}
			if (prefBatch6) {
				type.push("ffmpeg");
				typeName.push(".ios.wmv");
			}
		}

//	alert("name segments: "+uriParts[i].join("\n"));

//***************
//***************
// What does this do, is it really necessary, and do I need to add prefSufBox?
//***************
//***************
	if (prefPreBox || prefDateBox) showStarted(event);
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

		if (rename.length > 0 || rename2.length > 0) {
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
		endEncode(name,newName,type,(i+1==uri.length)?true:false);
	}
//	showSuccess(event);
} catch (ex) {
	alert("Problem fetching URI: " + ex);
	showFail(event);
	}
	event.stopPropagation();
	event.preventDefault();
}

function endEncode(name,newName,type,end) {
try {
	showSuccess(event);
//	alert("endEncode name: "+name);
//	alert("endEncode newName: "+newName);
//	alert("endEncode type: "+type);
	widget.system("qt_tools/qt_export --loadsettings=qt_tools/"+type+" "+name+" "+newName, (end)?endHandler:endHandlerFake);
	alert("qt_tools/qt_export --loadsettings=qt_tools/"+type+" "+name+" "+newName);
	alert("endEncode end: "+end);
//	endHandler();
	return true;
} catch (ex) {
	alert("Problem creating ICNS: " + ex);
	showFail(event);
	}
}

function pcEncode(name,newName,type,end) {
try {
	showSuccess(event);
	widget.system("/usr/bin/pcastaction encode --prb --input="+name+" --output="+newName+" --encoder="+type, (end)?endHandler:endHandlerFake);
	alert("/usr/bin/pcastaction encode --prb --input="+name+" --output="+newName+" --encoder="+type);
	alert("pcEncode end: "+end);
//	endHandler();
	return true;
} catch (ex) {
	alert("Problem creating ICNS: " + ex);
	showFail(event);
	}
}

function ffEncode(name,newName,type,end) {
try {
	showSuccess(event);
	widget.system("/usr/bin/pcastaction encode --prb --input="+name+" --output="+newName+" --encoder="+type, (end)?endHandler:endHandlerFake);
	alert("/usr/bin/pcastaction encode --prb --input="+name+" --output="+newName+" --encoder="+type);
	alert("pcEncode end: "+end);
//	endHandler();
	return true;
} catch (ex) {
	alert("Problem creating ICNS: " + ex);
	showFail(event);
	}
}

function endHandler(output) {
//	alert("output = "+output.outputString);
	alert("endHandler");
	showMain();
}

function endHandlerFake(output) {
//	alert("output = "+output.outputString);
	alert("endHandlerFake");
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

		if (websiteVersion != bundleVersion) {
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