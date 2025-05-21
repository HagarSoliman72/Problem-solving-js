// Write a function to convert a name into initials.
// This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.

// Solution

function abbrevName(name) {
  let [first, last] = name.split(" ");
  return first[0].toUpperCase() + "." + last[0].toUpperCase();
}
