'use strict';

// Task 1
const user = {};

user.name = 'John';
user.surname = 'Smith';

user.name = 'Pete';
delete user.name;
console.log(user);

//Task 2

const user1 = {
    name: 'John'
};

user1.name = 'Pete';
console.log(user1);

/* Изменения произойдут. Несмотря на то, что используется const,
внутри объекта можно производить изменения свойств и их значений.
Const делает неизменным сам object, но не его содержимое, т.е. так как
object это ссылочный тип данных, то ссылка на объект не будет изменена.
*/

// Task 3

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

const sum = salaries.John + salaries['Ann'] + salaries.Pete;

console.log(sum)