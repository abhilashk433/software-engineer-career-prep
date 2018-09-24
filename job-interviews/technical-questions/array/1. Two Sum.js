/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Complicity => O(n)
var twoSum = function(nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    const counterPart = target - nums[i];

    /**
     *
     * Logic: (from the perspective of each number)
     *
     * 1. I will try use my identity as key to find my counterPart in the map. => line 23
     * 2. If I cannot find one, I will put my desire counterPart as key and my address as value
     *    to the map and hope next number will able to find me => line 25
     */
    if (map[currentNumber] !== undefined) {
      return [map[currentNumber], i]; // line 23
    } else {
      map[counterPart] = i; // line 25
    }
  }
};
