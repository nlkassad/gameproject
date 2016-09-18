'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./api');
const ui = require('./ui');
let app = require('../app');
let bootstrapButton = $.fn.button.noConflict();

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

let player = 'X';

const switchTurn = function() {
  // debugger;
  if (player === 'X') {
    player = 'O';
  }else{
    player = 'X';
    $("#messages").text("Hey it's player" + player + "'s turn!'" );
  }
};

function whenClicked(event) {
  // debugger;
  const cellIndex = parseInt(event.target.dataset.index);
  if (app.game.cells[cellIndex] === ""){
    switchTurn();
    return(cellIndex);
  } else {
    $("#messages").text('show', "CAN'T DO THAT" );
  }
}

// function printBoard() {
  // add 'player' variable into space 'cellIndex'

// }


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
  // cellIndex,
};
