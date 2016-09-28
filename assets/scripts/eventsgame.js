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
    player = 'o';
    $("#messages").text("Hey it's player " + player + "'s turn!'" );
    // return player;
  } else {
    player = 'x';
    $("#messages").text("Hey it's player " + player + "'s turn!'" );
    // return player;
  }
};

// add 'player' variable into space 'cellIndex'
function printBoard() {
  debugger;
  $("#box-A").text(app.game.cells[0]);
  $("#box-B").text(app.game.cells[1]);
  $("#box-C").text(app.game.cells[2]);
  $("#box-D").text(app.game.cells[3]);
  $("#box-E").text(app.game.cells[4]);
  $("#box-F").text(app.game.cells[5]);
  $("#box-G").text(app.game.cells[6]);
  $("#box-H").text(app.game.cells[7]);
  $("#box-I").text(app.game.cells[8]);
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
