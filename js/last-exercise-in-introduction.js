"use strict";
// -------------------
/*
var a = 1;
var b = a++;
var c = ++a;
/* I predict:
value of a: 3
value of b: 1
value of c: 3
 *//*
console.log(a);
console.log(b);
console.log(c);
// returns my prediction.

// -------------------

var d = "hello"
var e = false
d++;
e++;
/* I predict
d = "hello"
e = 0
 *//*
console.log(d);
console.log(e);
// D actually returned NaN and e actually returned 1.

// -------------------

var perplexed; // undefined
perplexed + 2;
/* I predict
NaN
 *//*
console.log(perplexed + 2);

// -------------------

var price = 2.7;
price.toFixed(2);
/* I predict
2.70
 *//*
console.log(price.toFixed(2));
// 2.70

// -------------------

var priceString = "2.7";
/* I predict
NaN
 *//*
// console.log(priceString.toFixed(2)); -- commented out because this returns an error.

// -------------------

/* // I predict false
console.log(isNaN(0));

// I predict false
console.log(isNaN(1));

// I predict true
console.log(isNaN("")); // actually false... guessing its because empty string = false = 0

// I predict true
console.log(isNaN("string"));

// I predict true
console.log(isNaN("0")); // false... probably because isNaN takes the value out of a string

// I predict true
console.log(isNaN("1")); // False ^

// I predict true
console.log(isNaN("3.145")); // False ^

// I predict false
console.log(isNaN(Number.MAX_VALUE));

// I predict false
console.log(isNaN(Infinity));

// I predict true
console.log(isNaN("true"));

// I predict false
console.log(isNaN(true));

// I predict true
console.log(isNaN("false"));

// I predict false
console.log(isNaN(false));

// I predict false
console.log(isNaN == isNaN); // isNaN is NaN so therefore = true. wow
*/

/*
// Inequality fun ------
// Predict false
console.log(!true);

// predict true
console.log(!false);

// predict true
console.log(!!true);

// predict false
console.log(!!false);

// I predict 0
console.log(!!0); // actualy false, so technically 0.

// I predict false
console.log(!!-0);

// I predict true
console.log(!!1);

//I predict true
console.log(!!-1);

// I predict true
console.log(!!0.1);

// I predict true
console.log(!!"string");

// I predict false
console.log(!!"");

// I predict false
console.log(!!'');

// I predict true
console.log(!!"false");

// I predict true
console.log(!!"0");
*/
/*
var sample = "Hello Codeup";

console.log(sample.length);
sample = sample.toUpperCase();
console.log(sample);
sample = sample.toLowerCase();
console.log(sample);
var sample = "Hello Codeup";
var sample = sample + " Students";
console.log(sample);
console.log(sample.indexOf("c")); // I notice that if that char isnt in the string, it returns -1
console.log(sample.indexOf("C"));
var startLetter = sample.indexOf("C");
var lastLetter = (sample.indexOf("p") + 1);
console.log(sample.substring(startLetter, lastLetter));
*/
// REPRESENT WITH CONDITIONALS
// Scenario 1 -- movie rental
var dayRate = 3;
var dayToday = 0
var littleMermaid;
var brotherBear;
var Hercules;
if (dayToday > 0) {
    console.log("Check how long you've had your rental!")
} else if (dayToday == 0){
    littleMermaid = dayRate*3;
    brotherBear = dayRate*5;
    Hercules = dayRate*1;
    console.log(littleMermaid + brotherBear + Hercules);
}

// Scenario 2 ---- companies
var hoursGoogle = 6;
var hoursAmazon = 4;
var hoursFB = 10;
var payGoogle = 400;
var payAmazon = 380;
var payFB = 350;
var total = 0;
if (payGoogle == 400) {
    console.log("I made " + (payGoogle * hoursGoogle) + "$" + " at Google.");
    var total = (payGoogle * hoursGoogle);
}
if(payAmazon == 380) {
    console.log("I made " + (payAmazon * hoursAmazon) + "$" + " at Amazon.");
    var total = total + (payAmazon * hoursAmazon);
}
if (payFB == 350) {
    console.log("I made " + (payFB * hoursFB) + "$" + " at Facebook.");
    var total = total + (payFB * hoursFB);
    console.log("I Made " + total + "$" + " total.");
}

// SCENARIO 3 ---- Students
var classSize = 30;
var classSchedule = "Works with Schedule"
if (classSize < 30 && classSchedule == "Works with Schedule"); {
    console.log("Congrats... you're enrolled!")
}


// Scenario 4 --- Product offer
var productsBought = 0;
var offerExpired = false;
var premiumMember = true;
if ((productsBought > 2 || premiumMember) && offerExpired === false) {
    console.log("Congrats your product is offered");
  if(premiumMember) {
    console.log(" Also ... thanks for being a premium customer.");
}
}
var username = "codeup";
var password = "notastrongpassword";
if (password.length> 5) {
    var longEnoughPass = true;
    console.log("Good Pass Length");
} else console.log("Pass not long enough");
if (password.includes(username) === false) {
    console.log("Good password.");
    var includesUsername = false;
} else {
    console.log("You cant have your username inside your password.");
    var includesUsername = true;
}
if (username.length < 20) {
    var acceptableUserLength = true;
    console.log("your user is acceptable length");
} else {
    var acceptableUserLength = false;
    console.log("your user must be under 20 characters");
}
if (username){
    var username = username.trim();
}
if (password){
    var password = password.trim();
}


