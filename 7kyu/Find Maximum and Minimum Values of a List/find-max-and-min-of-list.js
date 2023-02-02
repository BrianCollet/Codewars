// My Code
var min = function(list){
    return list.sort((a, b) => a - b)[0]
}

var max = function(list){
    return list.sort((a, b) => a - b)[list.length-1]
}

console.log(min([4,6,2,1,9,63,-134,566] ))
console.log(max([4,6,2,1,9,63,-134,566] ))

// Codewars Code
const minTwo = (list) => Math.min(...list)
const maxTwo = (list) => Math.max(...list)

console.log(minTwo([4,6,2,1,9,63,-134,566] ))
console.log(maxTwo([4,6,2,1,9,63,-134,566] ))

let array1 = ['h', 'e', 'l', 'l', 'o'];
let array2 = [...array1];
let array3 = array1;
console.log(array1)
console.log(array2);
console.log(array3);