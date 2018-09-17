// Code your JavaScript / jQuery solution here
var turn = 0;

function player() {
  if (turn % 2 === 0) {
    return "X";
  }

  else {
    return "O";
  }
}

function updateState(square) {
  // need to update game board with current player's game token using jQuery
  $(square).text(player());
}
