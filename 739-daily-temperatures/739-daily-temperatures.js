// https://leetcode.com/problems/daily-temperatures/

// Time complexity: O(n)
// Space complexity: O(n)

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

var dailyTemperatures = function (temperatures) {
  let stack = [];
  let answers = new Array(temperatures.length).fill(0);
  for (let i = 0; i < temperatures.length; i++) {
    const currentTemperature = temperatures[i];
    const currentDay = i;
    while (stack.length > 0 && stack[stack.length - 1].currentTemperature < currentTemperature) {
      answers[stack[stack.length - 1].currentDay] = currentDay - stack[stack.length - 1].currentDay;
      stack.pop();
    }
    stack.push({ currentTemperature, currentDay });
  }
  return answers;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1,1,4,2,1,1,0,0]
console.log(dailyTemperatures([30, 40, 50, 60])); // [1,1,1,0]
console.log(dailyTemperatures([30, 60, 90])); // [1,1,0]
