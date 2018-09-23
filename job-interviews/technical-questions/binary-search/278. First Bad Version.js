/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let l = 1;
    let r = n;

    // 1 2 3 4 5
    //       *
    // l => 1 => 4 => 4
    // r => 5 => 5 => 3
    // m => 3 => 4 => 4
    while (l <= r) {
      const mid = l + Math.floor((r - l) / 2);

      if (isBadVersion(mid)) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }

    return l;
  };
};
