// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (obj[target - n] !== undefined) {
      return [obj[target - n], i];
    } else {
      obj[n] = i;
    }
  }
  return null;
};
