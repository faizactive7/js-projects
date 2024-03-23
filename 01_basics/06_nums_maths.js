const score = 400
const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length)
// console.log(balance.toFixed(1)); 

const otherNumber = 123.8043

// console.log(otherNumber.toPrecision(3));
// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-In'));

// ***************************Maths***************************************

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(43.5));
// console.log(Math.ceil(43.1));
// console.log(Math.floor(43.9));
// console.log(Math.min([2, 4, 5, 7]));

console.log(Math.random()); // will give value b/w 0 - 1 
console.log((Math.random()*10) +1); // will take random value in between 1-10 cuz of *10 and use +1 will ensure the lowest value will be from 1 take care of brackets for better readablity

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)