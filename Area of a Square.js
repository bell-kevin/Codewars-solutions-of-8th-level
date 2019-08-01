/*
Area of a Square
https://www.codewars.com/kata/area-of-a-square/train/javascript
*/
function squareArea(A){
  return +(4 * Math.pow(A, 2)/Math.pow(Math.PI, 2)).toFixed(2);
}