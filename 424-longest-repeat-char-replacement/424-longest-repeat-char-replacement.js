// https://leetcode.com/problems/longest-repeating-character-replacement/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let start = 0,
    end = 0,
    count = 0,
    mapping = {};
  while (end < s.length) {
    mapping[s[end]] = mapping[s[end]] ? mapping[s[end]] + 1 : 1;
    count = Math.max(count, mapping[s[end]]);
    if (end - start + 1 - count > k) {
      mapping[s[start]]--;
      start++;
    }
    end++;
  }
  return end - start;
};

// Test cases
// "ABAB", 2 => 4
console.log(characterReplacement('ABAB', 2));
// "AABABBA", 1 => 4
console.log(characterReplacement('AABABBA', 1));
// "ABCDBCBBCBCD", 2 => 6
console.log(characterReplacement('ABCDBCBBCBCD', 2));

// Start from first char, expanding the window and keep counting the number of those alphabet inside the window (increment pointer end's alphabet to the map)
// If the window reaches a size that no. of alphabets in string - no. of pointer end's alphatbet > k, decrement the count of the alphabet at pointer start & shift the window to right by 1 (start + 1)
// Thus, we can track the string with the max. window size
