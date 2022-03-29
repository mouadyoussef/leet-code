package main

func main() {}

func removeDuplicates(nums []int) int {
	n := len(nums)

	if n == 1 {
		return 1
	}

	last := 1

	for i := 1; i < n; i++ {
		if nums[i] != nums[i-1] {
			nums[last] = nums[i]
			last++
		}
	}

	return last
}
