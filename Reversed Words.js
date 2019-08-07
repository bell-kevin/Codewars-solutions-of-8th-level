// Reversed Words
// https://www.codewars.com/kata/51c8991dee245d7ddf00000e
function reverseWords(str){
 let arr = str.split(' ');
 let str1 = '';
 for (i = 0; i < arr.length; i++) {
  if (i !== 0) {
    str1 = arr [i] + ' ' + str1;
   } else {
     str1 = arr [i] + str1;
   }
  }
  return str1;
}