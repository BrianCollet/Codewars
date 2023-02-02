// My Code
const vowels = ["a", "e", "i", "o", "u"];

function getCount(str) {
  let count = 0;
  let arr = str.split("");

  arr.forEach(element => {
    if (vowels.includes(element) == 1) count++;
  });

  return count;
}

console.log(getCount("balls"));

// Codewards Code
function getCountTwo(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

console.log(getCountTwo("balls"));
