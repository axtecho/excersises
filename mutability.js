"use strict";

const student1 = {
  firstName: "Peter",
  age: 29,
  student: false,
};
const student2 = {
  firstName: "Peter",
  age: 29,
  student: false,
};

/* const student2 = student1;
 */

if (student2 == student1) {
  console.log("they are the same");
} else {
  console.log("they are not the same");
}
