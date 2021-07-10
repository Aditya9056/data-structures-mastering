const binarySearch = (sortedArr, ele) => {
    let low = 0, high = sortedArr.length - 1

    try{
        for(i = low; i <= high; i++){
            
            // console.log(ele, mid, low, high) 
            
            if( ele == sortedArr[mid] ){
    
                return mid
    
            } else if ( ele < sortedArr[mid] ) {
    
                high = mid -1
                mid = parseInt((low+high)/2)
    
            } else if ( ele > sortedArr[mid] ){
                low = mid + 1
                mid = parseInt((low+high)/2) // this may cause the integer overflow
                
                // mid = parseInt(low + (high-low)/2) // Round Down Approach that eliminates integer overflow

                // mid = parseInt(low + ( high - low + 1)/2) // Round Up Approach that eliminates integer overflow
    
            }
        }
    } catch(e){
        throw e
    }

}

console.log(binarySearch([1,2, 3, 4, 5, 6, 7, 8, 9, 19], 9))
