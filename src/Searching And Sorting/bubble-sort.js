function bubbleSort(arr) {
  let isSorted = false;

  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < arr.length - 1; ++i) {
      if (arr[i] > arr[i + 1]) {
        isSorted = false;
        swap(arr, i, i + 1);
      }
    }
  }

  return arr;
}

function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

const arr = [2, 3, 6, 1, 7, 5, 4];
console.log(bubbleSort(arr));
