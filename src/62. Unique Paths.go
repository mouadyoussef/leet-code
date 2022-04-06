// 62. Unique Paths

package src

import "fmt"

func main() {
	fmt.Println(uniquePaths(3, 2)) // 3
	fmt.Println(uniquePaths(3, 7)) // 28
}

func uniquePaths(m int, n int) int {
	var dp [][]int = make([][]int, m)

	for i := 0; i < m; i++ {
		dp[i] = make([]int, n)
		for j := 0; j < n; j++ {
			if i < 1 || j < 1 {
				dp[i][j] = 1
				continue
			}

			dp[i][j] = dp[i-1][j] + dp[i][j-1]
		}
	}

	return dp[m-1][n-1]
}
