/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  // Input:  [1,2,3,4]

  // [1, 1, 2, 6]
  var leftProduct = nums.reduce((acc, _, i) => {
    if (i === 0) {
      acc[0] = 1;
    } else {
      acc[i] = acc[i - 1] * nums[i - 1];
    }
    return acc;
  }, []);

  // [24,12,4,1]
  var rightProduct = nums.reduceRight((acc, _, i) => {
    if (i === nums.length - 1) {
      acc[nums.length - 1] = 1;
    } else {
      acc[i] = acc[i + 1] * nums[i + 1];
    }
    return acc;
  }, []);

  return leftProduct.map((curr, i) => curr * rightProduct[i]);
};
