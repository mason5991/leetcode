// https://leetcode.com/problems/koko-eating-bananas/

// Time complexity: O (n log m), m = max of piles, n = number of piles
// Space complexity: O(1)

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

// Binary search from 1 to max of piles
var minEatingSpeed = function (piles, h) {
  let start = 1;
  let end = piles.reduce((prev, cur) => Math.max(prev, cur));
  let result = 0;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    const hours = piles.reduce((prev, cur) => prev + Math.ceil(cur / mid), 0);
    if (hours > h) {
      start = mid + 1;
    } else {
      end = mid - 1;
      result = mid;
    }
  }
  return result;
};

console.log(minEatingSpeed([3, 6, 7, 11], 8)); // 4
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5)); // 30
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6)); // 23
