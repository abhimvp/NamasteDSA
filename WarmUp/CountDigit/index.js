// Write a function that returns the count of digits in a number.

function countDigits(n) {
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10); // rounds down the value.
    count++;
  }
  return count;
}

let num = 259;
let result = countDigits(num);
console.log(result);
// corner cases
// what if n is 0, ask interviewer.
// Negative numbers - what if n is -298 -> the above gives ZERO.
function countDigitsCornerCases(n) {
  if (n == 0) {
    return 1;
  }
  // handling negative numbers
  n = Math.abs(n);
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10); // rounds down the value.
    count++;
  }
  return count;
}

console.log(countDigitsCornerCases(0));
console.log(countDigitsCornerCases(-298));
