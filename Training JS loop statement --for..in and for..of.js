//Training JS #12: loop statement --for..in and for..of
//https://www.codewars.com/kata/5722b3f0bd5583cf44001000
function giveMeFive(obj){
  let res = [];
  for (let i in obj) {
    if (i.length === 5) {
      res.push(i);
    }
    if (obj[i].length === 5) {
      res.push(obj[i]);
    }
  }
  return res;
}