'use strict';

let age = prompt('Введіть ваш рік народження!');
 if (age === null || age === ''){
    age = "Шкода, що Ви не захотіли ввести cвою дату народження!";
}

let city = prompt('В якому місті ви живете?');
// if (city === null) {
//     city = "Шкода, що Ви не захотіли ввести cвоє місто";
// };

let sport = prompt('Який ваш улюблений вид спорту: джиу-джитсу, бокс чи футбол?');



let capitalOrTown = null;
    if (city === null || city === '') {
        capitalOrTown = "Шкода, що Ви не захотіли ввести cвоє місто!";
    }  else if (city.toLowerCase() === 'київ' || city.toLowerCase() === 'лондон'
    || city.toLowerCase() === 'вашингтон') {
        capitalOrTown = `Ти живеш у столиці ${city}!`
    } else { capitalOrTown = `Ти живеш у місті ${city}!`}





let sportStars = {
        ['джиу-джитсу']: 'Гаррі Тонон',
        ['бокс']: 'Майк Тайсон',
        ['футбол']: 'Леон Мессі',

}
    if (sport === null || sport === ''){
        sport = "Шкода, що Ви не захотіли ввести cвій улюблений вид спорту!";
    } else if ( sport.toLowerCase() === 'джиу-джитсу') {
        sport = `Круто! Хочеш стати як ${sportStars['джиу-джитсу']}?`
    } else if (sport.toLowerCase() === 'бокс'){
        sport = `Круто! Хочеш стати як ${sportStars['бокс']}?`
    } else if (sport.toLowerCase() === 'футбол'){
    sport = `Круто! Хочеш стати як ${sportStars['футбол']}?`
} else {
        sport = 'Помилка! Треба вибрати одне із трьох!'
    }



alert(` ${age} \n ${capitalOrTown} \n ${sport}`);
