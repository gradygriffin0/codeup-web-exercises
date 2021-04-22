"use strict";
    // var number = 1
    // while(number < 65536) {
    //     number = number*2;
    //     console.log(number);
    //
    // }


var randomCones = Math.floor(Math.random() * 50) + 50;
// console.log(randomCones);
var conePer = Math.floor(Math.random() * 5) + 1;
// do{


    var remainCone = ((randomCones % conePer));

// }
console.log("I have " + randomCones + " cones" );
console.log("Each person is buying " + conePer);
var conesSold = randomCones
do {
    conesSold = (conesSold - conePer);
    console.log((randomCones - conesSold) + " Cones sold");
}while(conesSold > remainCone);
if (remainCone !== 0) {
    console.log("Cannot sell you " + conePer + " cones because I only have " + remainCone + " cones remaining.");
} else {
    console.log("Yay I sold all the cones.");
}