'use strict';

// Task 1
// let value = '';
// for (let i = 20; i <= 30; i += 0.5){
//     value += i;
//     if (i < 30){
//         value += ', '
//     }
// }
//
// alert(value);
// console.log(value)

//Task 2
// const exchange = 27;
// let sum = 0;
// for (let d = 10; d <= 100; d += 10){
//     sum += exchange * d;
//     if (d < 100){
//         sum += ' гривен, '
//     }
// }
//
// alert(sum);
// console.log(sum)

//Task 3
// const N = 1124;
// let numbers = '';
// let squareResult = '';
//
// for(let i = 1; i <= 100; i++){
//     let square = i * i;
//     if (square <= N){
//         numbers += i + ', ';
//         squareResult += square + ', ';
//     }
// }
// alert(`Целые числа: ${numbers}\nКвадрат целых чисел: ${squareResult}`);
// console.log(`Целые числа: ${numbers}\nКвадрат целых чисел: ${squareResult}`)

//Task 4
// const value = +prompt('Введите число');
// let result = true;
//
// if ( value <= 1){
//     result = false;
// } else {
//     for (let i = 2; i <= Math.sqrt(value); i++){
//         if (value % i === 0){
//             result = false;
//             break;
//         }
//     }
// }
//
// if (result){
//        alert(` ${value} - Это простое число!`);
//     } else {
//        alert(` ${value} - Это не простое число!`);
//     }

//Task 5
const value = +prompt('Введите число');
let result = false;

for (let i = 0; Math.pow(3, i) <= value; i++){
    if (Math.pow(3, i) === value){
        result = true;
    }
}

if (result){
    alert(` ${value} - можно получить путем возведения 3 в некоторую степень`);
} else {
    alert(` ${value} - нельзя получить путем возведения 3 в некоторую степень`);
}

