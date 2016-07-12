export module controller
{
    interface IPersona
    {
        nombre: string;
        apellido: string;
    }
    
    export class Main
    {
        constructor()
        {
            console.log('Controlador MAIN');
        }
        
        static getName(): string
        {
            return 'Main';
        }
    }
    
    export class Help
    {
        persona: IPersona = <IPersona>{};
        constructor()
        {
            this.persona.nombre = "NN";
            console.log('Controlador HELP');
        }
    }
}