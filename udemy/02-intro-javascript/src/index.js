/// Template String

const nombre = 'juan carlos'
const apellido = 'Santamaria'

//const nombreCopleto = nombre + ' ' + apellido
const nombreCopleto = `${nombre} ${apellido}`


console.log(nombreCopleto)

function getSaludo(nombre) {
    return `Hola Mundo ${nombre}`
}

console.log(`Este es un texto ${ getSaludo(nombre) }`)