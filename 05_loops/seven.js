const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map( (num) => num + 10)

const newNums = myNums
                .map( (num) => num * 10)
                .map( (num) => num + 1)
                .filter( (num) => num >= 60)

console.log(newNums);

// in filter we use if the condition is true or not
//  whereas in map the condition is true mean it happen all the time 
// just like in example num * 10 so this does happen not like it checks it