// Find the second largest number  in an array

// some more improvements in our code
// thinking about corner cases
// what if my array is empty? you should ask interviewer
// what if my array has only one element? you should ask interviewer
// think about all the cases.
// Then interviewer will say assume array has at least 2 numbers , if it has less than 2 number then return null - so then write code for that.
// what if the array has negavtive numbers, does the solution still work?
// what if my array has duplicates? ask interviewer, how do we improve your solution

function secondLargestElement(arr) {
  if (arr.length < 2) {
    return "Array should have atleast 2 elements";
  }
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != firstLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
let arr_num = [4, 9, 0, 2, 8, 7, 1];
let result = secondLargestElement(arr_num);
console.log(result);
let duplicate_nums = [10, 20, 9, 9, 8, 3, 5, 11, 20, 11];
console.log(secondLargestElement(duplicate_nums));
// corner cases:
// Array is empty
// Array has negative numbers
// Array has duplicates
// Array has infinite numbers - you have to think about all scenarios
// discuss with interviewers.
