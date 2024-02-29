'use strict';

const value1 = parseInt(prompt('Add value #1'));
const value2 = parseInt(prompt('Add value #2'));
if (isNaN(value1) || isNaN(value2)) {
    alert('Error! Enter only numbers!')
} else {
    const question = prompt(`What do you want to do? Write it:\n
     Add; Subtract; Multiply; Divide`);
    if (question === 'Add'|| question === 'add'){
        const sum1 = value1 + value2;
        alert(`An example for compilation: "Result: ${value1} + ${value2} = ${sum1}"`)
        console.log(`An example for compilation: "Result: ${value1} + ${value2} = ${sum1}"`)
    } else if (question === 'Subtract' || question === 'subtract') {
        const sum2 = value1 - value2;
        alert(`An example for compilation: "Result: ${value1} - ${value2} = ${sum2}"`)
        console.log(`An example for compilation: "Result: ${value1} - ${value2} = ${sum2}"`)
    } else if (question === 'Multiply' || question === 'multiply') {
        const sum3 = value1 * value2;
        alert(`An example for compilation: "Result: ${value1} * ${value2} = ${sum3}"`)
        console.log(`An example for compilation: "Result: ${value1} * ${value2} = ${sum3}"`)
    } else if (question === 'Divide' || question ===  'divide') {
        const sum4 = value1 / value2;
        alert(`An example for compilation: "Result: ${value1} / ${value2} = ${sum4}"`)
        console.log(`An example for compilation: "Result: ${value1} / ${value2} = ${sum4}"`)
    } else {
        alert('Error! Enter only one of 4 operations above!')
    }

}