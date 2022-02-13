// 283. Move Zeroes

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  const n = nums.length;
  let next = 0;
  for (let i = 0, j = 0; i < n; ++i) {
    if (nums[i] !== 0) {
      nums[next++] = nums[i];
    }
  }

  for (; next < n; ++next) {
    nums[next] = 0;
  }

  return nums;
};


console.log(moveZeroes([0, 1, 0, 3, 12]));  // [1,3,12,0,0]
console.log(moveZeroes([0]));               // [0]


// var moveZeroes = function (nums) {
//   const n = nums.length;
//   for (let i = 0, j = 0; i < n; ++i) {
//     if (nums[i] === 0) {
//       j = i + 1;
//       while (j < n) {
//         if (nums[j] !== 0) {
//           const tmp = nums[i];
//           nums[i] = nums[j];
//           nums[j] = tmp;
//           break;
//         }
//         j++;
//       }
//     }
//   }

//   return nums;
// };
