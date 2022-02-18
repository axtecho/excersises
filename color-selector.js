"use strict";

const colorInput = document.querySelector("#colorSelector");
window.addEventListener("load", start);
function start() {
  colorInput.addEventListener("input", readValue);
  readValue();
}
function readValue() {
  console.log(colorInput.value);

  const theColor = colorInput.value;

  delegator(theColor);
}
function delegator(hexInput) {
  console.log(hexInput);
  let rgbValues = handleRGB(hexInput);
  let hexValue = handleHEX(hexInput);
  let hslValue = handleHSL(rgbValues);
  handleBox(hexInput);
  displayRGB(rgbValues);
  displayHEX(hexValue);
  displayHSL(hslValue);
}
function handleBox(hexInput) {
  document.querySelector(".displaycolor").style.background = hexInput;
}
function displayRGB(value) {
  document.querySelector(".rgbInput").textContent = value;
  return;
}

function displayHEX(value) {
  document.querySelector(".hexInput").textContent = value;
}
function displayHSL(value) {
  let hslSplit = value.split(",");

  document.querySelector(
    ".hslInput"
  ).textContent = `${hslSplit[0]}, ${hslSplit[1]}%, ${hslSplit[2]}%`;
}

function handleRGB(hexValue) {
  const rValue = parseInt(hexValue.substring(1, 3), 16);
  const gValue = parseInt(hexValue.substring(3, 5), 16);
  const bValue = parseInt(hexValue.substring(5, 7), 16);

  return `${rValue}, ${gValue}, ${bValue}`;
}

function handleHEX(HEXvalue) {
  return HEXvalue;
}

function handleHSL(RGBvalues) {
  let rgbValue = RGBvalues.split(",");
  let r = rgbValue[0];
  let g = rgbValue[1];
  let b = rgbValue[2];
  r /= 255;
  g /= 255;
  b /= 255;
  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }

  s *= 100;
  l *= 100;

  return `${h.toFixed(0)}, ${s.toFixed(0)}, ${l.toFixed(0)}`;
}
