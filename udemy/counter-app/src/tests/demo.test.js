//https://jestjs.io/

/**
 * Ejemplo de prebas
 */

describe('Pruebas del archivo demo.test.js', () => {
    test('debe de ser iguales los strings', () => {
        const isActive = false;

        //1. Inicializacion
        const mensaje = 'Hola mundo'

        //2. Estimulo
        const mensaje2 = `Hola mundo`

        //3. Observar compartamiento assert
        expect(mensaje).toBe(mensaje2)
    })
})



