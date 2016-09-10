'use strict';

const app = require('../app');

const signInSuccess = (data) => {
  app.user = data.user;
};

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const changePasswordSuccess = () => {
  console.log('Passw0rd ch4nged lol');
};

const signOutSuccess = () => {
  console.log('okay fine leave');
};

module.exports = {
  failure,
  success,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
};
