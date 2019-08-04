/*
Pirates!! Are the Cannons ready!??
https://www.codewars.com/kata/pirates-are-the-cannons-ready/train/javascript
*/
const cannonsReady = (gunners) => {
  let n = 0;
  let k = 0;
  for (let i in gunners) {
    n++;
    if ( gunners[i] === 'aye') k++;
  }
  if (n === k) return 'Fire!'; else return 'Shiver me timbers!';
}