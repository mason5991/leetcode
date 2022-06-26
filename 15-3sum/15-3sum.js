// https://leetcode.com/problems/3sum/

// Time complexity: O(n^2)

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];
  nums.sort((a, b) => a - b);
  for (i = 0; i < nums.length - 2; i++) {
    if (nums[i] !== nums[i - 1]) {
      let left = i + 1;
      let right = nums.length - 1;
      while (left < right) {
        if (nums[left] + nums[right] + nums[i] === 0) {
          result.push([nums[i], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;
          left++;
          right--;
        } else if (nums[left] + nums[right] + nums[i] > 0) right--;
        else {
          left++;
        }
      }
    }
  }
  return result;
};

// Test cases
// [-1, 0, 1, 2, -1, -4]
// []
// [0]
// [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]
