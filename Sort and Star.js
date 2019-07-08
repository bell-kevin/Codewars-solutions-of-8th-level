/*
Sort and Star
https://www.codewars.com/kata/57cfdf34902f6ba3d300001e
*/
function twoSort(s) {
s = s.sort();
let res = '';
for (let i = 0; i <s[0].length; i++) {
 res = res + s[0][i] + '***';
}
return res.substr(0, res.length - 3);
}
