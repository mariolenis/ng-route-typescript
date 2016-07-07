export module controller
{
    interface IPersona
    {
        nombre: string;
        apellido: string;
    }
    
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
        persona: IPersona = <IPersona>{};
        constructor()
        {
            this.persona.nombre = "Help";
            console.log('Controlador HELP ');
        }
        
        /**
         * @param texto: string Texto a publicar.
         */
        doSomething (texto: string)
        {
            console.log(texto);
        }
    }
    
    class nClass extends Help
    {
        constructor()
        {
            /**
             * this.ss.nombre se instancia en el momento que se llama al constructor
             * de la clase Help con super()
             */
            super();
            this.persona.apellido = "nClass";
            this.doSomething(this.persona.apellido + " " + this.persona.apellido + " está haciendo algo.");
        }
    }
}