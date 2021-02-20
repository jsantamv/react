const { act } = require("react-dom/test-utils");



const activo = true;

// let mensaje = '';

// if(activo){
//     mensaje = 'Activo'
// } else {
//     mensaje = 'Inactivo'
// }

//const mensaje = (activo)? 'Activo':'inactivo'
// const mensaje = (activo)? 'Activo':'inactivo'
// const mensaje = (activo)? 'Activo': null

const mensaje = !activo && 'Activo' //Forma corta de iff evaluando con and

console.log(mensaje)


