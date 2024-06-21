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
    }
}

class House {
    flats = [];
    amountFlat = null;
    constructor(amountFlat = 5) {
        this.amountFlat = amountFlat;
    }

    addFlat(flat){
        if(flat instanceof Flat && this.flats.length < this.amountFlat){
            this.flats.push(flat)
        } else {
            alert("Can't add: limit exceed!")
        }
    }
}

const h = new Human('Val', 'male');
const h2 = new Human('Masha', 'female');
const h3 = new Human('Bogdana', 'female');
const h4 = new Human('Petr', 'male');
const h5 = new Human('Maxim', 'male');
const h6 = new Human('Vladimir', 'male');


const f = new Flat();

f.addLiver(h)
f.addLiver(h2)
f.addLiver(h3)

const f2 = new Flat()
f2.addLiver(h4)

const f3 = new Flat()
f3.addLiver(h5)
f3.addLiver(h6)

const house = new House(2);

house.addFlat(f)
house.addFlat(f2)
house.addFlat(f3)

console.log(house.flats)