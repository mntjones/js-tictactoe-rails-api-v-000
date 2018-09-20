// Code your JavaScript / jQuery solution here
const winning_combos = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [6,4,2]];
var turn = 0;
var game_id = 0;

$(document).ready(function() {
  attachListeners();
});

function player() {
  return (turn % 2 === 0) ? "X" : "O";
}

function updateState(square) {
  // need to update game board with current player's game token using jQuery
  $(square).text(player());
}

function setMessage(message) {
  $('#message').text(message);
}

function checkWinner() {
  var winner = false;
  var board = {};
  $('td').text((index, square) => board[index] = square);

  winning_combos.forEach( position => {
    if (board[position[0]] === board[position[1]] && board[position[1]] === board[position[2]] &&
      board[position[0]] !== "") {
        winner = true;
        setMessage(`Player ${board[position[0]]} Won!`);
    }
  })
  return winner;
}

function doTurn(square) {
  updateState(square);
  turn ++;
  if (checkWinner()) {
    saveGame();
    clearGame();
  }
  else if (turn === 9){
    setMessage('Tie game.')
    saveGame();
    clearGame();
  }
}

function attachListeners() {
  $('td').on("click", function() {
    // if you click on a square, checks if the square is blank and there is no winner. If so, completes doTurn
    if(checkWinner() === false && this.innerHTML === "") {
      doTurn(this);
    };
  });

  //  AJAX for button clicks
  $('#save').on('click', () => saveGame())
  $('#previous').on('click', () => showGames())
  $('#clear').on('click', () => clearGame())
}

function saveGame() {
  // get current board state in array
  var board = {};
  $('td').text((index, square) => board[index] = square);

  // get game_id and save game in state?
  $.patch //current game being played

  //completed game, auto saved
  $.post(`/games/${game.id}`, function(data){

  });

  // set data to be able to post (looking for object {} )

}

function showGames() {

}

function clearGame() {
  turn = 0;
  $('td').empty();
}
