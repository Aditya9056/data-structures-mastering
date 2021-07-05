let x = "121"


const f = str =>{
    // str = str.split('')
    // console.log(typeof(str))
    
    // let rev = str.reverse().join('')

    // console.log(rev)

    return str.split('').reverse().join('') === str ? true : false

}


console.log(f(x))