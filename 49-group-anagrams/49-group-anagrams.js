// https://leetcode.com/problems/group-anagrams/

// Time complexity: O(n * klogk), where n is the length of strs & k is the maximum length of a string
// Space complexity: O(n)

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function (strs) {
  // mapping to store {[key: sorted letters of a string]: array of anagrams}
  let mapping = {};
  strs.forEach((str) => {
    const key = str.split('').sort().join('');
    if (mapping[key] !== undefined) {
      // append the string to the same key
      mapping[key].push(str);
    } else {
      // create new key with new array
      mapping[key] = [str];
    }
  });
  return Object.values(mapping);
};
