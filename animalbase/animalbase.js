"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];
let filterStatus;
let chosenFilter;
// The prototype for all animals:
const Animal = {
  name: "",
  desc: "-unknown animal-",
  type: "",
  age: 0,
};

function start() {
  console.log("ready");

  // TODO: Add event-listeners to filter and sort buttons
  /*   document.querySelectorAll(".filter").addEventListener();
   */
  chosenFilter = isAll();
  document.querySelectorAll(".filter").forEach((filter) => {
    filter.addEventListener("click", updateFilterStaturs);
  });
  loadJSON();
}
function updateFilterStaturs() {
  filterStatus = this.innerHTML;
  if (filterStatus === "Only Cats") {
    return prepareAnimals(isCats);
  } else if (filterStatus === "Only Dogs") {
    return prepareAnimals(isDogs);
  } else {
    return prepareAnimals(isAll);
  }
}
async function loadJSON() {
  const response = await fetch("animals.json");
  const jsonData = await response.json();

  // when loaded, prepare data objects
  prepareObjects(jsonData);
}

function prepareObjects(jsonData) {
  allAnimals = jsonData.map(preapareObject);

  // TODO: This might not be the function we want to call first
  displayList(allAnimals);
}

function prepareAnimals(filterFunction) {
  let filteredAnimals = allAnimals.filter(filterFunction);
  console.log("prepareAnimals", filteredAnimals);
  displayList(filteredAnimals);
}
function isCats(animal) {
  if (animal.type === "cat") {
    return true;
  } else {
    return false;
  }
}
function isDogs(animal) {
  if (animal.type === "dog") {
    return true;
  } else {
    return false;
  }
}
function isAll() {
  return true;
}

function preapareObject(jsonObject) {
  const animal = Object.create(Animal);
  /*   console.log(jsonObject);
   */ const texts = jsonObject.fullname.split(" ");
  animal.name = texts[0];
  animal.desc = texts[2];
  animal.type = texts[3];
  animal.age = jsonObject.age;

  return animal;
}

function displayList(animals) {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  animals.forEach(displayAnimal);
}

function displayAnimal(animal) {
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
