"use strict" //eslint-disable-line
const sumFunc = () => {
  let n = 0;

  return (num) => {
    n += num;
    return n;
  };
};
const sum = sumFunc();
console.log(sum(3));
console.log(sum(5));
console.log(sum(12));
console.log(sum(101));
