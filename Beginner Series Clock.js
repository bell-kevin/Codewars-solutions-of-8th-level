/*
Beginner Series #2 Clock
https://www.codewars.com/kata/beginner-series-number-2-clock/train/javascript
*/
function past(h, m, s){
  return (h * 60 * 60 + m * 60 + s) * 1000;
}