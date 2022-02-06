// 125. Valid Palindrome

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let newString = "";

  for (let i = 0; i < s.length; ++i) {
    const code = s.charCodeAt(i);
    if ((code > 47 && code < 58) ||   // numeric (0-9)
        (code > 64 && code < 91) ||   // upper alpha (A-Z)
        (code > 96 && code < 123)) {  // lower alpha (a-z)
          newString += s.charAt(i);
    }
  }

  newString = newString.toLowerCase();
  
  for (i = 0, j = newString.length - 1; i < j; ++i, --j) {
    if (newString.charAt(i) !== newString.charAt(j)) return false;
  }

  return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));  // true
console.log(isPalindrome('race a car'));                      // false
console.log(isPalindrome(' '));                               // true
