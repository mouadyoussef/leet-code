/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let i = 0;
  let j = 0;

  while (i < g.length && j < s.length) {
    while (j < s.length && s[j] < g[i]) {
      j++;
    }
    if (j == s.length) {
      break;
    }
    i++;
    j++;
  }

  return i;
};

console.log(findContentChildren([1, 2, 3], [1, 1])); // 1
console.log(findContentChildren([1, 2], [1, 2, 3])); // 2
console.log(findContentChildren([10, 9, 8, 7], [5, 6, 7, 8])); // 2
