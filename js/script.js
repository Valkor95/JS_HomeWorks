"use strict" //eslint-disable-line

const arr = [1, 2, 3, 4];

const ItrObj = (ItrDataStructure) => {
    const dataArr = Array.from(ItrDataStructure);
    let currentIndex = 0;
    return {
        next(){
            let done = false;

            if(currentIndex + 1 > dataArr.length){
                done = true;
            }

            const result = {
                value: dataArr[currentIndex],
                done
            }

            currentIndex += 1;

            return result
        },
    }
}

const itr2 = ItrObj(arr)
console.log(itr2);

console.log(itr2.next());
console.log(itr2.next());
console.log(itr2.next());
console.log(itr2.next());
console.log(itr2.next())


