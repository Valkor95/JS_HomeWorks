import {DB_KEY} from "./constants.js";

const Model = {
    _currentId: 1,

    getData() {
        const data = JSON.parse(localStorage.getItem(DB_KEY));
        if(data === null) {
            return [];
        }
        return data;
    },

    setData(data) {
        const savedData = this.getData();

        if(savedData.length > 150) {
            throw new Error('No capacity in DB!')
        }

        const dataToSave = {...data, id: this.currentId};
        savedData.push(dataToSave);
        localStorage.setItem(DB_KEY, JSON.stringify(savedData));
        this.currentId += 1;

        return this.getData().at(-1);
    },

    removeData(id){
        const savedData = this.getData();
        const index = savedData.findIndex((item) => {
            return item.id === id;
        })
    },

    init(){
        const data = this.getData();
        if(!data.length) return;
        this.currentId = ++data.at(-1).id
    },

    get currentId(){
        return this._currentId
    },

    set currentId(value){
        if(typeof value !== 'number') throw new Error('ID must be a number!')
        this._currentId = value;
    }
}

export default Model;