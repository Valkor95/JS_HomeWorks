"use strict";

//Task 1 - indexOf;

const arr = ['Alex', 'Vlad', 'Helen', 'Yuriy'];

console.log(arr.indexOf('Vlad', 3))
console.log(arr.indexOf('Vlad', -4))
const indOf = function (arr, item, from = 0) {
    const start = from >= 0 ? from : arr.length + from;

    for (let i = start; i < arr.length; i++) {

        if (arr[i] === item) {
            return i;
        }
    }
    return -1;
}

console.log(indOf(arr, 'Vlad', 3));
console.log(indOf(arr, 'Vlad', -3));



// Task 2 - lastIndexOf;

const arr2 = ['Alex', 'Vlad', 'Helen', 'Yuriy', 'Helen', 'Yuriy', 'Vlad', 'Alex'];

console.log(arr2.lastIndexOf('Vlad'))
const lastInOf = function (arr, findItem, from = arr.length){
    const start = from <= 0 ? 0 : from;

    for (let i = start; i >= 0; i--){
        if (arr[i] === findItem) {
            return i;
        }
    }
    return -1;
}

console.log(lastInOf(arr2, 'Vlad', 5))

// Task 3 - find;
const arr3 = [2, 3, 4, 6, 9, 'Billy', 'B', 'Bi'];

console.log(arr3.find(function (item){
    return typeof item === "string"
}))

const funcFind = function (arr, callback){
    for (let i = 0; i < arr.length; i++){
       if (callback(arr[i], i, arr)){
           return arr[i]
       }
    }
    return undefined
}

console.log(funcFind(arr3, function (item){
    return item === 43;
}))

console.log(funcFind(arr3, function (item){
    return typeof item === 'string';
}))

//Task 4 - findIndex;
const arr4 = [4, 4, 6, 7, 8, 'Hi', 'Win'];

console.log(arr4.findIndex(value => value % 2 === 1));

const funcFI = function (arr, callback){
    for (let i = 0; i < arr.length; i++){
        if (callback(arr[i], i, arr)){
            return i;
        }
    }
    return -1;
}

console.log(funcFI(arr4, (value => value === 8)))
console.log(funcFI(arr4, (value => value === 0)))

//Task 5 - includes
const arr5 = [2, 33, 44, 55, 66];

console.log(arr5.includes(33))

const funcIncludes = function (arr, findItem, from = 0){
    const start = from >= 0 ? from : arr.length + from;

    for (let i = start; i < arr.length; i++){
        if (arr[i] === findItem){
            return true
        }
    }
    return false
}

console.log(funcIncludes(arr5, 44, 2))

//Task 6 - every;
const arr6 = [5, 6, 7, 8, 9, 'W'];

console.log(arr6.every(i => i > 10))

const funcEvery = function (arr, callback){
    for (let i = 0; i < arr.length; i++){
        if (!callback(arr[i], i, arr)){
            return false
        }
    }
    return true
}

console.log(funcEvery(arr6, item => typeof item !== null));

//Task 7 - some;
const arr7 = [5, 7, 7, 10, 9, 'W'];

console.log(arr7.some(i => i % 2 === 0))

const funcSome = function (arr, callback){
    for (let i = 0; i < arr.length; i++){
        if (callback(arr[i], i, arr)){
            return true
        }
    }
    return false
}

console.log(funcSome(arr7, item => typeof item === 'number'))

// Task 8 - reduce;
const arr8 = [
    {"word": "N"},
    {"word": "i"},
    {"word": "g"},
    {"word": "g"},
    {"word": "A"}
];

console.log(arr8.reduce(function (accum, item){
    accum += item.word;
    return accum;
}, []))

const funcReduce = function (arr, callback, initialValue){
    let accum = (initialValue !== undefined) ? initialValue : arr[0];
    for (let i = 0; i < arr.length; i++){
        accum = callback(accum, arr[i], i, arr)
    }
    return accum
}

console.log(funcReduce(arr8, function (accum, item){
    accum += item.word;
    return accum;
}, []))