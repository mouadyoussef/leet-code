package main

import "fmt"

func main() {
	fmt.Println(generate(1)) // [[1]]
	fmt.Println(generate(5)) // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
}

func generate(numRows int) [][]int {
	arr := make([][]int, numRows)

	for i := 0; i < numRows; i++ {
		arr[i] = make([]int, i+1)
		for j := 0; j <= i; j++ {
			if j == 0 || j == i {
				arr[i][j] = 1
			} else {
				arr[i][j] = arr[i-1][j-1] + arr[i-1][j]
			}
		}
	}

	return arr
}
