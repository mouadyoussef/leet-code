package src

import "fmt"

func main() {
	fmt.Println(twoSum([]int{2, 7, 11, 15}, 9)) // [0, 1]
	fmt.Println(twoSum([]int{3, 2, 4}, 6))      // [1, 2]
	fmt.Println(twoSum([]int{3, 3}, 6))         // [0, 1]
	fmt.Println(twoSum([]int{2, 5, 5, 11}, 10)) // [1, 2]
}

func twoSum(nums []int, target int) []int {
	n := len(nums)

	var memo map[int]int = make(map[int]int)

	for i := 0; i < n; i++ {
		index, ok := memo[target-nums[i]]
		if ok {
			return []int{index, i}
		}
		memo[nums[i]] = i
	}

	return nil
}

// func twoSum(nums []int, target int) []int {
// 	n := len(nums)
// 	for i := 0; i < n-1; i++ {
// 		for j := i + 1; j < n; j++ {
// 			if nums[i]+nums[j] == target {
// 				return []int{i, j}
// 			}
// 		}
// 	}
//
// 	return nil
// }
