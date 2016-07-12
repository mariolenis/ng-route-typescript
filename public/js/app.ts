//import * as angular from 'angular';
import { app } from './app.config';
import { controller } from './app.controller.main';

let ngApp = angular.module('ngtsApp', ['ngRoute']);
    ngApp.config(app.Config);
    ngApp.controller(controller.Main.getName(), controller.Main);
    ngApp.controller("controller.Help", controller.Help);