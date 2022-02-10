// 1929. Concatenation of Array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  // this method is the fastest
  const len = nums.length;
  const arr = new Array(len * 2);
  for (let i = 0; i < len; ++i) {
    arr[i] = arr[i + len] = nums[i]; // faster than two seprate lines
  }
  return arr;
};