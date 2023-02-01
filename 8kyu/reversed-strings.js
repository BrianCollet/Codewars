// My Solution
let reversedStrings = (str) => {
	let arr = str.split('')
	let reversed = arr.reverse()
	return reversed.join('')
}

// Best solution
function solution(str){
	return str.split('').reverse().join('');  
}

// One-liner
const reverseMe = str => str.split('').reverse().join('');

// Shorter one-liner
const reverseOneLiner = str => [...str].reverse().join('')

console.log(reversedStrings("world"))
console.log(reversedStrings("word"))

console.log(reverseMe("world"))
console.log(reverseMe("word"))