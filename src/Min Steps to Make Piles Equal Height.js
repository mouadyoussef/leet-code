// Min Steps to Make Piles Equal Height

function minSteps(piles) {
  let count = 0;

  piles.sort();

  // for (let i = 0; i < piles.length - 1; i++) {
  //   for (let j = i + 1; j < piles.length; j++) {
  //     if (piles[i] > piles[j]) {
  //       piles[i] = piles[j];
  //       ++count;
  //     }
  //   }
  // }

  const n = piles.length;

  for (let i = 1; i < n; ++i) {
    if (piles[n - i - 1] !== piles[n - i]) {
      count += i;
    }
  }

  return count;
}



console.log(minSteps([5, 5, 2, 1]));


