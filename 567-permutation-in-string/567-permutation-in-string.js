// https://leetcode.com/problems/permutation-in-string/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let mapping = {},
    i = 0,
    p1 = 0,
    p2 = 0,
    len = s1.length;
  if (s1.length > s2.length) return false;
  while (i < s1.length) {
    mapping[s1[i]] = (mapping[s1[i]] || 0) + 1;
    i++;
  }
  while (p1 < s2.length) {
    // If char on p2 matches char inside mapping, len - 1
    if (mapping[s2[p2]] > 0) len--;

    // Deduct 1 from mapping
    mapping[s2[p2]]--;

    // p2 move to next
    p2++;

    // The len becomes 0 means permutation exists, return true
    if (len === 0) return true;

    // If window size equals to s1's length
    if (p2 - p1 === s1.length) {
      if (mapping[s2[p1]] >= 0) len++;
      mapping[s2[p1]]++;
      p1++;
    }
  }
  return false;
};

console.log(checkInclusion('ab', 'eidbaooo'));
console.log(checkInclusion('ab', 'eidboaoo'));
console.log(checkInclusion('abcd', 'ejidoapfabcsjbckmacdbakfdooo'));
console.log(checkInclusion('adc', 'dcda'));
console.log(checkInclusion('abcdxabcde', 'abcdeabcdx'));
console.log(checkInclusion('abc', 'axxacb'));
