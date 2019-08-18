// Is it a palindrome?
// https://www.codewars.com/kata/is-it-a-palindrome/train/javascript
function isPalindrome(x) {
  let y = '';
  x = x.toLowerCase();
  for (let i = 0; i < x.length; i++){
    y = x[i] + y;
  }
  return x === y;
}