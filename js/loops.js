"use strict";

// // // TODO: MINI EXERCISES
// // // TODO: print all even numbers between 0 and 25;
// // // TODO: using prompt() and alert(), write a loop that will continue to ask for the correct password until the
// // // correct password is given.
// // hint: start by defining the correct password and don't forget to link your html file
//
// // 0-25
// // var count = 0
// // while(count < 25){
// //     if(count % 2 === 0){
// //         console.log(count)
// //     }
// //     count++
// // }
// //
//                 // for (var i = 0; i < 25; i++){
//                 //     if(i % 2 !== 0){
//                 //         continue;
//                 //     }
//                 //     console.log("Your even number is " + i);
//                 // }
//
// var correctPassword = "password123";
// var userPassword = prompt("Enter your password");
// while (userPassword !== correctPassword) {
//     alert("You entered the wrong password");
//     userPassword = prompt("Enter your password");
// }

// // TODO: A parking lot with 30 parking spaces wants to display the amount of spaces available as it gets filled.
//  Let's assume that there are allowing two cars into the parking lot at a time. As those cars take up spaces,
//  write a do-while loop that prints the spaces available. If the parking lot gets filled, print "this parking lot
//  is now full" to the console.
// // HINT: think of a countdown, remember if statements can be used inside of your statement
var cars = 0;
do {
    console.log(`Parking Lots available: ${30 - cars}`);
    cars += 2;
    console.log("-------------------------");
    console.log(`${cars} parking lots have now been filled`);
}while(cars<30);
console.log("Parking lot is now filled");