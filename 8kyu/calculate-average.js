// My code
let findAverage = (nums) => nums.length > 0 ? nums.reduce((acc, cur) => acc + cur, 0) / nums.length : 0

console.log(findAverage([1, 1, 1]))
console.log(findAverage([1, 2, 3]))
console.log(findAverage([1, 2, 3, 4]))
console.log(findAverage([]))