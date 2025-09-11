// n=4
// * * * *
// * * * *
// * * * *
// * * * *
let n = 4;
for (let i = 0; i < n; i++) {
  //responsible for rows
  let row = ""; //creating empty row.
  for (let j = 0; j < n; j++) {
    //responsible for columns & printing like a single row.
    row += "*";
  }
  console.log(row);
}
console.log("-----------------------------------");
// n=4
// *
// * *
// * * *
// * * * *
for (let i = 0; i < n; i++) {
  //responsible for rows
  let row = ""; //creating empty row.
  for (let j = 0; j < i + 1; j++) {
    //responsible for columns & printing like a single row.
    row += "*";
  }
  console.log(row);
}
console.log("-----------------------------------");
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
n = 5;
for (let i = 0; i < n; i++) {
  //responsible for rows
  let row = ""; //creating empty row.
  for (let j = 0; j <= i; j++) {
    //responsible for columns & printing like a single row.
    row += j + 1;
  }
  console.log(row);
}
console.log("-----------------------------------");
// 12345
// 1234
// 123
// 12
// 1
for (let i = 0; i < n; i++) {
  //responsible for rows
  let row = ""; //creating empty row.
  for (let j = 0; j < n - i; j++) {
    //responsible for columns & printing like a single row.
    row += j + 1;
  }
  console.log(row);
}
console.log("-----------------------------------");
//  *****
//  ****
//  ***
//  **
//  *
for (let i = 0; i < n; i++) {
  //responsible for rows
  let row = ""; //creating empty row.
  for (let j = 0; j < n - i; j++) {
    //responsible for columns & printing like a single row.
    row += "*";
  }
  console.log(row);
}
console.log("-----------------------------------");
//     *
//    **
//   ***
//  ****
// *****
for (let i = 0; i < n; i++) {
  let spaces = " ";
  let row = "";
  for (let j = 0; j < n - i - 1; j++) {
    row += spaces;
  }
  for (let k = 0; k < i + 1; k++) {
    row = row + "*";
  }
  console.log(row);
}
console.log("-----------------------------------");
// 1
// 10
// 101
// 1010
// 10101
// 101010
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    if (j % 2 == 0) {
      row += "1";
    } else {
      row += "0";
    }
  }
  console.log(row);
}
console.log("-----------------------------------");
// 1
// 10
// 101
// 1010
// 10101
// 101010
let y = 5;
for (let i = 0; i < y; i++) {
  let row = "";
  let toggle = 1;
  for (let j = 0; j < i + 1; j++) {
    row += toggle;
    // switch the toggle
    if (toggle == 1) {
      toggle = 0;
    } else {
      toggle = 1;
    }
  }
  console.log(row);
}
console.log("-----------------------------------");
// 1
// 01
// 010
// 1010
// 10101
let toggle = 1;
for (let i = 0; i < y; i++) {
  let row = "";
  // let toggle = 1;
  for (let j = 0; j < i + 1; j++) {
    row += toggle;
    // switch the toggle
    if (toggle == 1) {
      toggle = 0;
    } else {
      toggle = 1;
    }
  }
  console.log(row);
}
