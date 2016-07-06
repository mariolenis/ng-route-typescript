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
	var ngApp = angular.module('ngtsApp', ['ngRoute']);
	ngApp.config(app_config_1.app.Config);
	//# sourceMappingURL=app.js.map

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	var app;
	(function (app) {
	    var Config = (function () {
	        function Config($routeProvider) {
	            this.$routeProvider = $routeProvider;
	            this.iLading = {};
	            this.iHelp = {};
	            this.iLading.controller = "app.controller.main";
	            this.iLading.templateUrl = "views/lading.html";
	            this.iHelp.controller = "app.controller.help";
	            this.iHelp.templateUrl = "views/help.html";
	            $routeProvider.when('/', this.iLading);
	            $routeProvider.when('/help', this.iHelp);
	            $routeProvider.otherwise(this.iLading);
	        }
	        Config.$inject = ['$routeProvider'];
	        return Config;
	    }());
	    app.Config = Config;
	})(app = exports.app || (exports.app = {}));
	//# sourceMappingURL=app.config.js.map

/***/ }
/******/ ]);