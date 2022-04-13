// forEach
const arr = [2,4,6,1,3,6,7,1];

// ? example one with anonymous more common
// arr.forEach(function(num) {
//     console.log(num);
// });

// ? example 2 with reuseable function
// function printTriple(n) {
//     console.log(n * 3);
// }

// arr.forEach(printTriple);

// ? with obj in array- the forEach is on array 
// const books = [
//     {
//         title : 'life',
//         year : 2000

//     },
//     {
//         title : 'thanks god',
//         year : 19000

//     },
//     {
//         title : 'lifes good',
//         year : 2001

//     },
// ]

// books.forEach(function (book){
//     console.log(book.title.toUpperCase());
// })

// ? using also with second argument

// arr.forEach(function(e,i){
//     console.log(e , i);
// });

// ? using also with 3 arguments >>> element,index,array itself

// arr.forEach(function(e,i,numbers){
    // console.log(numbers[i] === e);
    // numbers[i] = e + 2;
    // console.log(numbers[i] === e );
// });


