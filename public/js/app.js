"use strict";
var app_config_1 = require('./app.config');
var app_controller_main_1 = require('./app.controller.main');
var ngApp = angular.module('ngtsApp', ['ngRoute']);
ngApp.config(app_config_1.app.Config);
ngApp.controller("controller.Main", app_controller_main_1.controller.Main);
ngApp.controller("controller.Help", app_controller_main_1.controller.Help);
