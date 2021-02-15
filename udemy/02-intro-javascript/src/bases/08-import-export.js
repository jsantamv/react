//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/find

//IMPORTACION DE ARCHIVOS
//import heroes,{owners} from './data/heroes';
import heroes,{owners} from '../data/heroes';

//CON FIND
const getHereobyId = (id) => (heroes.find(miHeroe => miHeroe.id = id))
// console.log(getHereobyId(3))


export const getHereo2byId = (id) => (heroes.find((miHeroe) => miHeroe.id === id))
// console.log(getHereo2byId(3))


//CON FILTER
export const getHerobyOwner = (owner) => (heroes.filter((hero) => hero.owner === owner))
// console.log(getHerobyOwner("Marvel"))
// console.log(getHerobyOwner("DC"))

// console.log(owners)
