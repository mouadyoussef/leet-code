package main

import "fmt"

func main() {
	test1 := [][]int{{1, 1, 1}, {1, 0, 1}, {1, 1, 1}}
	fmt.Println(setZeroes(test1)) // [[1,0,1],[0,0,0],[1,0,1]]
	test2 := [][]int{{0, 1, 2, 0}, {3, 4, 5, 2}, {1, 3, 1, 5}}
	fmt.Println(setZeroes(test2)) // [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
}

func setZeroes(matrix [][]int) [][]int {
	height := len(matrix)
	width := len(matrix[0])
	hasZeroFirstRow := false

	for col := 0; col < width; col++ {
		if matrix[0][col] == 0 {
			hasZeroFirstRow = true
			break
		}
	}

	for row := 0; row < height; row++ {
		for col := 0; col < width; col++ {
			if matrix[row][col] == 0 {
				matrix[0][col] = 0
			}
		}
	}

	for row := 1; row < height; row++ {
		hasZero := false
		for col := 0; col < width; col++ {
			if matrix[row][col] == 0 {
				hasZero = true
				break
			}
		}

		for col := 0; col < width; col++ {
			if hasZero || matrix[0][col] == 0 {
				matrix[row][col] = 0
			}
		}
	}

	if hasZeroFirstRow {
		for i := 0; i < width; i++ {
			matrix[0][i] = 0
		}
	}

	return matrix
}
