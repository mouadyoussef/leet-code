// Lexicographically Smallest String

function smallestString(str) {
  let largestIndex = 0;

  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > str.charCodeAt(largestIndex)) {
      largestIndex = i;
    }
  }
}


console.log(minStep('abczd')); // abcd
console.log(minStep('abcda')); // abca
