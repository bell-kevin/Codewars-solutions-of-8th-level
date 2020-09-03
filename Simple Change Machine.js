//Simple Change Machine
//https://www.codewars.com/kata/57238766214e4b04b8000011
function changeMe(money){
  if (money === "Money" || money === "Not a specified coin or note") return money;
  if (money[0] === "£") money = +money.replace("£", '') * 100;
  if (money[money.length-1] === "p") money = +money.replace("p", '');
  if (money === 20)  return '10p 10p';
  let res = '';
  while (money >= 20) {
    money = money - 20;
    res += "20p ";
  }
    while (money >= 10) {
    money = money - 10;
    res += "10p ";
  }
  return res.trim();
}