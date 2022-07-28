// https://leetcode.com/problems/search-a-2d-matrix/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// Binary search twice
var searchMatrix = function (matrix, target) {
  let colStart = 0;
  let colEnd = matrix.length - 1;
  let colMid = -1;

  while (colEnd >= colStart) {
    const columnMid = Math.floor((colStart + colEnd) / 2);
    if (matrix[columnMid][matrix[columnMid].length - 1] < target) {
      colStart = columnMid + 1;
    } else if (matrix[columnMid][0] > target) {
      colEnd = columnMid - 1;
    } else {
      colMid = columnMid;
      break;
    }
  }

  if (colMid === -1) return false;
  let rowStart = 0;
  let rowEnd = matrix[colMid].length - 1;
  while (rowEnd >= rowStart) {
    const rowMid = Math.floor((rowStart + rowEnd) / 2);
    if (matrix[colMid][rowMid] === target) return true;
    if (matrix[colMid][rowMid] > target) {
      rowEnd = rowMid - 1;
    } else {
      rowStart = rowMid + 1;
    }
  }
  return false;
};

// Treat as a single sorted list
var searchMatrix2 = function (matrix, target) {
  let maxCol = matrix[0].length;
  let maxRow = matrix.length;
  let start = 0;
  let end = maxCol * maxRow - 1;
  while (end >= start) {
    const mid = Math.floor((start + end) / 2);
    const col = mid % maxCol;
    const row = (mid - col) / maxCol;
    const curr = matrix[row][col];
    if (curr === target) {
      return true;
    }
    if (curr > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return false;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
); //true
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13
  )
); // false
console.log(searchMatrix([[1]], 1)); // true
