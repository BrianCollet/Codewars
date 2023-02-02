// First Attempt
//let isValidWalk = walk => walk.join('').length == 10

// Second Attempt
function isValidWalk(walk) {
  if (walk.length != 10) {
    return false;
  }

  let grid = [0, 0];
  walk.forEach(element => {
    switch (element) {
      case "n": {
        grid[0]++;
        break;
      }
      case "s": {
        grid[0]--;
        break;
      }
      case "e": {
        grid[1]++;
        break;
      }
      case "w": {
        grid[1]--;
        break;
      }
    }
  });

  return JSON.stringify(grid) === JSON.stringify([0, 0]);
}

console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
console.log(isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"]));
console.log(isValidWalk(["w"]));
console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]));
