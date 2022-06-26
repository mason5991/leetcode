// https://leetcode.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function (s) {
  // Approach 1
  const arr = [];
  s.toLowerCase()
    .split('')
    .forEach((word) => {
      if (word.match(/^[0-9a-z]+$/)) arr.push(word);
    });

  for (let left = 0; left < Math.floor(arr.length / 2); left++) {
    const right = arr.length - left - 1;
    if (arr[left] !== arr[right]) return false;
  }
  return true;
};

var isPalindrome2 = function (s) {
  // Approach 2
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (!s[left].match(/^[0-9a-zA-Z]+$/)) {
      left++;
      continue;
    }
    if (!s[right].match(/^[0-9a-zA-Z]+$/)) {
      right--;
      continue;
    }
    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
    left++;
    right--;
  }
  return true;
};

/****************Test cases*****************/
//'A man, a plan, a canal: Panama'
// 'race a car'
// '  '
// '0P'
