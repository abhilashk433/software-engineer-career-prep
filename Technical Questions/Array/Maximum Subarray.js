/**
 * @param {number[]} nums
 * @return {number}
 */
// O(n)
var maxSubArray = function(nums) {
  let largest = nums[0];
  let sum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const currentNum = nums[i]
    
    if (sum + currentNum > currentNum) {
      sum = sum + currentNum
    } else {
      sum = currentNum
    }
    
    largest = Math.max(largest, sum)
  }

  return largest
};