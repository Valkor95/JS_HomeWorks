class Human {
    name = null;
    gender = null;
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Flat {
    arrLiver = [];

    addLiver(human){
        if(human instanceof Human){
            this.arrLiver.push(human);
        }
        return this.arrLiver

    }
}

const h = new Human('Val', 'male');
const f = new Flat();
f.addLiver(h)

console.log(f.arrLiver)