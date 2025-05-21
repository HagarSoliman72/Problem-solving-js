// What if we need the length of the words separated by a space to be added at the end of that same word
//  and have it returned as an array?

// Solution:

function addLength(str) {
  let new_str = str.split(" ");
  let result = [];
  for (let i = 0; i < new_str.length; i++) {
    result.push(new_str[i] + " " + new_str[i].length);
  }
  return result;
}

// Solution 2 :

function addLength(str) {
  return str.split(" ").map((x) => `${x} ${x.length}`);
}
