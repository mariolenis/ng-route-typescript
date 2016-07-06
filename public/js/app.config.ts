export module app
{
    export class Config
    {
        static $inject = ["$routeProvider"];
        // los métodos estáticos se exportan como nombres estáticos
        static setup($routeProvider: ng.route.IRouteProvider)
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