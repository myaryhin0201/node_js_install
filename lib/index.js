"use strict";

var express = require('express');

var validator = require('validator');

var greeter = require("./greeter");

greeter("Hello Node js");

var validateEmail = function validateEmail(email) {
  return validator.isEmail(email);
};

console.log('Is mango@mail.com a valid email?: ', validateEmail('mango@gmail.com'));
console.log('Is Mangozedog.com a valid email?: ', validateEmail('Mangozedog.com'));
var app = express();
app.get('/', function (req, res) {
  res.send('<h1>Hello World</h1>');
});
app.listen(5000, function () {
  console.log("App is running on port 5000");
});