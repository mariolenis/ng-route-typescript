"use strict";
var app;
(function (app) {
    var Config = (function () {
        function Config() {
        }
        Config.setup = function ($routeProvider, iRutas) {
            $routeProvider.when('/', {
                controller: 'controller.Main',
                templateUrl: 'views/landing.html'
            });
            $routeProvider.when('/help', {
                controller: 'controller.Help',
                templateUrl: 'views/help.html'
            });
            $routeProvider.otherwise({
                redirectTo: '/'
            });
        };
        Config.$inject = ["$routeProvider"];
        return Config;
    }());
    app.Config = Config;
})(app = exports.app || (exports.app = {}));
//# sourceMappingURL=app.config.js.map