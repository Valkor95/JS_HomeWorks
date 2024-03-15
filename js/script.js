'use strict';

const number = +prompt('Введите число:')
const degree = +prompt('Введите степень:')

const pow = function (a, b = 1){
    const result = a ** b;
    if (isNaN(a) || isNaN(b)){
        return 'Вы ввели неправильные данные';
    }
    return result
}

const result = pow(number, degree);
alert(result)