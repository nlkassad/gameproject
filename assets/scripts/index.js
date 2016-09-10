'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

// $("#toctitle").on('click', function(event){
//   console.log("event is ", event);
function handleBoxAClick () {
  console.log("clicked box A!");
}

$(function(){
  $('#box-A').on('click', handleBoxAClick);
});
