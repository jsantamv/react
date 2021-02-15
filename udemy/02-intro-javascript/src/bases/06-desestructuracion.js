//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
//Desestructuracion //asignacion desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Iroman',
}

//desestructuramos
const { nombre, edad, clave } = persona

const userContex = ({ clave, nombre, edad, rango = 'Capitan' }) => ({
    nombreClave: clave,
    anios: edad,
    latlng: {
        lat: 14.1234,
        lng: -12.1231
    }
})

//desectruturamos
const { nombreClave, anios, latlng: { lat, lng } } = userContex(persona)

console.log({ nombreClave, anios })
console.log({ lat, lng })