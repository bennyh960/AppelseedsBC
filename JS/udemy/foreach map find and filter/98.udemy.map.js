// ? Map => Create a new array with the result of calling a callback on every element in the array.

const { text } = require("figlet");


// ? first example
// const texts = ['rofl', 'lol', 'omg', 'ttyl' ]
// const caps  = texts.map(function (t) {
//     return t.toUpperCase();
// })

// console.log(texts);
// console.log(caps);

// ? example 2
const numbers = [23,21,4,3223,532,45,1];
const words = ['asap','byob', 'rsvp','diy'];

// will work if the numvers are let and not const
// numbers = numbers.map(function(num){ 
//     return num * 2;
// })
// console.log(numbers);
// const double  = numbers.map(function(num){
//     return num * 2;
//     // ! without a return statement map will set undefinde to each element in same length
// })

// console.log(double);

// ? another example
// const numDetail = numbers.map(function(n){
//     return {
//         value  : n,
//         isEven : n % 2 === 0
//     }
// })
// console.log(numDetail);


// ?another example
// const words2 = words.map(function(word){
//     return word.toUpperCase().split("").join(".");
// })
// console.log(words2);


// ? with obj in array- map
const books = [
    {
        title : 'life',
        year : 2000

    },
    {
        title : 'thanks god',
        year : 19000

    },
    {
        title : 'lifes good',
        year : 2001

    },
]

const titles = books.map(function(b){
    return b.title 
})

console.log(titles);
