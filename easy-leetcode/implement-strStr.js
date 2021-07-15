/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    
    let index = -1, k = 0, allGood = false
    
    for(i=0; i<=haystack.length-1; i++){

        // no enough places for needle after i
        if (i + needle.length > haystack.length) break;

        if( haystack[i] === needle[0] ){
            
            k = i // k = 0
            index = i // index = 0

            // console.log("I is ", i)

            for(j=0; j<=needle.length-1 && k<=haystack.length-1; j++){

                if( haystack[i+j] !== needle[j] ){ // haystack[k++] -> haystack[0], needle[j] -> needle[0]
                    // console.log(j, k, haystack[5])
                    break
                } else {
                    allGood = true
                }
            }

            if( allGood === true ) break
           
           }
    }
    console.log(needle, haystack, index)
    
    return needle === "" || needle === haystack ? 0 : index
};

haystack = "aaaa", needle = "aaa"

// console.log(strStr("abc", "c"))
console.log(strStr(haystack, needle))