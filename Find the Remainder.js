/*
Find the Remainder
https://www.codewars.com/kata/find-the-remainder/train/javascript */

function remainder(a, b){
 if (b === 0) return NaN;
 return (a > b)? a % b : b % a;
}