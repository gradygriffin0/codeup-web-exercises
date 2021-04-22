"use strict";
    // var number = 1
    // while(number < 65536) {
    //     number = number*2;
    //     console.log(number);
    //
    // }



    // // do{
    //
    //
    //     var remainCone = ((randomCones % conePer));
    //
    // // }
    // console.log("I have " + randomCones + " cones" );
    // console.log("Each person is buying " + conePer);
    // var conesSold = randomCones
    // do {
    //     conesSold = (conesSold - conePer);
    //     console.log((randomCones - conesSold) + " Cones sold");
    // }while(conesSold > remainCone);
    // if (remainCone !== 0) {
    //     console.log("Cannot sell you " + conePer + " cones because I only have " + remainCone + " cones remaining.");
    // } else {
    //     console.log("Yay I sold all the cones.");
    // }
var allCones = Math.floor(Math.random() * 50) + 50;
console.log(allCones);
const coneMath = function(cones) {
    do {
        var random = (Math.floor(Math.random() * 5) + 1);
        console.log("------NEW CUSTOMER------");
        console.log(`The customer wants: ${random} cones.`);
        console.log("------------------------");
        if (random > cones) {
            console.log(`Cannot sell you ${random} because I only have ${cones}`)
            continue;
        }
        console.log(`${random} cones sold, I have ${cones - random} cones remaining`);
        cones -= random;
        console.log(cones);
    } while (cones > 0);

    console.log("!!! I sold all my cones !!!");
}
coneMath(allCones);