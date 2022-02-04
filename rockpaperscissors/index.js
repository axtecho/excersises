window.addEventListener("load", start);

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissors");
const p1 = document.querySelector("#player1");
const p2 = document.querySelector("#player2");
let result1 = rock === 1;
let result2 = rock < 2;
let result3 = rock > 3;
let result4 = paper > 1;
let result5 = paper === 2;
let result6 = paper < 3;
let result7 = scissor < 1;
let result8 = scissor > 2;
let result9 = scissor === 3;

function generateRandomNumber(number) {
  /*     console.log(number);
   */ return Math.floor(Math.random() * number) + 1;
}

function start() {
  rock.addEventListener("click", computedChoice);
  paper.addEventListener("click", computedChoice);
  scissor.addEventListener("click", computedChoice);
  /*   computedChoice();
   */
}

function computedChoice() {
  let pcchoice = generateRandomNumber(3);

  animation();
}
function animation() {
  p1.classList.add("shake");
  p2.classList.add("shake");
  p2.addEventListener("animationend", compareResults);
}
function compareResults() {
  /*  showWin();
   */ showLoss();
  /*  showDraw();
   */
}
function showWin() {
  document.querySelector("#win").classList.remove("hidden");
}
function showLoss() {
  document.querySelector("#lose").classList.remove("hidden");
}
function showDraw() {
  document.querySelector("#draw").classList.remove("hidden");
}
