import { getHereo2byId } from "./bases/08-import-export";

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const result = getHereo2byId(2)
//         resolve(result)
//     }, 2000);
// })


// promesa.then((hereo) => {
//     console.log(hereo)
// })

const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = getHereo2byId(id);
            result ? resolve(result) : reject(`No existe hero ${id}`)
        }, 2000);
    })
}

getHeroByIdAsync(2)
    .then(console.log)
    .catch(console.warn)


