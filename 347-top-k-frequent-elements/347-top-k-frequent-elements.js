/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let mapping = {};
  let arr = [];
  for (let num of nums) {
    if (mapping[num] !== undefined) {
      let arrIndex = mapping[num];
      arr[arrIndex].cnt++;
    } else {
      mapping[num] = arr.push({ num, cnt: 1 }) - 1;
    }
  }

  return arr
    .sort((a, b) => b.cnt - a.cnt)
    .slice(0, k)
    .map((a) => a.num);
};
