"use strict";

let santaString = "\u{1f385}";
console.log(santaString);

let person = "Lasseeeeees";
let animal = "Perrito";
let animalName = "Molly";
let templateLiteral1 = `My name is ${person}, I am a ${santaString}.
I have a ${animal} called ${animalName}.`;

console.log(templateLiteral1);
console.log(`My name is ${person}, I am ${santaString}. 
I have a ${animal} called ${animalName}`);

let len = person.length;

console.log(`${person} is ${len} characters long `);

/* ----------------Excersise with .length and [index]---------------------------------- */

const wizard = "Albus Percival Wulfric Brian Dumbledore";
const wizardLength = wizard.length;
const Q2 = wizard[2];
const Q3 = wizard[6];
const Q4 = wizard[29];
const Q5 = wizard[38];

/* Q1 */
console.log(`QUESTION ONE = ${wizard.length}`);

/* Q2 */
console.log(`QUESTION TWO = ${Q2}`);

/* Q3 */
console.log(`QUESTION THREE = ${Q3}`);
/* Q4 */
console.log(`QUESTION FOUR = ${Q4}`);
/* Q5 */
console.log(`QUESTION FIVE = ${Q5}`);
