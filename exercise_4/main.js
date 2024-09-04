// Sum loop

// Write a program that asks the user for a number n and prints the sum of the numbers 1 to n.

// Example:
// User inputs 5
// Output:
// 1 + 2 + 3 + 4 + 5 = 15

let readlineSync = require("readline-sync");

console.log("Insere um número natural:");

let n = readlineSync.question("--> ");

let total = 0; 

for (let i = 1; i <= n; i++) {
    total = total + i;               // total += i
    console.log(i);   
}

console.log("--------");
console.log(total);



