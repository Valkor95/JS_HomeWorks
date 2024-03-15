'use strict';


const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
const generateKey = function (length, characters){
    let key = '';
    for (let i = 0; i <= length; i++){
        const random = Math.floor(Math.random()*characters.length);
        key += characters[random];
    }
    return key;
}

console.log(generateKey(characters.length, characters))
