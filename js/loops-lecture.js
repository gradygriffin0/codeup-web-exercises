"use strict";


// Iteration - repetition of a process until a desired outcome is reached -- The sequence needs an end point to approach. Each repetition is a sing iteration.

// Infinite loops are when you have a loop with an unobtainable outcome.



// WHILE LOOPS

// var count = 0
// var numOfSteps = 0;
// while (numOfSteps <= 10) {
//     console.log(`Keep walking. #${count}`);
//     numOfSteps = numOfSteps + 2;
//     count++
// }


// DO WHILE

    // do {
    //     // executes code
    // } while (condition) // does something then checks condition then does it again until condition fails.


        // var numStudents = 0;
        // do {
        //     console.log(`we have ${20-numStudents} desks remaining`);
        //     numStudents++;
        // }while(numStudents <= 20);
        // console.log("Sorry class is full...");


        // var age = 1;
        // do {
        //     console.log(`Happy birthday you are now ${age} years old.`);
        //     age++;
        // }while (age < 16);
        // console.log(`Happy birthday. Enjoy your ${age}th birthday. Here's a car.`);





// the difference between while and do while is that the do-while will run first and check a condition second,
// and the while loop will check a condition first and then running second.





// FOR LOOP

    // for(var i = 0; i <= 10; i++){
    //     // code to be executed.
    //     console.log("hello world" + i);
    // }
    // for(var i = 10; i >= 0; i -= 2){
    //     // code to be executed.
    //     console.log("hello world" + i);
    // }

// function innerLoop(x,y) {
//     for(let i = y; i >= x; i--){
//         console.log(i);
//     }
// }
// function outerLoop(x,y){
//     for (let i = x; i <= y; i++) {
//         console.log(i);
//         if (i === y) {
//             innerLoop(x,y);
//         }
//     }
// }
//
// outerLoop(1 , 100);
//
//
