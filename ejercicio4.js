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
        super(nombre,apellido,edad)
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

    calcularPago(tipo,dias){
        let pago;
        
        if (tipo=='S') {
            pago = 350 * dias * 0.9
        }
        if (tipo=='C'){
            pago= 500 * dias * 0.87
        }
        return pago;
    } 

    calcularNomina(){
        for (let i = 0; i < this.propiedades.length; i++) {
            let dias =Math.floor(Math.random() * (16 - 5) + 5);
            console.log(new Empleado(this.propiedades[i][0],
                this.propiedades[i][1],this.propiedades[i][2],
                this.propiedades[i][3]).getDetalles() + ' pertenece a '
                +((this.propiedades[i][3])=='C' ? 'Empleado de confianza':'Sindicato')
                + ' con un sueldo de $'
                + this.calcularPago(this.propiedades[i][3],dias)      
                + ' por ' + dias + ' días trabajados')
        }
    }

}

console.log(new Nomina().calcularNomina())