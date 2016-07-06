import { app } from './app.config';
import { controller } from './app.controller.main';

let ngApp = angular.module('ngtsApp', ['ngRoute']);
ngApp.config(app.Config.setup);
ngApp.controller("controller.Main", controller.Main);
ngApp.controller("controller.Help", controller.Help);