"use strict";

const colorInput = document.querySelector("#colorSelector");

colorInput.addEventListener("input", readValue);

function readValue(event) {
  console.log(event.target.value);
  const theColor = colorInput.value;
  /*   console.log(theColor);
   */ document.querySelector(".displaycolor").style.background = theColor;
  convertToRGB(theColor);
  setHEXValue(theColor);
  /*   convertHSL(theColor);
   */
}
function setHEXValue(HEXvalue) {
  document.querySelector(".hexInput").textContent = HEXvalue;
}
function convertToRGB(hexValue) {
  const rValue = parseInt(hexValue.substring(1, 3), 16);
  const gValue = parseInt(hexValue.substring(3, 5), 16);
  const bValue = parseInt(hexValue.substring(5, 7), 16);
  document.querySelector(
    ".rgbInput"
  ).textContent = `${rValue}, ${gValue}, ${bValue}`;
  /*   console.log(`${rValue}, ${gValue}, ${bValue}`);
   */ convertToHSL(`${rValue}, ${gValue}, ${bValue}`);
}

function convertToHSL(r, g, b) {
  console.log(`$`);
  /* r /= 255;
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
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing
 */
}
