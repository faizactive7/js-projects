// Primitive /value type
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const  isLoggedIn = false
const  outsideTemp = null
let userEmail;

const id = Symbol('4321')
const anotherId = Symbol('4321')

console.log(id === anotherId);



// Refrence (Non Primitive)

// Array, Objects, Functions

const heros = ["deadpool", "ironman", "captain"]

let myObj ={
    name:"faiz",
    age:21,
}

const myFunc = function(){
    console.log("hello coder");
}
