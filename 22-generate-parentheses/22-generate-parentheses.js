// https://leetcode.com/problems/generate-parentheses/

/**
 * @param {number} n
 * @return {string[]}
 */

// Approach 1
var generateParenthesis = function (n) {
  let result = [];
  let stack = [];
  var track = function (i, j) {
    // If run through all brankets, return the string
    if (i === n && j === n) {
      result.push(stack.join(''));
      return;
    }

    if (i < n) {
      stack.push('(');
      // Go to left route
      track(i + 1, j);
      // After entering left route, get back to previous one (i.e. pop)
      stack.pop();
    }
    if (j < i) {
      stack.push(')');
      // Go to right route
      track(i, j + 1);
      // After entering right route, get back to previous one (i.e. pop)
      stack.pop();
    }
  };
  track(0, 0);
  return result;
};

// Approach 2
var generateParenthesis2 = function (n) {
  let result = [];
  var track = function (left, right, str) {
    // If run through all brankets, return the string
    if (left === n && right === n) {
      result.push(str);
      return;
    }

    if (left < n) {
      // Go to left route
      track(left + 1, right, str + '(');
    }
    if (right < left) {
      // Go to right route
      track(left, right + 1, str + ')');
    }
  };
  track(0, 0, '');
  return result;
};

console.log(generateParenthesis(3)); // ["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(1)); // ["()"]
