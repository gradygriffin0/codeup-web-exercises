"use strict";

alert("Welcome to my Website!");
var userColor = prompt("What is your favorite color?");

var myfavColor = "red"
if(userColor.toUpperCase() === myfavColor.toUpperCase()) {
    alert("Hey, my favorite color is also " + userColor);
} else {
    alert("Your favorite color is " + userColor);
}

