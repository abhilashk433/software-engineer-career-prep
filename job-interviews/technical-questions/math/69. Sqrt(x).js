/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = x => {
  let start = 0;
  let end = x;

  while (start <= end) {
    mid = start + Math.floor((end - start) / 2);

    if (mid * mid === x) return mid;

    if (mid * mid < x) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return end;
};
