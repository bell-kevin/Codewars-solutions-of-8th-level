There are my list of some Codewars tasks of 8th level

Remove duplicates from list
 <https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118 >    
Solution

 function distinct(a) {
   return a.filter (function (elem, index){
   return (index === a.indexOf(elem))});
 }
----------------------------------------------------------
Reversed Strings
<https://www.codewars.com/kata/5168bb5dfe9a00b126000018>

Solution

function solution(str){
 let rev ='';
 for (let i = str.length-1; i>=0; i--) {
   rev += str[i];
 }
 return rev;
}
----------------------------------------------------------