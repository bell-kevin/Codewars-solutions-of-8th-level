// Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string
//https://www.codewars.com/kata/exclamation-marks-series-number-4-remove-all-exclamation-marks-from-sentence-but-ensure-a-exclamation-mark-at-the-end-of-string/train/javascript

function remove(s){
  return s.replace(/\!/g,'') + '!';
}