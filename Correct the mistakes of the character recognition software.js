// Character recognition software is widely used to digitize printed texts.
//  When documents are digitized character recognition softwares often make mistakes.
//  Your task is to correct the errors in the digitized text.You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// Write a function correctMistakes, that accepts one parameter: inputString, a valid string.

// The function should return a string. The string contains the inputString with the corrections.

// Solution 1

function correct(s) {
  let corrections = {
    5: "S",
    0: "O",
    1: "I",
  };
  return s
    .split("")
    .map((char) =>
      corrections.hasOwnProperty(char) ? corrections[char] : char
    )
    .join("");
}

// Solution 2
// Using Regex

function correct(s) {
  return s.replace(/5/g, "S").replace(/0/g, "O").replace(/1/g, "I");
}
