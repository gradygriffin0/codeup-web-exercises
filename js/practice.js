(function () {
    "use strict";


})();


function simpleArraySum(input) {
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        sum += input[i];
    }
    return sum;
}

function compareTriplets(a, b) {
    let compareAB = [0, 0];
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            ++compareAB[0]
        } else if (a[i] < b[i]) {
            ++compareAB[1]
        }
    }
    return compareAB;
}

console.log(compareTriplets([17, 28, 30], [99, 16, 8]));