let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreated = new Date(2024, 0, 12, 5, 3)
let myCreated = new Date("2024-01-15")
// let myCreated = new Date("01-14-2024")-> indian version
// console.log(myCreated.toDateString());
// console.log(myCreated.toLocaleString());
// console.log(myCreated.toLocaleDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreated.getTime());
// can use for comparing the dates or time 
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate);
// console.log(newDate.getSeconds());

console.log(`Today is ${newDate.getDay()} and the date is ${newDate.getDate()} ${newDate.getHours()} ${newDate.getMinutes()}`);

console.log(newDate.toLocaleString('default',{
    weekday: "long",
    day: "2-digit",
    month:"long",
}))