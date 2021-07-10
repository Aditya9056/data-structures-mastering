/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let longest = strs[0]

    for(i=1; i<strs.length; i++){
        
        for(j=0; j<=strs[i].length; j++){

            // console.log(longest, i, strs[i])
            
            if( longest[j] !== strs[i][j] ){
                longest = longest.slice(0, j)

                break
               }
        }
    }
    
    return longest ? longest : -1
};

strs = ["ab","a"]

console.log(longestCommonPrefix(strs))

long = "hello"

