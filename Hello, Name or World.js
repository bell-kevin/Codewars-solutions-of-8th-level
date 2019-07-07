/*
Hello, Name or World!
https://www.codewars.com/kata/57e3f79c9cb119374600046b
*/
function hello(name) {
if (arguments.length === 0 || name ==='' ) return 'Hello, World!';
  name = name.toLowerCase();
  name = name[0].toUpperCase()+name.slice(1, name.length);
  return `Hello, ${name}!`;
}