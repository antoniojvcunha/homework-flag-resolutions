// Input and output

// Write a program that ask the user for his name and prints a greeting.

// Please enter your name:

// Hello <NAME>, welcome to the Learn to Code course.
// Hint:
// Use readline-sync for the input and console.log() for the output .

let readlineSync = require("readline-sync");

console.log("Please enter your name:");
let userName = readlineSync.question("--> ")

console.log("Hello " + userName + ",welcome to the Learn to Code course.");