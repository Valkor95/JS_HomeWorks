'use strict';

// Task 1
// let string = '';
// for  (let i = 10; i <= 20; i++){
//     string += i;
//     if (i < 20){
//         string += ', '
//     }
// }
//
// alert(string);
// console.log(string);

//Task 2
// let value = '';
// for (let i = 10; i <=20; i++){
//     value += i * i;
//     if (i < 20){
//         value += ', '
//     }
// }
//
// alert(value);
// console.log(value);

//Task 3
// let value = '';
// for (let i = 1; i <= 10; i++){
//     value += i * 7;
//     if (i < 10){
//         value += ', '
//     }
// }
// alert(value);
// console.log(value);

//Task 4
// let sum = 0;
// for (let i = 0; i <= 15; i++) {
//     sum += i;
// }
// alert(sum);
// console.log(sum);

// Task 5
// let product = 1;
// for (let i = 15; i <= 35; i++){
//     product *= i;
// }
// alert(product);
// console.log(product);

//Task 6
// let average = 0;
// for (let i = 1; i <= 500; i++){
//     average += i;
//     if (i === 500){
//         average /= i;
//     }
// }
// alert(average);
// console.log(average);

//Task 7
// let sumEven = 0;
// for (let i = 30; i <= 80; i++){
//     if (i % 2 === 0){
//         sumEven += i;
//     };
// }
// alert(sumEven)
// console.log(sumEven)

//Task 8
// let divThree = '';
// for (let i = 100; i <= 200; i++){
//     if (i % 3 === 0){
//        if (divThree !== ''){
//            divThree += ', '
//        }
//        divThree += i;
//     }
//
// }
// alert(divThree);
// console.log(divThree);

//Task 9
// const number = prompt("Введите натуральное число");
// let div = '';
// for (let i = 1; i <= number; i++){
//     if (number % i === 0){
//         if (div !== ''){
//             div += ', '
//         }
//         div += i;
//     }
// }
// alert(div);
// console.log(div);

//Task 10
// const number = prompt("Введите натуральное число");
// let div = '';
// let count = 0;
// for (let i = 1; i <= number; i++){
//     if (number % i === 0){
//         if (div !== ''){
//             div += ', '
//         }
//         div += i
//
//         if (i % 2 === 0){
//             count++;
//         }
//     }
// }
// alert(`Делители: ${div} \nКоличество парных делителей: ${count}`);
// console.log(`Делители: ${div} \nКоличество парных делителей: ${count}`);

//Task 11
// const number = prompt("Введите натуральное число");
// let div = '';
// let count = 0;
// let sumCount = 0;
// for (let i = 1; i <= number; i++){
//     if (number % i === 0){
//         if (div !== ''){
//             div += ', '
//         }
//         div += i
//
//         if (i % 2 === 0){
//             sumCount += i;
//             count++;
//         }
//     }
// }
// alert(`Делители: ${div} \nКоличество парных делителей: ${count} \nСумма парных делителей ${sumCount}`);
// console.log(`Делители: ${div} \nКоличество парных делителей: ${count} \nСумма парных делителей ${sumCount}`);

// Task 12
let value1 = '';
let value2 = '';
let value3 = '';
let value4 = '';
let value5 = '';
let value6 = '';
let value7 = '';
let value8 = '';
let value9 = '';
let value10 = '';

for (let i = 1; i <= 10; i++){
    value1 += i;
    if (i < 10){
        value1 += ', '
    }
    value2 += i * 2;
    if (i < 10){
        value2 += ', '
    }
    value3 += i * 3;
    if (i < 10){
        value3 += ', '
    }
    value4 += i * 4;
    if (i < 10){
        value4 += ', '
    }
    value5 += i * 5;
    if (i < 10){
        value5 += ', '
    }
    value6 += i * 6;
    if (i < 10){
        value6 += ', '
    }
    value7 += i * 7;
    if (i < 10){
        value7 += ', '
    }
    value8 += i * 8;
    if (i < 10){
        value8 += ', '
    }
    value9 += i * 9;
    if (i < 10){
        value9 += ', '
    }
    value10 += i * 10;
    if (i < 10){
        value10 += ', '
    }
}

alert(`1: ${value1} \n 2: ${value2} \n 3: ${value3}\n 
4: ${value4} \n 5: ${value5} \n 6: ${value6}
\n 7: ${value7} \n 8: ${value8} \n 9: ${value9}
\n 10: ${value10}`);

console.log(`1: ${value1} \n 2: ${value2} \n 3: ${value3}
\n 4: ${value4} \n 5: ${value5} \n 6: ${value6}
\n 7: ${value7} \n 8: ${value8} \n 9: ${value9}
\n 10: ${value10}`);
