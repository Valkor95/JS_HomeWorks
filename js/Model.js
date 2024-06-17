import {dataKey} from "./constant.js";

const Model = {
    cache: new Map(),
    maxSize: 10,

    init(){
        if (localStorage.getItem(dataKey)){
            const localCache = JSON.parse(localStorage.getItem(dataKey));
            for (const [key, value] of localCache){
                this.cache.set(key, value)
            }
        }
    },

    getCachedResult(key){
        return this.cache.get(key)
    },

    cacheResult(key, result){
        this.cache.set(key, result);
        if(this.cache.size > this.maxSize){
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }
        localStorage.setItem(dataKey, JSON.stringify(Array.from(this.cache.entries())))
    },

    calculate(a, b){
        const key = JSON.stringify([a,b]);
        if (this.cache.has(key)){
            return this.getCachedResult(key);
        }
        const result = a * b;
        this.cacheResult(key, result);
        return result;
    }

}

export default Model