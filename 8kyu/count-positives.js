let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
let inputEmpty = []
let inputNull = null

// My Code
let countPositivesSumNegatives = (input) => {

    let result = [0,0]

    input == null || input.length === 0 ? result = [] : input.reduce((acc, cur) => {
        return cur > 0 ? result[0] += 1 : result[1] += cur
    }, input[0])

    return result
}

console.log('My Code:')
console.log(countPositivesSumNegatives(input))
console.log(countPositivesSumNegatives(inputEmpty))
console.log(countPositivesSumNegatives(inputNull))

// Codewars Code
let countPositivesSumNegativesTwo = (input) => input && input.length ? input.reduce((acc, cv, ci, a) => {
    cv <= 0 ? acc[1] += cv : acc[0] += 1
    return acc
}, [0, 0]) : []

console.log('\nCodewars Code:')
console.log(countPositivesSumNegativesTwo(input))
console.log(countPositivesSumNegativesTwo(inputEmpty))
console.log(countPositivesSumNegativesTwo(inputNull))