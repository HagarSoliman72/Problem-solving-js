// Your task is to write a function which returns the time since midnight in milliseconds.

// Solution
function past(h, m, s) {
  //#Happy Coding! ^_^
  let millis = s * 1000;
  millis += m * 60 * 1000;
  millis += h * 60 * 60 * 1000;
  return millis;
}

// Solution 2

function past(h, m, s) {
  return h * 60 * 60 * 1000 + m * 60 * 1000 + s * 1000;
}
