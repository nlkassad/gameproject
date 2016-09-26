'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./api');
const ui = require('./ui');
const winlogic = require('../winlogic')
let app = require('../app');
let player = 'X';
let cellIndex = 0;

const onSignUp = function (event) {
  let data = getFormFields(event.target);
  event.preventDefault();

  api.signUp(data)
    .done(ui.signUpSuccess)
    .fail(ui.failure);
};

const onSignIn = function (event) {
  let data = getFormFields(event.target);
  event.preventDefault();
  api.signIn(data)
    .then(ui.signInSuccess)
    .fail(ui.failure);
};

const onChangePassword = function (event) {
  let data = getFormFields(event.target);
  event.preventDefault();

  api.changePassword(data)
    .done(ui.changePasswordSuccess)
    .fail(ui.failure);
};

const onSignOut = function (event) {
  event.preventDefault();

  api.signOut()
    .done(ui.signOutSuccess)
    .fail(ui.failure);
};

let switchTurn = function() {
  debugger;
  if (player === 'X') {
    player = 'O';
    $("#messages").text("Hey it's player" + player + "'s turn!'" );
    // printBoard();
    // return player;
  } else {
    player = 'X';
    $("#messages").text("Hey it's player" + player + "'s turn!'" );
    // printBoard();
    // return player;
  }
};

function whenClicked(event) {
  cellIndex = parseInt(event.target.dataset.index);
  if (app.game.cells[cellIndex] === ""){
    switchTurn();
    // debugger;
    return cellIndex;
    // playerTurn();
  } else {
    $("#messages").text('show', "CAN'T DO THAT" );
  }
}

// add 'player' variable into space 'cellIndex'
function printBoard(cellIndex, player) {
  $(app.game.cells(cellIndex)).text(player)
};

// const playerTurn (event) => {
//   switchTurn();
//   printBoard();
  // winlogic();
  // noWins();
// };


function newGame() {
  api.startNewGame()
    .done(ui.startGame)
    .fail(ui.failure);
  $("#messages").text("New game? Good luck!" );
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);
  $('#new-game').on('click', newGame);
  $('.game-cell').each(function(){
    $(this).on('click', whenClicked);
  });
};

module.exports = {
  addHandlers,
  whenClicked,
  // printBoard,
  // cellIndex,
};
