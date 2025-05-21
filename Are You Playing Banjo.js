// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// Solution :
function areYouPlayingBanjo(name) {
  if (name.startsWith("r") || name.startsWith("R")) {
    return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }
}

// Short If Condition

function areYouPlayingBanjo(name) {
  return name.startsWith("r") || name.startsWith("R")
    ? name + " plays banjo"
    : name + " does not play banjo";
}
