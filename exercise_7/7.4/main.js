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
// 7.4
// Deluxe Suites
// Continue from the last exercise.
// Ask the user which type of room they would like

// Base price per room:
// Normal room: 90€
// Deluxe room: 120€
// Deluxe suites: 150€

let readlineSync = require("readline-sync");

let nightCost = 90;
let deluxeRoom = 120;
let deluxeSuite = 150;

console.log("Qual o tipo de quarto que pretende escolher: normal(90€), deluxe(120€) ou suite(150€)?");
let roomAnswser = readlineSync.question("--> ");

console.log("E quantas noites quer ficar?");
let answer1 = readlineSync.question("--> ");

//Normal Room discount
let totalCost = nightCost * answer1;
let discount10 = (nightCost * answer1) - ((nightCost * answer1) / 10);
let discount15 = (nightCost * answer1) - ((nightCost * answer1) / 15);
let discount20 = (nightCost * answer1) - ((nightCost * answer1) / 20);

//Deluxe room discount
let totalCostDeluxe = deluxeRoom * answer1;
let discount10Deluxe = (deluxeRoom * answer1) - ((deluxeRoom * answer1) / 10);
let discount15Deluxe = (deluxeRoom * answer1) - ((deluxeRoom * answer1) / 15);
let discount20Deluxe = (deluxeRoom * answer1) - ((deluxeRoom * answer1) / 20);

//Deluxe Suites discount
let totalCostSuite = deluxeSuite * answer1;
let discount10Suite = (deluxeSuite * answer1) - ((deluxeSuite * answer1) / 10);
let discount15Suite = (deluxeSuite * answer1) - ((deluxeSuite * answer1) / 15);
let discount20Suite = (deluxeSuite * answer1) - ((deluxeSuite * answer1) / 20);


if (answer1 >= 15 && roomAnswser == "normal") {
    console.log("O preço total ficará em " + discount20 + "€"); //20% desconto normal
} else if (answer1 >= 10 && roomAnswser == "normal") {
    console.log("O preço total ficará em " + discount15 + "€"); //15% desconto normal
} else if (answer1 >= 5 && roomAnswser == "normal") {
    console.log("O preço total ficará em " + discount10 + "€"); //10% desconto normal
} else if (answer1 < 5 && roomAnswser == "normal") {
    console.log("O preço total ficará em " + totalCost + "€"); // s/ desconto normal
} else if (answer1 >= 15 && roomAnswser == "deluxe") {
    console.log("O preço total ficará em " + discount20Deluxe + "€"); //20% desconto Deluxe
} else if (answer1 >= 10 && roomAnswser == "deluxe") {
    console.log("O preço total ficará em " + discount15Deluxe + "€"); //15% desconto Deluxe
} else if (answer1 >= 5 && roomAnswser == "deluxe") {
    console.log("O preço total ficará em " + discount10Deluxe + "€"); //10% desconto Deluxe
} else if (answer1 < 5 && roomAnswser == "deluxe") {
    console.log("O preço total ficará em " + totalCostDeluxe + "€"); // s/ desconto Deluxe
} else if (answer1 >= 15 && roomAnswser == "suite") {
    console.log("O preço total ficará em " + discount20Suite + "€"); //20% desconto Suite
} else if (answer1 >= 10 && roomAnswser == "suite") {
    console.log("O preço total ficará em " + discount15Suite + "€"); //15% desconto Suite
} else if (answer1 >= 5 && roomAnswser == "suite") {
    console.log("O preço total ficará em " + discount10Suite + "€"); //10% desconto Suite
} else if (answer1 < 5 && roomAnswser == "suite") {
    console.log("O preço total ficará em " + totalCostSuite + "€"); // s/ desconto Suite
}

console.log("Quer incluir o pequeno-almoço por uma quantia adicional de 10€?");
let breakfast = 10;
let daysBreakfast = breakfast * answer1;
let answer2 = readlineSync.question("--> ");

if (answer2 == "sim" && answer1 >= 15 && roomAnswser == "normal") {
    console.log("Nesse caso o preço ficará em " + (discount20 + daysBreakfast) + "€"); //20% desconto normal + breakfast
} else if (answer2 == "sim" && answer1 >= 10 && roomAnswser == "normal") {
    console.log("Nesse caso o preço ficará em " + (discount15 + daysBreakfast) + "€"); //15% desconto normal + breakfast
} else if (answer2 == "sim" && answer1 >= 5 && roomAnswser == "normal") {
    console.log("Nesse caso o preço ficará em " + (discount10 + daysBreakfast) + "€"); //10% desconto normal + breakfast
} else if (answer2 == "sim" && answer1 < 5 && roomAnswser == "normal") {
    console.log("Nesse caso o preço ficará em " + (daysBreakfast + totalCost) + "€"); // s/ desconto normal + breakfast
} else if (answer2 != "sim" && roomAnswser == "normal") {
    console.log("Nesse caso o preço mantém-se inalterado, ficando então em: " + totalCost + "€"); // s/desconto normal e s/breakfast

} else if (answer2 == "sim" && answer1 >= 15 && roomAnswser == "deluxe") {
    console.log("Nesse caso o preço ficará em " + (discount20Deluxe + daysBreakfast) + "€"); //20% desconto Deluxe + breakfast
} else if (answer2 == "sim" && answer1 >= 10 && roomAnswser == "deluxe") {
    console.log("Nesse caso o preço ficará em " + (discount15Deluxe + daysBreakfast) + "€"); //15% desconto Deluxe + breakfast
} else if (answer2 == "sim" && answer1 >= 5 && roomAnswser == "deluxe") {
    console.log("Nesse caso o preço ficará em " + (discount10Deluxe + daysBreakfast) + "€"); //10% desconto Deluxe + breakfast
} else if (answer2 == "sim" && answer1 < 5 && roomAnswser == "deluxe") {
    console.log("Nesse caso o preço ficará em " + (daysBreakfast + totalCostDeluxe) + "€"); // s/ desconto Deluxe + breakfast
} else if (answer2 != "sim" && roomAnswser == "deluxe") {
    console.log("Nesse caso o preço mantém-se inalterado, ficando então em: " + totalCostDeluxe + "€"); // s/desconto Deluxe e s/breakfast

} else if (answer2 == "sim" && answer1 >= 15 && roomAnswser == "suite") {
    console.log("Nesse caso o preço ficará em " + (discount20Suite + daysBreakfast) + "€"); //20% desconto Suite + breakfast
} else if (answer2 == "sim" && answer1 >= 10 && roomAnswser == "suite") {
    console.log("Nesse caso o preço ficará em " + (discount15Suite + daysBreakfast) + "€"); //15% desconto Suite + breakfast
} else if (answer2 == "sim" && answer1 >= 5 && roomAnswser == "suite") {
    console.log("Nesse caso o preço ficará em " + (discount10Suite + daysBreakfast) + "€"); //10% desconto Suite + breakfast
} else if (answer2 == "sim" && answer1 < 5 && roomAnswser == "suite") {
    console.log("Nesse caso o preço ficará em " + (daysBreakfast + totalCostSuite) + "€"); // s/ desconto Suite + breakfast
} else if (answer2 != "sim" && roomAnswser == "suite") {
    console.log("Nesse caso o preço mantém-se inalterado, ficando então em: " + totalCostSuite + "€"); // s/desconto Suite e s/breakfast
} 


