package src

func plusOne(digits []int) []int {
	n := len(digits)
	for i := n - 1; i >= 0; i-- {
		if digits[i] != 9 {
			digits[i] += 1
			return digits
		}
		digits[i] = 0
	}

	arr := make([]int, n+1)
	arr[0] = 1

	for i := 0; i < n; i++ {
		arr[i+1] = digits[i]
	}

	return arr
}
