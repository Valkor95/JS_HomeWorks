'use strict';

const age = prompt('Please, enter your age!');


switch (true){
    case age > 0:
        alert(`${(+age+10)} - your age after 10 years!`)
        break;
    case age !== null:
        alert(`Error! Do you want repeat again?`)
        break;
    case age != 0:
        alert(`Do you want repeat again?`)
        break;
    default:
        confirm('Something is wrong! Do you want repeat again?')
}



