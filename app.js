const sum = (a,b) => {
    return a + b
}


// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// const fromEuroToDollar = (euro) => {
//     let result =  euro * oneEuroIs.USD ;
// }

// Declaramos una función con el nombre exacto "frommEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = (valueInDollar) => {
    let valueInYen = valueInDollar * oneEuroIs.JPY;
    return valueInYen;
}

const fromYenToPound = (valueInYen) => {
    let valueInPound = valueInYen * oneEuroIs.GBP;
    return valueInPound;
}




module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}
