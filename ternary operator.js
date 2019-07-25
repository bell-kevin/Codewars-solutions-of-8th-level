/* Training JS #7: if..else and ternary operator
https://www.codewars.com/kata/training-js-number-7-if-dot-else-and-ternary-operator/train/javascript
*/

function saleHotdogs(n){
  return (n < 5) ? 100 * n : (n < 10) ? 95 * n : 90 * n;
}