/**
 * @param {number[]} prices
 * @return {number}
 */
// Complicity => O(n)
var maxProfit = function(prices) {
  let buyPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const sellPrice = prices[i];
    if (sellPrice - buyPrice <= 0) {
      buyPrice = sellPrice;
    } else {
      const profit = sellPrice - buyPrice;
      maxProfit = profit > maxProfit ? profit : maxProfit;
    }
  }

  return maxProfit;
};
