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