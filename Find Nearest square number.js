// Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.

// For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

// Solution

function nearestSq(n) {
  return Math.pow(Math.round(Math.sqrt(n)), 2);
}

// Anther Solution

function nearestSq(n) {
  return Math.round(Math.sqrt(n)) ** 2;
}
