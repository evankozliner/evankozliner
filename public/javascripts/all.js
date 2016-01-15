(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _request = require('./request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// consider document.querySelector?
document.getElementById("blog").onclick = function (e) {
	e.preventDefault();
	var blogRequest = new _request2.default();
	blogRequest.get('/posts').then(function (res) {
		document.getElementById('blogContent').style.display = 'block';
		var listItems = document.getElementById('blogContent').children;
		var postData = JSON.parse(res).posts.Items;
		postData.forEach(function (e, i) {
			var anchor = listItems[i].children[0];
			console.log(listItems[i].children[0]);
			listItems[i].style.display = 'block';
			anchor.textContent = e['name']['S'];
			anchor.addEventListener("click", function (e) {
				loadPost(anchor, e);
			});
		});
		document.getElementById('aboutContent').style.display = 'none';
	});
};
/*document.getElementsByClassName("hidden-li").onlick = (e) => {
	console.log(e)
	e.preventDefault()
	console.log('hi')
	console.log(this)
}*/

document.getElementById("about").onclick = function (e) {
	e.preventDefault();
	var aboutRequest = new _request2.default();
	aboutRequest.get('/about').then(function (res) {
		document.getElementById('aboutContent').style.display = 'block';
		document.getElementById('blogContent').style.display = 'none';
	});
};

var loadPost = function loadPost(anchor, e) {
	e.preventDefault();
	console.log("hi");
	console.log(anchor);
	var blogRequest = new _request2.default();
	blogRequest.get("/posts/" + anchor.text.replace(/ /g, "_")).then(function (res) {
		console.log(res);
	});
};

},{"./request":2}],2:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Request = (function () {
	// Try getting rid of this?

	function Request() {
		_classCallCheck(this, Request);
	}

	_createClass(Request, [{
		key: "get",
		value: function get(url) {
			return new Promise(function (resolve, reject) {
				var req = new XMLHttpRequest();
				req.open('GET', url);
				req.onload = function () {
					if (req.status == 200) {
						console.log("200!");
						resolve(req.response);
					} else {
						reject(Error(req.statusText));
					}
				};
				req.onerror = function () {
					reject(Error("Network Error"));
				};
				req.send();
			});
		}
	}]);

	return Request;
})();

exports.default = Request;

},{}]},{},[1]);
