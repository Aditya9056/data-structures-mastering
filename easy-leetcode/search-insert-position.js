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

    return sortedArr[low] === ele ? low : -1
}


var searchInsert = function(nums, target) {
    
    if( target === 0 ) return 0

    let ansWer = binarySearch(nums, target), find, sub
    
    if( ansWer === -1 && target > 0 ){
        
        find = target - nums[nums.length -1]
        
        return find + nums.length -1
        
    } else {
        return ansWer
    }

};

console.log(searchInsert([1,3,5,6], 2))