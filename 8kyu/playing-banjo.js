// My Code
function areYouPlayingBanjo(name) {
  return name.charAt(0) == "r" || name.charAt(0) == "R"
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}

console.log(areYouPlayingBanjo("Brian"));
console.log(areYouPlayingBanjo("brian"));
console.log(areYouPlayingBanjo("ryan"));
console.log(areYouPlayingBanjo("Ryan"));

// Codewars Code
function areYouPlayingBanjoTwo(name) {
  return (
    name +
    (name[0].toLowerCase() == "r" ? " plays" : " does not play") +
    " banjo"
  );
}

console.log(areYouPlayingBanjoTwo("Brian"));
console.log(areYouPlayingBanjoTwo("brian"));
console.log(areYouPlayingBanjoTwo("ryan"));
console.log(areYouPlayingBanjoTwo("Ryan"));
