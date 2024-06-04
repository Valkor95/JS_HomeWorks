"use strict" //eslint-disable-line

const user = {
    data: {
        a: 1,
        b: 2,
        c: 3,
        d: {
            a1: 1,
            b1: 2,
            c1: 3,
            d1: {
                a2: 3,
                b2: 3,
                c2: 3,
            }
        },
    }
}

const freezeObj = function (obj){
    Object.freeze(obj);

    for(const key in obj){
        if (obj.hasOwnProperty(key) && typeof obj[key] === 'object'){
            freezeObj(obj[key]);
        }
    }
}

console.log(freezeObj(user))

console.log(user)

user.data.d.d1.b2 = 'hello'

console.log(user)
