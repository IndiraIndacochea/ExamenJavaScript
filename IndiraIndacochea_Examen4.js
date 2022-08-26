class Persona{
    nombre;
    apellido;
    edad;
    constructor(nombre,apellido,edad)
    {this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
}
getDetalles( ){
    console.log ("Nombre: " + this.nombre);
    console.log ("Apellido: " + this.apellido);
    console.log ("Edad: " + this.edad); }
} 
 let persona1= new Persona("Indira ", "Indacochea ", 39);
 persona1.getDetalles();

class empleado extends Persona{
    tipoEmpleado;
    constructor(nombre,apellido,edad,tipoEmpleado)
    {
        super(nombre,apellido,edad);
        
        this.tipoEmpleado=tipoEmpleado;
     }
 getDetalles(){
        super.getDetalles;
        console.log(this.tipoEmpleado);
        if (this.tipoEmpleado == "C") {
            console.log ( "Empleado de confianza");
            
        }else if (this.tipoEmpleado == "D") {
            console.log ("Es empleado de sindicato");
    
        }
    }

}
let empleado1= new empleado("Indira ", "Indacochea ", 39, "C");
empleado1.getDetalles();

class nomina{

}