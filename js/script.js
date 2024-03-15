'use strict';

const padString = function (string, length, symbol = '*', bool = true){
    if (typeof string !== 'string' ||
        typeof length !== 'number' ||
        typeof symbol !== 'string' ||
        typeof bool !== 'boolean'){
        return 'Ошибка: неправильный аргумент';
    }

    if (length < 0){
        return 'Значение количества строки должно быть положительным!';
    }

    if (length === 0){
        return 'Повторите операцию и введите значение количества строк для отображения!'
    }

    if (string.length >= length) {
        return string.substring(0, length);
    }

    const difference = length - string.length;
    const amountSymbol = symbol.repeat(difference);

    return bool ? `${string}${amountSymbol}` : `${amountSymbol} ${string}`;
}

const func = padString('Hi, Peter, what are you doing now?', 50, '?')

alert(func)
console.log(padString('Hi, Peter, what are you doing now?', 37, '!', false))
alert(padString('Hi, Peter, what are you doing now?', 9, '!'))

