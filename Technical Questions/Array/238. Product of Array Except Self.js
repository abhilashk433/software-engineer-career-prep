/**
 * @param {number[]} nums
 * @return {number[]}
 */
// O(n)
var productExceptSelf = function(nums) {
  const leftProduct = [];
  const rightProduct = [];

  nums.reduce((product, curr, i) => {
    leftProduct[i] = product;
    return product * curr;
  }, 1);

  nums.reduceRight((product, curr, i) => {
    rightProduct[i] = product;
    return product * curr;
  }, 1);

  return leftProduct.map((value, i) => value * rightProduct[i]);
};
