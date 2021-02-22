import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string'

describe('Pruebas 02-template-string.js', () => {

    test('getSaludo debe de retornar Hola Fernando', () => {
        
        const nombre = 'Fernando'
        
        const saludo = getSaludo(nombre)

        expect(saludo).toBe('Hola '+nombre)
    })

    
    test('getSaludo debe de retornar Hola Carlos si no hay argumento en el nombre', () => {
        
        const nombre = 'Carlos'

        const saludo = getSaludo()

        expect(saludo).toBe('Hola '+nombre)
    })


})
