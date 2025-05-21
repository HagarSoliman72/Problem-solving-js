// You'll be given a string, and have to return the sum of all characters as an int.
// The function should be able to handle all printable ASCII characters.

// Solution :
function uniTotal(string) {
  return string
    .split("")
    .map((char) => char.charCodeAt(0))
    .reduce((a, b) => a + b, 0);
}
