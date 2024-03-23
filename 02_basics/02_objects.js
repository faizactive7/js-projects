// singleton
// objects create

// object literals

const mysym = Symbol("key1")

const jsUser = {
    name:"John",
    Age: 18,
    location: "USA",
    email: "john@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday","Thursday"],
    [mysym]: "mykey1"
}

// console.log(jsUser.Age); not a good practice as we cant do with string as shown below
// console.log(jsUser["Age"]);
// console.log();

jsUser.email = "john12@gmail.com"

// console.log(jsUser["email"]);

// Object.freeze(jsUser)

jsUser.email = "john14@gmail.com"
// console.log(jsUser["email"]);

// console.log(jsUser);

jsUser.greetings = function(){
    console.log("Hello js User");
}
jsUser.greetingsTwo = function(){
    console.log(`Hello ${this.name} js User`);
}

console.log(jsUser.greetings());
console.log(jsUser.greetingsTwo());

