export module app
{
    export class Config
    {
        private iLading: ng.route.IRoute = <ng.route.IRoute>{};
        private iHelp: ng.route.IRoute = <ng.route.IRoute>{};
        
        static $inject = ['$routeProvider'];
        
        constructor(private $routeProvider: ng.route.IRouteProvider)
        {
            this.iLading.controller = "app.controller.main";
            this.iLading.templateUrl = "views/lading.html";
            
            this.iHelp.controller = "app.controller.help";
            this.iHelp.templateUrl = "views/help.html"
            
            $routeProvider.when('/', this.iLading );
            $routeProvider.when('/help', this.iHelp);
            $routeProvider.otherwise(this.iLading);
        }
    }
}