// Currency converter

// Write a program that asks the user for an amount in USD.
// Output that amount converted to EURO.

// Bonus goal:
// Use a precision of 2 decimal points: 3.45€.

// let readlineSync = require("readline-sync");

// console.log("Qual o montante em $ que deseja converter em €: ");
// let amount = readlineSync.question("--> ");

// console.log(amount + " é o valor convertido em €");


let readlineSync = require("readline-sync");

let currencyEur = .92

console.log("Qual o montante em $(USD) que deseja converter em €(EUR): ");
let answer = readlineSync.question("--> ");

let amount = currencyEur * answer;

console.log(amount.toFixed(2)+ "€ (EUR)");


