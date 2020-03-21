//Is the string uppercase?
https://www.codewars.com/kata/56cd44e1aa4ac7879200010b

String.prototype.isUpperCase = function() {
  return this.replace(/[^A-Za-z]/g,'').split('').filter((el)=>el ===el.toLowerCase()).length === 0;
}

//2 case
String.prototype.isUpperCase = function() {
  return this == this.toUpperCase();
}