// https://leetcode.com/problems/product-of-array-except-self/

// Time complexity O(n)
// Space complexity O(1)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let result = [];
  let left = 1;
  let right = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = left;
    left *= nums[i];
  }

  for (let j = nums.length - 1; j >= 0; j--) {
    result[j] *= right;
    right *= nums[j];
  }
  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
console.log(productExceptSelf([0, 0]));
