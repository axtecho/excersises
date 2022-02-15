"use strict";

window.addEventListener("click", start);
const text = document.querySelector(".typewritten");git a
let typedText = text.innerHTML;
const max = typedText.length + 1;
let i = 1;

function start() {
  /*   console.log("setup", typedText);
   */ init();
}

function init() {
  loop();
}

function loop() {
  /*   console.log(i);
   */ let newString = typedText.substring(0, i);
  console.log(newString);
  document.querySelector("#typewriter").innerHTML = newString;
  i++;

  if (i < max) {
    setTimeout(loop, 100);
  }
}
