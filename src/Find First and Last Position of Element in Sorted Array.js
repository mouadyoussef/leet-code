/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  // initiate binary search
  let left = 0, right = nums.length - 1;

  // search for the first appearance index of target
  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    // try to push the array to the left smaller half
    // that's why even when nums[mid] == target, we still set r = mid
    nums[mid] >= target
      ? right = mid
      : left = mid + 1;
  }

  // after the first while loop, the small index l should already be the first appearance index of target
  // otherwise, target is not in the array and [-1, -1] should be returned
  if (nums[left] !== target) return [-1, -1];

  // now we have the first appearance index of target, and it is the small index l
  // we can store it to a new variable for further usage
  let start = left;

  // since both of the indices were changed (both of them are at the first appearance index of target)
  // we need to reset the big index to the end of the array to do the second binary search
  // to find the last appearance index of the target
  right = nums.length - 1;

  // search for the last appearance index of the target
  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    // nums[mid] <= target? l = mid : r = mid -1
    // the above will not work as it will run into infinite loop
    nums[mid] <= target
      ? left = mid + 1
      : right = mid;
  }

  // after the second while loop, now l == nums.length - 1
  // now there are 2 conditions: target is also appeared at the last index of the array, or not
  // store the last appearance index of target to another variable
  let end = nums[left] === target ? left : left - 1;

  // finally return the two indices into an array
  return [start, end];
};

let nums = [5,7,7,8,8,10]

console.log(searchRange([5,7,7,8,8,10], 8)); // Output: [3,4]
