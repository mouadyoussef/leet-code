package src

func minBitFlips(start int, goal int) int {
	count := 0

	for i := 0; i < 32; i++ {
		if (start & 1) != (goal & 1) {
			count++
		}
		start >>= 1
		goal >>= 1
	}

	return count
}
