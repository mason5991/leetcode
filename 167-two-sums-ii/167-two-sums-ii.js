// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

// Time complexity: O(n)
// Space complexity: O(1)

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    if (numbers[left] + numbers[right] === target) return [left + 1, right + 1];
    if (numbers[left] + numbers[right] > target) {
      right--;
    } else {
      left++;
    }
  }
};

/*************** Test cases **************/
// [2, 7, 11, 15], 9
// [2, 3, 4], 6
// [-1, 0], -1
