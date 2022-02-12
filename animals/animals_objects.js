"use strict";

window.addEventListener("DOMContentLoaded", start);

const allAnimals = [];

function start() {
  console.log("ready");

  loadJSON();
}

const animalArray = [];
function loadJSON() {
  fetch("animals.json")
    .then((response) => response.json())
    .then((jsonData) => {
      // when loaded, prepare objects
      prepareObjects(jsonData);
    });
}
function prepareObjects(jsonData) {
  jsonData.forEach((jsonObject) => {
    // TODO: Create new object with cleaned data - and store that in the allAnimals array
    const fullText = jsonObject.fullname;
    const animal = Object.create(Animal);
    animal.age = jsonObject.age;
    animal.name = fullText.substring(
      fullText.indexOf(1),
      fullText.indexOf(" ")
    );
    animal.desc = fullText.substring(
      fullText.indexOf(" ") + 1,
      fullText.lastIndexOf(" ")
    );
    animal.type = fullText.substring(fullText.lastIndexOf(" ") + 1);

    allAnimals.push(animal);
  });
  displayList();
}

function displayList() {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  allAnimals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  console.log();
  // create clone
  const clone = document
    .querySelector("template#animal")
    .content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}

const Animal = {
  desc: "descFiller",
  name: "nameFiller",
  type: "typeFiller",
  age: "0",
};
