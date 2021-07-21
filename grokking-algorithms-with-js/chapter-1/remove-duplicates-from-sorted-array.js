/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(a) {
    
    let start = 1, count = 0
    
    for (i=0; i<a.length - 1; i++){
        
        if( a[i] === a[i+1] ) {
            count++
        } else {
            a[start++] = a[i]
        }
    }
    
    return start
};