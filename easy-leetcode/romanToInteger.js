// I, V, X, L, C, D and M.

// M = 1000, D = 500, C = 100, L = 50, X = 10, V = 5 and I = 1 

// When Placing these before something e.g. IV, XL or CD
// I = -1, X = -10 and C = -100

// If Roman is -ve return 0
// MCMXCIV, M = 1000, CM = 900, XC = 90 and IV = 4.

const romanToInteger = roman => {

    let romanDigits = {
        "I" : '1',
        "V" : '5',
        "X" : '10',
        "L" : '50',
        "C" : '100',
        "D" : '500',
        "D" : '1000',
    }, returnInt = 0;

    // [...roman].forEach(element => {} });

    // if more than 9
    // then use X
    // if more than 99
    // then use C
    // if more than 999
    // then use M


    for(let i = 0; i<roman.length; i++){


        // @param roman < 3,9999
        switch (roman[i]) {
            case "I":
                if( romanDigits[i] < romanDigits[i+1] ){
                    


                } else {

                }
                break
        }
    }

    // return parseInt(integer)
}

romanToInteger("IIV")