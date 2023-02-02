function positiveSum(arr) {
  let sum = 0;
  arr.forEach(num => {
    if (num > 0) {
      sum += num;
    }
  });

  return sum;
}

// Good code
function positiveSumTwo(arr) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}
