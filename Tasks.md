##There are my list of some interesting codewars tasks of 8th level

####Remove duplicates from list**   
 <https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118 >    

#####Solution
----------------------------------------------------------
function distinct(a) {
  return a.filter (function (elem, index){
  return (index === a.indexOf(elem))});
}
----------------------------------------------------------