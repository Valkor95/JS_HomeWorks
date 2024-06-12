import {DB_KEY} from "./constants.js";

const Model = {
    currentId: 1,

    getData(){
        const data = JSON.parse(localStorage.getItem(DB_KEY));
        if(data === null){
            return [];
        }
        return data;
    },

    setData(data){
        const savedData = this.getData();

        if(savedData.length > 150){
            throw new Error('No capacity in DB!')
        }

        const dataToSave = {...data, id: this.currentId};
        savedData.push(dataToSave)
        localStorage.setItem(DB_KEY, JSON.stringify(dataToSave));
        this.currentId += 1;

        return this.getData().at(-1);
    }
}

export default Model;