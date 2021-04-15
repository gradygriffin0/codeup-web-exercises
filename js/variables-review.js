"use strict";

// VARIABLES
// A symbolic representative of a value that can be different in each run of a program.
// The variable is a pointer to a stored place in memory of your running application. var reserves memory for something.

var a = "a";
var alsoA = "a";

if (a === alsoA) {
    console.log("Yes these variables are literally equal");
}
