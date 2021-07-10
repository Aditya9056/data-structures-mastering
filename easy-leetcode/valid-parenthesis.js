/**
 * @param {string} s
 * @return {boolean}
 */
 var isValidp = function(s) {
   
    brackets = {')' : '(', ']' : '[', '}': '{'}
    let isValid = false, stack = []
    
    for(i=0; i<s.length; i++){
        
        if( s[i] === '(' || s[i] === '[' || s[i] === '{' ){
            stack.push(s[i])
        }
        
        if( s[i] === ')' || s[i] === ']' || s[i] === "}"){
            stack.pop() !== brackets[s[i]] ? isValid = false : isValid = true   
            if( isValid === false ) return isValid
            // console.log(s[i], isValid)
        }
    }

    if( stack.pop() ) return false

    return isValid
    
};

let s = []

if(s.pop()) {console.log("hello")}