let evenOrOdd = number => {
  let result;
  number % 2 == 0 ? (result = "Even") : (result = "Odd");
  return result;
};

console.log(evenOrOdd(2));
console.log(evenOrOdd(1));
console.log(evenOrOdd(5));
console.log(evenOrOdd(103920));
console.log(evenOrOdd(88));

// Good Code
let evenOrOddTwo = number => {
  return number % 2 ? "Odd" : "Even";
};

console.log(evenOrOddTwo(2));
console.log(evenOrOddTwo(1));
console.log(evenOrOddTwo(5));
console.log(evenOrOddTwo(103920));
console.log(evenOrOddTwo(88));
