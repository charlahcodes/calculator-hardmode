import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

// Declare vars/connect to css
var zero = document.querySelector('#zero');
var one = document.querySelector('#one');
var two = document.querySelector('#two');
var three = document.querySelector('#three');
var four = document.querySelector('#four');
var five = document.querySelector('#five');
var six = document.querySelector('#six');
var seven = document.querySelector('#seven');
var eight = document.querySelector('#eight');
var nine = document.querySelector('#nine');

var decimal = document.querySelector('#decimal');
var clear = document.querySelector('#clear');
var plus = document.querySelector('#plus');
var minus = document.querySelector('#minus');
var multiply = document.querySelector('#multiply');
var divide = document.querySelector('#divide');

var results = document.querySelector('#results');

var total;

var newValue;

// Functions for calculator operations
var clearFnc = function() {
  results.textContent = null;
};

var plusFnc = function() {
  results.textContent += '+';
};

var minusFnc = function() {
  results.textContent += '-';
};

var multiplyFnc = function() {
  results.textContent += '*';
};

var divideFnc = function() {
  results.textContent += '/';
};

// Functions to display numbers
var zeroFnc = function() {
  results.textContent += 0;
};

var oneFnc = function() {
  results.textContent += 1;
};

var twoFnc = function() {
  results.textContent += 2;
};

var threeFnc = function() {
  results.textContent += 3;
};

var fourFnc = function() {
  results.textContent += 4;
};

var fiveFnc = function() {
  results.textContent += 5;
};

var sixFnc = function() {
  results.textContent += 6;
};

var sevenFnc = function() {
  results.textContent += 7;
};

var eightFnc = function() {
  results.textContent += 8;
};

var nineFnc = function() {
  results.textContent += 9;
};

var decimalFnc = function() {
  results.textContent += '.';
};

// Clicks
clear.addEventListener('click', clearFnc);
plus.addEventListener('click', plusFnc);
minus.addEventListener('click', minusFnc);
multiply.addEventListener('click', multiplyFnc);
divide.addEventListener('click', divideFnc);
decimal.addEventListener('click', decimalFnc);
zero.addEventListener('click', zeroFnc);
one.addEventListener('click', oneFnc);
two.addEventListener('click', twoFnc);
three.addEventListener('click', threeFnc);
four.addEventListener('click', fourFnc);
five.addEventListener('click', fiveFnc);
six.addEventListener('click', sixFnc);
seven.addEventListener('click', sevenFnc);
eight.addEventListener('click', eightFnc);
nine.addEventListener('click', nineFnc);
/* Store numbers in "total" and "newValue".  Function adds newValue to total.
For numbers, store in newValue if total = 0...?*/