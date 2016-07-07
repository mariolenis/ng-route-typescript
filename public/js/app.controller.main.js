"use strict";
var controller;
(function (controller) {
    var Main = (function () {
        function Main() {
            console.log('Controlador MAIN');
        }
        Main.prototype.doSomething = function () {
            console.log('Hola');
        };
        Main.name = 'Main';
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
