const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function (acc, currval){
//     console.log(`Acc: ${acc} and Currval: ${currval}`);
//     return acc + currval
// },0)

const myTotal = myNums.reduce( (acc, curr) => acc + curr,0)

console.log(myTotal);

const shoopingCart = [
    {
        itemName: "Groceries",
        price: "1500"
    },
    {
        itemName: "Toy",
        price: "250"
    },
    {
        itemName: "Drinks",
        price: "200"
    },
]

const priceToPay = shoopingCart.reduce( (acc, item) => {return acc + item.price}, 0)

console.log(priceToPay);