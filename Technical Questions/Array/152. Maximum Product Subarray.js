/**
 * @param {number[]} nums
 * @return {number}
 */

// [-2, 4, -1, 3, -6]
const maxProduct = nums => {
  let max = nums[0];
  let currentMin = nums[0];
  let currentMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const tempMin = currentMin;
    currentMin = Math.min(nums[i], tempMin * nums[i], currentMax * nums[i]);
    currentMax = Math.max(nums[i], tempMin * nums[i], currentMax * nums[i]);
    max = Math.max(max, currentMax);
  }

  return max;
};
