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
    
    console.log(low, ele)

    return sortedArr[low] === ele ? low : -1
}

console.log(binarySearch([1,2,3,4,5,10], 2))
