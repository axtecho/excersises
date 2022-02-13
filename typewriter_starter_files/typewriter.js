"use strict";

window.addEventListener("load", start);
const text = document.querySelector("#typewriter").innerHTML;
let textchange = document.querySelector("#typewriter");
textchange.innerHTML = [];
console.log("TEXT -", text.length);
console.log("TEXTCHANGE -", textchange.innerHTML.length);

function start() {
  const textSplit = text.split("");
  init(textSplit);
}

function init(textSplit) {
  console.log("textSPLIT", textSplit);
  if (textchange.innerHTML.length < text.length) {
    console.log("eoo");
    textchange.innerHTML = textSplit[${}]
  }
}
