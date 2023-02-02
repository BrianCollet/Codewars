// My Code
function longest(s1, s2) {
    return Array.from(new Set(s1.concat(s2))).sort().join('')
}

// Codewars Code similar to mine
function longestCodeWars(s1, s2) {
    return Array.from(new Set(s1 + s2)).sort().join('')
}

// Codewars Code
const longestCodeWarsTwo = (s1, s2) => [...new Set(s1+s2)].sort().join('')