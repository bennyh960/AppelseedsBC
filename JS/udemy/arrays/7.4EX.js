const fruits = ["Banana", "Orange", "Apple", "Mango"];

// using splice modify the array to be this:
// ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"];

fruits.splice(2,1,"Kiwi", "Apple")
console.log(fruits);