const user = {
    username: "john",
    price: "499",
    
    welcomeMessage: function(){
        console.log(`${this.username} , Welcome to Our Website`);
        console.log(this);
    }

}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);

// in when we use console.log(this) in browser the global object is window 
// but when we use in this we see empty object

// function chai(){
    // let username = "meenakshi"
    // console.log(this); when use this which give info bout the function
    // console.log(this.username); the reason its not showing cuz its mostly used in object not in function
// }

// chai()

// const chai = function(){
//     let username = "Hitesh"
//     console.log(this);
// }


const chai = () => {
    let username = "hitesh"
    console.log(this);
}

chai()

const arrowfunc = (num1, num2) => {
    return num1 + num2

}
console.log(arrowfunc(3,4))

const arrowfunc2 = (num1, num2) => num1 + num2 //implicit return
const arrowfunc3 = (num1, num2) => (num1 + num2) //implicit return another way of doing but if use curly braces{ } then we need to have to enter return in it


// when use object in arrow function
const arrowfunc4 = (num1, num2) => ({username: "Hitesh"}) // when use object in arrow func remember to use ({}) in paranthesis use curly baraces


console.log(arrowfunc2(7,8));
console.log(arrowfunc3(7,8));
console.log(arrowfunc4());
