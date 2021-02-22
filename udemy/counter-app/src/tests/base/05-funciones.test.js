import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base/05-funciones'

describe('prueba de funciones', () => {

    test('should return an objectt', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser()

        expect(user).toStrictEqual(userTest)

    })


    test('should return an object with Param', () => {

        const nombre = 'Carlos'

        const userTest = {
            uid: 'ABC567',
            username: nombre
        }

        const user = getUsuarioActivo(nombre)

        expect(user).toEqual(userTest)
    })

})
