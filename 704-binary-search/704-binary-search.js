// https://leetcode.com/problems/binary-search/

// Time complexity: O(log n)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Recursive
var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  const find = function (start, end) {
    let mid = Math.floor((start + end) / 2);
    if (target === nums[mid]) return mid;
    if (end > start) {
      if (target > nums[mid]) {
        return find(mid + 1, end);
      } else {
        return find(start, mid - 1);
      }
    } else {
      return -1;
    }
  };
  return find(start, end);
};

// Iterative
var search2 = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (end >= start) {
    const mid = Math.floor((start + end) / 2);
    if (target === nums[mid]) return mid;
    if (target > nums[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)); // -1
console.log(search([-1, 0, 3, 4, 5, 9, 12], 4)); // 3
console.log(search([-1, 0, 3, 4, 5, 7, 8, 9, 12], -1)); // 0
console.log(search([-1, 0, 3, 4, 5, 7, 8, 9, 12], 12)); // 8
