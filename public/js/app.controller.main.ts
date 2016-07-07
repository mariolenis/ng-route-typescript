export module controller
{
    export class Main
    {
        static name: string = 'Main';
        constructor()
        {
            console.log('Controlador MAIN');
        }
    }
    
    export class Help
    {
        constructor()
        {
            console.log('Controlador HELP');
        }
    }
}