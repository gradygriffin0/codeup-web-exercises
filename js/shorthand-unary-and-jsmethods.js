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

    // // console.log(2 + 2);
    // var addition = 2;
    // addition += 2;
    // console.log(addition);
    //
    // // console.log(8 - 4);
    // var subtraction = 8;
    // subtraction -= 4;
    // console.log(subtraction);
    //
    // // console.log(2 * 2);
    // var multiplication = 2;
    // multiplication *= 2;
    // console.log(multiplication);
    //
    // // console.log(12 / 3);
    // var division = 12;
    // division /= 3;
    // console.log(division);
    //
    // // console.log(28 % 6);
    // var modulus = 28;
    // modulus %= 6;
    // console.log(modulus);


// UNARY

    // var makeItANumber = "doge";
    // console.log((+makeItANumber)); // returns NaN
    //


// INCREMENT / DECREMENT

// Post - increment (num++)
    // var num = 10;
    // console.log(num++) // num += 1 but it occurs after all evaluations in the operation have completed. Useful in loops.
    // console.log(num);


// JS Built-In Methods
    // For Example, we use these:
    // console.log();
    // window.alert();


// toString();   - converts something into a string.
    //     var num = 5 * 5;
    //     num = num.toString();
    //
    //     console.log(typeof num.toString());
    //     console.log(typeof num);

// toFixed() - fixes output to given decimal

    // var pi = 3.14159
    //
    // console.log(pi.toFixed(4)); // returns to the 4th decimal place.


// Number()   - converts stringed numbers to actual numbers

    // console.log(Number("1234"));


// isNaN() - checks to see if value is NaN

    // console.log(isNaN("Casey")); // true returns boolean
    // console.log(isNaN(-0));


// parseInt() -starts with the first number it sees until it finds NaN

    // console.log(parseInt("123123123 big number"));

// .length   - not a method its a property  // treats a string like an array of characters .. returns a number of how many letters are in it.
// useful for evaluating the length of any object.

    // console.log("Casey".length);

// indexOf() returns the number place that the value occurs inside the array.
console.log("Casey".indexOf("C"));