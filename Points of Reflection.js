/*
Points of Reflection
https://www.codewars.com/kata/points-of-reflection/train/javascript
*/
function symmetricPoint(p, q) {
  let dx = q[0] - p[0];
  let dy = q[1] - p[1];
  let x = q[0] + dx;
  let y = q[1] + dy;
  return [x, y];
}