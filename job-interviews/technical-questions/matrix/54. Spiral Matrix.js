/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = matrix => {
  if (matrix.length === 0) return [];

  let rowCount = matrix.length;
  let columnCount = matrix[0].length;
  let startRow = 0;
  let endRow = rowCount - 1;
  let startColumn = 0;
  let endColumn = columnCount - 1;

  const result = [];

  while (startRow <= endRow && startColumn <= endColumn) {
    // Top row
    for (let column = startColumn; column <= endColumn; column++) {
      result.push(matrix[startRow][column]);
    }
    startRow++;

    // Right column
    for (let row = startRow; row <= endRow; row++) {
      result.push(matrix[row][endColumn]);
    }
    endColumn--;

    // Bottom row
    if (startRow <= endRow) {
      for (let column = endColumn; column >= startColumn; column--) {
        result.push(matrix[endRow][column]);
      }
      endRow--;
    }

    // Lefrt column
    if (startColumn <= endColumn) {
      for (let row = endRow; row >= startRow; row--) {
        result.push(matrix[row][startColumn]);
      }
    }
    startColumn++;
  }

  return result;
};
