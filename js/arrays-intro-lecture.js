(function() {
    "use strict";

    // numbers - 5
    // strings - "dog"
    // Boolean - true/false
    // null - the absence of
    // undefined - data should exist, but doesn't
    // objects ->

    // What if we need to group data types, or several values and operate on them:
    // Arrays are a form of collection, they are an ordered collection with an index(starting at 0).


    // ARRAYS
    // []
    // values are delimited by commas
    //    0      1       2       - Index of  0, 1, and 2 of array. There are 3 elements in this array.
    // ["dog", "cat", "fish"] - each comma-delimited value inside an array is an element.

            // var myArr = ["dog", "cat", "fish"];
            // console.log(typeof myArr); // returns object...
            // console.log(Array.isArray(myArr)) // returns true...

        // var myCharacteristics = ["Casey","Software Engineer", "31"];
        // console.log("The array length is: " + myCharacteristics.length);
        // // the first element in an array is INDEXED at 0. The Last element in an array is indexed at (length - 1).
        // console.log("The first element of the array is: " + myCharacteristics[0]);
        // console.log(`My professor is a ${myCharacteristics[1]} named ${myCharacteristics[0]}`);

    // exercise

    // TODO: Make a new array which holds elements based on your own characteristics
//  -> In a console.log, output a string which describes yourself based on those elements
//  -> KEEP IN MIND ZERO-INDEXING!

        // var myCharacteristics = ["Grady", "Programming Student", "21"];
        // console.log(`Hello my name is ${myCharacteristics[0]}, and I am a ${myCharacteristics[2]} year old ${myCharacteristics[1].toLowerCase()}.`);
        // // TO CHANGE AN ELEMENT
        // myCharacteristics[0] += " Griffin"; // Assigning a new string to myCharacteristics[0]
        // // ^ is actually myCharacteristics[0] = myCharacteristics[0] + " Griffin"
        //

    // var myPets = ["Coda", "Murphy", "Hondo", "Buddy"];
    // //  iterator tied to index[0]
    //             // .length to iterate until the end of the array ( < .length because elements are +1 of length)
    // for(let i = 0; i <= myPets.length; i++){
    //     console.log(myPets[i]); // every iteration goes to i'th index of the array.
    //
    // }

// exercise
    // TODO: MINI-EXERCISE
//  -> Create an array with at least 5 elements, describing whatever you'd like!
//  -> Create a loop which will log each element to the console
//  -> Wrap that loop in a function which has an array parameter
//  -> Call the function and pass in your array as the argument
//  -> DID YOU KNOW: You can add different data types to an array??
//      -> Try adding strings, numbers, or booleans as elements
    var arrayArray = [["Hello", "array", "Array"], [true, false, true], [undefined, undefined, undefined], [1, 2, 3], [null, null, null]]
    function logArray(input) {
        for (let i = 0; i < input.length; i++) {
            console.log(input[i]);
        }
    }

    //     (logArray(arrayArray));
    // for each
    var myPets = ["Coda", "Murphy", "Hondo", "Buddy"];
    myPets.forEach(function (pet){
        console.log("This is my pet: " + pet);
    })
arrayArray.forEach(function(output){
    logArray(output);
})




})();