// Widest Path Without Trees

function widestPath(x, y) {
  let widestPathLength = 0;

  x.sort((a, b) => b - a);

  for (let i = 0; i < x.length - 1; i++) {
    widestPathLength = widestPathLength > (x[i] - x[i + 1])
      ? widestPathLength
      : x[i] - x[i + 1];
  }

  return widestPathLength;
}

console.log(widestPath([6, 10, 1, 4, 3], [2, 5, 3, 1, 6]))
