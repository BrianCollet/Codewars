// First Attempt

function createPhoneNumber(numbers){
    let nums = numbers.join('')
    return '(' + nums.slice(0,3) + ') ' + nums.slice(3, 6) + '-' + nums.slice(6,10)
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))