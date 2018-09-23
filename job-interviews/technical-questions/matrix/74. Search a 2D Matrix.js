/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (matrix.length === 0) return false;

  let row = matrix.length;
  let col = matrix[0].length;
  let start = 0;
  let end = row * col - 1;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    let value = matrix[Math.floor(mid / col)][mid % col];
    if (value === target) {
      return true;
    } else if (value < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return false;
};
