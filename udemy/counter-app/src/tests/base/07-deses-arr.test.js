//retornaArreglo

import { retornaArreglo } from "../../base/07-deses-arr"

describe('Pruebas en desesestructuraicon', () => {
    test('should return string and number', () => {
        const [letras, num] = retornaArreglo()

        //expect(arr).toEqual(['ABC',123])        

        expect(letras).toBe('ABC')
        expect(typeof letras).toBe('string')

        expect(num).toBe(123)
        expect(typeof num).toBe('number')



    })

})
