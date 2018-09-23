/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  let res = Infinity;
  let left = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    while (left <= i && sum >= s) {
      res = Math.min(res, i - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return res === Infinity ? 0 : res;
};
