// Given a non-empty array of integers, return the result of multiplying the values together in order.

// Solution:

function grow(x) {
  return x.reduce((acc, current) => acc * current);
}
