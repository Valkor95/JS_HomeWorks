'use strict';

//Task 1

let x = 10, y = 7;
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