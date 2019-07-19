/*
isReallyNaN
Write a function isReallyNaN that returns true only if passed in an argument that evalutes to NaN, and returns false otherwise.
https://www.codewars.com/kata/isreallynan/train/javascript
*/

const isReallyNaN = (val) => {
  return (val === val) ? false : true;
};