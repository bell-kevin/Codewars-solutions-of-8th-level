/* Century From Year
https://www.codewars.com/kata/century-from-year/train/javascript*/

function century(year) {
  return (year % 100 === 0)? year / 100 : Math.trunc(year / 100) + 1;
}