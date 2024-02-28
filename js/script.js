'use strict';

const celsToFar = c => {
    return `${((c*9)/5)+32} °F`;
}
alert(celsToFar(1))
console.log(celsToFar(1))

const farToCels = f => {
    return `${((f-32)*5)/9} ℃`;
}
alert(farToCels(1))
console.log(farToCels(1))