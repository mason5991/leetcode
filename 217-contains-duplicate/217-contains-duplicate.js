// https://leetcode.com/problems/contains-duplicate/

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function (nums) {
  let mapping = {};
  for (let i = 0; i < nums.length; i++) {
    if (mapping[nums[i]] === undefined) mapping[nums[i]] = 1;
    else return true;
  }
  return false;
};
