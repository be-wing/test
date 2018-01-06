// JavaScript Document

if(isSmartphoneCheck()){
	document.write('<link href="common/css/sp.css" rel="stylesheet" type="text/css" />');
}


// UA Check
function isSmartphoneCheck(){
	var smartphoneMatchUA = new Array();
	smartphoneMatchUA=[
		'iPhone',         // Apple iPhone
		'iPod',           // Apple iPod touch
		'Android',        // 1.5+ Android
		'dream',          // Pre 1.5 Android
		'CUPCAKE',        // 1.5+ Android
		'blackberry9500', // Storm
		'blackberry9530', // Storm
		'blackberry9520', // Storm v2
		'blackberry9550', // Storm v2
		'blackberry9800', // Torch
		'webOS',          // Palm Pre Experimental
		'incognito',      // Other iPhone browser
		'webmate'         // Other iPhone browser
	];
	var pattern = new RegExp(smartphoneMatchUA.join('|'), 'i');
	return pattern.exec(navigator.userAgent);
}