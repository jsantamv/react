import { getImagen } from "../../base/11-async-await"

describe('Pruebas Async con await', () => {

    /*Cuando queremos una prueba asyc con feth colocamos async*/
    test('Deberia de devolver una URL', async () => {

        const url = await getImagen();
        //console.log(url)
        //expect(typeof url).toBe('string')
        expect(url.includes('https://')).toBe(true)
        
    })
})
