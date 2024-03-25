// if
// <, >, <=, >=, ==, !=, === 


// if (2 == "2") {
//     console.log("executed");
// }
// if (2 === "2") {
//     console.log("Executed");
// }
// if (2 != "2") {
//     console.log("Executed not");
// }
// if (2 !== "2") {
//     console.log("Executed not");
// }

const temprature = 33

// if (temprature > 50 ){
//     console.log("Less than 50");
// }
// console.log("its greater than 50");

// if (temprature === 34){
//     console.log("temprature is 33");
// } else{
//     console.log("Not its not");
// }
// console.log("Now u know the Temprature");

// const score = 200

// if (score > 300) {
//     const power = "fly"
//     console.log(`User Power: ${power}`);
// } else {
//     console.log("No Power Found");
// }
// console.log(`usr ${power}`);

// const balance = 1000

// // if(balance > 500) console.log("You Have More Cash");  //implicit if

// if (balance < 500){
//     console.log("Less than 500");
// }else if(balance < 750){
//     console.log("Less Than 750");
// }else if(balance < 900){
//     console.log("Less Than 900");
// }else{
//     console.log("you've got 1000");
// }


const isUserLoggedIn = true
const debitCard = true
const onlineCash = false
const haveGmail = true
const haveEmail = false

if (isUserLoggedIn && debitCard && onlineCash){
    console.log("yes You can Buy in the market");
}

if (haveGmail || haveEmail ){
    console.log("User Logged In");
}

// && check if both true
//  || check if anyone is true

// NUllish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10

val1 = undefined ?? 15

val1 = null ?? 10 ?? 17

console.log(val1);

// ternary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");