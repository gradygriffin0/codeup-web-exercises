// "use strict";
//
// // function lessThanOrEqualToZero(number){
// //     if (number <= 0){
// //         return true;
// //     } else {
// //         return false;
// //     }
// // }
// //
// // console.log(lessThanOrEqualToZero(-420));;
// //
// // function minMax(arr){
// //     let newArr = [];
// //     newArr.unshift(Math.max.apply(null, arr));
// //     newArr.unshift(Math.min.apply(null, arr));
// //     return newArr;
// //
// // }
// //
// // console.log(minMax([5,4,3,2,1]));
// //
// // console.log(Math.min([5,4,3,2,1]))
//
// // function trim(input){
// //     if (typeof input === "string")
// //         return input.trim();
// //     else {
// //         return "Error";
// //     }
// //
// // }
// //
// // console.log(trim(3));
// // console.log(trim(" asd asdf "));
// // console.log(trim("             a              b             "))
//
// //May 4
// // Write a function cube that cubes a number, write a function cubeRoot that takes the cube root of a number.
//
// // function cube(num){
// //     return Math.pow(num,3);
// // }
// //
// // console.log(cube(3));
// //
// // function cubeRoot(num){
// //     return Math.pow(num, (1/3));
// // }
// //
// // console.log(cubeRoot(27));
// // console.log(cube(6));
// // console.log(cubeRoot(cube(6)));
//
//
//
// //May 5
// // Write a function called last(input) that returns the last character of a string
//
// // function last(input){
// //     return input[input.length - 1];
// // }
// //
// // console.log(last("Hello, World"));
// // console.log(last("many characters but which one is last?"));
//
//
// //May 6
// //Write a remainder(number, divisor) function that returns the remainder left over when dividing number by the divisor
// //If either of the arguments are not a numeric string or number, return a string message indicating which argument is not a number/numeric string
//
// function remainder(num, divisor){
//     if (typeof num === "string" || typeof num === "number") {
//         if (typeof divisor === "string" || typeof divisor === "number"){
//             return (num % divisor);
//         } else {
//             return "Error Divisor NaN";
//         }
//     } else {
//         return "Error Number NaN";
//     }
//
// }
//
// console.log(remainder("101", 2));
// console.log(remainder("101010100", 2));
// console.log(remainder(2, ));
// console.log(remainder());

//generator function notation
// function* fibonacci() { // a generator function
//     let [prev, curr] = [0, 1];
//     while (true) {
//         [prev, curr] = [curr, prev + curr];
//         yield curr;
//     }
// }
//
// for (const n of fibonacci()) {
//     console.log(n);
//     // truncate the sequence at 1000
//     if (n >= 1000) {
//         break;
//     }
// }

let helloWorld = name => `Hello ${name}`;
console.log(helloWorld("grady"));;