//Sum without highest and lowest number
//https://www.codewars.com/kata/576b93db1129fcf2200001e6
function sumArray(array) {
  if (!array || array.length === 0 || array.length === 1 ) return 0;
  let min = Math.min(...array);
  let max = Math.max(...array);
  let s = 0;
  s = array.reduce((s, elem) => s + elem);
  return s - max - min;
}