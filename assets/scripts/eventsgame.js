'use strict';

const app = require('./app');
const events = require('./auth/events');
// const winlogic = require('../winlogic');
let player = 'x';
let gameBoard = ["", "", "", "", "", "", "", "", ""];
// let turn = 0;

let switchTurn = function(player, turn) {
  if (turn%2 === 0){
    let player = 'x';
    $("#messages").text("Hey it's player " + player + "'s turn!'" );
      turn +=1;
    return turn;
  }
  else {
    let player = 'o';
        turn +=1;
    return turn;
  }
 };

// let switchTurn = function() {
//   if (player === 'x') {
//     player = 'o';
//     $("#messages").text("Hey it's player " + player + "'s turn!'" );
//     return player;
//   } else {
//     player = 'x';
//     $("#messages").text("Hey it's player " + player + "'s turn!'" );
//     return player;
//   }
// };

function printBoard() {
  debugger;
  $("#box-A").text(gameBoard[0]);
  $("#box-B").text(gameBoard[1]);
  $("#box-C").text(gameBoard[2]);
  $("#box-D").text(gameBoard[3]);
  $("#box-E").text(gameBoard[4]);
  $("#box-F").text(gameBoard[5]);
  $("#box-G").text(gameBoard[6]);
  $("#box-H").text(gameBoard[7]);
  $("#box-I").text(gameBoard[8]);
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
  gameBoard,
};
