//London CityHacker
//https://www.codewars.com/kata/5bce125d3bb2adff0d000245
function londonCityHacker(journey) {
  if (journey.length === 0) return "£0.00";
  let cost = 0;
  for (let i = 0; i < journey.length; i++) {
    if (typeof journey[i] === 'string') cost += 2.4;
    if (typeof journey[i] === 'number') {
       cost += 1.5;
       if (typeof journey[i+1] === 'number')  i++;
    }
  }
   return `£${cost.toFixed(2)}`;
}