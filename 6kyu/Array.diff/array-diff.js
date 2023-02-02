// First Attempt
function arrayDiff(a, b) {
    return a.filter(v => b.indexOf(v) < 0)
}

// Full CodeWars mode
let arrayDiffCodewarsMode = (a, b) => a.filter(v => b.indexOf(v) < 0)

// Updated CodeWars mode
let arrayDiffCodewarsModeUpdated = (a, b) => a.filter(v => b.indexOf(v) == -1)

// or
let arrayDiffCodewarsModeUpdatedTwo = (a, b) => a.filter(v => !b.includes(v))

console.log(arrayDiff([1,2], [1]))
console.log(arrayDiffCodewarsMode([1,2], [1]))