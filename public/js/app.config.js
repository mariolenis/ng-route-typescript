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