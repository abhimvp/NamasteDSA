// we will practice to solve 3 more questions on arrays and loops
// write a function that searches for an element in an array and return the index where it is found, if the element is not found, return -1
let arr = [4, 2, 0, 10, 8, 30];
// find number 10 in the arr
function searchElement(arr, search) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == search) {
      return i;
    }
  }
  return -1;
}
// console.log(searchElement(arr, 10));
// write a function that returns the no.of negative numbers in an array.
let nums = [2, -9, 17, 0, 1, -10, -4, -8];
function returnCountOfNegativeNumbers(arr) {
  let count = 0; // maintain a counter and increase it when a negative number found.
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}
// let result = returnCountOfNegativeNumbers(nums);
// console.log(result);
// Write a function that returns the largest number inside my array.
let arr_num = [5, 0, 10, 8, 17, 1];
// findLargest
function largestNumberInArray(arr) {
  let max_num = -1; // if the array has all positive numbers - not the right solution  but for now we are using -1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max_num) {
      max_num = arr[i];
    }
  }
  return max_num;
}
// let maxNum = largestNumberInArray(arr_num);
// console.log(maxNum);
// the bug in above code is when if the array contains all the negative numbers & having largest -1 will return -1 only EOD.
// the above is not the right thing to do.
// we need right parameter
// we need to make sure that we're not comparing with any number that can be present over in the given array.
// one way is to put the largest as the least Number that is possible.
// in javascript there is something known as infinity & minus Infinity
let largest1 = -Infinity; // would solve the problem right way.
// one more solution is YOU CAN ASSUME arr[0] as largest number.
let largest2 = arr[0];
// find the smallest? just give
let smallest = Infinity;
// check arr[i]<smallest & assign arr[i] to smallest if it's true, return smallest IN THE END.
