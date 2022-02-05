// O(n) space O(n^3) complexity
var numSubmatNspace = function (mat) {
  const m = mat.length;
  const n = mat[0].length;
  let ans = 0;
  let height = new Array(n).fill(0);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      height[j] = mat[i][j] == 0 ? 0 : height[j] + 1;
      let min = height[j];
      for (let k = j; k >= 0; k--) {
        if (min < 1) break;
        min = Math.min(min, height[k]);
        ans += min;
      }
    }
  }

  return ans
};

// O(n) space O(n^2) complexity - stack based approach
var numSubmat = function (mat) {
  const m = mat.length;
  const n = mat[0].length;
  const height = new Array(n).fill(0);
  let res = 0;

  for (let i = 0; i < m; i++) {
    let stack = [];
    for (let j = 0; j < n; j++) {
      height[j] = mat[i][j] === 0 ? 0 : height[j] + 1;
      let sum = 0;
      while (stack.length && height[stack[stack.length - 1][0]] >= height[j]) {
        stack.pop();
      }

      if (stack.length) {
        sum += height[j] * (j - stack[stack.length - 1][0]) + stack[stack.length - 1][1]
      } else {
        sum += height[j] * (j + 1);
      }
      stack.push([j, sum]);
      res += sum;
    }
  }

  return res;
};


// Output: 13
const test1 = [[1, 0, 1], [1, 1, 0], [1, 1, 0]];
// Output: 24
const test2 = [[0, 1, 1, 0], [0, 1, 1, 1], [1, 1, 1, 0]]

console.time('numSubmatNspace')
console.log(`Test 1: ${numSubmatNspace(test1)}`);
console.log(`Test 2: ${numSubmatNspace(test2)}`);
console.timeEnd('numSubmatNspace')

// console.time('numSubmat')
// console.log(`Test 1: ${numSubmat(test1)}`);
// console.log(`Test 2: ${numSubmat(test2)}`);
// console.timeEnd('numSubmat')

// console.log(`Test 1: ${numSubmat(test1)}`);
// console.log(`Test 2: ${numSubmat(test2)}`);
