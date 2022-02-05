// Max Inserts to Obtain String Without 3 Consecutive 'a'

function maxInserts(s) {

  if (s.includes('aaa')) {
    return -1;
  }

  let nonAChars = 0;

  for (let i = 0; i < s.length; ++i) {
    if (s[i] !== 'a') {
      nonAChars++;
    }
  }

  return 2 * (nonAChars + 1) - (s.length - nonAChars);
}

console.log(maxInserts('aabab'));
