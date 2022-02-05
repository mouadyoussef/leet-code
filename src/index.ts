

function fibonacciModified(t1: number, t2: number, n: number): number {
  // Write your code here
  let temp;
  for(let i = 3; i < n; ++i) {
      temp = t2;
      t2 = t1 + t2 * t2;
      t1 = temp;
  }

  return t1 + t2 * t2;
}

console.log(fibonacciModified(0, 1, 10));