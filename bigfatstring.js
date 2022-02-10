"use strict";
window.addEventListener("load", start);
const output = document.querySelector("#output");
const generate = document.querySelector("#generate");
const options = document.querySelector("#options");
/* let info; */
function start() {
  generate.addEventListener("click", determineAction);
}

function determineAction() {
  const input = document.querySelector("#textinput").value;

  if (options.value === "opt1") {
    const changeInput = input.charAt(0).toUpperCase();
    let info = changeInput + input.substring(1).toLowerCase();
    displayOutput(info);
  } else if (options.value === "opt2") {
    info = input.substring(input.indexOf(1), input.indexOf(" "));
  } else if (options.value === "opt3") {
    const firstNameLength = input.substring(
      input.indexOf(1),
      input.indexOf(" ")
    );
    info = firstNameLength.length;
  } else if (options.value === "opt4") {
    const middleNamePos1 = input.indexOf(" ") + 1;
    const middleNamePos2 = input.lastIndexOf(" ");

    info = input.substring(middleNamePos1, middleNamePos2);
  } else if (options.value === "opt5") {
  } else if (options.value === "opt6") {
    console.log("opt6");
  } else if (options.value === "opt7") {
    console.log("opt7");
  } else if (options.value === "opt8") {
    console.log("opt8");
  }
}

function displayOutput(info) {
  /*   console.log(toUpperCase + version2.substring(1).toLowerCase());
   */
  console.log(info);
}

const Lasse = "lasse weber joergensen";
const index = Lasse.indexOf(" ") - 1;

/* Q1
If input is a first name: Make the first character in a name uppercase, and the rest lowercase */
/* const toUpperCase = Lasse.charAt(0).toUpperCase();
console.log(toUpperCase + Lasse.substring(1).toLowerCase()); */

/* Q2
If input is a full name: Find the first name */
/* console.log(`_${Lasse.substring(Lasse.indexOf(1), Lasse.indexOf(" "))}_`); */

/* Q3
If input is a full name: Find the length of the first name */

/* const firstNameLength = Lasse.substring(Lasse.indexOf(1), Lasse.indexOf(" "));
console.log(firstNameLength.length); */

/* Q4
If input is a full name: Find the middle name start and end position, and the middle name itself in a full name string */

/* const middleNamePos1 = Lasse.indexOf(" ") + 1;
const middleNamePos2 = Lasse.lastIndexOf(" ");

console.log(Lasse.substring(middleNamePos1, middleNamePos2)); */

/* Q5
If input is a filename: Check if a filename is .png or .jpg */

/* const filename = "file.jpg";

console.log(filename.endsWith(".jpg"));
console.log(filename.substring(filename.lastIndexOf(".")));
 */
/* 
Q6
If input is a password: Hide a password with the correct number of *s */
/* 
const password = "two";

console.log("*".repeat(password.length));
 */
/* Q7
With any input: Make the third character uppercase */

/* const thirdUpperCase = Lasse.charAt(3).toUpperCase();

console.log(thirdUpperCase.substring(0).toLowerCase()); */
