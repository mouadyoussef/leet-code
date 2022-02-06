// 11. Container With Most Water

// Two pointers
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let bestArea = 0;
  let leftIndex = 0;
  let rightIndex = height.length - 1;

  while (leftIndex < rightIndex) {
    if (height[leftIndex] < height[rightIndex]) {
      bestArea = Math.max(bestArea, height[leftIndex] * (rightIndex - leftIndex));
      leftIndex++;
    } else {
      bestArea = Math.max(bestArea, height[rightIndex] * (rightIndex - leftIndex));
      rightIndex--;
    }
  }

  return bestArea;
};

// /**
//  * @param {number[]} height
//  * @return {number}
//  */
// var maxArea = function (height) {
//   let bestArea = 0;

//   for (let i = 0; i < height.length - 1; i++) {
//     for (let j = i + 1; j < height.length; j++) {
//       bestArea = Math.max(bestArea, Math.min(height[i], height[j]) * (j - i));
//     }
//   }

//   return bestArea;
// };

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));  // 49
console.log(maxArea([1, 1]));  // 1
