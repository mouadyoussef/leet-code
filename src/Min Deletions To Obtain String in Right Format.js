// Min Deletions To Obtain String in Right Format

function minStep(str) {
  const charX = 'X';
  let numY = 0;
  let minDel = 0;
  for (let i = 0; i < str.length; i++) {
    if (charX === str[i]) {
      minDel = Math.min(numY, minDel + 1);
    } else {
      numY++;
    }
  }
  return minDel;
}


console.log(minStep('YXXXYXY'));
console.log(minStep('YYXYXX'));

console.log(minStep('XXYYYY'));