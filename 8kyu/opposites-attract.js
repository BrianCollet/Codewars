// My Code
// Even + Odd = Odd
let lovefunc = (flower1, flower2) => {
  return (flower1 + flower2) % 2 == 0 ? false : true;
};

// Codewars Code
let lovefuncTwo = (flower1, flower2) => (flower1 + flower2 % 2) === 1

console.log(lovefuncTwo(1,1))
console.log(lovefuncTwo(1,2))