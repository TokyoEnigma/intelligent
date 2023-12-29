function b64EncodeUnicode(str) {
	return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
	}));
}

searchVirusTotal = function(word){
	var query = word.selectionText;
	chrome.tabs.create({url: "https:/www.virustotal.com/gui/search/" + query});
};

chrome.contextMenus.create({
	title: "Search in VirusTotal",
	contexts: ["selection"],
	onclick: searchVirusTotal
});

searchURLscan = function(word){
	var query = word.selectionText;
	chrome.tabs.create({url: "https:/www.urlscan.com/search/#" + query});
};

chrome.contextMenus.create({
	title: "Search in URLscan",
	contexts: ["selection"],
	onclick: searchURLscan
});

searchGreyNoise = function(word){
	var query = word.selectionText;
	chrome.tabs.create({url: "https:/www.greynoise.io/viz/query/?gnql=" + query});
};

chrome.contextMenus.create({
	title: "Search in GreyNoise",
	contexts: ["selection"],
	onclick: searchGreyNoise
});

decodeB64 = function(word){
	var query = word.selectionText;
	var cChef = "https://gchq.github.io/CyberChef/"
	while (query.endsWith("=") == true) {
		query = query.slice(0, -1);
	}
	query = b64EncodeUnicode(query)
	while (query.endsWith("=") == true ) {
		query = query.slice(0, -1);
	}
	chrome.tabs.create({url: cChef + "#recipe=From_Base64('A-Za-z0-9%2B/%3D', false)Remove_null_bytes()&input=" + query});
};

chrome.contextMenus.create({
	title: "Decode B64",
	contexts: ["selection"],
	onclick: decodeB64
});

