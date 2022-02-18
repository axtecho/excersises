"use strict";
/* const firstName = "Lasse";
const myName = "Tiihonen";
const animalType = "Cat";
const animalName = "KittyKat";

sayHello(firstName);

presentPet(animalType, animalName, firstName);

function sayHello(firstName) {
  console.log(`Hello, ${firstName}`);
}
 */
/* Q ="The functions is called on an earlier line than it is created"
   A = It still calls it and display   */

/* function presentPet(firstName, animalType, animalName) {
  console.log(
    `My name is ${firstName}, I have a ${animalType} called ${animalName}`
  );
}

let number1 = 2;
let theOtherNumber = 25;

let result;

function multiply(num1, num2) {
  result = num1 * num2;
}
multiply(number1, theOtherNumber); */
/* console.log("result", result);
 */

/* ---------------------------------------------------------------------- */
/* CAPITALIZE */
/* let returnedCapit = capitalize("kALLe");
function capitalize(str) {
  const capital = str.charAt().toUpperCase();

  const newString = capital + str.substring(1).toLowerCase();
  return newString;
} */
/* NAME-PARTS */
/* const getFullName = getNameParts("Lasse Weber Joergensen");

function getNameParts(fullname) {
  const firstName = fullname.substring(0, fullname.indexOf(" "));

  const middleName = fullname.substring(
    fullname.indexOf(" "),
    fullname.lastIndexOf(" ")
  );

  const lastName = fullname.substring(fullname.lastIndexOf(" "));

  return firstName + middleName + lastName;
}
console.log(getFullName); */
/* Convert from hex to integer */
/* let numberAsHex = "facade";
hexToRGB(numberAsHex);
function hexToRGB(hexCode) {
  const rValue = parseInt(hexCode.substring(0, 2), 16);
  const gValue = parseInt(hexCode.substring(2, 4), 16);
  const bValue = parseInt(hexCode.substring(4, 6), 16);

  console.log(rValue, gValue, bValue);
} */

/* Convert from integer to hex */
/* let someNumberAsInteger = {
  r: 250,
  g: 202,
  b: 222,
};

let someBase16NumberAsString = someNumberAsInteger.toString(16);
rgbToHex(someNumberAsInteger);
function rgbToHex(RGBobject) {
  const rValue = RGBobject.r.toString(16);
  const gValue = RGBobject.g.toString(16);
  const bValue = RGBobject.b.toString(16);
  const newString = rValue + gValue + bValue;
  console.log(`#${newString}`);
}
console.log("someBase16NumberAsString", someBase16NumberAsString); */
/* console.log(typeof someNumberAsInteger);
 */
/* Simple integer convertion */
/* let simpleNumberAsString = "234, 192, 1";

cssToRGB(simpleNumberAsString);
function cssToRGB(simpleNumberAsString) {
  const splitString = simpleNumberAsString.split(",");

  if (splitString.length === 3) {
    const rValue = parseInt(splitString[0]);
    const gValue = parseInt(splitString[1]);
    const bValue = parseInt(splitString[2]);
    console.log(rValue, gValue, bValue);
  } else if (splitString.length === 2) {
    const rValue = parseInt(splitString[0]);
    const gValue = parseInt(splitString[1]);
    console.log(rValue, gValue);
  } else {
    const rValue = parseInt(splitString[0]);
    console.log(rValue);
  }
}
 */

/* const people = ["Harry", "Ron", "Hermione", "Neville"];

function testParms(a, b, c, d) {
  console.log(`a: ${a}, b:${b}, c: ${c}, d:${d}`);
}

people.forEach(testParms);
 */

const animals = [
  {
    name: "Mandu",
    type: "cat",
  },
  {
    name: "Mia",
    type: "cat",
  },
  {
    name: "LeeLoo",
    type: "dog",
  },
  {
    name: "ScoobyDoo",
    type: "dog",
  },
];

function isCat(animal) {
  if (animal.type === "cat") {
    return true;
  } else {
    return false;
  }
}

function firstLetterBeginsWithS(animal) {
  if (animal.name.startsWith("S")) {
    return true;
  } else {
    return false;
  }
}

function all() {
  return true;
}

console.log("animals", animals);

console.log("---");

//Given a table in HTML
//Click on a filer filters table
function prepareAnimals(filterFunction) {
  //filter on a criteia
  let filteredAnimals = animals.filter(filterFunction);

  displayAnimals(filteredAnimals);
}

function displayAnimals(filteredAnimals) {
  //Fill table with filtered animals
  filteredAnimals.forEach((animal) => console.log(animal));
}

prepareAnimals(all);
