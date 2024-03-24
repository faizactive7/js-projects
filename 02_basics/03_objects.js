const tinderUserS = new Object() // singleton object
const tinderUser = {} //non singleton objects

// console.log(tinderUserS);
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

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2} //use of spread 
// console.log(obj3);

const userArr = [
    {
        user:"manas",
        id:"manas@gmail.com"
    },
    {
        user:"riper",
        id:"rips@gmail.com"
    },
    {
        user:"snail",
        id:"snail@gmail.com"
    },
]

// console.log(userArr[1].id)

// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //you'll see that key will be in array so we can use loop in the array
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggerIn'));

const course = {
    courseName: "Learning Js",
    price: "499",
    instructor: "hitesh"
}

// course.courseName

const {instructor} = course //Object destructure

console.log(instructor);


// *****************************Json Api formats******************************
// {
//     "name":"faiz",
//     "location": "jaipur",
//     "age":18
// }

// [
//     {},
//     {},
//     {}
// ]