/*
No zeros for heros
https://www.codewars.com/kata/no-zeros-for-heros/train/javascript
*/

function noBoringZeros(n) {
  return +n.toString().replace(/0*$/,'');
}