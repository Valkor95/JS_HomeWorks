'use strict';

//Task 1
const arr1 = ['a', 'b', 'c', 'd'];
const res1 = `${arr1.slice(0, 2).join('+')}, ${arr1.slice(2).join('+')}`

console.log(res1);

//Task 2
const arr2 = [2, 5, 3, 9];
const res2 = `${(arr2[0]*arr2[1])+(arr2[2]*arr2[3])}`

console.log(res2);

//Task 3
const arr3 =  [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

console.log(arr3[1][0]);

//Task 4
const obj4 =  {
    js:['jQuery', 'Angular'],
    php: 'hello',
    css: 'world'
}

console.log(obj4.js[0]);

//Task 5
const arr5 =  [];

for (let i = 1; i <= 10; i++){
    arr5.push('x'.repeat(i));
}

console.log(arr5)

//Task 6
const arr6 =  [];

for (let i = 1; i <= 9; i++){
    arr6.push(String(i).repeat(i));
}

console.log(arr6)

//Task 7
const arrayFill = function (a, b){
    const arr = [];
    for (let i = 0; i < b; i++){
        arr.push(a)
    }
    return arr;
}

console.log(arrayFill('M', 4))

//Task 8
const func8 = function (arr){
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
        count++;
        if (sum > 10){
            return count
        }
    }
    if (sum <= 10){
        return 'Cумма меньше или равно 10'
    }
}

console.log(func8([6, 5, 2, 4, 5]));
console.log(func8([6, 1]));

// Task 9
const reverseFunc = function (arr){
    const reverseArr = [];
    for (let i = arr.length - 1; i >= 0; i--){
        reverseArr.push(arr[i])
    }
    return reverseArr;
}

const arr9 = [4, 6, 4, 2, 1, 4, 6];

console.log(reverseFunc([3, 5, 7, 2, 6, 8]));
console.log(reverseFunc(arr9));

// Task 10
const funcSum10 = function (arr){
    let sum = 0;
    for (let a = 0; a < arr.length; a++){
        for (let b = 0; b < arr[a].length; b++){
            sum += arr[a][b];
        }
    }
    return sum
}

const arr10 =  [[1, 2, 3], [4, 5], [6]];

console.log(funcSum10(arr10));
console.log(funcSum10([2, 5, [7, 8], 3, [6, 8]]));

// Task 11
const funcSum11 = function (arr){
    let sum = 0;
    for (let a = 0; a < arr.length; a++){
        for (let b = 0; b < arr[a].length; b++){
            for (let c = 0; c < arr[a][b].length; c++){
                sum += arr[a][b][c];
            }
        }
    }
    return sum;
}

const array11 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

console.log(funcSum11(array11));