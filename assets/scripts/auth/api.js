'use strict';

const app = require('../app');
const eventsGame = require('../eventsgame');

const signUp = (data) => {
  return $.ajax({
    url: app.host + '/sign-up',
    method: 'POST',
    data:data,
  });
};

const signIn = (data) => {
  return $.ajax({
    url: app.host + '/sign-in',
    method: 'POST',
    data:data
  });
};

const changePassword = (data) => {
  return $.ajax({
    url: app.host + '/change-password/' + app.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data:data
  });
};

const signOut = () => {
  return $.ajax({
      url: app.host + /sign-out/ + app.user.id,
      method: 'DELETE',
      headers: {
        Authorization: 'Token token=' + app.user.token
      }
  });
};

const getGames = () => {
  return $.ajax({
    url: app.host + '/games/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  });
};

const startNewGame = () => {
  return $.ajax({
    url: app.host + '/games/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token
      // IDFK how to make this work yet
    // data: {
    //   "token": app.user.token,
    //   "cells": ["","","","","","","",""],
    // }
    }
  });
};

const updateBoard = () => {
  let gameId = app.game.id;
  let index = parseInt(event.target.dataset.index);
  let value = eventsGame.player;
  return $.ajax({
    url: app.host + '/games/' + gameId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: {
      "game": {
        "cells": {
          "index": app.game.cells[index],
          "value": value,
          }
        }
      }
  });
};

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  getGames,
  startNewGame,
  updateBoard,
};
