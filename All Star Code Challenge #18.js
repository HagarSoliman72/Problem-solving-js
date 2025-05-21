// Create a function that accepts a string and a single character,
// and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.

// Solution 1 :

function strCount(str, letter) {
  let count = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] == letter) {
      count += 1;
    }
  }
  return count;
}

// Solution 2 :

function strCount(str, letter) {
  return str.split("").filter((c) => c == letter).length;
}

// Solution 3 :

function strCount(str, letter) {
  return str.split(letter).length - 1;
}
