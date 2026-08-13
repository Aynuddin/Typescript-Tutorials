"use strict";
let value = "Ayn Uddin started doing TypeScript and Playwright on live coding session";
console.log(value);
// Number types in TypeScript
let username = "Ayn Uddin";
console.log(username);
const userId = 123456789;
console.log(userId);
const isLoggedIn = true;
console.log(isLoggedIn);
// Type inference in TypeScript
const num1 = "10";
console.log(typeof num1);
// any vs unknown types in TypeScript
let myVar = "Hello, World!";
myVar = 42; // Reassigning to a number
console.log(typeof myVar); // Output: "number"
if (typeof myVar === "string") {
    console.log(myVar.toUpperCase()); // Safe to call string methods
}
else {
    console.log("myVar is not a string");
}
//console.log(myVar); 
let sname = "Ayn Uddin";
sname = 42; // Reassigning to a number
console.log(typeof sname);
if (typeof sname === "string") {
    console.log(sname.toUpperCase()); // Safe to call string methods
}
//console.log(sname);
