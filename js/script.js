"use strict"

if (2) {
    console.log('ok');
} else {
    console.log('Error');
}


// const num = 50;

// if (num < 49) {
//     console.log('error');
// } else if (num > 100) {
//     console.log('to match');
// } else {
//     console.log('ok');
// }


// (num === 50) ? console.log('ok') : console.log('error');

const num = 50;

switch (num) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 50:
        console.log('Верно');
        break;
    default:
        console.log('Неверно');
        break;
}