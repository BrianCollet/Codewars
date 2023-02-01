// My Code
let oddOrEven = (array) => array ? array.reduce((acc, cur) => acc + cur, 0) % 2 == 0 ? (result = "even") : (result = "odd") : result = [0]

//Codewars Code
let oddOrEvenTwo = (arr) => arr.reduce((a, b) => a + b, 0) % 2 ? 'odd' : 'even';