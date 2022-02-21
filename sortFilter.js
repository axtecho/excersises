"use strict";

const people = ["Harry", "Ron", "Neville", "Hermione"];

people.sort();
/* console.log("people", people);
 */

const animals = [
  { name: "Madnu", type: "cat" },
  { name: "Mia", type: "cat" },
  { name: "Leeloo", type: "dog" },
  { name: "Freddie", type: "dog" },
];
console.log(animals);

function compareName(a, b) {
  if (a.name > b.name) {
    return -1;
  } else {
    return 1;
  }
}

animals.sort(compareName);

let filteredArray = animals.filter((animal) => {
  if (animal.type === "cat") {
    return true;
  } else {
    return false;
  }
});

console.log(filteredArrayif);
