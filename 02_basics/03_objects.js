const tinderUserS = new Object() // singleton object
const tinderUser = {} //non singleton objects

console.log(tinderUserS);
// console.log(tinderUser);

tinderUser.id = "123abs"
tinderUser.name = "sam"
tinderUser.age = 18

// console.log(tinderUser);

const regularUser = {
    email: "some@gamil.com",
    fullname: {
        username :{
            firstname:"john",
            lastname: "cena"
        }

    },
    age : 18,


}   

// console.log(regularUser);
// console.log(regularUser["fullname"]["username"]["firstname"]);
// console.log(regularUser.fullname.username.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);