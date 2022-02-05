// Longest Semi-Alternating Substring


function semiSubstring(s) {

  if (s.length < 3) return s.length;

  let longest = 2;
  let temp = 2;

  for (let i = 2; i < s.length; ++i) {
    if (s[i - 2] !== s[i] || s[i - 1] !== s[i]) {
      temp++;
    } else {
      longest = Math.max(temp, longest);
      temp = 2;
    }
  }

  return Math.max(temp, longest);
}

console.log(semiSubstring('baaabbabbb'));
