//Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision()
// https://www.codewars.com/kata/57256064856584bc4700061

function howManySmaller(arr,n){
   return arr.map(el =>+el.toFixed(2)).filter(el=>el<n).length;
}
