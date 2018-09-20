/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  // 11 => 00000000000000000000000000001011
  // 1  => 00000000000000000000000000000001
  let counter = 0;
  const mask = 1;

  for (let i = 0; i < 32; i++) {
    if ((n & mask) === 1) {
      counter++;
    }

    n = n >> 1;
  }

  return counter;
};
