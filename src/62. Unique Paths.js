// 62. Unique Paths

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function (m, n) {
  const dp = new Array(m);

  for (let i = 0; i < m; ++i) {
    dp[i] = new Array(n);
    for (let j = 0; j < n; ++j) {
      if (i < 1 || j < 1) {
        dp[i][j] = 1;
        continue;
      }
      
      dp[i][j] = dp[i-1][j] + dp[i][j-1];
    }
  }

  return dp[m - 1][n - 1];
};

console.log(uniquePaths(3, 2)); // 3
console.log(uniquePaths(3, 7)); // 28
