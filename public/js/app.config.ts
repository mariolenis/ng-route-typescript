export module app
{
    export class Config
    {
        static $inject = ["$routeProvider"];
        // los métodos estáticos se exportan como nombres staticos
        static setup($routeProvider: ng.route.IRouteProvider, iRutas: ng.route.IRoute[])
        {                        
            $routeProvider.when('/', 
            {
                controller: 'controller.Main',
                templateUrl: 'views/landing.html'
            });
            $routeProvider.when('/help', 
            {
                controller: 'controller.Help',
                templateUrl: 'views/help.html'
            });
            $routeProvider.otherwise({
                redirectTo: '/'
            })
        }
    }
}