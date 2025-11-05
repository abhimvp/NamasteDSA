// https://leetcode.com/problems/palindrome-number/
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  // first think about reverse a number
  let rev = 0;
  let j = x;
  while (j > 0) {
    let rem = j % 10;
    rev = 10 * rev + rem;
    j = Math.floor(j / 10);
  }
  // if (rev == x) {
  //   return true;
  // } else {
  //   return false;
  // }
  return rev == x;
};

// clean code
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  let xCopy = x;
  let rev = 0;

  while (x > 0) {
    let rem = x % 10;
    rev = 10 * rev + rem;
    x = Math.floor(x / 10);
  }

  return rev == xCopy;
};
