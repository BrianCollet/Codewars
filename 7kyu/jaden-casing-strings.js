// My Code
String.prototype.toJadenCase = function () {
    let arr = this.split(' ')
    return arr.map(c => (c.charAt(0).toUpperCase()) + c.slice(1)).join(' ')
  };

// Codewars Code
String.prototype.toJadenCaseTwo = function () {
    return this.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
}