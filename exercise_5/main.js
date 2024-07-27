// Modify the Exercise 4 so that only multiples of three or five are considered in the sum.

// Example:
// User inputs 17
// Output:
// 3 + 5 + 6 + 9 + 10 + 12 + 15 = 60

let readlineSync = require("readline-sync");

console.log("Insere um número natural:");

let n = readlineSync.question("--> ");

let sum = 0;

for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0 ) {
        sum += i;
    }
    
}

console.log("A soma dos números naturais múltiplos de 3 e 5 até ao número n(incluindo n) é --> " + sum);