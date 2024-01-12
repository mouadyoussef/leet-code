/**
 * @param {string[]} bank
 * @return {number}
 */
const numberOfBeams = function (bank) {
  if (bank.length < 2) {
    return 0;
  }

  let r1 = countOnesInRow(bank[0]);
  let r2 = countOnesInRow(bank[1]);
  let beams = r1 * r2;

  for (let i = 2; i < bank.length; i++) {
    let r = countOnesInRow(bank[i]);

    if (r1 == 0 || r2 != 0) {
      r1 = r2;
    }
    r2 = r;

    beams += r1 * r2;
  }

  return beams;
};

const countOnesInRow = function (row) {
  let count = 0;
  for (let i = 0; i < row.length; i++) {
    if (row[i] === "1") {
      count++;
    }
  }
  return count;
};

console.log(numberOfBeams(["011001", "000000", "010100", "001000"])); // 8
console.log(numberOfBeams(["000", "111", "000"])); // 0
