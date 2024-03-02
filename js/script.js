'use strict';


const request = prompt('What do you want to do? \n Example: add, sub, mult, div');
const value1 = parseInt(prompt('Add value #1'));
const value2 = parseInt(prompt('Add value #2'));
if (request === 'add') {
    const sum1 = value1 + value2;
    alert(sum1)
} else if (request === 'sub') {
    const sum2 = value1 - value2;
    alert(sum2)
} else if (request === 'mult') {
    const sum3 = value1 * value2;
    alert(sum3)
} else if (request === 'div') {
    const sum4 = value1 / value2;
    alert(sum4)
} else {
    alert('Error! Enter only: add, sub, mult, div!')
}