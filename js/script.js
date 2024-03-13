'use strict';

const value = 20;
let sumOdd = 0;

outerLoop:
for(let  i = 1; i <= value; i++){
    if (i % 2 === 0){
        continue outerLoop;
    }
    sumOdd += i;

}

alert(`Число ${value}\nСумма непарных чисел ${sumOdd}`)