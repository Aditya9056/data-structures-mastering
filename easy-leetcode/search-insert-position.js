/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 const binarySearch = (sortedArr, ele) => {
    let low = 0, high = sortedArr.length - 1

    try{
        for(i = low; i <= high; i++){
            
            mid = parseInt(low + (high-low)/2) // Round Down Approach that eliminates integer overflow

            if ( ele <= sortedArr[mid] ) {
                high = mid
            } else {
                low = mid + 1
            }
        }
    } catch(e){
        throw e
    }

    return sortedArr[low] === ele ? low : high
}


var searchInsert = function(nums, target) {
    
    if( target <= 0 ) return 0
    if( target > nums[ nums.length -1 ] ) return nums.length

    return binarySearch(nums, target)
};

// console.log(searchInsert([1,2,3,4,5,10], 3))
console.log(searchInsert([1, 2, 3, 3, 5], 6))