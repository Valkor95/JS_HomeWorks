'use strict';

const request = prompt('What do you want to do? \n Example: add, sub, mult, div');
if (request === 'add') {
    const value = parseInt(prompt('Add value #1'));
    const value2 = parseInt(prompt('Add value #2'));
    const sum1 = value + value2;
    alert(sum1)
} else if (request === 'sub') {
    const value3 = parseInt(prompt('Add value #1'));
    const value4 = parseInt(prompt('Add value #2'));
    const sum2 = value3 - value4;
    alert(sum2)
} else if (request === 'mult') {
    const value5 = parseInt(prompt('Add value #1'));
    const value6 = parseInt(prompt('Add value #2'));
    const sum3 = value5 * value6;
    alert(sum3)
} else if (request === 'div') {
    const value7 = parseInt(prompt('Add value #1'));
    const value8 = parseInt(prompt('Add value #2'));
    const sum4 = value7 / value8;
    alert(sum4)
} else {
    alert('Error! Enter only: add, sub, mult, div!')
}