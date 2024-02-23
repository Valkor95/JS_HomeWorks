'use strict';

let cars = ["Honda", "Toyota",  "Seat", "Opel", "VW", "BMW", "Audi"]
let array = [1, 4, 5, 5, 7, 9, 1, 1, 2, 2, 7, 7, 9];
let array2 = [1, 9, 3, 6, 5, 4, 2];

let newNums = [...new Set(array)].filter(item => array2.includes(item))
console.log(newNums)

let randNum = array[(Math.floor(Math.random()*(array.length)))];
console.log(randNum)

// let sumArray = array.reduce((a, b) => a + b);
// console.log(sumArray)
//
// let arr1 = [false, "red", 0, 2, "", null, true, NaN, undefined];
// let newArr = arr1.filter(Boolean);
//
// console.log(newArr)
//
// let obj = {...array};
// console.log(obj)
//
// // let uni_nums = [...new Set(array)];
// let uni_nums = Array.from(new Set(array));
// console.log(uni_nums)
//
// cars.splice(0,2, "Nissan", "Tesla")
// console.log(cars)
//
// let newCars = [
//     {car: "Honda", color: "Red"},
//     {car: "Toyota", color: "Green"},
//     {car: "Seat", color: "Blue"},
//     {car: "BMW", color: "Red"},
// ];
//
// let carName = Array.from(newCars, ({color}) => color)
// console.log(carName)
//
// // array = [];
// array.splice(0, array.length);
// console.log(array)