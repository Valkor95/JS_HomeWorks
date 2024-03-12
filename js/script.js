'use strict';

let age = prompt("Додайте скільки вам років");

let result = null;
if (age === null){
    result = 'Ви скасували запит!'
} else if (+age[age.length - 1] === 1){
    result = `Вам ${age} рік`;
} else if ((+age[age.length - 1] >= 2 && +age[age.length - 1] <= 4)){
    result = `Вам ${age} роки`;
} else if (age % 2 === 1 || +age[age.length - 1] === 0){
  result = `Вам ${age} років`;
} else if (isNaN(parseInt(age))){
    result = `Ви вели неправильне значення!`
}

alert(result)