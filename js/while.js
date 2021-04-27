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
    // var allCones = Math.floor(Math.random() * 50) + 50;
    // console.log(`I have ${allCones} cones`);
    // var totalSold = 0;
    // const coneMath = function(cones) {
    //     do {
    //
    //         var random = (Math.floor(Math.random() * 5) + 1);
    //         console.log("------NEW CUSTOMER------");
    //         console.log(`The customer wants: ${random} cones.`);
    //         totalSold += random;
    //         console.log("------------------------");
    //         if (random > cones) {
    //             console.log(`Cannot sell you ${random} because I only have ${cones}`)
    //             continue;
    //         }
    //         console.log(`${random} cones sold, I have ${cones - random} cones remaining`);
    //         console.log(`I have sold ${totalSold} total.`);
    //         cones -= random;
    //         console.log(cones);
    //
    //
    //     } while (cones > 0);
    //
    //     console.log("!!! I sold all my cones !!!");
    // }
    // coneMath(allCones);

// function onlyOddNumbers(input){
//     let odd = [];
//     let min = Math.min.apply(null,input);
//     for (let i = 0; i < input.length; i++){
//         console.log(i);
//         if(Math.abs(input[i]) % 2 === 1 ){
//             odd.push(input[i]);
//         }
//     }
//     console.log(odd);
// }
//
// console.log([1, 2, 3]);
// onlyOddNumbers([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]);
function onlyPositiveNumbers(input){
    var pos = [];
    for (let i = 0; i < input.length; i++){
        if (input[i] > 0){
            pos.push(input[i]);
        }
    }
    return pos;
}

console.log(onlyPositiveNumbers([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]));