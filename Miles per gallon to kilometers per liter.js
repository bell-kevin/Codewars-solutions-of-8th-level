//Miles per gallon to kilometers per liter
//https://www.codewars.com/kata/557b5e0bddf29d861400005d
function converter (mpg) {
  const gallon =  4.54609188;
  const mile = 1.609344;
  return +(mpg * mile / gallon).toFixed(2);
}