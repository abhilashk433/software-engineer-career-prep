/**
 * @param {number} num
 * @return {number[]}
 */

// if num = 5
//   0
//   1
//  10
//  11
// 100
// 101
var countBits = num => {
  const counts = [0];
  for (let i = 0; i < num + 1; i++) {
    counts[i] = counts[i >> 1] + (i & 1);
  }
  return counts;
};
