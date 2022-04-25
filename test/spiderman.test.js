// Prueba de unidad con TDD
const Spiderman = require('./../app/spiderman')

describe("Unit Test for Spiderman class", () => {
    test('1) Create an Spiderman object', () => {
        
        // Aquí escribimos el código que queremos usar tal cuál
        // Quiero poder instanciar un objeto Spiderman con esta informacion
        const andrewGarfield = new Spiderman(
            "Spiderman Sony", 
            31, 
            "Andrew Garfield", 
            2,
            "Sony"
        )

        // Validamos que este codigo funcione
        expect(andrewGarfield.name).toBe("Spiderman Sony")
        expect(andrewGarfield.age).toBe(31)
        expect(andrewGarfield.actor).toBe("Andrew Garfield")
        expect(andrewGarfield.movies).toBe(2)
        expect(andrewGarfield.studio).toBe("Sony")
    });

    // Prueba 2
    /* Usar un método que nos regrese la siguiente información: autor y
     estudio al que pertenece spiderman instanciado
        Ejemplo:

        tomHolland.getInfo() // esto necesita regresar: "Hey, I'm Tom Holland from Marvel studio"
    */
    test('2) Use the method getInfo()', () => {
        const tomHolland = new Spiderman(
            "Spiderman Marvel",
            25,
            "Tom Holland",
            5,
            "Marvel"
        )

        // validamos el metodo
        expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel Studio")
    });

});


