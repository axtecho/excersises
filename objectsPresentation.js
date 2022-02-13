"use strict";

const person1 = {
  firstName: "Peter",
  age: 29,
  student: false,
};
const person2 = {
  firstName: "Lasse",
  age: 28,
  student: true,
};

console.log(person1.lastname);

person1.lastname = "Lind";
console.log(person1.lastname);

person1 = person2;
