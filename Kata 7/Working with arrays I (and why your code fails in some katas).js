// In this kata the function returns an array/list of numbers without its last element.
// The function is already written for you and the basic tests pass, but random tests fail
//  Your task is to figure out why and fix it.

// The Kata Was :

function withoutLast(arr) {
  // Fix it
  arr.pop(); // removes the last element
  return arr;
}

// Fixed To:
function withoutLast(arr) {
  // Fix it
  let new_arr = arr.slice(0, -1); // removes the last element
  return new_arr;
}
