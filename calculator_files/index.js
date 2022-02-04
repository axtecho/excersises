"use strict";

const firstnumber = document.querySelector("#firstnumber");
const secondnumber = document.querySelector("#secondnumber");
const calculate = document.querySelector("#calculate");
const result = document.querySelector("#results");
const operator = document.querySelector("#operator");
const node = document.createElement("li");
let finalResult;

let fn = Number(firstnumber.value);
let sn = Number(secondnumber.value);

calculate.addEventListener("click", reading);

function reading() {
  if (operator.value === "sub") {
    finalResult = fn - sn;
  } else if (operator.value === "mul") {
    finalResult = fn * sn;

    /*     console.log(finalResult);
     */
  } else if (operator.value === "div") {
    finalResult = fn / sn;
    /*     console.log(finalResult);
     */
  } else if (operator.value === "add") {
    finalResult = fn + sn;

    /*     console.log(finalResult);
     */
  }
  calculating();
}

function calculating(opValue) {
  const displayResult = document.createTextNode(finalResult);
  node.appendChild(displayResult);
  result.appendChild(node);
}
