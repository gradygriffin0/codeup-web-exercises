"use strict";


function getKindOfDog(){
    return prompt("What kind of dog is it?");
}


function getContactInfo(){
    return prompt("Contact info if I find your dog");
}


function getDogName(){
    return prompt("What is your dog's name?");
}


function playTheGreatEscape() {

    // get all info
    var dogKind = getKindOfDog();
    var dogName = getDogName();
    var contactInfo = getContactInfo();

    alert("Time to search for your dog.");
    alert("I see a dog!");

    var dogFound = getKindOfDog();
    var isSameDogKind = dogKind === dogFound;
    var respondName = confirm("Does Dog Respond to the name: " + dogName);
    var ismyDog = isSameDogKind && respondName;

    if(ismyDog) {
        alert("Puts leash on " + dogName);
        alert("Found your dog, I'll contact you on " + contactInfo);
        alert(dogName + " stinks!");
    }   else {
        alert("I couldn't find your dog.");
    }

}
playTheGreatEscape();


// Immediately-invoked function expression
// This function will immediately run, and it is only contained inside itself.
// good practice is to start a script with IIFE use strict function.
// (function() {
//
//     "use strict";
//
// })();