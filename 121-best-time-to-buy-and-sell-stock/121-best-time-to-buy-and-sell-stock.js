// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// Sliding window

// Time complexity: O(n)

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0,
    p1 = 0;
  p2 = 1;
  while (prices[p2] !== undefined) {
    if (prices[p2] > prices[p1]) {
      profit = Math.max(profit, prices[p2] - prices[p1]);
    } else {
      p1 = p2;
    }
    p2++;
  }
  return profit;
};

// Test cases
// [7,1,5,3,6,4] => 5
// [7,6,4,3,1] => 0
// [2,1,2,1,0,1,2] => 2
// [3,3,5,0,0,3,1,4] => 4
