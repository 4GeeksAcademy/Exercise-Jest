// Importar la función sum del archivo app.js

const { sum } = require('./app.js');

// Comienza tu primera prueba
test('Probar la funcion suma', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

        // Esperamos que la suma de esos 2 números sea 23
        expect(total).toBe(23);
    });

    test("One euro should be 1.07 dollars", function() {
        // Importo la funcion desde app.js
        const { fromEuroToDollar } = require('./app.js');
    
        // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
        const expected = 3.5 * 1.07;
    
        // Hago mi comparación (la prueba)
        expect(fromEuroToDollar(3.5)).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
    })

    test ("One dollar should be 156.5 yen", function(){
        
        const { fromDollarToYen } = require('./app.js');

        const expected = 4 * 156.5;

        expect(fromDollarToYen(4)).toBe(expected);
    })

    test ("One yen should be 0.87 pounds ", function (){
        
        const { fromYenToPound } = require('./app.js');

        const expected = 2 * 0.87 

        expect(fromYenToPound(2)).toBe(expected);
    })

