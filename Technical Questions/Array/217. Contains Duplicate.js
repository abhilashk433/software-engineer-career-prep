/**
 * @param {number[]} nums
 * @return {boolean}
 */
// O(n)
var containsDuplicate = function(nums) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];

    if (map[number] !== undefined) {
      return true;
    } else {
      map[number] = 1;
    }
  }

  return false;
};
