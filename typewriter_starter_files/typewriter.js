"use strict";

window.addEventListener("load", start);
window.addEventListener("click", init);
const text = document.querySelector("#typewriter").innerHTML;
let textchange = document.querySelector("#typewriter");
const iterator = text.length;
let i = 0;
function start() {
  console.log("start");
  console.log(text);
  /*   init();
   */
}

function init() {
  console.log("init");
  console.log(iterator);

  textchange.innerHTML = "muthafucker";
}
