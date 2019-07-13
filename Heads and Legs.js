/*
Heads and Legs
https://www.codewars.com/kata/heads-and-legs/train/javascript
*/
function animals(heads, legs){
console.log(heads, legs);
if (heads < 0 || legs < 0) return 'No solutions';
  let cows = (legs - 2 * heads) / 2;
  let chick = heads - cows;
  if (cows < 0 || chick < 0 || !Number.isInteger(cows) || !Number.isInteger(chick)) return 'No solutions';
  return [chick, cows];
}