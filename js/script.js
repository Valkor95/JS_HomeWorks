'use strict';

// 1й вариант
// let nameUser = prompt('Hello! What is your name?');
// alert("Hello," + " " + nameUser + "!" + " " + "How are you?")

// 2й вариант
// let nameUser = prompt('Hello! What is your name?');
// let answer = "Hello," + " " + nameUser + "!" + " " + "How are you?"
// alert(answer)


// 3й вариант
let nameUser = prompt('Hello! What is your name?');
let answer = `Hello, ${nameUser}! How are you?`
alert(answer)