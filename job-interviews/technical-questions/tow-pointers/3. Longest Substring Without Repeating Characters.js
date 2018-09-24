/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = s => {
  const visited = new Set();
  let left = 0;
  let right = 0;
  let res = 0;

  while (left < s.length && right < s.length) {
    const currentChar = s.charAt(right);
    if (!visited.has(currentChar)) {
      visited.add(currentChar);
      res = Math.max(res, right - left + 1);
      right++;
    } else {
      visited.delete(s.charAt(left));
      left++;
    }
  }

  return res;
};
