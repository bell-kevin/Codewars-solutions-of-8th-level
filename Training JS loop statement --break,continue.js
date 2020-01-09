//Training JS #11: loop statement --break,continue
//https://www.codewars.com/kata/5721c189cdd71194c1000b9b
function grabDoll(dolls){
  var bag=[];
  for (let i = 0; i < dolls.length; i++){
    if (dolls[i] === 'Hello Kitty' || dolls[i] === 'Barbie doll')
    bag.push(dolls[i]);
    if (bag.length === 3) break;
    else continue;
  }
 return bag;
}