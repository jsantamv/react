//arreglos en JS

//const arreglo = new Array(100)
const arreglo = [1,2,3,4]
// arreglo.push(1) /* no es recomendable */
// arreglo.push(2)
// arreglo.push(3)
// arreglo.push(4)

let arreglo2 = [...arreglo,5] /** clonamos el arreglo */

//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map

let arreglo3 = arreglo2.map(function(numero){    
    return numero*2
});


console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)
