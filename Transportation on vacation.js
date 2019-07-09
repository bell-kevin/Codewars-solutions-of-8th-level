/*
Transportation on vacation
https://www.codewars.com/users/LarisaOvchinnikova/completed_solutions
*/
function rentalCarCost(d) {
  let sum = d * 40;
  if (d >= 3 && d < 7) sum = sum - 20;
  if (d >= 7) sum = sum - 50;
  return sum;
}