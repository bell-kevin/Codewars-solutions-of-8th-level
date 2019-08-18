// Find the Difference in Age between Oldest and Youngest Family Members
// https://www.codewars.com/kata/find-the-difference-in-age-between-oldest-and-youngest-family-members/train/javascript

function differenceInAges(ages){
 let min = ages[0],
     max = ages[0];
 for (let i = 0; i <ages.length; i++){
   if (ages[i] < min) min = ages[i];
   if (ages[i] > max) max = ages[i];
 }
 return [min, max, max - min];
}