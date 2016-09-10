'use strict';

const app = require('../app');

const hideModal = function (){
  $('#signInModal').modal('hide');
};

const signInSuccess = (data) => {
  app.user = data.user;
  hideModal();
  $("#user-one").text(app.user.email);
};

const signUpSuccess = (data) => {
  app.user = data.user;
  hideModal();
  $("#user-one").text(app.user.email);
};

const failure = (error) => {
  console.error(error);
};

const changePasswordSuccess = () => {
  console.log('Passw0rd ch4nged lol');
  hideModal();
};

const signOutSuccess = () => {
  app.user = null;
  hideModal();
  $("#user-one").text("");
};

module.exports = {
  failure,
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
};
