'use strict';

let age = prompt('Введіть ваш рік народження!');
if (age === null) {
    age = "Шкода, що Ви не захотіли ввести cвою дату народження!";
};

const city = prompt('В якому місті ви живете?');
// if (city === null) {
//     city = "Шкода, що Ви не захотіли ввести cвоє місто";
// };

let sport = prompt('Який ваш улюблений вид спорту?');
if (sport === null){
    sport = "Шкода, що Ви не захотіли ввести cвій улюблений вид спорту!";
};


let capitalOrTown = null;
    if (city === null) {
        capitalOrTown = "Шкода, що Ви не захотіли ввести cвоє місто!";
    }
    else if (city.toLowerCase() === 'київ' || city.toLowerCase() === 'лондон'
    || city.toLowerCase() === 'вашингтон') {
        capitalOrTown = `Ти живеш у столиці ${city}!`
    } else { capitalOrTown = `Ти живеш у місті ${city}!`}





alert(`Рік: ${age} \n Місто: ${capitalOrTown} \n Спорт: ${sport}`);
