// My Code
let squareSum = (numbers) => numbers.length > 0 ? numbers.map(num => num *= num).reduce((acc, cur) => acc + cur) : 0

// Codewars Code
let SquareSumTwo = (numbers) => numbers.reduce((sum, num) => sum + (num * num), 0)