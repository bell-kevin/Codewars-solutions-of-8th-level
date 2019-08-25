// NBA full 48 minutes average
//https://www.codewars.com/kata/nba-full-48-minutes-average/train/javascript
function pointsPer48(ppg, mpg) {
 if (mpg === 0) return 0;
 return +(ppg * 48 / mpg).toFixed(1);
}