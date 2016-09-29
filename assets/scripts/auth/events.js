'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./api');
const ui = require('./ui');
const eventsGame = require('../eventsgame');
const winlogic = require('../winlogic');
const app = require('../app');
let cellIndex = 0;
let gameBoard = eventsGame.gameBoard;


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

function newGame() {
  let player = 'x';
  api.startNewGame()
    .done(ui.startGame)
    .fail(ui.failure);
  $("#messages").text("New game? Good luck!" );
}

function whenClicked(event) {
  let cellIndex = parseInt(event.target.dataset.index);
  if (eventsGame.gameBoard[cellIndex] === ""){
    eventsGame.gameBoard[cellIndex] = eventsGame.switchTurn();
    api.updateBoard();
    eventsGame.printBoard();
    winlogic.doesXWin();
    winlogic.doesOWin();
    // debugger;
  } else {
    $("#messages").text("CAN'T DO THAT" );
  }
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
  cellIndex,
  whenClicked,
  // player,
};
