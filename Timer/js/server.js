/*
 * server.js
 */

var server = (function() {
	/*
	 * server:Init()
	 */
	function init() {

	}

	const SERVER_PATH = "../Timer-Server/";
	const TIMER_PATH = "../Timer/";

	/*
	 * server:json(url)
	 * @param url String Url
	 * @param callback Function
	 * Example use: server.json("js/goals.js",function(t){console.log(t.response);})
	 */
	function json(url, callback) {
		var jsonFile = new XMLHttpRequest();
		jsonFile.open("GET", url, true);
		jsonFile.send();
		jsonFile.onload = function() {
			callback(jsonFile)
		};
	}

	return {
		init: init,
		json: json
	}
})();
