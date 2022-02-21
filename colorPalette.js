"use strict";

window.addEventListener("load", start);
const colorPicker = document.querySelector("#colorPicker");
const options = document.querySelector("#options");
const colorArray = ["#ff0000", "#4eb1aa", "#48b7a6", "#5f91a0", "#717c8e"];
let currentHarmony = "";
const shade1 = document.querySelector(".shade1").style;
const shade2 = document.querySelector(".shade2").style;
const shadeMain = document.querySelector(".shadeMain").style;
const shade4 = document.querySelector(".shade4").style;
const shade5 = document.querySelector(".shade5").style;

function start() {
  document
    .querySelector("#colorPicker")
    .addEventListener("input", currentValue);
  document.querySelector("#options").addEventListener("input", updateHarmony);
}
function updateHarmony() {
  if (options.value === "analogous") {
    console.log("analogous");
    currentHarmony = "analogous";
  } else if (options.value === "monochromatic") {
    console.log("monochromatic");
    currentHarmony = "monochromatic";
  } else if (options.value === "triad") {
    console.log("triad");
    currentHarmony = "triad";
  } else if (options.value === "complementary") {
    console.log("complementary");
    currentHarmony = "complementary";
  } else if (options.value === "compound") {
    console.log("complementary");
    currentHarmony = "complementary";
  } else if (options.value === "shades") {
    console.log("shades");
    currentHarmony = "shades";
  }
}
function currentValue() {
  const currentValue = colorPicker.value;
  delegatorConverter(currentValue);
}
function delegatorConverter(currentValue) {
  let rgbValues = handleRGB(currentValue);
  let hexValue = handleHEX(currentValue);
  let hslValue = handleHSL(rgbValues);
  if (currentHarmony === "analogous") {
    analogous();
  } else if (currentHarmony === "monochromatic") {
    monochromatic();
  } else if (currentHarmony === "triad") {
    triad();
  } else if (currentHarmony === "complementary") {
    complementary();
  } else if (currentHarmony === "compound") {
    compound();
  } else if (currentHarmony === "shades") {
    shades();
  }
}
function analogous() {
  console.log("analagous the function");
}
function monochromatic() {
  console.log("monochromatic the function");
}
function triad() {
  console.log("triad the function");
}
function complementary() {
  console.log("complementary the function");
}
function compound() {
  console.log("compound the function");
}
function shades() {
  console.log("shades the function");
}

function setColors(currentColor) {
  console.log(colorPicker.value);
  /* colorArray.push() */
  shade1.background = colorArray[0];
  shade2.background = colorArray[1];
  shadeMain.background = colorArray[2];
  shade4.background = colorArray[3];
  shade5.background = colorArray[4];
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
