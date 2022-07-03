// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// Approach 1
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxLength = 0,
    start = 0,
    end = 0,
    mapping = {};
  while (end < s.length) {
    if (mapping[s[end]] !== undefined) {
      delete mapping[s[start]];
      start++;
    } else {
      mapping[s[end]] = 1;
      maxLength = Math.max(maxLength, end - start + 1);
      end++;
    }
  }
  return maxLength;
};

// Approach 2
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringA2 = function (s) {
  let maxLength = 0,
    i = 0,
    arr = [];
  while (i < s.length) {
    const idx = arr.indexOf(s[i]);
    if (idx > -1) {
      arr = arr.slice(idx + 1);
    }
    arr.push(s[i]);
    maxLength = Math.max(maxLength, arr.length);
    i++;
  }
  return maxLength;
};

// Test cases
// "abcabcbb" => 3
console.log(lengthOfLongestSubstring('abcabcbb'));
// "bbbbb" => 1
console.log(lengthOfLongestSubstring('bbbbb'));
// "pwwkew" => 3
console.log(lengthOfLongestSubstring('pwwkew'));
// "" => 0
console.log(lengthOfLongestSubstring(''));
// "abcbdeughcrkgh" => 9
console.log(lengthOfLongestSubstring('abcbdeughcrkgh'));
// " " => 1
console.log(lengthOfLongestSubstring(' '));
