"use strict";
window.addEventListener("load", clock);
const array = [];
let counter = 0;

function clock() {
  /*   console.log(counter);
   */
  counter++;
  if (counter < 9) {
    setTimeout(clock, 1000);
  }

  array.push(counter);
  console.log(array);
}
