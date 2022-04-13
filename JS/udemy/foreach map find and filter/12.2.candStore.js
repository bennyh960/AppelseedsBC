const candyStore = {
    candies: [
    {
    name: "mint gum",
    id: "as12f",
    price: 2,
    amount: 2
    },
    {
    name: "twix",
    id: "5hd7y",
    price: 5,
    amount: 4
    },
    ],
    cashRegister: 200
   }

console.log("========================= TASK 1 =========================");
// Implement the following getCandy function:
// The function should return the candy element with the specified id

function getCandy(candyStore, id){
    const byId = candyStore.candies.filter(candy => candy.id === id);
    return byId[0];
    }

console.log(getCandy(candyStore,'5hd7y'));

console.log("========================= TASK 2 =========================");
// Implement the following getPrice function:
// The function should return the price (number) of the candy with the specified id. 

function getPrice(candyStore, id){
    const byId = candyStore.candies.filter(candy => candy.id === id);
    // const price = b
    return byId[0].price;
    }
console.log("Price : ",getPrice(candyStore,'5hd7y'));


console.log("========================= TASK 3 =========================");
// Implement the following addCandy function:
// The function should add a new candy to the candy list in candyStore with a
// default amount of 1. The function will not return anything. 
function addCandy(candyStore, id, name, price){
    const newCandy = {}

    newCandy.name = name;
    newCandy.id = id;
    newCandy.price = price;
    newCandy.amount = 1;

    candyStore.candies.push(newCandy);
    }

addCandy(candyStore,'benbenid',"tasty-sweet", 10);
console.log(candyStore);


console.log("========================= TASK 4 =========================");
// 4. Implement the following buy function: The function should add the candy
// price to the cashRegister, and decrease the amount property of the relevant
// candy.
function buy(candyStore, id){
    const byId = candyStore.candies.filter(candy => candy.id === id);
    candyStore.cashRegister += byId[0].price;
    byId[0].amount -= 1;
    }

buy(candyStore,'benbenid');
console.log(candyStore);