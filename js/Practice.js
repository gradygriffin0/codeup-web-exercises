"use strict";

// function lessThanOrEqualToZero(number){
//     if (number <= 0){
//         return true;
//     } else {
//         return false;
//     }
// }
//
// console.log(lessThanOrEqualToZero(-420));;
//
// function minMax(arr){
//     let newArr = [];
//     newArr.unshift(Math.max.apply(null, arr));
//     newArr.unshift(Math.min.apply(null, arr));
//     return newArr;
//
// }
//
// console.log(minMax([5,4,3,2,1]));
//
// console.log(Math.min([5,4,3,2,1]))

// function trim(input){
//     if (typeof input === "string")
//         return input.trim();
//     else {
//         return "Error";
//     }
//
// }
//
// console.log(trim(3));
// console.log(trim(" asd asdf "));
// console.log(trim("             a              b             "))

function cube(num){
    return Math.pow(num,3);
}

console.log(cube(3));

function cubeRoot(num){
    return Math.pow(num, (1/3));
}

console.log(cubeRoot(27));
console.log(cube(6));
console.log(cubeRoot(cube(6)));