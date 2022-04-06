// 53. Maximum Subarray

package src

import (
	"fmt"
)

func main() {
	fmt.Println(maxSubArray([]int{-2, 1, -3, 4, -1, 2, 1, -5, 4})) // 6
	fmt.Println(maxSubArray([]int{1}))                             // 1
	fmt.Println(maxSubArray([]int{5, 4, -1, 7, 8}))                // 23
}

func maxSubArray(nums []int) int {
	n := len(nums)
	var memo []int = make([]int, n)
	memo[0] = nums[0]
	maxValue := nums[0]

	for i := 1; i < n; i++ {
		memo[i] = Max(memo[i-1]+nums[i], nums[i])
		maxValue = Max(maxValue, memo[i])
	}

	return maxValue
}

func Max(x, y int) int {
	if x > y {
		return x
	}
	return y
}
