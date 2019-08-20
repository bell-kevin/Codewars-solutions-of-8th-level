//Character Frequency
//https://www.codewars.com/kata/548ef5b7f33a646ea50000b2/solutions/javascript
function charFreq(str) {
 //str = str.toLowerCase();
 let obj = {};
 for (let i = 0; i < str.length; i++){
   if (obj[str[i]]) {
     obj[str[i]]++;
   } else {
     obj[str[i]] = 1;
   }
 }
  return obj;
}
