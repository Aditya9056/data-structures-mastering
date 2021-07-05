// I, V, X, L, C, D and M.

// M = 1000, D = 500, C = 100, L = 50, X = 10, V = 5 and I = 1 

// When Placing these before something e.g. IV, XL or CD
// I = -1, X = -10 and C = -100

// If Roman is -ve  return 0
// MCMXCIV, M = 1000, CM = 900, XC = 90 and IV = 4.

// if more than 9
// then use X
// if more than 99
// then use C
// if more than 999
// then use M
// @param roman < 3,9999


const romanToInteger = roman => {

    let romanDigits = {
        "I" : '1',
        "V" : '5',
        "X" : '10',
        "L" : '50',
        "C" : '100',
        "D" : '500',
        "M" : '1000',
    }, returnInt = parseInt(0);

// [...roman].forEach(element => {} });

    // Adding first digit myself
    returnInt = parseInt(romanDigits[roman[0]]);

    for(let i = 1; i < roman.length; i++){

        // console.log( "I value is ", i , "roman.length", roman.length)

        if( parseInt(romanDigits[roman[i]]) <= parseInt(romanDigits[roman[i-1]]) ){
            
            // Add if bigger than or equals to i-1
            returnInt += parseInt(romanDigits[roman[i]])

            // console.log(romanDigits[roman[i]], romanDigits[roman[i-1]])
            
        } else if(parseInt(romanDigits[roman[i]]) > parseInt(romanDigits[roman[i-1]])) {

            // Subtract if bigger than i-1
            subtract = romanDigits[roman[i]] - romanDigits[roman[i-1]]
            returnInt = returnInt + subtract - romanDigits[roman[i-1]]

            // console.log( parseInt(romanDigits[roman[i]]) , parseInt(romanDigits[roman[i-1]]) )
        }
    }


    return parseInt(returnInt)
}

console.log(romanToInteger("MCMXCVI"))
// 900 + 1000 + 90
// 1910