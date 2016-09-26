'use strict';

const app = require('./app');
const events = require('./auth/events');
// const winlogic = require('../winlogic');
let player = 'X';
let cellIndex = 0;


let switchTurn = function() {
  // debugger;
  if (player === 'X') {
    player = 'O';
    $("#messages").text("Hey it's player" + player + "'s turn!'" );
    // return player;
  } else {
    player = 'X';
    $("#messages").text("Hey it's player" + player + "'s turn!'" );
    // return player;
  }
};

// add 'player' variable into space 'cellIndex'
function printBoard(cellIndex, player) {
  // debugger;
  $(app.game.cells[cellIndex]).html(player);
}




// const playerTurn (event) => {
//   switchTurn();
//   printBoard();
  // winlogic();
  // noWins();
// };

module.exports = {
  printBoard,
  switchTurn,
};
