// Codewars Code
function accum(s) {
    let letters = s.split('')
    return letters.map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}

function accumTwo(s) {
    return s.split('')
        .map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index))
        .join('-');
}

console.log(accum("abcd"))
console.log(accumTwo("abcd"))