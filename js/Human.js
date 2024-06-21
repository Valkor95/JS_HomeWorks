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

class House {
    flats = [];
    amountFlat = null;
    constructor(amountFlat = 5) {
        this.amountFlat = amountFlat;
    }

    addFlat(flat){
        if(flat instanceof Flat && this.flats.length <= this.amountFlat){
            this.flats.push(flat)
        } else {
            alert("Can't add: limit exceed!")
        }
    }
}

const h = new Human('Val', 'male');
const h2 = new Human('Masha', 'female');

const f = new Flat();
f.addLiver(h)
f.addLiver(h2)


console.log(f.arrLiver)