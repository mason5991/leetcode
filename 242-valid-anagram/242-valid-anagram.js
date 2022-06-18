// https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function (s, t) {
  let mapping = {};
  if (s.length != t.length) return false;
  s.split('').forEach((w) => (mapping[w] ? mapping[w]++ : (mapping[w] = 1)));
  t.split('').forEach((w) => (mapping[w] ? mapping[w]-- : -1));
  return Object.values(mapping).every((val) => val === 0);
};
