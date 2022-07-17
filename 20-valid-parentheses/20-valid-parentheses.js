// https://leetcode.com/problems/valid-parentheses/

// Time cpomplexity: O(n)

/**
 * @param {string} s
 * @return {boolean}
 */

// First approach
var isValid = function (s) {
  let arr = [],
    i = 0;
  while (i < s.length) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') arr.push(s[i]);
    else if (
      (s[i] === ')' && arr[arr.length - 1] !== '(') ||
      (s[i] === '}' && arr[arr.length - 1] !== '{') ||
      (s[i] === ']' && arr[arr.length - 1] !== '[')
    )
      return false;
    else arr.pop();
    i++;
  }
  return arr.length === 0;
};

// Second approach
var isValid2 = function (s) {
  let arr = [],
    i = 0;
  while (i < s.length) {
    switch (s[i]) {
      case '(': {
        arr.push(')');
        break;
      }
      case '{': {
        arr.push('}');
        break;
      }
      case '[': {
        arr.push(']');
        break;
      }
      default:
        if (s[i] !== arr.pop()) return false;
    }
    i++;
  }
  return arr.length === 0;
};

// Test cases
console.log(isValid('()')); // true
console.log(isValid('(){}[]')); // true
console.log(isValid('{]')); // false
console.log(isValid('{[]}')); //true
