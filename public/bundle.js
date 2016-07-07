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
	ngApp.config(app_config_1.app.Config);
	ngApp.controller("controller.Main", app_controller_main_1.controller.Main);
	ngApp.controller("controller.Help", app_controller_main_1.controller.Help);


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	var app;
	(function (app) {
	    var Config = (function () {
	        function Config($routeProvider) {
	            var rutas = [
	                {
	                    url: '/', config: {
	                        controller: 'controller.Main',
	                        templateUrl: 'views/landing.html'
	                    }
	                },
	                {
	                    url: '/help', config: {
	                        controller: 'controller.Help',
	                        templateUrl: 'views/help.html'
	                    }
	                }
	            ];
	            for (var i = 0; i < rutas.length; i++) {
	                var ruta = rutas[i];
	                $routeProvider.when(ruta.url, ruta.config);
	            }
	            $routeProvider.otherwise({
	                redirectTo: '/'
	            });
	        }
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
	        function Main($http) {
	            this.$http = $http;
	            console.log('Controlador MAIN');
	            this.$http.get("http://google.com");
	        }
	        Main.$inject = ['$http'];
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


/***/ }
/******/ ]);