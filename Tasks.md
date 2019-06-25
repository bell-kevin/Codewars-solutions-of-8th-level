##There are my list of some interesting codewars tasks of 8th level

<p>Remove duplicates from list <a href=https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118 </a> </p>
##Solution

function distinct(a) {
  return a.filter (function (elem, index){
  return (index === a.indexOf(elem))});
}