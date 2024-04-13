'use strict'; // eslint-disable-line
// Task 1
const factorial = (a) => (a <= 1 ? 1 : a * factorial(a - 1));

console.log(factorial(4));

// Task 2
const pow = (num, degree) => (degree <= 1 ? num : num * pow(num, degree - 1));

console.log(pow(2, 5));

// Task 3
const sum = (a, b) => (b === 0 ? a : sum(a + 1, b - 1));
console.log(sum(100, 3));
