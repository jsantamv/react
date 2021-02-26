import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp"
import heroes from "../../data/heroes"


describe('Test Funciones de Hero ', () => {
    test('should get a Hero getHeroeById', () => {
        const id = 1

        const hero = getHeroeById(1)

        const heroDb = heroes.find(h => h.id)

        expect(hero).toEqual(heroDb)

    })


    test('should get a Hero Si Hero no existe', () => {
        const id = 10

        const hero = getHeroeById(id)

        const heroDb = heroes.find(h => h.id === id)

        expect(hero).toBe(undefined)

    })

    test('should Heores deben de ser DC', () => {
        const owner = 'DC'
        const hero = getHeroesByOwner(owner)

        const heroDb = heroes.filter(h => h.owner === owner)

        expect(hero).toEqual(heroDb)
    })

    test('should retornar un arreglo con los Heroes de Marvel', () => {
        const owner = 'Marvel'

        const hero = getHeroesByOwner(owner)

        expect(hero.length).toEqual(2)
    })

})
