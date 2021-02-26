import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('PRuebas con PROMESAS', () => {
    /*Cuando son asincronas ocupamos colocar done*/
    test('Debe de retornar un Heroe Async', (done) => {

        const id = 1;
        jest.setTimeout(8000)
        getHeroeByIdAsync(id)
            .then(h => {

                expect(h).toBe(heroes[0]);
                done();

            });
    });
 

    test('Debe de obtener el error si el erore no existe ', (done) => {
        
        const id = 10;
        jest.setTimeout(10000)
        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            });
    });
    
})
