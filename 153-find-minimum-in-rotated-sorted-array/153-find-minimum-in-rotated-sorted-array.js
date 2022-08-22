// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (start === mid && end === mid) return nums[mid];
    if (nums[mid] >= nums[start]) {
      if (nums[mid] >= nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    } else {
      end = mid;
    }
  }
  return nums[start];
};

// console.log(findMin([3, 4, 5, 1, 2])); // 1
// console.log(findMin([4, 5, 1, 2, 3])); // 1
// console.log(findMin([5, 1, 2, 3, 4])); // 1
// console.log(findMin([2, 3, 4, 5, 1])); // 1
// console.log(findMin([1, 2, 3, 4, 5])); // 1
console.log(findMin([1, 2, 3, 4, 5, 6])); // 1
console.log(findMin([4, 5, 6, 1, 2, 3])); // 1
console.log(findMin([5, 6, 1, 2, 3, 4])); // 1
// console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // 0
// console.log(findMin([11, 13, 15, 17])); // 11
