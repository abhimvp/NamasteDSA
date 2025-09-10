// functions
function printHelloWorld() {
  // we create a function to do a task
  console.log("Hello DSA World from Abhishek");
}
// to call the function
printHelloWorld(); // this is when code is executed
// Namaste Abhishek
function greet(name) {
  console.log("Namaste, " + name);
}
greet("Abhishek");
greet("Akshay");
let x = "Virat Kohli";
let y = "Max Verstappen";
greet(x);
greet(y);

function sum(a, b) {
  //a,b are arguments here
  console.log(a + b);
}
sum(2, 3); //2,3 are parameters here
// we want to return something from a function instead of printing
function square(x) {
  let result = x * x;
  return result;
}
let sqrofvalue = square(2);
console.log(sqrofvalue);
// Now let's see how if-else work
// task: create a function if a person is eligible to vote or not.
function checkEligibility(age) {
  if (age >= 18) {
    console.log("person is eligible to vote");
  } else {
    console.log("person is not eligible to vote");
  }
}
checkEligibility(19);
checkEligibility(18);
// similarly we have else if as well
function eligibleToVote(age) {
  if (age < 0) {
    console.log("Invalid input");
  } else if (age < 18) {
    console.log("Not Eligible");
  } else {
    console.log("Eligible to vote");
  }
}
eligibleToVote(18);
eligibleToVote(-3);
// function to check if a number is even or odd
function isEvenOrOdd(num) {
  let rem = num % 2;
  if (rem == 0) {
    console.log("Even Number");
  } else {
    console.log("Odd number");
  }
}
isEvenOrOdd(2);
isEvenOrOdd(3);
