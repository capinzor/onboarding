class Persona{
    constructor (nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;

    }
    
    getDetalles(){
       return this.nombre + ' ' + this.apellido + ' de ' + this.edad + ' años';
    }
}

class Empleado extends Persona{
    constructor (nombre, apellido, edad, tipo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.tipo = tipo;
    }

    getDetalles(){
        return super.getDetalles() + '   - ' + this.tipo;
    }
}

class Nomina{

   constructor(propiedades=[['Pedro', 'Perez', 35, 'C'], ['Carlos', 'Fernandez', 40, 'C'], ['Diego', 'Lopez', 30, 'S']]){
       this.propiedades = propiedades
   }

    calcularPago(tipo){
        let pago;
        let dias;
        if (tipo=='S') {
            pago = 350 * dias * 0.9
        }
        if (tipo=='C'){
            pago= 500 * dias * 0.87
        }
        return pago;
    } 

    calcularNomina(){

    }

}