//Objetos literales

const persona = {
    nombre: 'tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        cuidad: 'New York',
        zip: 123456,
        lat: 99.123,
        log: 87.12
    }
}

//console.table(persona)
//console.log(persona)
//console.log(persona)


//PARA CLONAR
const persona2 = {...persona}
persona2.nombre = 'Peter'

console.log(persona)
console.log(persona2)