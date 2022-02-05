// Given a string s, find the length of the longest substring without repeating characters.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let start = 0;
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    while (set.has(s.charAt(i))) {
      set.delete(s.charAt(start++));
    }
    set.add(s.charAt(i));
    max = Math.max(max, set.size);
  }

  return max;
};

console.log(lengthOfLongestSubstring('abcabcbb'));  // 3
console.log(lengthOfLongestSubstring('ddddd'));     // 1
console.log(lengthOfLongestSubstring('pwwkew'));    // 3
console.log(lengthOfLongestSubstring('aab'));       // 2
console.log(lengthOfLongestSubstring('qrsvbspk'));  // 5
