"use strict";
const allStudents = [];

const url = "https://petlatkea.dk/2021/hogwarts/students.json";

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })

  .then((data) => {
    handleData(data);
  })

  .catch((e) => {
    console.error("An error occured:", e.message);
  });

function handleData(students) {
  students.forEach((student) => {
    /* Here I remove white spaces .fullname from JSONdata  */
    const sfn = student.fullname.trim();
    const sh = student.house.trim();
    const cleanstudents = Object.create(CleanStudents);
    /* Find the first name, "if" statements ensures single names are included */
    if (sfn.indexOf(" ") >= 0) {
      const firstname = sfn.substring(sfn.indexOf(1), sfn.indexOf(" "));
      const UpperCase = firstname.charAt(0).toUpperCase();
      cleanstudents.fn = UpperCase + firstname.substring(1).toLowerCase();
    } else {
      cleanstudents.fn = sfn;
    }
    /* Last Name */
    if (sfn.indexOf("-") >= 0) {
      const beforeHyphen = sfn.substring(sfn.indexOf(" ") + 1);
      cleanstudents.ln = beforeHyphen;
    } else if (sfn.indexOf(" ") >= 0) {
      const lastname = sfn.substring(sfn.lastIndexOf(" ") + 1);
      const UpperCase = lastname.charAt(0).toUpperCase();
      cleanstudents.ln = UpperCase + lastname.substring(1).toLowerCase();
    } else {
      cleanstudents.ln = "null";
    }

    /* Middle name */

    const detectMiddleName = sfn.split(" ");

    if (detectMiddleName.length > 2) {
      const middleName = detectMiddleName[1];
      const UpperCase = middleName.charAt(0).toUpperCase();
      cleanstudents.mn = UpperCase + middleName.substring(1).toLowerCase();
    } else if (sfn.indexOf(`"`) >= 0) {
      console.log("here is one");
    }
    /* House */
    const studentHouse = sh.charAt(0).toUpperCase();
    cleanstudents.house = studentHouse + sh.substring(1).toLowerCase();
    /*     console.log(`_${cleanstudents.house}_`);
     */
    allStudents.push(cleanstudents);
    consoleTable();
  });
}
function consoleTable() {
  console.table(allStudents);
}
const CleanStudents = {
  fn: "firstname",
  ln: "lastname",
  mn: "middlename",
  nn: "nickname",
  imgType: "imgType",
  house: "house",
};
