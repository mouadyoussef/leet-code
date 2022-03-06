package main

import "fmt"

func main() {
	fmt.Println(numIslands([][]byte{{'1', '1', '1', '1', '0'}, {'1', '1', '0', '1', '0'}, {'1', '1', '0', '0', '0'}, {'0', '0', '0', '0', '0'}})) // 1
	fmt.Println(numIslands([][]byte{{'1', '1', '0', '0', '0'}, {'1', '1', '0', '0', '0'}, {'0', '0', '1', '0', '0'}, {'0', '0', '0', '1', '1'}})) // 3
}

func numIslands(grid [][]byte) int {
	if len(grid) == 0 || len(grid[0]) == 0 {
		return 0
	}
	height := len(grid)
	width := len(grid[0])
	answer := 0

	var visited [][]bool = make([][]bool, height)
	for i := 0; i < height; i++ {
		visited[i] = make([]bool, width)
	}

	var directions [][]int = [][]int{{1, 0}, {0, 1}, {-1, 0}, {0, -1}}

	insideBounds := func(row, col int) bool {
		return row >= 0 && row < height && col >= 0 && col < width
	}

	for row := 0; row < height; row++ {
		for col := 0; col < width; col++ {
			if grid[row][col] == '1' && !visited[row][col] {
				answer++

				var queue [][]int = make([][]int, 0)
				queue = append(queue, []int{row, col})
				visited[row][col] = true

				for len(queue) != 0 {
					// Top (just get next element, don't remove it)
					var current []int = queue[0]
					// Discard top element
					queue = queue[1:]

					for _, dir := range directions {
						newRow := current[0] + dir[0]
						newCol := current[1] + dir[1]

						if insideBounds(newRow, newCol) && !visited[newRow][newCol] && grid[newRow][newCol] == '1' {
							queue = append(queue, []int{newRow, newCol})
							visited[newRow][newCol] = true
						}
					}
				}
			}
		}
	}

	return answer
}
