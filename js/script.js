'use strict';

//Task 1
const arr1 = [1, 2, 3];
const arr1_1 = [4, 5, 6];

const conc = arr1.concat(arr1_1)

console.log(conc);

//Task 2
const arr2 = [1, 2, 3];
const reverse = arr2.reverse();

console.log(reverse);

//Task 3
const arr3 = [1, 2, 3];
arr3.push(4, 5, 6);

console.log(arr3);

//Task 4
const arr4 = [1, 2, 3];
arr4.unshift(4, 5, 6);

console.log(arr4);

//Task 5
const arr5 = ['js', 'css', 'jq'];

console.log(arr5[0]);
alert(arr5[0]);

//Task 6
const arr6 = ['js', 'css', 'jq'];

console.log(arr5[arr5.length - 1]);
alert(arr5[arr5.length - 1]);

//Task 7
const arr7 = [1, 2, 3, 4, 5];
const slice7 = arr7.slice(0, 3)
const splice7 = arr7.splice(0, 3)

console.log(slice7);
console.log(splice7);

//Task 8
const arr8 = [1, 2, 3, 4, 5];
const slice8 = arr8.slice(3)
const splice8 = arr8.splice(3, 2)

console.log(slice8);
console.log(splice8);

//Task 9
const arr9 = [1, 2, 3, 4, 5];
const splice9 = arr9.splice(1, 2)

console.log(arr9);

//Task 10
const arr10 = [1, 2, 3, 4, 5];
const slice10 = arr10.slice(1, 4)

console.log(slice10);

//Task 11
const arr11 = [1, 2, 3, 4, 5];
const splice11 = arr11.splice(3, 0, 'a', 'b', 'c')

console.log(arr11);

//Task 12
const arr12 = [1, 2, 3, 4, 5];
const splice12 = arr12.splice(1, 0, 'a', 'b');
const splice12_1 = arr12.splice(6, 0, 'c');
const push12 = arr12.push('e');

console.log(arr12);

//Task 13
const arr13 = [3, 4, 1, 2, 7];
const sort13 = arr13.sort((a, b) => a - b);

console.log(sort13);
console.log(arr13);

//Task 14
const arr14 = [5, 6, 7, 8, 9];
const sum14 = arr14.reduce((a, b) => a + b, 0);

console.log(sum14);

//Task 15
const arr15 = [5, 6, 7, 8, 9];
const square15 = arr15.map( a=> a * a);

console.log(square15);

//Task 16
const arr16 = [1,-3, 5, 6,-7, 8, 9,-11];
const neg16 = arr16.filter( a=> a <= 0);

console.log(neg16);

//Task 17
const arr17 = [1,-3, 5, 6,-7, 8, 9,-11];
const even17 = arr17.filter( a=> a % 2 === 0);

console.log(even17);

//Task 18
const arr18 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
const length18 = arr18.filter( a=> a.length > 5);

console.log(length18);

//Task 19
const arr19 =  [1, 2, [3, 4], 5, [6, 7]]
const subArr19 = arr19.filter( a => Array.isArray(a))

console.log(subArr19);

//Task 20
const arr20 =  [5,-3, 6,-5, 0,-7, 8, 9];
const quantity = arr20.filter(a => (a < 0)).length

console.log(quantity)