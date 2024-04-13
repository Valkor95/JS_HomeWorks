"use strict"; // eslint-disable-line

const complexArray = [
  [1, 2, [3.1, 3.2, [3.21, 3.22]], 4],
  [5, [6, [7, [8, 9]]]],
  [[10, 11], 12, 13],
];

const func = function (arr) {
  if (!Array.isArray(arr)) {
    return 'Error';
  }
  if (arguments.length > 1) {
    throw new Error('Function accepts only 1 argument, too much arguments provided');
  }
  let result = [];
  arr.forEach((item) => ((Array.isArray(item))
    ? result = result.concat(func(item))
    : result.push(item)));

  return result;
};

console.log(func(complexArray));
