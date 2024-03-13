'use strict';

//Task 1

const x = 10;
const y = 7;
const comparison = x > y ? 'х больше, чем y' : 'х не больше, чем у';

console.log(comparison);

//Task 2

const num = +prompt('Введите число!')
const length = String(Math.abs(num)).length ;
let lengthNum = null;
if (length === 1){
    lengthNum = 'однозначное'
} else if (length === 2){
    lengthNum = 'двухзначное'
} else if (length === 3){
    lengthNum = 'трёхзначное'
} else {
    lengthNum = 'многозначное'
}

const posNeg = num > 0 ? 'позитивное' : 'негатиное';

const answer = ` Число: ${num} \n
Количество цифр: ${length} \n
Какое число: ${lengthNum} \n
Положительное/отрицательное: ${posNeg}`
alert(answer)

// Task 3

const value1 = +prompt("Введите число №1");
const value2 = +prompt("Введите число №2");
const value3 = +prompt("Введите число №3");

let maxValue = null;

if (value1 > value2 && value1 > value3){
    maxValue = value1;
} else if (value2 > value1 && value2 > value3){
    maxValue = value2;
} else if (value3 > value1 && value3 > value2){
    maxValue = value3
} else {maxValue = 'отсутствует, все равны!'}

alert(`Из введенных чисел наибольшее - ${maxValue}`)

// Task 4

const valueTr1 = +prompt("Введите значение стороны 'a'");
const valueTr2 = +prompt("Введите значение стороны 'b'");
const valueTr3 = +prompt("Введите значение стороны 'c'");

if (valueTr1 +valueTr2 > valueTr3 && valueTr2 + valueTr3 > valueTr1 && valueTr3 + valueTr1 > valueTr2){
    alert(`Треугольник построен со сторонами: а - ${valueTr1}, b - ${valueTr2}, c - ${valueTr3}`);
    console.log("Треугольник правильный -", true)
} else {alert(`Неправильные значения для треугольника! Исправьте значение сторон!`); console.log("Треугольник неправильный -", false)}