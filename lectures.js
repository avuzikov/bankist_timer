'use strict';

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];
/*
console.log(23 === 23.0);

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

//conversion
console.log(Number('23'));
console.log(+'23');

//parsing
console.log(Number.parseInt('30px', 10)); //converted to 30
console.log(Number.parseInt('e23', 10)); //NaN

console.log(Number.parseInt('2.5rem')); //2
console.log(Number.parseFloat('2.5rem')); //2.5
//Check if value is NaN
console.log(Number.isNaN(20)); //check if values is a number, false
console.log(Number.isNaN('20')); //false
console.log(Number.isNaN(+'20X')); //True
console.log(Number.isNaN(23 / 0)); //infinity, NaN

//Checking if value is a number
console.log(Number.isFinite(20)); //True
console.log(Number.isFinite('20')); //False
console.log(Number.isNaN(+'20X')); //False
console.log(Number.isFinite(23 / 0)); //False

console.log(Number.isInteger(23)); //true
console.log(Number.isInteger(23.0)); //true
console.log(Number.isInteger(23 / 0)); //false
*/
//MATH OPERATIONS
/*
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));
console.log(Math.max(5, 18, 23, 11, 2)); //23
console.log(Math.max(5, 18, '23', 11, 2)); //23
console.log(Math.max(5, 18, '23px', 11, 2)); //NaN

console.log(Math.min(5, 18, '23px', 11, 2)); //2
console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) => Math.trunc(Math.random() * (max - min) + 1);
//0 ... 1
console.log(randomInt(10, 20));

//rounding integers
console.log(Math.trunc(23.3)); //cuts of decimal part

console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor('23.9'));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

//rounding decimals
console.log((2.7).toFixed(0)); //returns 3 as a string
console.log((2.7).toFixed(3)); //returns 2.700 as a string
console.log((2.345).toFixed(2)); //returns 2.35 as a string
console.log(+(2.345).toFixed(2)); //returns 2.35 as a number

//REMINDER OPERATOR
console.log(5 % 2);
console.log(5 / 2); //5 = 2 * 2 + 1
console.log(8 % 3); //2

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

//The biggest number js can represent without mistake
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER); //the same as above
console.log(2 ** 53 + 1); //precision is lost, js does not represent correctly

console.log(43643753765865865858558585n); //n transforms to a bigInt number
//may have mistakes during transformation, above variant is preferrable
console.log(BigInt(43643753765865865858558585));

//Operations
console.log(10000n + 10000n);
console.log(354327658658685865845665n * 100000000n);
//it is not possible to mix bigInt with decimal numbers
const huge = 245786356658658658n;
const num = 23;
//console.log(huge * num); //error: cannot mix BigInt and other types
console.log(huge * BigInt(num));
//some exceptions
console.log(20n > 15);
console.log(20n === 20); //false
console.log(typeof 20n);
console.log(20n == '20'); //true

console.log(huge + ' is REALLY big!!!'); //converted to a string
//Math. operations are not working with BigInt
//For example, Math.sqrt(16n)

//Divisions
console.log(10n / 3n); //returns nearest int, cutting of decimal part
console.log(10 / 3);

//DATES AND TIME
//create a date
const now = new Date();
console.log(now);
console.log(new Date('Tue May 04 2021 10:19:34 GMT+0200'));
console.log(new Date('December 24, 2015'));
console.log(new Date(account1.movementsDates[0]));
console.log(new Date(2037, 10, 19, 15, 23, 5)); // 19 November 2037, 15:23:5
//month numerations starts from 0
// November has 30 days, js corrects the date to the 1st of December
console.log(new Date(2037, 10, 31));

console.log(new Date(0)); //Unix time
console.log(3 * 24 * 60 * 60 * 1000); //3 days after the beginning of UNIX time


//dates are another type of object. Therefore they have their own methods
//Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate()); //day of the month
console.log(future.getDay()); //day of the week
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString()); //converts to specified format
console.log(future.getTime()); //returns time in milliseconds

console.log(new Date(2142253380000));

console.log(Date.now()); //timestamp of the current moment

future.setFullYear(2040);
console.log(future);

const future = new Date(2037, 10, 19, 15, 23);
console.log(Number(future));

const calcdaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

console.log(calcdaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24)));

const now = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long', //2-digit
  year: 'numeric',
  weekday: 'long',
};
const locale = navigator.language;
console.log(locale);

const str = new Intl.DateTimeFormat(locale, options).format(now);
console.log(str);

//It is easier to not specify locale manually, but to get it from users browser

//INTERNATIONALIZING NUMBERS
const num = 3884764.23;

const options = {
  style: 'currency',
  unit: 'celsius',
  currency: 'EUR',
  //useGrouping: false,
};

console.log('US: ', new Intl.NumberFormat('en-US', options).format(num));
console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num));
console.log(
  `Browser, ${navigator.language}: `,
  new Intl.NumberFormat(navigator.language, options).format(num)
);
*/
//TIMERS
//two parameters: function that will execute after the timeout and number of milliseconds
//all the arguments given after milliseconds number
//will be the arguments for the function inside the timeout

const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  ingredients =>
    console.log(`Here is your pizza 🍕 with ${ingredients.join(' and ')}`),
  1000 * 3,
  ingredients
);
//execution continues after reading the timeout
console.log('Waiting...');
//timeout can ba cancelled
if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

//setInterval: function will be called over and over again with specified time period
setInterval(function () {
  const now = new Date();
  console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
}, 1000);
