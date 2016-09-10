'use strict';

const app = require('../app');

const hideModal = function (){
  $('#signInModal').modal('hide');
};

const signInSuccess = (data) => {
  app.user = data.user;
  hideModal();
};

const signUpSuccess = (data) => {
  app.user = data.user;
  hideModal();
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const changePasswordSuccess = () => {
  console.log('Passw0rd ch4nged lol');
  hideModal();
};

const signOutSuccess = () => {
  console.log('okay fine leave');
};



module.exports = {
  failure,
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,

};
