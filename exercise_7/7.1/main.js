// Let's calculate how much a hotel stay costs at the fantastic Beachwalk Hotel

// 7.1
// The price for night is 90€
// Ask the user for how many nights he would like to stay and print the total cost.

let readlineSync = require("readline-sync");

let nightCost = 90;
console.log("Quantas noites pretende ficar?");

let answer = readlineSync.question("--> ");

let totalCost = nightCost * answer;

console.log("O preço total ficará em " + totalCost + "€");