let score = "33"

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" -> 33
// "33abc"-> NaN
// true -> 1 false ->0

let isLoggedIn = ""

let booleanLoggedIn = Boolean(isLoggedIn)
// console.log(booleanLoggedIn);

//  1 -> true ,0 -> false , except 0 everything is true even its 5,4 or whatever
// "" -> false
// "faiz"-> true

let someNumber = 78
let stringSomeNumber = String(someNumber)
// console.log(stringSomeNumber);
// console.log( typeof stringSomeNumber);

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);add
// console.log(2-2);sub
// console.log(2*2);mul
// console.log(2/2);divide
// console.log(2**3);power
// console.log(2%2); remainder

let str1 = "hello"
let str2 = " faiz"

let str3 = str1+str2
// console.log(str3);

// console.log("1" + 2);->12
// console.log(1 + "2"); ->12
// console.log("1" + 2 + 2); ->122
// console.log(1 + 2 + "2"); ->1+2 = 3 "2" =2 answer is 32

// let gameCounter = 100
// ++gameCounter;
// console.log(gameCounter);

// postfix = when use x++(postfix) the increament operator will add the value but in variavle when use 
// the value will be before addition 
// for example 
let x = 3
const y = x++
console.log("X", x);
console.log("Y", y);

/*
prefix = when we use ++a(prefix) the increament operator will add the value to 
the original and also add to the new value where we use ++a 
for example
*/
let a = 3
const b = ++a
console.log("A", a);
console.log("B", b);


