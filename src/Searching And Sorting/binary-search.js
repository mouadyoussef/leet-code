
function binarySearch(arr, item, left, right) {
  if (left >= right) {
    return false;
  }

  const mid = Math.floor((left + right) / 2);

  if (item === arr[mid]) {
    return true;
  } else if (item < arr[mid]) {
    return binarySearch(arr, item, left, mid - 1);
  } else {
    return binarySearch(arr, item, mid + 1, right);
  }
}


let arr = [2, 3, 4, 10, 40];
let x = 101;

console.log(binarySearch(arr, x, 0, arr.length));
