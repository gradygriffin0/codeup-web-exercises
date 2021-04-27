(function(){
    "use strict";
    //TODO:/*
    // .length - super important
    // .forEach() - super important
    //  for () loop - super important ®®


    // var days = ["Monday", "Tuesday", "Wednesday"];

    // // PUSH - ADD TO END OF ARRAY
    // days.push("Thursday"); // changes the array assignment and returns the new array
    // console.log(days);
    //
    // // POP - REMOVES LAST ELEMENT OF ARRAY AND RETURNS THE ELEMENT ITSELF;
    // days.pop();
    // console.log(days);

    // TODO: MINI-EXERCISE

//  -> Create an array with the remaining days of the week
//  -> Call .forEach() on that NEW array
//  -> Inside the inline function you pass into .forEach():
//      -> add the remainingDay of the week to the old array
//  -> When the loop completes, console.log() the completed day of the week array

    //     var days = ["Monday", "Tuesday", "Wednesday"];
    //     var remainingDays = ["Thursday","Friday", "Saturday", "Sunday"];
    //     remainingDays.forEach(function (day){
    //        days.push(day);
    //     });
    //
    //     console.log(days);



// UNSHIFT - adds to the beginning of an array.
//          0, 1, 2, 3
//UNSHIFT   0, 1, 2, 3
//w/NEW     -1, 0, 1, 2, 3

        // var numArray = [1, 2, 3, 4, 5];
        //
        // console.log(numArray.indexOf(1));
        //
        // numArray.unshift(6);
        //
        // console.log(numArray.indexOf(1));
        //
        // console.log(numArray);
        //
        // var sortedArray = numArray.sort();
        // console.log(sortedArray);

// var daysInMonth = [...Array(32).keys()];
//     console.log(daysInMonth);
//     var removedDay = daysInMonth.shift();
//     console.log(removedDay);
//     console.log(daysInMonth);
//     console.log((daysInMonth.indexOf(1) === 0));
//
//

//
//
// // TODO - MINI EXERCISE
// //  -> Let's reverse engineer our days of the week array
// //  -> Make sure to console.log in order to see your code's behavior!
// //  -> Write a function which takes in your complete days of the week array
// //      -> It will eventually return your reverse-engineered array
// //  -> Using a FOR LOOP (not .forEach())
// //      -> pop() each item off the days array
// //      -> use the returned value from pop() to unshift the element
// //      -> on to the new array
// //  -> HINT: You may find that the loop doesn't behave as expected
// //      -> console.log EVERY possible thing which could change as your loop runs
// //          -> consider how the methods you are using change state of the array
// let daysWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// var reverseArray = [];
//
// function daysCalc(days){
//     var limit = (days.length);
// for (let i = 0; i < limit; i++){
//     var popped = days.pop();
//     reverseArray.push(popped);
//
// }
//     console.log(reverseArray);
// }
//
// daysCalc(daysWeek);

//     function sortMyNums(num1, num2, num3){
//         var numArray = [num1, num2, num3];
//         console.log(numArray);
//         numArray.sort(function(a,b){
//             console.log(a);
//             console.log(b);
//             console.log(a - b);
//             return b - a;
//         });
//         console.log(numArray);
//     }
// sortMyNums(13,1009,1);


})();

