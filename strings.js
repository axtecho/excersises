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

/* Q1 */
console.log(`QUESTION ONE = ${wizard.length}`);

/* Q2 */
const Q2 = wizard[2];
console.log(`QUESTION TWO = ${Q2}`);

/* Q3 */
const Q3 = wizard[6];
console.log(`QUESTION THREE = ${Q3}`);
/* Q4 */
const Q4 = wizard[29];
console.log(`QUESTION FOUR = ${Q4}`);
/* Q5 */
const Q5 = wizard[38];
console.log(`QUESTION FIVE = ${Q5}`);

/* -----------------------Methods----------------------- */

const str1 = "     There is        space here \n";
const str2 = str1.trim();

console.log(`_${str1}_`);
console.log(`_${str2}_`);

/* -----------------------Methods parameters----------------------- */

const fullname = "Lasse Weber Joergensen";
const firstname = fullname.substring(0, 5);
const lastname = fullname.substring(0);

console.log(`_${firstname}_`);
console.log(`_${lastname}_`);
/* -----------------------Substring----------------------- */
/* const wizard = "Albus Percival Wulfric Brian Dumbledore";
 */
/* Q1 */
const SQ1 = wizard.substring(0, 5);
console.log(`_${SQ1}_`);

/* Q2 */
const SQ2 = wizard.substring(29);
console.log(`_${SQ2}_`);

/* Q3 */
const SQ3 = wizard.substring(15, 22);
console.log(`_${SQ3}_`);

/* Q4 */
const SQ4 = wizard.substring(14, 23);
console.log(`_${SQ4}_`);

/* Q5 */
const SQ5 = wizard.substring(25, 28);
console.log(`_${SQ5}_`);

/* Q6 */
const SQ6 = wizard.substring(2, 5);
console.log(`_${SQ6}_`);

const nombre = "Lasse Weber Joergensen";

console.log(nombre.indexOf(" ") + 1);
