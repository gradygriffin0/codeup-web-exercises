(function(){
    "use strict";
    // Most basic if else statement.
        // var hasCar = true
        //
        //     if(hasCar){
        //         console.log("Let's vroooom");
        //     } else {
        //         console.log("We need uber");
        //     }


//         function canGetRideShare() {
//             alert("I heard you need to get somewhere!");
//             alert("Please answer these questions:");
//             var fundsCheck = prompt("How much money do you have for a rideshare?");
//             var driverCheck = confirm("Are there drivers nearby?");
//             var fundsGood = parseInt(fundsCheck) >= 20;
//             if (fundsGood && driverCheck) {
//                 alert("Congrats, you can get a rideshare!");
//                 console.log("You can get a rideshare");
//                 return true;
//             } else {
//                 alert("You cannot get rideshare.");
//                 console.log("You cannot get rideshare.");
//                 return false;
//
//             }
//         }
//
//
//
// function getToDestination(age, isInsured, hasCar, canGetRideShare) {
//     var isLicensed = age >= 16;
//     var isLegalDriver = isLicensed && isInsured;
//
//
//     if (isLegalDriver && hasCar) {
//         console.log("Let's vroooom");
//     } else if ((!isLegalDriver || hasCar) && canGetRideShare) {
//
//         console.log("We need uber");
//         alert("We need uber")
//     } else {
//         console.log("Get on your bike");
//     }
//
// }
//
// getToDestination(23,false,true, canGetRideShare());
            //         function canGetRideShare() {
            //
            //             var fundsCheck = prompt("How much money do you have for a rideshare?");
            //             var driverCheck = confirm("Are there drivers nearby?");
            //             var fundsGood = parseInt(fundsCheck) >= 25;
            //             var milesCheck = prompt("How many miles do you need to go?");
            //             var milesFar = parseInt(milesCheck) >= 5;
            //             if (milesFar){
            //                 let fundsGood = parseInt(fundsCheck) >= 40;
            //             }
            //             if (fundsGood && driverCheck) {
            //                 alert("Congrats, you can get a rideshare!");
            //                 console.log("You can get a rideshare");
            //                 return true;
            //             } else {
            //                 alert("You cannot get a rideshare.");
            //                 console.log("You cannot get rideshare.");
            //                 return false;
            //
            //             }
            //         }
            //         function getToDestination() {
            //             alert("I heard you need to get somewhere!");
            //             alert("Please answer these questions:");
            //             var ageCheck = prompt("How old are you?");
            //             var isLicensed = parseInt(ageCheck) >= 16;
            //             var isInsured = confirm("Are you insured?");
            //             var hasCar = confirm("Do you have a car?");
            //             var isLegalDriver = isLicensed && isInsured;
            //
            //
            //             if (isLegalDriver && hasCar) {
            //                 console.log("option 1");
            //                 alert("You can drive yourself!");
            //             }
            //             else if ((!isLegalDriver || !hasCar)) {
            //                 alert("Uh Oh. You cannot drive yourself, lets see if you can get a rideshare:");
            //                 canGetRideShare();
            //                     if (canGetRideShare) {
            //                         console.log("option 2");
            //                         alert("You will use rideshare to get to your destination");
            //                     }
            //             }
            //             else {
            //                 alert("Uh Oh. You cant drive yourself or uber. Good Luck!");
            //                 console.log("option 3");
            //             }
            //
            //         }
            //
            //
            //
            //
            //
            //
            //
            //         getToDestination();
            //
            //
            //
            //
            //

        // TERNARY

                // function showFatType(){
                //     var fatType = "butter";
                //
                //     var isButter = fatType.toLowerCase() === "butter";
                //
                //     var loggingStatement;
                //
                //     // if (isButter){
                //     //     loggingStatement = "mo butta mo betta";
                //     // } else {
                //     //     loggingStatement = "I can't believe it's not butta";
                //     // }
                //     // console.log(loggingStatement);
                //   return isButter ? "mo butta mo betta" : "I can't believe it's not butta";
                // }
                //
                // console.log(showFatType())

        // Switch Statements
                    // function getHeartRangeValues() {
                    //     var age = 26;
                    //     var heartRange;
                    //     switch (age) {
                    //
                    //         case age >= 20 && age < 30:
                    //             heartRange = "100 - 170";
                    //             break;
                    //         case age >= 30 && age < 35:
                    //             heartRange = "95 - 162";
                    //             break;
                    //             // without the break, you have two cases. the two cases can be assigned
                    //             // the same value if there is no break
                    //         default:
                    //            heartRange = "Heart rate cannot be determined";
                    //     }
                    //         return heartRange;
                    // }
                    //         function getHeartRateRange(){
                    //             let age = 32;
                    //             let heartRange;
                    //             switch (age){
                    //                 case 20:
                    //                 case 21:
                    //                 case 22:
                    //                 case 23:
                    //                 case 24:
                    //                 case 25:
                    //                 case 26:
                    //                 case 27:
                    //                 case 28:
                    //                 case 29:
                    //                     heartRange = "100-170";
                    //                     console.log("This condition was met");
                    //                     break;
                    //                 case 30:
                    //                 case 31:
                    //                 case 32:
                    //                 case 33:
                    //                 case 34:
                    //
                    //                     heartRange = "95-162";
                    //                     break;
                    //                 case 35:
                    //                 case 36:
                    //                 case 37:
                    //                 case 38:
                    //                 case 39:
                    //                     heartRange = "93-157";
                    //                     break;
                    //                 case 40:
                    //                 case 41:
                    //                 case 42:
                    //                 case 43:
                    //                 case 44:
                    //                     heartRange = "90-153";
                    //                     break;
                    //                 case 45:
                    //                 case 46:
                    //                 case 47:
                    //                 case 48:
                    //                 case 49:
                    //                     heartRange = "88-149";
                    //                     break;
                    //                 case 50:
                    //                 case 51:
                    //                 case 52:
                    //                 case 53:
                    //                 case 54:
                    //                     heartRange = "83-140";
                    //                     break;
                    //                 case 55:
                    //                 case 56:
                    //                 case 57:
                    //                 case 58:
                    //                 case 59:
                    //                     heartRange = "80-136";
                    //                     break;
                    //                 case 60:
                    //                 case 61:
                    //                 case 62:
                    //                 case 63:
                    //                 case 64:
                    //                     heartRange = "78-132";
                    //                     break;
                    //                 case 65:
                    //                 case 66:
                    //                 case 67:
                    //                 case 68:
                    //                 case 69:
                    //                     heartRange = "75-128";
                    //                     break;
                    //                 default:
                    //                     heartRange = "Age outside of range. Cannot determine ideal heart rate";
                    //                     break;
                    //             }
                    //             return heartRange;
                    //         }
                    //         function showHeartRateRange(heartRange){
                    //             console.log("Your ideal heart rate range (in bpm) is: " + heartRange);
                    //         }
                    //         showHeartRateRange(getHeartRateRange());
                    //
        function isCorrectFruit(fruit){
            switch(fruit){
                case "apple":
                    console.log("This is an apple.");
                    break;
                case "orange":
                    console.log("This is an orange.");
                    break;
                case "banana":
                    console.log("This is a banana.");
                    break;
                default:
                    console.log("Probs not a fruit.");
            }
            
                // if (fruit === "apple")
                // if (fruit === "orange")
                // if (fruit === "banana")
                //     else
                //This is the other way to write this and it takes a little bit longer, and it is more cumbersome.
        }
        isCorrectFruit("Potato");
}
)();