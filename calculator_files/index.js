"use strict";

const firstnumber = document.querySelector("#firstnumber");
const secondnumber = document.querySelector("#secondnumber");
let fn = Number(firstnumber.value);
let sn = Number(secondnumber.value);
let finalResult = fn + sn;
const calculate = document.querySelector("#calculate");
const result = document.querySelector("#results");
calculate.addEventListener("click", reading);

function reading() {
  result.firstChild.textContent = finalResult;
  calculating();
}

function calculating() {}
