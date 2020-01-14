//Smallest unused ID
//https://www.codewars.com/kata/55eea63119278d571d00006a

function nextId(ids){
  for (let i = 0; i <= ids.length; i++){
    if (!ids.includes(i)) return i;
  }
}

//or

function nextId(ids){
  ids = ids.sort((a, b) => a - b).filter((el,i) => i === ids.indexOf(el));
  for (let i = 0; i < ids[ids.length-1]; i++){
    if (ids[i] !== i) return i;
  }
  return ids[ids.length-1] + 1;
}