"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];
let newestArr = [];
let filterStatus;
let sortStatus;
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

  chosenFilter = isAll();
  document.querySelectorAll(".filter").forEach((filter) => {
    filter.addEventListener("click", updateFilterStaturs);
  });

  document
    .querySelector("[data-sort=name]")
    .addEventListener("click", updateSortStaturs);
  document
    .querySelector("[data-sort=type]")
    .addEventListener("click", updateSortStaturs);
  document
    .querySelector("[data-sort=desc]")
    .addEventListener("click", updateSortStaturs);
  document
    .querySelector("[data-sort=age]")
    .addEventListener("click", updateSortStaturs);
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
function updateSortStaturs() {
  sortStatus = this.innerHTML;
  if (sortStatus === "Name") {
    return sortAnimals(compareName);
  } else if (sortStatus === "Type") {
    return sortAnimals(compareType);
  } else if (sortStatus === "Description") {
    return sortAnimals(compareDescrip);
  } else if (sortStatus === "Age") {
    return sortAnimals(compareAge);
  }
}

function sortAnimals(sortFunction) {
  if (newestArr.length > 0) {
    let sortedAnimals = newestArr.sort(sortFunction);
    displayList(sortedAnimals);
  } else {
    let sortedAnimals = allAnimals.sort(sortFunction);
    displayList(sortedAnimals);
  }
}

function compareName(a, b) {
  if (a.name < b.name) {
    return -1;
  } else {
    return 1;
  }
}
function compareType(a, b) {
  if (a.type < b.type) {
    return -1;
  } else {
    return 1;
  }
}
function compareDescrip(a, b) {
  if (a.desc < b.desc) {
    return -1;
  } else {
    return 1;
  }
}
function compareAge(a, b) {
  if (a.age < b.age) {
    return -1;
  } else {
    return 1;
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

  newestArr = filteredAnimals;
  console.log("filtered", newestArr);

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
