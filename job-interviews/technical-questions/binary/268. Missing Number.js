/**
 * @param {number[]} nums
 * @return {number}
 */

//     0 0 1 1
// xor 0 1 0 1
//--------------
//     0 1 1 0
//
// 0 ^ 0 = 0
// b ^ b = 0
// 0 ^ a = a
// a ^ b ^ b = a

// [0,1,3,4]
var missingNumber = nums => {
  let missing = nums.length; // 4
  for (let i = 0; i < nums.length; i++) {
    missing = missing ^ i ^ nums[i]; // ((((4 ^ 0 ^ 0) ^ 1 ^ 1) ^ 2 ^ 3) ^ 3 ^ 4)
  }
  return missing;
};
