// My Code
function abbrevName(name) {
  let names = name.split(" ");
  let fname = names[0];
  let lname = names[1];

  return fname[0].toUpperCase().concat(".", lname[0].toUpperCase());
}

// Codewars Code
function abbrevNameTwo(name) {
  let names = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

// Good Code
function abbrevName(name) {
  return name
    .split(" ")
    .map(i => i[0].toUpperCase())
    .join(".");
}
