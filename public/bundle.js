/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var app_config_1 = __webpack_require__(1);
	var app_controller_main_1 = __webpack_require__(2);
	var ngApp = angular.module('ngtsApp', ['ngRoute']);
	ngApp.config(app_config_1.app.Config.setup);
	ngApp.controller("controller.Main", app_controller_main_1.controller.Main);
	ngApp.controller("controller.Help", app_controller_main_1.controller.Help);
	//# sourceMappingURL=app.js.map

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	var app;
	(function (app) {
	    var Config = (function () {
	        function Config() {
	        }
	        Config.setup = function ($routeProvider, iRutas) {
	            $routeProvider.when('/', {
	                controller: 'controller.Main',
	                templateUrl: 'views/landing.html'
	            });
	            $routeProvider.when('/help', {
	                controller: 'controller.Help',
	                templateUrl: 'views/help.html'
	            });
	            $routeProvider.otherwise({
	                redirectTo: '/'
	            });
	        };
	        Config.$inject = ["$routeProvider"];
	        return Config;
	    }());
	    app.Config = Config;
	})(app = exports.app || (exports.app = {}));


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	var controller;
	(function (controller) {
	    var Main = (function () {
	        function Main() {
	            console.log('Controlador MAIN');
	        }
	        return Main;
	    }());
	    controller.Main = Main;
	    var Help = (function () {
	        function Help() {
	            console.log('Controlador HELP');
	        }
	        return Help;
	    }());
	    controller.Help = Help;
	})(controller = exports.controller || (exports.controller = {}));
	//# sourceMappingURL=app.controller.main.js.map

/***/ }
/******/ ]);