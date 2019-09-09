//Logical calculator
//https://www.codewars.com/kata/57096af70dad013aa200007b
function logicalCalc(arr, op){
let res = arr[0];
  for (let i = 1; i <arr.length; i++){
   if (op === 'AND') res = res && arr[i];
   if (op === 'OR') res = res || arr[i];
   if (op === 'XOR') res = res ^ arr[i];
   }
return !!res;
}