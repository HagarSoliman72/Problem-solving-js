// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Solution :

function doubleChar(str) {
  let array = Array.from(str);
  return array.map((x) => x + x).join("");
}
