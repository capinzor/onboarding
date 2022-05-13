let arreglo = [3, 2, 1, 1, 2, 3, 2, 3, 1]
let arreglo2 = [1, 1, 2, 2, 1, 1, 1, 2, 1] 

console.log('arreglo: ['+ arreglo +']')
console.log('----------------------------------------------')
console.log('arreglo 2: ['+ arreglo2 +']')
 

for (let i = 0; i < arreglo.length; i++) {
    console.log('----------------------------------------------')
    console.log(arreglo[i] + ' + ' + arreglo2[i] + ' = ' + (arreglo[i] + arreglo2[i]))
    console.log(arreglo[i] + ' + ' + arreglo2[i] + ' = ' + (arreglo[i] + arreglo2[i]))    
}