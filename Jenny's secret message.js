// Jenny has written a function that returns a greeting for a user.However, she's in love with Johnny,
//  and would like to greet him slightly different.She added a special case to her function,
//   but she made a mistake.

// Solution:
// It was Like This
function greet(name) {
  return "Hello, " + name + "!";
  if (name === "Johnny") return "Hello, my love!";
}
// I Soled Like This

function greet(name) {
  if (name === "Johnny") return "Hello, my love!";
  else {
    return `Hello, ${name}!`;
  }
}

// Solution 2 :

function greet(name) {
  return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
}
