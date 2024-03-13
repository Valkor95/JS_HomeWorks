'use strict';

const value = +prompt('Введите число');
let div = null;

if (value < 1){
    div = NaN;
    alert(`Неправильное значение ${div}`)
} else if (value === 1){
    div = 1;
    alert(`Для числа 1 наименьший делитель - ${div}`)
} else {
    for (let i = 2; i <= value; i++) {
        if (value % i === 0) {
            div = i;
            break
        }
    }
    alert(`Для числа ${value} наименьший делитель - ${+div}`)
}