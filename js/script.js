'use strict';

const arr = [1, 2, 3, -1, -2, -3];

const functionArr = function (arr){
    const exampleArr = [];
    if (arr.length === 0){
        return null;
    }

    for (let i = 0; i <= arr.length; i++){
        if (arr[i] >= 0){
            exampleArr.push(arr[i])
        }
    }
    return exampleArr;
}

console.log(functionArr(arr));

