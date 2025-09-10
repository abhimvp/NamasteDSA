console.log("Hello DSA World from Abhishek");
console.log("Javascript executes code line by line");
// Data types - main ones
// numbers - 7
console.log(7);
// strings - "7"
console.log("7");
// Boolean => true, false
console.log(true);
// Store some data into variables & we can perform operations - two ways - const and let
const a = 10;
const b = 20;
const sum = a + b;
console.log(sum);
const mul = a * b;
console.log(mul);
console.log(a - b);
// always write a semicolon to end a statement
let x = 20;
console.log(x);
// difference between const and let is - we can't change the value of const later - can't modify constant variable - this is not the case with let - we can change it
x = 30;
console.log(x);
// knowing neccessary things for now.
// we will be using lot of `let` during DSA and not const, just use `let` to create variables for problem solving.
// Strings
let firstName = "Abhishek"
let lastName = 4
let fullName = firstName + " " + lastName;
// console.log(fullName);
// if you're running any peice of javascript code, which can only be executed inside a javascript engine, which executed the code line by line.
// Arrays
let arrNumber = [2, 3, 4, 6, 9, 100, 27] // it is a list - which can store multiple values.
// console.log(arr);
console.log(arrNumber[3]);
// let sum = arr[0] + arr[4];
// console.log(sum);
// console.log(arr[6]); // undefined
// array of strings
let arrString = ["virat", "prabhas", "verstappen", "abhimvp"];
// console.log(arrString);
// arrays can contain different values in a list
// arrays can contain arrays also
let arrMixValues = ["abhishek", "max", 98, 4, [1, 33, 18]];
// console.log(arrMixValues[4]);
// console.log(arrMixValues[4][2]);
// Objects in JavaScript - created by curly brackets - contains key:value pairs
let obj = {
    a: 98,
    name: "Abhishek",
    bool: true,
    arr: [1, 33, 18]
}
// to access values in objects we do
console.log(obj.name);
console.log(obj.a + obj.arr[1]);
