/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(a) {
    
    let start = 1, count = 0
    
    for (i=1; i<a.length; i++){
        
        if( a[i - 1] === a[i] ) {
            count++
        } else {
            a[i-count] = a[i]
        }
    }
    
    return a.length-count
};