"use strict";

// // const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// // const personalMoviesDB = {
// //     count: numberOfFilms,
// //     movies: {},
// //     actors: {},
// //     genres: [],
// //     privat: false
// // };

// // for (let i = 0; i < numberOfFilms; i++) {
// //     const filmTitle = prompt('Один из последних фильмов?');
// //     const filmRate = Number(prompt('На сколько оцените его?'));
// //     if (!filmRate) {alert('not a number');personalMoviesDB.count--;continue;}
// //     Object.assign(personalMoviesDB.movies, {[filmTitle]: filmRate});
// // }

// // const a = prompt('Один из последних фильмов?', ''),
// //       b = prompt('На сколько оцените его?', '');
//     //   c = prompt('Один из последних фильмов?', ''),
//     //   d = prompt('На сколько оцените его?', '');


// // personalMoviesDB.movies[a] = b;
// // personalMoviesDB.movies[c] = d;


// // console.log(personalMoviesDB);

// // if (4 == 9) {
// //     console.log('OK!');
// // } else {
// //     console.log('Error');
// // }


// // if (num < 49) {
// //     console.log('error');
// // } else if (num > 100) {
// //     console.log('too much');
// // } else {
// //     console.log('OK');
// // }


// // (num === 50) ? console.log('OK') : console.log('Error');

// // const num = 51;
// // switch (num) {
// //     case 49:
// //         console.log('Neverno');
// //         break;
// //     case 100: 
// //         console.log('Mnogo');
// //         break;
// //     case 50:
// //         console.log('OK!');
// //         break;
// //     default: 
// //         console.log('Not now');
// //         break;
// //

// // let hamburger;
// // const fries = NaN;
// // const cola = 0;
// // const nuggets = 2;
 
// // if (hamburger && cola || fries === 3 && nuggets) {
// //    console.log('Done!');
// // } else {
// //     console.log('error');
// // }



// // let num = 50;

// // while (num <= 55) {
// //     console.log(num);
// //     num++;
// // }


// // let num = 50;
// // do {
// //     console.log(num);
// //     num++;
// // }
// // while (num < 55);


// // for (let i = 0; i < 3; i++) {
// //     console.log(i);
// //     for (let j = 0; j < 3; j++) {
// //         console.log(j);
// //     }
// // }
 

// // *
// // **
// // ***
// // ****
// // *****
// // ******


// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {

//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }

//     result += '\n';
// }


// console.log(result);


// const lines = 6;
// let result = '';
// let star = "",
//     space = "";
// let i = 0, j = 0;
//     while (i < lines) {
//         space = "";
//         star = "";

//         for (j = 0; j < lines - i; j++) space += " ";
//         for (j = 0; j <2 * i + 1; j++) star += "*";
//         console.log(space + star);
//         i++;
//     }




// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) break first;
//             console.log(`Third level: ${k}`);
//         }   
//     }
// } 


// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//     console.log(i);
//     }   
// }

// let i = 2;
// while (i <= 16) {
//     if (i % 2 ===0) {
//         i++;
//         continue;
//     } else {
//         console.log(i);
//     }
// i++; 
// }

// const arrayOfNumbers = [];
// for (let i = 5; i <= 10; i++) {
//     arrayOfNumbers[i - 5] = i;
// }

// console.log(arrayOfNumbers);

// const arr = [3,5,8,16,20,23,50];
// const result1 = [];

// for (let i = 0; i < arr.length; i++) {
//     result1[i] = arr[i];
// }

// console.log(result1);
// return result1;






// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMoviesDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних фильмов?');
//     const b = prompt('На сколько оцените его?');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMoviesDB.movies[a] = b;
//         console.log('YES');
//     } else {
//         console.log('Error');
//         i--;
//     }
//     // if (!b) {alert('not a number');personalMoviesDB.count--;continue;}
//     // Object.assign(personalMoviesDB.movies, {[a]: b});
// }

// if (personalMoviesDB.count < 10) {
//     console.log('malo');
// } else if (personalMoviesDB.count >= 10 && personalMoviesDB < 30) {
//     console.log('norm');
// } else if (personalMoviesDB.count >= 30) {
//     console.log('ZBS');
// } else {
//     console.log('ERROR');
// }


// console.log(personalMoviesDB);





// let num = 20;
// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMessage("Hello World!");
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3))
// console.log(calc(5, 6))
// console.log(calc(10, 6))


// function ret () {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);


// const logger = function() {
//     console.log('Hello');
// };
// logger();

// const calc = (a, b) => { return a + b };












// const usdCurr = 28;
// const discount = 0.9;

// function convert (amount, curr) {
//     return curr * amount;
// }

// function promotion (result) {
//     console.log(result * discount);
// }

// const res = convert(500, usdCurr);
// promotion(res);

// function test() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         if (i === 3) 
//         return 
//     }
//     console.log('Done')
// }
// test();

// let name = 'Антон';

// function sayHello (name) {
//     console.log(`Привет, ${name}`);
//     return;
// }
// sayHello(name);



// function returnNeighboringNumbers(num) {
//     return [num - 1, num, num + 1];
// }
// returnNeighboringNumbers(5);

// function getMathResult(num, times) {
//     if (typeof(times) !== 'number' || times <= 0) {
//         return num;
//     }
//     let str = '';

//     for (let i = 1; i <= times; i++) {
//         if (i === times) {
//             str += `${num * i}`;
//         } else {
//             str += `${num * i}-`;
//         }
//     }
//     return str;
// }

// getMathResult(10, 5);
// console.log(getMathResult(10, 5));
  




// let summPrisec = function (x, n, m) {
//     let float = n;
//     n = 1;
//     let value = n;
//     let i = 1;

//     while (i <= count )
// };



let numberOfFilms;

function start () {
    numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?');

    }
}

start();

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних фильмов?'),
              b = prompt('На сколько оцените его?');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMoviesDB.movies[a] = b;
                console.log('YES');
            } else {
                console.log('Error');
                i--;
        }
    }
}


rememberMyFilms();

function detectPersonalLevel() {
    if (personalMoviesDB.count < 10) {
            console.log('malo');
    } else if (personalMoviesDB.count >= 10 && personalMoviesDB < 30) {
            console.log('norm');
    } else if (personalMoviesDB.count >= 30) {
            console.log('ZBS');
    } else {
            console.log('ERROR');
    }
} 

detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMoviesDB);
    }
}

showMyDB(personalMoviesDB.privat);


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMoviesDB.genres[i - 1] = genre;
    }
}

writeYourGenres();

