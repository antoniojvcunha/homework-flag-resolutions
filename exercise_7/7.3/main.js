// Let's calculate how much a hotel stay costs at the fantastic Beachwalk Hotel

// 7.1
// The price for night is 90€
// Ask the user for how many nights he would like to stay and print the total cost.

// 7.2
// Breakfast is an extra 10€
// Continue from the last exercise and ask the user if he would like to include breakfast.
// Print the total cost.

// 7.3
// Discount
// Let's discount guests who stay for longer periods.
// Continue from the last exercise and calculate a discount.

// 5 nights or more, 10%
// 10 nights or more, 15%
// 15 nights or more, 20%

// Only the room is affected by the discount. Breakfast price stays the same.

let readlineSync = require("readline-sync");

let nightCost = 90;

console.log("Quantas noites pretende ficar?");
let answer1 = readlineSync.question("--> ");

let totalCost = nightCost * answer1;
let discount10 = (nightCost * answer1) - ((nightCost * answer1) / 10);
let discount15 = (nightCost * answer1) - ((nightCost * answer1) / 15);
let discount20 = (nightCost * answer1) - ((nightCost * answer1) / 20);

if (answer1 >= 15) {
    console.log("O preço total ficará em " + discount20 + "€"); //20% desconto
} else if (answer1 >= 10) {
    console.log("O preço total ficará em " + discount15 + "€"); //15% desconto 
} else if (answer1 >= 5) {
    console.log("O preço total ficará em " + discount10 + "€"); //10% desconto
} else {
    console.log("O preço total ficará em " + totalCost + "€"); // s/ desconto
}


console.log("Quer incluir o pequeno-almoço por uma quantia adicional de 10€?");
let breakfast = 10;
let daysBreakfast = breakfast * answer1;
let answer2 = readlineSync.question("--> ");

if (answer2 == "sim" && answer1 >= 15) {
    console.log("Nesse caso o preço ficará em " + (discount20 + daysBreakfast) + "€"); //20% desconto + breakfast
} else if (answer2 == "sim" && answer1 >= 10) {
    console.log("Nesse caso o preço ficará em " + (discount15 + daysBreakfast) + "€"); //15% desconto + breakfast
} else if (answer2 == "sim" && answer1 >= 5) {
    console.log("Nesse caso o preço ficará em " + (discount10 + daysBreakfast) + "€"); //10% desconto + breakfast
} else if (answer2 == "sim" && answer1 < 5) {
    console.log("Nesse caso o preço ficará em " + (daysBreakfast + totalCost) + "€"); // s/ desconto + breakfast
} else {
    console.log("Nesse caso o preço mantém-se inalterado, ficando então em: " + totalCost + "€"); // s/desconto nem breakfast
}


