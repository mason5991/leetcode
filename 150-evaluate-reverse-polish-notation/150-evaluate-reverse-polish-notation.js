// https://leetcode.com/problems/evaluate-reverse-polish-notation/

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];
  let result;
  for (let i = 0; i < tokens.length; i++) {
    if (Number.isInteger(parseInt(tokens[i]))) {
      stack.push(parseInt(tokens[i]));
    } else {
      switch (tokens[i]) {
        case '+': {
          result = stack[stack.length - 2] + stack[stack.length - 1];
          break;
        }
        case '-': {
          result = stack[stack.length - 2] - stack[stack.length - 1];
          break;
        }
        case '*': {
          result = stack[stack.length - 2] * stack[stack.length - 1];
          break;
        }
        case '/': {
          result = Math.trunc(stack[stack.length - 2] / stack[stack.length - 1]);
          break;
        }
      }
      stack.pop();
      stack[stack.length - 1] = result;
    }
  }
  return stack[stack.length - 1];
};

console.log(evalRPN(['2', '1', '+', '3', '*'])); // 9
console.log(evalRPN(['4', '13', '5', '/', '+'])); // 6
console.log(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'])); // 22
console.log(evalRPN(['18'])); // 18
