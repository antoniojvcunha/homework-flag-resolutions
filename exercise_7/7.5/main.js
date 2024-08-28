// Exercise 1
// Input and output
// Write a program that ask the user for his name and prints a greeting.

// Please enter your name:

// Hello <NAME>, welcome to the Learn to Code course.
// Hint:
// Use readline-sync for the input and console.log() for the output .

// Exercise 2
// Format text
// Choose a simple Ascii art from the website https://www.asciiart.eu/.
// Output it to the console.

// ￼        _______
//        //  ||\ \
//  _____//___||_\ \___
//  )  _          _    \
//  |_/ \________/ \___|
// ___\_/________\_/______
// Exercise 3
// Currency converter
// Write a program that asks the user for an amount in USD.
// Output that amount converted to EURO.

// Bonus goal:
// Use a precision of 2 decimal points: 3.45€.

// Exercise 4
// Sum loop
// Write a program that asks the user for a number n and prints the sum of the numbers 1 to n.

// Example:
// User inputs 5
// Output:
// 1 + 2 + 3 + 4 + 5 = 15

// Exercise 5
// Modify the Exercise 4 so that only multiples of three or five are considered in the sum.

// Example:
// User inputs 17
// Output:
// 3 + 5 + 6 + 9 + 10 + 12 + 15 = 60

// Exercise 6
// Modify Exercise 4 so that the program asks the user for a number n and gives them the possibility to choose between computing the sum or computing the product of 1 to n.

// Exercise 7
// Beachwalk Hotel 🏖
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

// 7.5
// Extra guest
// Continue from the last exercise.
// Ask the user how many guests will stay in the room (1 or 2)

// Add 10€ per night for an extra guest (Before discount)

// Don't forget the extra breakfast 🥐

let readlineSync = require("readline-sync");

let extraGuest = 10;

console.log("Quantas pessoas vão dormir, uma ou duas?");
let guestAnswer = readlineSync.question("--> ");

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

//Normal Room discount + extra guest(10€)
let totalCostGuest = (nightCost + 10) * answer1;
let discount10Guest = ((nightCost + 10) * answer1) - (((nightCost + 10) * answer1) / 10);
let discount15Guest = ((nightCost + 10) * answer1) - (((nightCost + 10) * answer1) / 15);
let discount20Guest = ((nightCost + 10) * answer1) - (((nightCost + 10) * answer1) / 20);

//Deluxe room discount
let totalCostDeluxe = deluxeRoom * answer1;
let discount10Deluxe = (deluxeRoom * answer1) - ((deluxeRoom * answer1) / 10);
let discount15Deluxe = (deluxeRoom * answer1) - ((deluxeRoom * answer1) / 15);
let discount20Deluxe = (deluxeRoom * answer1) - ((deluxeRoom * answer1) / 20);

//Deluxe room discount + extra guest(10€)
let totalCostDeluxeGuest = (deluxeRoom + 10) * answer1;
let discount10DeluxeGuest = ((deluxeRoom + 10) * answer1) - (((deluxeRoom + 10) * answer1) / 10);
let discount15DeluxeGuest = ((deluxeRoom + 10) * answer1) - (((deluxeRoom + 10) * answer1) / 15);
let discount20DeluxeGuest = ((deluxeRoom + 10) * answer1) - (((deluxeRoom + 10) * answer1) / 20);

//Deluxe Suites discount
let totalCostSuite = deluxeSuite * answer1;
let discount10Suite = (deluxeSuite * answer1) - ((deluxeSuite * answer1) / 10);
let discount15Suite = (deluxeSuite * answer1) - ((deluxeSuite * answer1) / 15);
let discount20Suite = (deluxeSuite * answer1) - ((deluxeSuite * answer1) / 20);

//Deluxe Suites discount + extra guest(10€)
let totalCostSuiteGuest = (deluxeSuite + 10) * answer1;
let discount10SuiteGuest = ((deluxeSuite + 10) * answer1) - (((deluxeSuite + 10) * answer1) / 10);
let discount15SuiteGuest = ((deluxeSuite + 10) * answer1) - (((deluxeSuite + 10) * answer1) / 15);
let discount20SuiteGuest = ((deluxeSuite + 10) * answer1) - (((deluxeSuite + 10) * answer1) / 20);

//preço total para uma pessoa
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

//preço total c/ guest
if (answer1 >= 15 && roomAnswser == "normal" && guestAnswer > 1) {
    console.log("O preço total ficará em " + discount20Guest + "€"); //20% desconto normal c/ guest
} else if (answer1 >= 10 && roomAnswser == "normal" && guestAnswer > 1) {
    console.log("O preço total ficará em " + discount15Guest + "€"); //15% desconto normal c/guest
} else if (answer1 >= 5 && roomAnswser == "normal" && guestAnswer > 1) {
    console.log("O preço total ficará em " + discount10Guest + "€"); //10% desconto normal c/ guest
} else if (answer1 < 5 && roomAnswser == "normal" && guestAnswer > 1) {
    console.log("O preço total ficará em " + totalCostGuest + "€"); // s/ desconto normal c/guest

} else if (answer1 >= 15 && roomAnswser == "deluxe" && guestAnswer > 1 ) {
    console.log("O preço total ficará em " + discount20DeluxeGuest + "€"); //20% desconto Deluxe c/guest
} else if (answer1 >= 10 && roomAnswser == "deluxe" && guestAnswer > 1) {
    console.log("O preço total ficará em " + discount15DeluxeGuest + "€"); //15% desconto Deluxe c/guest
} else if (answer1 >= 5 && roomAnswser == "deluxe" && guestAnswer > 1) {
    console.log("O preço total ficará em " + discount10DeluxeGuest + "€"); //10% desconto Deluxe c/guest
} else if (answer1 < 5 && roomAnswser == "deluxe" && guestAnswer > 1) {
    console.log("O preço total ficará em " + totalCostDeluxeGuest + "€"); // s/ desconto Deluxe c/guest

} else if (answer1 >= 15 && roomAnswser == "suite" && guestAnswer > 1) {
    console.log("O preço total ficará em " + discount20SuiteGuest + "€"); //20% desconto Suite c/guest
} else if (answer1 >= 10 && roomAnswser == "suite" && guestAnswer > 1) {
    console.log("O preço total ficará em " + discount15SuiteGuest + "€"); //15% desconto Suite c/guest
} else if (answer1 >= 5 && roomAnswser == "suite" && guestAnswer > 1) {
    console.log("O preço total ficará em " + discount10SuiteGuest + "€"); //10% desconto Suite c/guest
} else if (answer1 < 5 && roomAnswser == "suite" && guestAnswer > 1) {
    console.log("O preço total ficará em " + totalCostSuiteGuest + "€"); // s/ desconto Suite c/guest
}

console.log("Quer incluir o pequeno-almoço por uma quantia adicional de 10€?");
let breakfast = 10;
let daysBreakfast = breakfast * answer1;
let answer2 = readlineSync.question("--> ");

// c/ ou s/ pequeno almoço s/ guest 
if (answer2 == "sim" && answer1 >= 15 && roomAnswser == "normal") {
    console.log("Nesse caso o preço ficará em " + (discount20 + daysBreakfast) + "€"); //20% desconto normal + breakfast
} else if (answer2 != "sim" && answer1 >= 15 && roomAnswser == "normal") {
    console.log("Nesse caso o preço mantém-se inalterado, ficando então em: " + discount20 + "€"); // 20% desconto norma e s/breakfast
} else if (answer2 == "sim" && answer1 >= 10 && roomAnswser == "normal") {
    console.log("Nesse caso o preço ficará em " + (discount15 + daysBreakfast) + "€"); //15% desconto normal + breakfast
} else if (answer2 != "sim" && answer1 >= 10 && roomAnswser == "normal") {
    console.log("Nesse caso o preço mantém-se inalterado, ficando então em: " + discount15 + "€"); // 15% desconto norma e s/breakfast
} else if (answer2 == "sim" && answer1 >= 5 && roomAnswser == "normal") {
    console.log("Nesse caso o preço ficará em " + (discount10 + daysBreakfast) + "€"); //10% desconto normal + breakfast
} else if (answer2 != "sim" && answer1 >= 5 && roomAnswser == "normal") {
    console.log("Nesse caso o preço mantém-se inalterado, ficando então em: " + discount10 + "€"); // 10% desconto norma e s/breakfast
} else if (answer2 == "sim" && answer1 < 5 && roomAnswser == "normal") {
    console.log("Nesse caso o preço ficará em " + (daysBreakfast + totalCost) + "€"); // s/ desconto normal + breakfast
} else if (answer2 != "sim" && answer1 < 5 && roomAnswser == "normal") {
    console.log("Nesse caso o preço mantém-se inalterado, ficando então em: " + totalCost + "€"); // s/desconto normal e s/breakfast

} else if (answer2 == "sim" && answer1 >= 15 && roomAnswser == "deluxe") {
    console.log("Nesse caso o preço ficará em " + (discount20Deluxe + daysBreakfast) + "€"); //20% desconto Deluxe + breakfast
} else if (answer2 != "sim" && answer1 >=15 && roomAnswser == "deluxe") {
    console.log("Nesse caso o preço mantém-se inalterado, ficando então em: " + discount20Deluxe + "€"); // 20% desconto Deluxe e s/breakfast
} else if (answer2 == "sim" && answer1 >= 10 && roomAnswser == "deluxe") {
    console.log("Nesse caso o preço ficará em " + (discount15Deluxe + daysBreakfast) + "€"); //15% desconto Deluxe + breakfast
} else if (answer2 != "sim" && answer1 >=10 && roomAnswser == "deluxe") {
    console.log("Nesse caso o preço mantém-se inalterado, ficando então em: " + discount15Deluxe + "€"); // 15% desconto Deluxe e s/breakfast
} else if (answer2 == "sim" && answer1 >= 5 && roomAnswser == "deluxe") {
    console.log("Nesse caso o preço ficará em " + (discount10Deluxe + daysBreakfast) + "€"); //10% desconto Deluxe + breakfast
} else if (answer2 != "sim" && answer1 >=5 && roomAnswser == "deluxe") {
    console.log("Nesse caso o preço mantém-se inalterado, ficando então em: " + discount10Deluxe + "€"); // 10% desconto Deluxe e s/breakfast
} else if (answer2 == "sim" && answer1 < 5 && roomAnswser == "deluxe") {
    console.log("Nesse caso o preço ficará em " + (daysBreakfast + totalCostDeluxe) + "€"); // s/ desconto Deluxe + breakfast
} else if (answer2 != "sim" && roomAnswser == "deluxe") {
    console.log("Nesse caso o preço mantém-se inalterado, ficando então em: " + totalCostDeluxe + "€"); // s/desconto Deluxe e s/breakfast

} else if (answer2 == "sim" && answer1 >= 15 && roomAnswser == "suite") {
    console.log("Nesse caso o preço ficará em " + (discount20Suite + daysBreakfast) + "€"); //20% desconto Suite + breakfast
} else if (answer2 != "sim" && answer1 >=15 && roomAnswser == "suite") {
    console.log("Nesse caso o preço mantém-se inalterado, ficando então em: " + discount20Suite + "€"); // 20% desconto Suite e s/breakfast
} else if (answer2 == "sim" && answer1 >= 10 && roomAnswser == "suite") {
    console.log("Nesse caso o preço ficará em " + (discount15Suite + daysBreakfast) + "€"); //15% desconto Suite + breakfast
} else if (answer2 != "sim" && answer1 >=10 && roomAnswser == "suite") {
    console.log("Nesse caso o preço mantém-se inalterado, ficando então em: " + discount15Suite + "€"); // 15% desconto Suite e s/breakfast
} else if (answer2 == "sim" && answer1 >= 5 && roomAnswser == "suite") {
    console.log("Nesse caso o preço ficará em " + (discount10Suite + daysBreakfast) + "€"); //10% desconto Suite + breakfast
} else if (answer2 != "sim" && answer1 >=5 && roomAnswser == "suite") {
    console.log("Nesse caso o preço mantém-se inalterado, ficando então em: " + discount10Suite + "€"); // 10% desconto Suite e s/breakfast
} else if (answer2 == "sim" && answer1 < 5 && roomAnswser == "suite") {
    console.log("Nesse caso o preço ficará em " + (daysBreakfast + totalCostSuite) + "€"); // s/ desconto Suite + breakfast
} else if (answer2 != "sim" && roomAnswser == "suite") {
    console.log("Nesse caso o preço mantém-se inalterado, ficando então em: " + totalCostSuite + "€"); // s/desconto Suite e s/breakfast
}

// Quarto Normal, c/ ou s/ pequeno almoço + guest

if (answer2 == "sim" && answer1 >= 15 && roomAnswser == "normal" && guestAnswer > 1) {
    console.log("Nesse caso o preço ficará em " + (discount20Guest + (2 * daysBreakfast)) + "€"); //20% desconto normal + breakfast + guest
} else if (answer2 != "sim" && answer1 >= 15 && roomAnswser == "normal" && guestAnswer > 1) {
    console.log("Nesse caso o preço mantém-se inalterado, ficando então em: " + discount20Guest + "€"); // 20% desconto normal e s/breakfast + guest
} else if (answer2 == "sim" && answer1 >= 10 && roomAnswser == "normal" && guestAnswer > 1) {
    console.log("Nesse caso o preço ficará em " + (discount15Guest + (2 * daysBreakfast)) + "€"); //15% desconto normal + breakfast + guest
} else if (answer2 != "sim" && answer1 >= 10 && roomAnswser == "normal" && guestAnswer > 1) {
    console.log("Nesse caso o preço mantém-se inalterado, ficando então em: " + discount15Guest + "€"); // 15% desconto normal e s/breakfast + guest
} else if (answer2 == "sim" && answer1 >= 5 && roomAnswser == "normal" && guestAnswer > 1) {
    console.log("Nesse caso o preço ficará em " + (discount10Guest + (2 * daysBreakfast)) + "€"); //10% desconto normal + breakfast + guest
} else if (answer2 != "sim" && answer1 >= 5 && roomAnswser == "normal" && guestAnswer > 1) {
    console.log("Nesse caso o preço mantém-se inalterado, ficando então em: " + discount10Guest + "€"); // 10% desconto normal e s/breakfast + guest
} else if (answer2 == "sim" && answer1 < 5 && roomAnswser == "normal" && guestAnswer > 1) {
    console.log("Nesse caso o preço ficará em " + (2 * daysBreakfast + totalCostGuest) + "€"); // s/ desconto normal + breakfast + guest
} else if (answer2 != "sim" && roomAnswser == "normal" && guestAnswer > 1) {
    console.log("Nesse caso o preço mantém-se inalterado, ficando então em: " + totalCostGuest + "€"); // s/desconto normal s/breakfast + guest

// Quarto Deluxe, c/ ou s/ pequeno almoço + guest

} else if (answer2 == "sim" && answer1 >= 15 && roomAnswser == "deluxe" && guestAnswer > 1) {
    console.log("Nesse caso o preço ficará em " + (discount20DeluxeGuest + (2 * daysBreakfast)) + "€"); //20% desconto Deluxe + breakfast + guest
} else if (answer2 != "sim" && answer1 >= 15 && roomAnswser == "deluxe" && guestAnswer > 1) {
    console.log("Nesse caso o preço mantém-se inalterado, ficando então em: " + discount20DeluxeGuest + "€"); // 20% desconto Deluxe e s/breakfast + guest
} else if (answer2 == "sim" && answer1 >= 10 && roomAnswser == "deluxe" && guestAnswer > 1) {
    console.log("Nesse caso o preço ficará em " + (discount15DeluxeGuest + (2 * daysBreakfast)) + "€"); //15% desconto Deluxe + breakfast + guest
} else if (answer2 != "sim" && answer1 >= 10 && roomAnswser == "deluxe" && guestAnswer > 1) {
    console.log("Nesse caso o preço mantém-se inalterado, ficando então em: " + discount15DeluxeGuest + "€"); // 15% desconto Deluxe e s/breakfast + guest
} else if (answer2 == "sim" && answer1 >= 5 && roomAnswser == "deluxe" && guestAnswer > 1) {
    console.log("Nesse caso o preço ficará em " + (discount10DeluxeGuest + (2 * daysBreakfast)) + "€"); //10% desconto Deluxe + breakfast + guest
} else if (answer2 != "sim" && answer1 >= 5 && roomAnswser == "deluxe" && guestAnswer > 1) {
    console.log("Nesse caso o preço mantém-se inalterado, ficando então em: " + discount10DeluxeGuest + "€"); // 10% desconto Deluxe e s/breakfast + guest
} else if (answer2 == "sim" && answer1 < 5 && roomAnswser == "deluxe" && guestAnswer > 1) {
    console.log("Nesse caso o preço ficará em " + (2 * daysBreakfast + totalCostDeluxeGuest) + "€"); // s/ desconto Deluxe + breakfast + guest
} else if (answer2 != "sim" && roomAnswser == "deluxe" && guestAnswer > 1) {
    console.log("Nesse caso o preço mantém-se inalterado, ficando então em: " + totalCostDeluxeGuest + "€"); // s/desconto Deluxe s/breakfast + guest

// Quarto Suite, c/ ou s/ pequeno almoço + guest

} else if (answer2 == "sim" && answer1 >= 15 && roomAnswser == "suite" && guestAnswer > 1) {
    console.log("Nesse caso o preço ficará em " + (discount20SuiteGuest + (2 * daysBreakfast)) + "€"); //20% desconto Suite + breakfast + guest
} else if (answer2 != "sim" && answer1 >= 15 && roomAnswser == "suite" && guestAnswer > 1) {
    console.log("Nesse caso o preço mantém-se inalterado, ficando então em: " + discount20SuiteGuest + "€"); // 20% desconto Suite e s/breakfast + guest
} else if (answer2 == "sim" && answer1 >= 10 && roomAnswser == "suite" && guestAnswer > 1) {
    console.log("Nesse caso o preço ficará em " + (discount15SuiteGuest + (2 * daysBreakfast)) + "€"); //15% desconto Suite + breakfast + guest
} else if (answer2 != "sim" && answer1 >= 10 && roomAnswser == "suite" && guestAnswer > 1) {
    console.log("Nesse caso o preço mantém-se inalterado, ficando então em: " + discount15DeluxeGuest + "€"); // 15% desconto Deluxe e s/breakfast + guest
} else if (answer2 == "sim" && answer1 >= 5 && roomAnswser == "suite" && guestAnswer > 1) {
    console.log("Nesse caso o preço ficará em " + (discount10SuiteGuest + (2 * daysBreakfast)) + "€"); //10% desconto Suite + breakfast + guest
} else if (answer2 != "sim" && answer1 >= 5 && roomAnswser == "suite" && guestAnswer > 1) {
    console.log("Nesse caso o preço mantém-se inalterado, ficando então em: " + discount10DeluxeGuest + "€"); // 10% desconto Deluxe e s/breakfast + guest
} else if (answer2 == "sim" && answer1 < 5 && roomAnswser == "suite" && guestAnswer > 1) {
    console.log("Nesse caso o preço ficará em " + (2 * daysBreakfast + totalCostSuiteGuest) + "€"); // s/ desconto Suite + breakfast + guest
} else if (answer2 != "sim" && roomAnswser == "suite" && guestAnswer > 1) {
    console.log("Nesse caso o preço mantém-se inalterado, ficando então em: " + totalCostSuiteGuest + "€"); // s/desconto Suite e s/breakfast + guest
}
