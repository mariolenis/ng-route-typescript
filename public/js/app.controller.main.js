"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var controller;
(function (controller) {
    var Main = (function () {
        function Main() {
            console.log('Controlador MAIN');
        }
        Main.name = 'Main';
        return Main;
    }());
    controller.Main = Main;
    var Help = (function () {
        function Help() {
            this.persona = {};
            this.persona.nombre = "Help";
            console.log('Controlador HELP ');
        }
        Help.prototype.doSomething = function (texto) {
            console.log(texto);
        };
        return Help;
    }());
    controller.Help = Help;
    var nClass = (function (_super) {
        __extends(nClass, _super);
        function nClass() {
            _super.call(this);
            this.persona.apellido = "nClass";
            this.doSomething(this.persona.apellido + " " + this.persona.apellido + " está haciendo algo.");
        }
        return nClass;
    }(Help));
})(controller = exports.controller || (exports.controller = {}));
