// Sum loop

// Write a program that asks the user for a number n and prints the sum of the numbers 1 to n.

// Example:
// User inputs 5
// Output:
// 1 + 2 + 3 + 4 + 5 = 15

let readlineSync = require("readline-sync");

console.log("Insere um número natural:");

let n = readlineSync.question("--> ");

let sum = 0; 

for (let i = 1; i <= n; i++) {
    sum += i;
}

console.log("A soma dos números naturais até ao número n(incluindo n) é --> " + sum);