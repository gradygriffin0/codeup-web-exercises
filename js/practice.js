(function () {
    "use strict";


})();


// function simpleArraySum(input) {
//     let sum = 0;
//     for (let i = 0; i < input.length; i++) {
//         sum += input[i];
//     }
//     return sum;
// }
//
// function compareTriplets(a, b) {
//     let compareAB = [0, 0];
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] > b[i]) {
//             ++compareAB[0]
//         } else if (a[i] < b[i]) {
//             ++compareAB[1]
//         }
//     }
//     return compareAB;
// }
//
// console.log(compareTriplets([17, 28, 30], [99, 16, 8]));
//
//
// function aVeryBigSum(ar) {
//     let sum = 0;
//     for( let i = 0; i < ar.length; i++) {
//         sum += ar[i];
//     }
//     return (sum);
// }
//
// aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]);

// function minTime(files, numCores, limit) {
//     let testCase = [];
//     let sum = 0;
//     let limitCounter = 0;
//     for (let i = 0; i < files.length; i++) {
//         if (files[i] % numCores === 0) {
//             testCase.unshift(files[i]);
//         }
//
//     }
//     testCase.sort(function (a, b) {
//         return b - a;
//     });
//     files.sort(function(a, b) {
//         return b - a;
//     });
//
//     for (let j = 0; j < files.length; j++) {
//         if ((files[j] === testCase[limitCounter]) && (limitCounter < limit)) {
//
//             sum += (files[j] / numCores);
//
//             ++limitCounter;
//
//
//             continue;
//
//         } else {
//
//             sum += files[j];
//         }
//
//     }
//     return sum;
// }
//
// minTime([2, 4, 8, 16, 16], 4, 2);
//
// console.log(minTime([2, 4, 8, 16], 4, 1));
let test = [11, 2, 4, 4, 5, 6, 10, 8, -12];
function diagonalDifference(arr) {
    let n = (Math.pow(arr.length, 1/2));

    let topLeft = arr[0];
    let topRight = arr[n-1];
    if (arr.length % 2 === 0){
        var middle = arr[Math.floor(arr.length / 2)];
    } else {
        var middle = arr[Math.floor((arr.length / 2) - 1)];
    }
    let bottomLeft = arr[(n*2)];
    let bottomRight = arr[arr.length - 1];

    let sum1 = topLeft + middle + bottomRight;
    let sum2 = topRight + middle + bottomLeft;

    let difference = Math.abs((sum1 - sum2));
    console.log(difference);
    return difference;
}
diagonalDifference(test);
