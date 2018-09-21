/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let sum = 0;

  while (n !== 0) {
    sum += n & 1;
    n = n >>> 1;
  }

  return sum;
};

// int	32 bits	-2,147,483,648 .. 2,147,483,647
// 2147483648 >> 1
// -1073741824
// 2147483648 >>> 1
// 1073741824
