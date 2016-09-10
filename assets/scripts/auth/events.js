'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./api');
const ui = require('./ui');
// let app = require('../app');

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

function handleBoxAClick () {
  console.log("Box A!");
}

function handleBoxBClick () {
  console.log('Box B');
}

function handleBoxCClick () {
  console.log('Box C');
}

function handleBoxDClick() {
  console.log('Box D');
}

function handleBoxEClick() {
  console.log('Box E');
}

function handleBoxFClick() {
  console.log('Box F');
}

function handleBoxGClick() {
  console.log('Box G');
}

function handleBoxHClick() {
  console.log('Box H');
}

function handleBoxIClick() {
  console.log('Box I');
}


function newGame() {
  api.startNewGame()
    .done(ui.startGame)
    .fail(ui.failure);
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);
  $('#new-game').on('click', newGame);
  $('#box-A').on('click', handleBoxAClick);
  $('#box-B').on('click', handleBoxBClick);
  $('#box-C').on('click', handleBoxCClick);
  $('#box-D').on('click', handleBoxDClick);
  $('#box-E').on('click', handleBoxEClick);
  $('#box-F').on('click', handleBoxFClick);
  $('#box-G').on('click', handleBoxGClick);
  $('#box-H').on('click', handleBoxHClick);
  $('#box-I').on('click', handleBoxIClick);

};

module.exports = {
  addHandlers,
};
