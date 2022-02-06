// 5. Longest Palindromic Substring

// Dynamic programing
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let longestString = '';
  const n = s.length;

  // case of odd length
  for (let mid = 0; mid < n; mid++) {
    for (let x = 0; mid - x >= 0 && mid + x < n; x++) {
      if (s[mid - x] != s[mid + x]) {
        break;
      }
      const len = 2 * x + 1;
      if (len > longestString.length) {
        longestString = s.substring(mid - x, mid - x + len);
      }
    }
  }

  // case of even length
  for (let mid = 0; mid < n - 1; mid++) {
    for (let x = 1; mid - x + 1 >= 0 && mid + x < n; x++) {
      if (s[mid - x + 1] != s[mid + x]) {
        break;
      }
      const len = 2 * x;
      if (len > longestString.length) {
        longestString = s.substring(mid - x + 1, mid - x + 1 + len);
      }
    }
  }

  return longestString;
};


// Brute force
/**
 * @param {string} s
 * @return {string}
 */
// var longestPalindrome = function (s) {
//   let longest = '';
//   for (let i = 0; i < s.length; i++) {
//     for (let j = i; j < s.length; j++) {
//       const sub = s.substring(i, j + 1);
//       if (sub.length > longest.length && isPalindrome(sub)) {
//         longest = sub;
//       }
//     }
//   }

//   return longest;
// };

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isPalindrome = function (s) {
//   for (i = 0, j = s.length - 1; i < j; ++i, --j) {
//     if (s.charAt(i) !== s.charAt(j)) return false;
//   }

//   return true;
// };


console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome('caba'));
console.log(longestPalindrome('a'));