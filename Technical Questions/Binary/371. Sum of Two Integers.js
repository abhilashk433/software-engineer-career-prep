/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getSum = (a, b) => {
  if (b == 0) {
    return a;
  }
  if (a == 0) {
    return b;
  }

  // 1
  //                  a     b
  //                  3     9
  //                00011 01001
  // a & b      =>     00001
  // a ^ b      =>     01010
  // carry << 1 =>     00010

  while (b != 0) {
    // carry now contains common set bits of x and y
    const carry = a & b; //進位值

    // Sum of bits of x and y where at least one of the bits is not set
    a = a ^ b; //相加

    // Carry is shifted by one so that adding it to x gives the required sum
    b = carry << 1; //進位
  }

  return a;
};
