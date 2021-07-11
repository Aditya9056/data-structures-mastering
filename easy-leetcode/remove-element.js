var removeElement = function(nums, val) {
    let low = 0
    
    for(i=0; i<nums.length; i++){
        
      if( nums[i] !== val ){
          nums[low++] = nums[i]
      }
    }

    return low
}

let nums = [3,2,2,3]
let val = 3
let expectedNums = [2, 2]; 


const k = removeElement(nums, val)

console.log(k.length, k)