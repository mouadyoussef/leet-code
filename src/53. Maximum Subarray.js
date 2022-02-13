// 53. Maximum Subarray

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const n = nums.length;
  const memo = new Array(n);
  let largestSum = nums[0];
  memo[0] = nums[0];

  for (let i = 1; i < n; ++i) {
    memo[i] = Math.max(memo[i - 1] + nums[i], nums[i]);
    largestSum = Math.max(memo[i], largestSum);
  }
  
  return largestSum;
};


console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([1]));                             // 1
console.log(maxSubArray([5, 4, -1, 7, 8]));                // 23
