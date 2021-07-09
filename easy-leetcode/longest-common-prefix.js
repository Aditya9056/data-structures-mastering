/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let longest = strs[0]

    for(i=1; i<strs.length; i++){
        
        for(j=0; j<strs[i].length; j++){
            console.log(longest[j], strs[j])
            
            if( longest[j] !== strs[j] ){
                longest = longest.slice(0, j)
               }
        }
    }
    
    return longest ? longest : -1
};

strs = ["flower","flow","flight"]

console.log(longestCommonPrefix(strs))

