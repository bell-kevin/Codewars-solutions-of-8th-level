/*
Expressions Matter
https://www.codewars.com/kata/5ae62fcf252e66d44d00008e
*/
function expressionMatter(a, b, c) {
let res =[];
res.push(a+b+c);
res.push(a*(b+c));
res.push(a*b*c);
res.push(a+b*c);
res.push((a+b)*c);
return res.sort((a,b)=>b-a)[0]
}