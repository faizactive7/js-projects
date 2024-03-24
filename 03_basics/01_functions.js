function sayMyName(){
    console.log("E");
    console.log("R");
    console.log("E");
    console.log("N");
    console.log(" ");
    console.log("Y");
    console.log("E");
    console.log("A");
    console.log("G");
    console.log("E");
    console.log("R");
}

// sayMyName  refrence of the function
// sayMyName() execution of the function

// function addition(num1, num2){ 
//     console.log(num1 + num2)
// }

// addition(3,4)
// addition(3, "4")
// addition("3", 4)

// when use in function defination () its call parameter function addition()<-parameter
// when use in function execution () its call argument addition ()<- argument


//const result = addition(5,4) // you'll see that when u pass argument in this it will be for this time only output will be 9 but not stored permantly in result
// console.log("Result: " ,result); // when you check the value in result it'll show undefined 


function addition(num1, num2){ 
    let result = num1 + num2
    console.log("Hello");
    return result
    // console.log("Hello");

} // if use anything after  return it will give priority to return but we can use before it

// const result = addition(3,5) 
// console.log("Result: ", result); // when use return then only it can be store in a variable like this time not like before when use console.log(num1+num2)


function userLogIn(username){
    return `${username} just Logged In`
}

// userLogIn("Faiz") will not run cuz when use return we never say to print it 
// console.log(userLogIn("Faiz"))
// console.log(userLogIn(""))
// console.log(userLogIn()) will show undefined

function userLogErr(username){
    if(username === undefined){ //in if we can also use if(!username) which means opposite or not
        console.log("Please Enter a username");
        return
    }
    return `${username} just Logged In`
}

// console.log(userLogErr());

function userLogD(username = "Admin"){ //will take this parameter if not give any value / undefinedn if there is then overwrite it
    if(!username){ 
        console.log("Please Enter a username");
        return
    }
    return `${username} just Logged In`
}

// console.log(userLogD());
// console.log(userLogD("User"));


function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(300,400,900,300));

const user = {
    username: "Hitesh",
    age: 32,
    location: "Jaipur"
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and his is ${anyobject.age} and he lives in ${anyobject.location}`);
}

// handleObject(user)
// handleObject({
//     username: "Faiz",
//     age: 21,
//     location: "World"
// })

const myArr = [200, 300, 400, 99]

function arrReturn(getArray){
    return getArray[1]

}
// console.log(arrReturn(myArr));

console.log(arrReturn([300, 499, 599]))

