'use strict';

let age = prompt("Додайте скільки вам років");

let result = null;
if (age === null){
    result = 'Ви скасували запит!'
} else if (+age[age.length - 1] === 1){
    result = `Вам ${age} рік`;
} else if ((age >= 2 && age <= 4) || (age >= 22 && age <= 24)){
    result = `Вам ${age} роки`;
} else if ((age >= 5 && age <= 20) || age >= 25 ){
    result = `Вам ${age} років`;
} else if (isNaN(parseInt(age))){
    result = `Ви вели неправильне значення!`
}

alert(result)