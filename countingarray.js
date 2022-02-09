"use strict";
window.addEventListener("load", clock);
const array = [];
let counter = 0;

function clock() {
  counter++;
  if (counter < 9) {
    setTimeout(clock, 2000);
  }

  array.push(counter);
  console.log(array);
}
