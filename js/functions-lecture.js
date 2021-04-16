"use strict";

// var num = 5;
//
// num = num + 5;
// console.log(num);

// creating an interface for other code to use, without knowing what happens inside add().
// user can use add() without knowing what happens inside the code block {}.
// if the goal of the function is to give the user something back, a function needs a return statement.
        // function add() {
        //     return 5 + 5;
        // }
        //
        // console.log("The result of add() is " + add());

// in order to make the function dynamic to what the user needs it for, we give it parameters, or the
// named values that we put inside the parentheses.

        // function add(num1, num2) {
        //     return num1 + num2;
        //
        // }
        //
        // console.log("The result of add() is: " + add(-1234, 12341));

// a parameter is what you call the inside of a functions parentheses when you are defining it, however
// arguments are what is inside a functions parentheses when it is being called..
// in intellij the comments above a named function go into the function bio when you hover over it, as well as the
// parameters.

// if the function doesnt have a return statement, calling the function returns void; making the function a void function.

        // var myNum = 12;
        // var myNum2 = 21;
        // console.log(add(myNum, myNum2));
        // // arguments can be variables..^
        // ;
        // // USER, SUBTRACT RETURNS (num1 - num2)
        // function subtract(num1, num2) {
        //     return num1 - num2;
        // }

// Exercise
//TODO: Create functions which will return the product of two numbers and the dividend of two numbers, respectively.

function multiply(num1, num2) {

    console.log("The product of multiply() is: " +  (num1 * num2));
    return num1 * num2;
}
multiply(5, 6);

function divide(num1, num2) {

    console.log("The quotient of divide() is: " +  (num1 / num2));
    return num1 / num2;
}
divide(10, 5);



// This function has default values assigned to num1,num2
// most of the time people only put the default on the second parameter because theres no way to skip the first argument when calling.
function addWithDefaults(num1 = 0, num2 = 0) {
    return num1 + num2;
}

console.log(addWithDefaults(1));




// Function Scope