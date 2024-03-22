const name = "mohammad faiz khan"
const repoCount = 2
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const game = new String("call of duty")

console.log(game[3]);
// console.log(game.__proto__)

// console.log(game.length);
// console.log(game.toUpperCase());
// console.log(game.charAt("1"));
// console.log(game.indexOf("d"));

const newString = game.substring(0,4)
console.log(newString);

const sString = game.slice(-8, 3)
console.log(sString);

// const anotherString = "     Hello User   "
// console.log(anotherString);
// console.log(anotherString.trim());

const url = "https://portfolio.com/faiz%20khan"

console.log(url.replace("%20", "-"))

console.log(url.includes("faizz"));

const gameName = "Clash-Of-Clan"
console.log(gameName.split('-'));
