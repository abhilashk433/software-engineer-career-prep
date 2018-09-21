/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = str => {
  if (str === null || str.length === 0) return 0;

  const IntegerMax = Math.pow(2, 31) - 1;
  const IntegerMin = -Math.pow(2, 31);
  let result = 0;

  // remove whitespaces
  str = str.trim();

  let startIndex = 0;

  let isNegative = false;
  if (str[0] === "+" || str[0] === "-") {
    // handle positive and negative sign
    if (str[0] === "-") isNegative = true;
    startIndex++;
  }

  for (let i = startIndex; i < str.length; i++) {
    const value = parseInt(str[i]);
    // handle non-numerical character
    if (isNaN(value)) break;
    result = result * 10 + value;
  }

  if (isNegative) {
    result = -result;
  }

  // handle out of Integer range
  if (result > IntegerMax) return IntegerMax;
  if (result < IntegerMin) return IntegerMin;

  return result;
};
