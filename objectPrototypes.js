"use strict";
console.log("Hello");
const Animal = {
  name: "",
  type: "unkown",
  desc: "",
  age: 0,
};

const animal = Object.create(Animal);
Animal.image = "image.jpg";
console.log(animal, animal.image);
