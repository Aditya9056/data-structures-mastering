const binarySearch = (sortedArr, ele) => {
    let low = 0, high = sortedArr.length - 1, mid = parseInt((low+high)/2), foundAt = -1

    try{
        for(i = 0; i <= sortedArr.length; i++){
            
            // console.log(ele, mid, low, high) 
            
            if( ele == sortedArr[mid] ){
    
                return mid
    
            } else if ( ele < sortedArr[mid] ) {
    
                high = mid -1
                mid = parseInt((low+high)/2)
    
            } else if ( ele > sortedArr[mid] ){
                low = mid + 1
                mid = parseInt((low+high)/2)
    
            }
        }
    } catch(e){
        throw e
    }


    return -1
    
}

console.log(binarySearch([1,2, 3, 4, 5, 6, 7, 8, 9, 19], 90))
