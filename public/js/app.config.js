"use strict";
var app;
(function (app) {
    var Config = (function () {
        function Config($routeProvider) {
            var rutas = [
                { url: '/', config: {
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
