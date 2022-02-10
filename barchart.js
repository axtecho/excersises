"use strict";
window.addEventListener("click", init);
const bars = document.querySelector(".mainContainer").innerHTML;
const mainContainer = document.querySelector(".mainContainer");

console.log(Array.from(mainContainer));

function init() {
  loop();
}

function loop() {
  console.log("loop");
  const barArray = Array.from(mainContainer);
  let div = document.createElement("div");
  if (barArray.length < 40) {
    barArray.unshift(div);
  }
  setTimeout(loop, 1000);
  displayBars();
  console.log("loopEnd");
}
function displayBars() {}

/* function displayBars() {

  if (mainContainer.childElementCount < 40) {
    let div = document.createElement("div");
    div.classList.add("bar");
    let text = document.createTextNode("");
    div.appendChild(text);
    mainContainer.appendChild(div);
  }
  setTimeout(displayBars, 1000);
}
 */
