"use strict";

// SHORTHAND ASSIGNMENT OPERATORS
// += / -=

        var name = "Casey";
    //
    // name = name + " " + "Edwards";
    // console.log(name);


// INSTEAD -- EASIER METHOD

// name += " " + " Edwards"; // computer reads name = name + " " + "Edwards;
//
// console.log(name);
//
// console.log(name -= "Edwards"); // returns NaN because -= is only for numbers and indexes.. only for quantifiable numbers.
// --------------------
// Remove From -=

// var daysRemaining = 114;
// // 4 days pass
// daysRemaining -= 4;
//
// console.log(daysRemaining);


// MINI EXERCISE : REFACTOR THESE EQUATIONS WITH TERNARY SHORTHAND

// console.log(2 + 2);
var addition = 2;
addition += 2;
console.log(addition);

// console.log(8 - 4);
var subtraction = 8;
subtraction -= 4;
console.log(subtraction);

// console.log(2 * 2);
var multiplication = 2;
multiplication *= 2;
console.log(multiplication);

// console.log(12 / 3);
var division = 12;
division /= 3;
console.log(division);

// console.log(28 % 6);
var modulus = 28;
modulus %= 6;
console.log(modulus);
