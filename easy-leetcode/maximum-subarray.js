/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let sum = 0, max = nums[0]

for(let i = 0; i < nums.length; i++){

    if( sum < 0 ) sum = 0

    if( sum >= 0 ) sum += nums[i]

    if( sum > max ) max = sum
}

return max
};

console.log(maxSubArray([-2, -3, -4]))