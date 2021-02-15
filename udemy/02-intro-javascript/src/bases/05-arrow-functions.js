//FUNCIONES EN JS es trabajarla como constante

const saludar = function (nombre) {
    return `Hola, ${nombre}`
}

//lambda
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`
}

//simplificado
const saludar3 = (nombre) => `Hola, ${nombre}`

console.log(saludar('Goku'))
console.log(saludar2('Juank'))
console.log(saludar3('Krilim'))


const getUsers = () => ({
    uid: 123,
    username: 'jsantama'
})

console.table(getUsers())


const getUserActivo = (nombre) => ({
    uid: 'asdfa1123',
    username: nombre
})




const usuarioActivo = getUserActivo('juankita')

console.log(usuarioActivo)