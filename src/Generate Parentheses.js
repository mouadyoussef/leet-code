/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const arr = [];
  backtrack(arr, '', 0, 0, n);
  return arr;
};

/**
 * @param {string[]} arr
 * @param {string} current
 * @param {number} open
 * @param {number} close
 * @param {number} max
 * @return {void}
 */
var backtrack = function (arr, current, open, close, max) {
  if (current.length === max * 2) {
    arr.push(current);
    return;
  }

  if (open < max) {
    backtrack(arr, current + '(', open + 1, close, max);
  }

  if (close < open) { // because we only add a closing parentheses if there is an opening one for it;
    backtrack(arr, current + ')', open, close + 1, max);
  }
}

/**
 * Example 1:
 * Input: n = 3
 * Output: ["((()))","(()())","(())()","()(())","()()()"]
 *
 * Example 2:
 * Input: n = 1
 * Output: ["()"]
 */

console.log(generateParenthesis(1));
console.log(generateParenthesis(3));