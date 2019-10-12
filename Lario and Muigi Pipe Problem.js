//Lario and Muigi Pipe Problem
//https://www.codewars.com/kata/56b29582461215098d00000f
function pipeFix(numbers){
 let max = Math.max(...numbers);
 let min = Math.min(...numbers);
 let res = [];
 for (let i = min; i <= max; i++){
   res.push(i);
 }
 return res;
}