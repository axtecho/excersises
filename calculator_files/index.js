"use strict";
window.addEventListener("load", start);
const firstnumber = document.querySelector("#firstnumber");
const secondnumber = document.querySelector("#secondnumber");
const result = document.querySelector("#results");
const operator = document.querySelector("#operator");
let finalResult;

let fn = Number(firstnumber.value);
let sn = Number(secondnumber.value);

function start() {
  document.querySelector("#calculate").addEventListener("click", reading);
  document.querySelector("#clear").addEventListener("click", clearResults);
}
function reading() {
  let fn = Number(firstnumber.value);
  let sn = Number(secondnumber.value);
  if (operator.value === "sub") {
    finalResult = fn - sn;
  } else if (operator.value === "mul") {
    finalResult = fn * sn;
  } else if (operator.value === "div") {
    finalResult = fn / sn;
  } else if (operator.value === "add") {
    finalResult = fn + sn;
  }
  calculating();
}

function calculating(opValue) {
  const node = document.createElement("li");
  const displayResult = document.createTextNode(finalResult);
  node.appendChild(displayResult);
  result.appendChild(node);
  reAssignValue();
}

function reAssignValue() {
  firstnumber.value = finalResult;
}

function clearResults() {
  result.innerHTML = "";
  console.log(result.childNodes);
}
