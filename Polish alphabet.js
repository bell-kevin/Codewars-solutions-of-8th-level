//8 kyu  Polish alphabet
//https://www.codewars.com/kata/57ab2d6072292dbf7c000039
function correctPolishLetters (string) {
 let obj = {
  ą: 'a',
  ć: 'c',
  ę: 'e',
  ł: 'l',
  ń: 'n',
  ó: 'o',
  ś: 's',
  ź: 'z',
  ż: 'z',
 }
 let res = '';
 for(let i of string){
   if (obj[i]) res = res + obj[i]; else res =  res + i;
 }
  return res;
}