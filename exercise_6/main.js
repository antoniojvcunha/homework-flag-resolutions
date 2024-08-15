// Modify Exercise 4 so that the program asks the user for a number n and gives them the possibility to choose between computing the sum or computing the product of 1 to n.

let readlineSync = require("readline-sync");

console.log("Escolhe um número natural: ");
let n = readlineSync.question("--> ");

console.log("Relativamente a esse número, pretendes fazer a operação de soma ou de multiplicação?");
let operacao = readlineSync.question("--> ");

if (operacao === "soma") {
    let sum = 0; 

    for (let i = 1; i <= n; i++) {
    sum += i;

    console.log("A soma dos números naturais até ao número n(incluindo n) é --> " + sum);
    }
} else if (operacao !== "soma") {
    let product = 1; 

    for (let i = 1; i <= n; i++) {
    product *= i;

    console.log("A multiplicação dos números naturais até ao número n(incluindo n) é --> " + product);
    }
}
