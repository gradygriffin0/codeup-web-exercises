"use strict";

/* ########################################################################## */
/*

/!**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 *!/
function analyzeColor(color) {
    if (color.toLowerCase() === "blue") {
        return "Blue is the color of the sky";
    }
    else if (color.toLowerCase() === "red") {
        return "Strawberries are red";
    }
    else if (color.toLowerCase() === "cyan") {
        return "I don't know anything about cyan.";
    }
    else {
        return "NO";
    }
}

console.log(analyzeColor('blue'));
console.log(analyzeColor("RED"));
console.log(analyzeColor("cYaN"));
console.log(analyzeColor("Hooplah"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/!**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 *!/
console.log(analyzeColor(randomColor));

/!**
 * TODO:
 * Refactor your above function to use a switch-case statement
 *!/
function switchAnalyzeColor(color){
    switch(color.toLowerCase()) {
        case "red":
            return ("Strawberries are red.");
            break;
        case "blue":
            return ("Blue is the color of the sky.");
            break;
        case "cyan":
            return ("I don't know anything about Cyan.");
            break;
        default:
            return ("NO");
    }
}

console.log("Switch answer: " + switchAnalyzeColor(randomColor));
/!**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 *!/
      var userColor = prompt("What is your favorite color?");
      var returnAlert = alert(analyzeColor(userColor));

/!* ########################################################################## *!/

/!**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 *!/
var randomBill = Math.floor(Math.random()*1001);
var randomLuckyNumber = Math.floor(Math.random()*6);
       function calculateTotal(luckyNumber, totalPrice){
           console.log("Your lucky number is: " + luckyNumber);
           console.log("Your bill today is: " + totalPrice + "$");
           switch(luckyNumber){
               case 0:
                   return "Your price has not been discounted: " + totalPrice + "$";
                   break;
               case 1:
                   return "Your price has been discounted 10%, your new price is: " + (totalPrice * .9) + "$";
                   break;
               case 2:
                   return "Your price has been discounted 25%, your new price is: " + (totalPrice * .75) + "$";
                   break;
               case 3:
                   return "Your price has been discounted 35%, your new price is: " + (totalprice * .65) + "$";
                   break;
               case 4:
                   return "Your price has been discounted 50%, your new price is: " + (totalPrice * .5) + "$";
                   break;
               case 5:
                   return "Congrats your bill has been completely paid for!";
                   break;
               default:
                   return "Uhhhh, we don't have that lucky number, try again.";

           }
       }

console.log(calculateTotal(randomLuckyNumber, randomBill));

/!**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 *!/
// Generate a random number between 0 and 6
 var luckyNumber = Math.floor(Math.random() * 6);
 var getuserBill = prompt("What was your bill today?");
 alert("Today your lucky number is: " + luckyNumber);
 var userNewBill = calculateTotal(luckyNumber, getuserBill);
 alert(userNewBill);
*/

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
    function numberChecker(){
        var number = prompt("What is your number?");
    function numberTest() {
        var playCheck = confirm("Want to play the number test?");
        if (playCheck) {
            var number = (prompt("Enter a number."));
                }
            }
                if (number % 2 === 0) {
                    alert("Your number is even.");
                } else {
                    alert("Your number is odd.");
                }
                alert("Your number plus 100 is: " + (number + 100));
                if (number > 0) {
                    alert("Your number is positive.");
                } else if (number < 0) {
                    alert("Your number is negative.");
                } else {
                    alert("Your number is not positive or negative because it is 0.");
                }
        }
    }

console.log(numberTest());