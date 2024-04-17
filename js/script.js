'use strict';// eslint-disable-line
const myApply = function (func, thiS, arr) {
  if (!arr) {
    return func(thiS.name);
  }
  return func(...arr);
};

const example = function (name) {
  return `My name is ${name}`;
};

const person = {
  name: 'Valentin',
};

console.log(myApply(example, person));
console.log(myApply(example, person, ['Alexander']));
