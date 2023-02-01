// First Attempt
function arrayDiff(a, b) {
    return a.filter(v => b.indexOf(v) < 0)
}

console.log(arrayDiff([1,2], [1]))