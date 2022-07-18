// https://leetcode.com/problems/min-stack/

// Time complexity: O(1)

var MinStack = function () {
  this.stack = [];
  this.minStack = [];
  return this.stack;
};

/**
 * @param {number} val
 * @return {void}
 */
// Every time a value pushes, also push the value to minStack if it is smaller than the last one in minStack, so that we can always have the minimum one(the last one in minStack)
MinStack.prototype.push = function (val) {
  this.stack.push(val);
  if (!this.minStack.length || val <= this.minStack[this.minStack.length - 1]) {
    this.minStack.push(val);
  }
};

/**
 * @return {void}
 */
// Every time a value pops, we check the last value in minStack & see if it matches the one we pop, such that it gets removed from the minimum list and second last becomes the minimum one
MinStack.prototype.pop = function () {
  const val = this.stack.pop();
  if (val === this.minStack[this.minStack.length - 1]) {
    this.minStack.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
// The last one in minStack
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
