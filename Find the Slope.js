//Find the Slope
//https://www.codewars.com/kata/55a75e2d0803fea18f00009d
function slope(points){
if (points[2] - points[0] === 0) return "undefined";
  return (points[3] - points[1])/(points[2] - points[0])+'';
}