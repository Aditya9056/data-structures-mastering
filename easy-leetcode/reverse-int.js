
const conCAt = (value1, value2) =>{
    


}

const reverse = function(x) {

    let someThing = '', i = 0, len = x.toString().length, isNegative = x<0 ? true : false

    if( ! isNegative ){

        while(i < len){

            a = parseInt(x%10)
            someThing += a.toString()
            x = parseInt(x/10)
            i++
        }
    } else if( isNegative ){

        x = x.toString().replace(/-/g, '')

        while(i < len -1){
            a = parseInt(x%10)
            someThing += a.toString()
            x = parseInt(x/10)
            i++
        }
        
    } else {
        return 0
    }

    someThing = parseInt(someThing)
    
    if( someThing > parseInt( Math.pow(2,31) - 1) || someThing < parseInt( - Math.pow(2,31)) ) return 0
    

    return isNegative ? -someThing : someThing 
};

const reverse2 = x => {
    const limit = 2147483648;
    const k = x < 0 ? -1 : 1;
    const n = Number(String(Math.abs(x)).split('').reverse().join(''));
    return n > limit ? 0 : n * k;
};

let x = 938803900909;
console.log(Number(String( Math.abs(x) ).split('').reverse().join('') ))

// console.log( reverse2( parseInt( - Math.pow(2, 30) )))

// console.log( parseInt(- Math.pow(2, 26) ))