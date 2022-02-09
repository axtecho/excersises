"use strict";

const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
/* console.log(letters[4]);
 */
const newarr = letters;
newarr[4] = "*";

/* console.log(letters[4]);
console.log(letters);
 */

const people = ["Harry", "Ron", "Hermione", "Snape", "Dumbledore"];
let result;
/* result = people.push("Draco");
result = people.pop();
result = people.push("Neville");
result = people.push("Luna"); */
/* result = people.slice(3, 5); */
result = people.splice(0, 0, "Cho");
/* people[5] = "Ginny"; */
/* result = people.push("Fred", "George"); */
/* result = people.indexOf("Fred"); */
/* result = people.splice(result, 2); */

/* console.log(result);
console.log(people); */

/* PUSH
Push is a method to add items to an array and can be used for adding multiple items at once */

/* POP
Pop is method to remove the last item from an array */

/* SLICE
Is a method to divide an array into two parts and the start and end points are defined within the parentheses without modifying the original array */

/* SPLICE; 
Is a method we can use to change contents of an array by, 
removing or replacing existing elements and/or adding new elements in place*/

/* indexOf
Is a method to search for a specific item from within the array and can be used together with a number value that indicate from which item the search should begin  */

const str = "abcdefghijklmn";
const arr0 = ["0", "1", "2", "3", "4", "5"];
const arr1 = str.split();
const arr2 = Array.from(str);
const aString = arr0.toString();
const join = arr0.join("/");
console.log(arr0);
console.log(str);
console.log(arr1);
console.log(arr2);
console.log(aString);
console.log(join);

/* To make an array into a string we can use both .join and .toString. 
.join lets us dictate a seperator */
