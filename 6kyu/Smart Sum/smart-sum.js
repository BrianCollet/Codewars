function smartSum(...input) {
    return input.flat(2).reduce((a,c) => a + c, 0)
}

console.log(smartSum(1,2))
console.log(smartSum([1,2]))
console.log(smartSum([1],[2]))
console.log(smartSum([1,2],3))
console.log(smartSum(1,2,[[3,4],5],6))