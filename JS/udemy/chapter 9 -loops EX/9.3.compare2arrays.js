
// Compare these two arrays using 2 for loops and return the items that are the same. If none are the same return false.
const foodA = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const foodB = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

const compareFunc = (food,food1) => {
    // let length = food.length < food1.length ? food.length : food1.length;
    let arr = []
    for(let i of food){
        for(let j of food1){
            if(j === i){
                arr.push(i)
            }
        }
    }
    if(arr.length){
        return arr;
    }
    console.log(arr);
    return false;
}   

console.log(compareFunc(foodA,foodB));