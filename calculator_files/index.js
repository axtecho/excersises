"use strict";
window.addEventListener("load", start);

const firstnumber = document.querySelector("#firstnumber");
const secondnumber = document.querySelector("#secondnumber");
const result = document.querySelector("#results");
const operator = document.querySelector("#operator");
const round = document.querySelector("#doround");
const decimals = document.querySelector("#decimals");

let finalResult;
let roundedNumbers;

function start() {
  document.querySelector("#calculate").addEventListener("click", calculating);
  document.querySelector("#clear").addEventListener("click", clearResults);
}
function calculating() {
  let fn = Number(firstnumber.value);
  let sn = Number(secondnumber.value);
  console.log(operator.value);
  if (operator.value === "sub") {
    finalResult = fn - sn;
  } else if (operator.value === "mul") {
    finalResult = fn * sn;
  } else if (operator.value === "div") {
    finalResult = fn / sn;
  } else if (operator.value === "add") {
    finalResult = fn + sn;
  }
  if (round.checked == true) {
    roundnumbers();
  } else {
    displaying();
  }
}
function roundnumbers() {
  let roundedNumbers = finalResult.toFixed(decimals.value);
  const node = document.createElement("li");
  const displayResult = document.createTextNode(roundedNumbers);
  node.appendChild(displayResult);
  result.appendChild(node);

  reAssignValueRounded(roundedNumbers);
}

function displaying() {
  const node = document.createElement("li");
  const displayResult = document.createTextNode(finalResult);
  node.appendChild(displayResult);
  result.appendChild(node);
  reAssignValue();
}

function reAssignValue() {
  firstnumber.value = finalResult;
}
function reAssignValueRounded(rN) {
  firstnumber.value = rN;
}
function clearResults() {
  result.innerHTML = "";
  firstnumber.value = "";
  secondnumber.value = "";
}
