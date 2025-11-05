// https://leetcode.com/problems/reverse-integer/description/
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  // 2 power 31 ->  is equal to 2,147,483,648.
  let xCopy = x;
  x = Math.abs(x);
  let rev = 0;
  while (x > 0) {
    let last = x % 10;
    rev = 10 * rev + last;
    x = Math.floor(x / 10);
  }
  let limit = Math.pow(2, 31); //2**31
  if (rev < -limit || rev > limit) return 0;
  return xCopy < 0 ? -rev : rev;
};
