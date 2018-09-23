var addDigits = function(num) {
  while (String(num).length !== 1) {
    let sum = 0;
    while (num !== 0) {
      sum += num % 10;
      num = parseInt(num / 10);
    }
    num = sum;
  }
  return num;
};
