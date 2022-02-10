"use strict";
window.addEventListener("load", clock);
const array = [0];
let counter = 1;

function clock() {
  console.log(array);
  if (array.length < 9) {
    array.unshift(counter);
  } else {
    array.unshift(counter);
    array.pop(-1);
  }

  counter++;
  setTimeout(clock, 1000);
}
