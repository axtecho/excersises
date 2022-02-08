window.addEventListener("load", start);
const input = document.querySelector("#textinput");
const output = document.querySelector("#output");
const generate = document.querySelector("#generate");

function start() {
  generate.addEventListener("click", determineAction);
}

function determineAction() {
  displayOutput();
}

function displayOutput() {
  console.log("heyoo");
}

const Lasse = "Lasse Weber Joergensen";
const index = Lasse.indexOf(" ") - 1;

console.log(index);
