//Simple Fun #261: Whose Move
//https://www.codewars.com/kata/59126992f9f87fd31600009b

  function whoseMove(lastPlayer, win) {
    let next = (lastPlayer === 'black')? 'white': 'black';
    return win? lastPlayer: next;
  }