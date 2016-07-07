export module app
{
    interface IRutas
    {
        url: string;
        config: ng.route.IRoute;
    }
    
    export class Config
    {
        static $inject = ["$routeProvider"];
        constructor($routeProvider: ng.route.IRouteProvider)
        {
            let rutas: IRutas[] = [
                { url: '/', config : 
                    {
                        controller: 'controller.Main',
                        templateUrl: 'views/landing.html'
                    }
                }, 
                {
                    url: '/help', config :
                    {
                        controller: 'controller.Help', 
                        templateUrl: 'views/help.html'
                    }
                }
            ];
            
            for (let i = 0; i < rutas.length; i++)
            {
                let ruta = rutas[i];
                $routeProvider.when(ruta.url, ruta.config);
            }
            
            $routeProvider.otherwise({
                redirectTo: '/'
            });
        }
    }
}