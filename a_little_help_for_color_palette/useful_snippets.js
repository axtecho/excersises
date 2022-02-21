"use strict";

// I have two different "clamping" functions - this one rolls round
// analyze this (https://youtu.be/ravi4YtUTxo  🙂)
function limit(value, max) {
  return (max + value) % max;
}
// I have two different "clamping" functions - this one stops at min and max
function clamp(value, max = 100, min = 0) {
  if (value < min) {
    value = min;
  } else if (value > max) {
    value = max;
  }
  return value;
}
// try them

//////////////////////////////
/////// Object.assign() //////
//////////////////////////////
////// COPIES AN OBJECT //////
////( if it's enumerable ) ///

// serious link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }
