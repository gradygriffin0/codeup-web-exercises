"use strict";

// LOOSE EQUALITY - unique to javascript

// Loose equality ( == ) only compares the values of two data. Comparators MUST have same value.
// Loose Inequality (!=) Values MUST not be equal.
var num1 = 5;

var maybeNum2 = "5";

console.log(typeof(num1 + maybeNum2));
if(num1 == maybeNum2) {
    console.log("these are equivalent");
}

// STRICT EQUALITY (===)
// The comparators MUST be of the same data type and value.
// Strict inequality (!==)