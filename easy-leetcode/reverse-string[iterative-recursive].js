function r( s, pointer = 0 ){

    if( pointer < parseInt(s.length/2) ){

        let temp = s[pointer]
        s[pointer] = s[ s.length -1 - pointer ]
        s[ s.length - pointer -1 ] = temp
        
        r(s, pointer+1)

        return s
    }
}

let a = [1, 2, 3, 4, 5];

console.log(r(a))