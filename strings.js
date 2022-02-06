"use strict";

let santaString = "\u{1f385}";
console.log(santaString);

let person = "Lasse";
let animal = "Perrito";
let animalName = "Molly";
let templateLiteral1 = `My name is ${person}, I am a ${santaString}.
I have a ${animal} called ${animalName}.`;

console.log(templateLiteral1);
console.log(`My name is ${person}, I am ${santaString}. 
I have a ${animal} called ${animalName}`);
