// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest
// family member’s age and calculate the difference between them.
// You will be given an array of all the family members
// ' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed
//  ‘age’ of 0. Return a new array(a tuple in Python)
// with [youngest age, oldest age, difference between the youngest and oldest age].

// Solution 1

function differenceInAges(ages) {
  let Youngest = Math.min(...ages);
  let Oldest = Math.max(...ages);
  let difference = Oldest - Youngest;
  return [Youngest, Oldest, difference];
}

// Solution 2

function differenceInAges(ages) {
  return [
    Math.min(...ages),
    Math.max(...ages),
    Math.max(...ages) - Math.min(...ages),
  ];
}
