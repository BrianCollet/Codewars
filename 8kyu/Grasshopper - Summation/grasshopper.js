// Recursion = bad!!!
let summation = num => {
  return num > 0 ? num + summation(num - 1) : 0;
};

// GOOD CODE!!!
let summationTwo = n => (n * (n + 1)) / 2;

console.log(summation(8));
console.log(summationTwo(8));
