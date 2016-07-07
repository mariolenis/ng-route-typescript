export module controller
{
    export class Main
    {
        static name: string = 'Main';
        constructor()
        {
            console.log('Controlador MAIN');
        }
        
        doSomething ()
        {
            console.log('Hola');
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