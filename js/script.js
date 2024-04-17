"use strict"; //eslint-disable-line

const myBind = function (func, thiS, ...args) {
  return function (...innerArgs) {
    if (!args.length) {
      args = Object.values(thiS);
    }
    const allArgs = args.concat(innerArgs);
    return func(...allArgs);
  };
};

const example = function (name, age) {
  return `My name is ${name} and I am ${age}`;
};

const obj = {
  name: 'Liza',
  year: '33',
};

const user1 = myBind(example, obj, 'Valentin', '25');
console.log(user1());

const user2 = myBind(example, obj);
console.log(user2());
