function salario (horas){ 

  let salario
  let salarioExtra 

  if (horas<40){
    salario=horas*265
    console.log('El total a pagar por horas laborales normale (40hrs) es de ' + (salario))
  }

  if (horas>40){
    salarioExtra=(horas-40)*350
    console.log('El total a pagar por horas laborales normale (40hrs) es de ' + (40*265))
    console.log("El total a pagar por horas extra " + (horas-40) + " hrs es de " + salarioExtra)
  }
} 

salario(53)