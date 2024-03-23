const myArr = [1, 2, 3, 4, 5]
const myHeros = ["fin", "jin", "batman"]

const myArr2 = new Array(1, 2, 3, 4)

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// console.log(myArr);
// myArr.unshift(8)
// console.log(myArr);
// console.log(myArr.includes(8));
// console.log(myArr.indexOf(4));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);

//slice and splice

// console.log("A", myArr);
const myn1 = myArr.slice(0,3)
// console.log(myn1);

// console.log("B", myArr);

const myn2 = myArr.splice(0,3)
// console.log(myn2);
// console.log("C", myArr);

// the difference between the slice and splice is that the slice will get you the element you ask for but a copy of it
// whereas in splice the element will be extracted from the original array 

const marvel_heros = ["IronMan", "Thor", "Spiderman"]
const dc_heros = ["Batman", "Superman", "flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

const allheros = marvel_heros.concat(dc_heros) // concat create new array
// console.log(allheros);

const all_heros_new = [...marvel_heros, ...dc_heros] 
// console.log(all_heros_new); spread function

const messy_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const fixing_mess = messy_array.flat(Infinity) // for fixing of array can be specific or give infinity
// console.log(fixing_mess);

console.log(Array.isArray("johnathon"));
console.log(Array.from("johnathon"));

let score1 =200
let score2 =500
let score3 =400

console.log(Array.of(score1, score2, score3));
