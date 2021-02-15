//DESESTRUCTURACION DE ARREGLOS

const personajes = ['Goku', 'Vegeta', 'Trunks']
//F2 para renombrar
const [, , p3] = personajes
console.log(p3)


const retornaArreglo = () => {
    return ['ABC', 123]
}

const [letras, numeros] = retornaArreglo()
console.log(letras, numeros)

//un arreglo con una funcion implicita
const userState1 = (valor) => {
    return [valor, (x) => { console.log(`Hola Mundo ${x} `) }]
}

//simplificado
const userState2 = (valor) => ([valor, (users) => { console.log(`Hola Mundo ${users} `) }])

//desesctruturamos el arreglo y la funcion
const [nombre, setNombre] = userState2('Goku')
console.log(nombre)
setNombre('holanda');
