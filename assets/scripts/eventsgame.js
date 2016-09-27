'use strict';

const app = require('./app');
const events = require('./auth/events');
// const winlogic = require('../winlogic');
let player = 'x';
// let cellIndex = 0;


// let whoseTurn = function(player) {
//   if (app.turn%2 === 0){
//     let player = 'X';
    // $("#messages").text("Hey it's player " + player + "'s turn!'" );
//     return player;
//   }
//   else {
//     let player = 'O';
//     return player;
//   }
// };
// }

let switchTurn = function() {
  // debugger;
  if (player === 'x') {
    player = 'x';
    $("#messages").text("Hey it's player " + player + "'s turn!'" );
    // return player;
  } else {
    player = 'x';
    $("#messages").text("Hey it's player " + player + "'s turn!'" );
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
  player,
};
