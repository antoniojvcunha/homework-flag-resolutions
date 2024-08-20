// Let's calculate how much a hotel stay costs at the fantastic Beachwalk Hotel

// 7.1
// The price for night is 90€
// Ask the user for how many nights he would like to stay and print the total cost.

// 7.2
// Breakfast is an extra 10€
// Continue from the last exercise and ask the user if he would like to include breakfast.
// Print the total cost.

let readlineSync = require("readline-sync");

let nightCost = 90;

console.log("Quantas noites pretende ficar?");
let answer1 = readlineSync.question("--> ");

console.log("Quer incluir o pequeno-almoço por uma quantia adicional de 10€?");
let breakfast = 10;
let answer2 = readlineSync.question("--> ");

let totalCostWith = (nightCost + breakfast) * answer1;
let totalCost = nightCost * answer1;

if (answer2 == "sim") {
    console.log("O preço total ficará em " + totalCostWith + "€");
} else {
    console.log("O preço total ficará em " + totalCost + "€");
}



