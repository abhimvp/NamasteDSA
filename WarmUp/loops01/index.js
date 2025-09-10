// loops
// whenever you have to do a repetitive task - you need a loop - which means doing things over and over again.
// two types of loops - for and while
// for loop - you should be confident when writing it.
// print hello world five times
for (let i = 0; i < 5; i++) {
  console.log("Hello World " + i);
}
for (let i = 5; i > 0; i--) {
  console.log("HW " + i);
}
// can you call a function inside a loop - yes
// we can calculate the length of the arr using javascript length property
let arr = [1, 2, 3, 4, 5, 6];
console.log(arr.length);
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i] + " at index " + i);
}
// check & print even numbers in the array
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    console.log("Even number at index " + i);
  } else {
    console.log("Odd Number at index " + i);
  }
}
// While loop
// initialize
let i = 0;
// condition
while (i < 5) {
  // body of loop
  console.log("HW " + i);
  i++;
}
