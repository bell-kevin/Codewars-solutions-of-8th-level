//Word Count
//https://www.codewars.com/kata/570cc83df616a85944001315
function countWords(str) {
  let s = str.trim();
  if (s === '') return 0;
  return s.replace(/[﻿ ]+/g, ' ').split(' ').length;
}