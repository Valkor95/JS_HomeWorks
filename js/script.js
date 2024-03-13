'use strict';


// Task 1
// const arr = [1, 2, 3, 4, 5];
// let sum = 0;
//
// for (let i = 0; i <= arr.length; i++){
//     if (Number(arr[i])) {
//         sum += arr[i];
//     }
// }
//
// alert(sum);
// console.log(sum)

// Task 2
const arr = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i <= arr.length; i++){
    if (Number(arr[i])) {
        sum += Math.pow(arr[i], 2);
    }
}

alert(sum);
console.log(sum)