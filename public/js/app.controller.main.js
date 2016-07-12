"use strict";
var controller;
(function (controller) {
    var Main = (function () {
        function Main() {
            console.log('Controlador MAIN');
        }
        Main.getName = function () {
            return 'Main';
        };
        return Main;
    }());
    controller.Main = Main;
    var Help = (function () {
        function Help() {
            this.persona = {};
            this.persona.nombre = "NN";
            console.log('Controlador HELP');
        }
        return Help;
    }());
    controller.Help = Help;
})(controller = exports.controller || (exports.controller = {}));
