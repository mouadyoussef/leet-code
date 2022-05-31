package src

func missingNumber(nums []int) int {
	var i int = 0
	var sum int = 0
	var counter int = 0

	for i = 0; i < len(nums); i++ {
		sum += nums[i]
		counter += i
	}

	counter += i

	return counter - sum
}
