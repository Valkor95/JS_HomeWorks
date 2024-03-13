'use strict';

// Task 1
let string = '';
for  (let i = 10; i <= 20; i++){
    string += i;
    if (i < 20){
        string += ', '
    }
}

alert(string);
console.log(string);

//Task 2
let value2 = '';
for (let i = 10; i <=20; i++){
    value2 += i * i;
    if (i < 20){
        value2 += ', '
    }
}

alert(value2);
console.log(value2);

//Task 3
let value3 = '';
for (let i = 1; i <= 10; i++){
    value3 += i * 7;
    if (i < 10){
        value3 += ', '
    }
}
alert(value3);
console.log(value3);

//Task 4
let sum = 0;
for (let i = 0; i <= 15; i++) {
    sum += i;
}
alert(sum);
console.log(sum);

// Task 5
let product = 1;
for (let i = 15; i <= 35; i++){
    product *= i;
}
alert(product);
console.log(product);

//Task 6
let average = 0;
for (let i = 1; i <= 500; i++){
    average += i;
    if (i === 500){
        average /= i;
    }
}
alert(average);
console.log(average);

//Task 7
let sumEven = 0;
for (let i = 30; i <= 80; i++){
    if (i % 2 === 0){
        sumEven += i;
    }
}
alert(sumEven)
console.log(sumEven)

//Task 8
let divThree = '';
for (let i = 100; i <= 200; i++){
    if (i % 3 === 0){
       if (divThree !== ''){
           divThree += ', '
       }
       divThree += i;
    }

}
alert(divThree);
console.log(divThree);

//Task 9
const number = prompt("Введите натуральное число");
let div = '';
for (let i = 1; i <= number; i++){
    if (number % i === 0){
        if (div !== ''){
            div += ', '
        }
        div += i;
    }
}
alert(div);
console.log(div);

//Task 10
const number2 = prompt("Введите натуральное число");
let div2 = '';
let count = 0;
for (let i = 1; i <= number2; i++){
    if (number2 % i === 0){
        if (div2 !== ''){
            div2 += ', '
        }
        div2 += i

        if (i % 2 === 0){
            count++;
        }
    }
}
alert(`Делители: ${div2} \nКоличество парных делителей: ${count}`);
console.log(`Делители: ${div2} \nКоличество парных делителей: ${count}`);

//Task 11
const number3 = prompt("Введите натуральное число");
let div3 = '';
let count2 = 0;
let sumCount = 0;
for (let i = 1; i <= number3; i++){
    if (number3 % i === 0){
        if (div3 !== ''){
            div3 += ', '
        }
        div3 += i

        if (i % 2 === 0){
            sumCount += i;
            count2++;
        }
    }
}
alert(`Делители: ${div3} \nКоличество парных делителей: ${count2} \nСумма парных делителей ${sumCount}`);
console.log(`Делители: ${div3} \nКоличество парных делителей: ${count2} \nСумма парных делителей ${sumCount}`);

// Task 12
let table = '';
for (let a = 1; a <= 10; a++){
    for (let b = 1; b <= 10; b++){
        table += `${a} * ${b} = ${a*b}\n`
    }
}
alert (table);
console.log(table);