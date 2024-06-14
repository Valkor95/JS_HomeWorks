(function (){
    "use strict"

    const cacheFunc = function (func){
        const cache = new Map();
        const maxSize = 10;
        const localKey = 'cache'

        if (localStorage.getItem(localKey)){
            const localCache = JSON.parse(localStorage.getItem(localKey));
            for (const [key, value] of localCache){
                cache.set(key, value)
            }
        }

        return function (...items) {
            const key = JSON.stringify(items);

            if (cache.has(key)){
                return cache.get(key);
            }

            const result = func(...items);
            cache.set(key, result);

            if (cache.size > maxSize){
                const firstKey = cache.keys().next().value;
                cache.delete(firstKey);
            }

            localStorage.setItem(localKey, JSON.stringify(Array.from(cache.entries())));

            return result
        }
    }

    const multiply = function (a, b){
        return a*b;
    }

    const final = cacheFunc(multiply);

    console.log(final(1, 2))
    console.log(final(2, 3))
    console.log(final(3, 4))
    console.log(final(3, 4))
    console.log(final(5, 6))
    console.log(final(7, 8))
    console.log(final(7, 8))
    console.log(final(9, 10))
    console.log(final(11, 12))
    console.log(final(13, 14))
    console.log(final(14, 15))
    console.log(final(16, 17))
    console.log(final(17, 18))
    console.log(final(18, 19))

})()