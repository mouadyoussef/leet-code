// 283. Move Zeroes

package main

import "fmt"

func main() {
	fmt.Println(moveZeroes([]int{0, 1, 0, 3, 12})) // [1,3,12,0,0]
	fmt.Println(moveZeroes([]int{0}))              // [0]
}

func moveZeroes(nums []int) []int {
	n := len(nums)
	next := 0

	for i := 0; i < n; i++ {
		if nums[i] != 0 {
			nums[next] = nums[i]
			next++
		}
	}

	for next < n {
		nums[next] = 0
		next++
	}

	return nums
}
