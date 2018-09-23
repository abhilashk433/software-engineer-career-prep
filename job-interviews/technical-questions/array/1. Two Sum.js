/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Complicity => O(n)
var twoSum = function(nums, target) {
  const map = {}; // { 7: 0 }
  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    const parter = target - nums[i];

    if (map[currentNumber] !== undefined) {
      return [map[currentNumber], i];
    } else {
      map[parter] = i;
    }
  }
};
