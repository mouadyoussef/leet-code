/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  backtrack(board);
  return board;
};
let times = 0;
const backtrack = function (board) {
  ++times;
  const cell = getNextEmptyCell(board);
  if (!cell) {
    return true;
  }

  const x = cell[0];
  const y = cell[1];

  for (let n = 1; n <= 9; ++n) {
    if (isValidChoice(board, x, y, n)) {
      board[x][y] = n.toString();
      if (backtrack(board)) {
        return true;
      }
      board[x][y] = '.';
    }
  }

  // for(int num = 1; num <= 9; num++) { // possible choices 1-9
  //   if(isValidChoice(grid, row, col, num)) { // if num looks good
  //     grid(row, col) = num;  // try assign num
  //     if(solveSudoku(grid)) return true;  // try solving rest recursive
  //     grid(row, col) = UNASSIGNED; // undo and try with next num
  //   }
  // }
  // return false;  // no valid choice found, trigger backtracking
  return false;
}

/**
 * @param {character[][]} board
 * @param {number} x
 * @param {number} y
 * @param {number} n
 * @return {boolean}
 */
const isValidChoice = function (board, x, y, n) {
  for (let i = 0; i < board.length; i++) {
    if (board[x][i] == n) {
      return false;
    }
  }

  for (let i = 0; i < board.length; i++) {
    if (board[i][y] == n) {
      return false;
    }
  }

  const x0 = 3 * Math.floor(x / 3);
  const y0 = 3 * Math.floor(y / 3);

  for (let i = x0; i < x0 + 3; i++) {
    for (let j = y0; j < y0 + 3; j++) {
      if (board[i][y] == n) {
        return false;
      }
    }
  }
  return true;
}

const getNextEmptyCell = function (board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] == '.') {
        return [i, j];
      }
    }
  }

  return null;
}

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]
/**
 * Output: [
 *   ["5", "3", "4", "6", "7", "8", "9", "1", "2"],
 *   ["6", "7", "2", "1", "9", "5", "3", "4", "8"],
 *   ["1", "9", "8", "3", "4", "2", "5", "6", "7"], 
 *   ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
 *   ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
 *   ["7", "1", "3", "9", "2", "4", "8", "5", "6"], 
 *   ["9", "6", "1", "5", "3", "7", "2", "8", "4"],
 *   ["2", "8", "7", "4", "1", "9", "6", "3", "5"],
 *   ["3", "4", "5", "2", "8", "6", "1", "7", "9"]
 * ]
 */

console.log(solveSudoku(board).map(x => x.join(' ')));
console.log(times);
