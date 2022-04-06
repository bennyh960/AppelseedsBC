/*
    JavaScript - Declaring Functions

    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function expressions to IIFE functions.
        * Please reformat the following function declarations in two ways, explicit return and implicit return functions.

    Submit the file to Hive

*/

// From function declarations to explicit and implicit return functions (one of each).
function welcome() {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
}

// res-1
// explict
const welcome2 = (function(){
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
})();
// implict
const welcome3 = (() => 'Welcome to Appleseeds Bootcamp!')();

console.log("Ex-1 ");
console.log(welcome());
console.log(welcome2);
console.log(welcome3);
console.log('=================');


function power(a) {
    let myNumber = a;    
    let result = Math.pow(myNumber, 2);
    return result;
}


// res-2
// explict
const power2 = (function() {
    let myNumber = a;    
    let result = Math.pow(myNumber, 2);
    return result;
})(a = 5);

// explict with arrow
const power3 = (() => {
    let myNumber = a;    
    let result = Math.pow(myNumber, 2);
    return result;
})(a = 5);

// implicit with arrow
const power4 = (() => Math.pow(a, 2))(5);

console.log("Ex-2 ");
console.log(power(5));
console.log(power2);
console.log(power3);
console.log(power4);
console.log('=================');




// From function expressions to IIFE functions.
const squareRoot = a => Math.sqrt(a);

// IIFE 
const squareRoot2 = (a => Math.sqrt(a))(9);

( a => console.log(Math.sqrt(a),'from not return function'))(9);

console.log("Ex-3 ");
console.log(squareRoot(9));
console.log(squareRoot2);
console.log('=================');


const randomNumbers = (a, b) => Math.random() * (a - b) + b;

const randomNumbers2 = ((a,b) => Math.random() * (a - b) + b)(10,1)

console.log("Ex-4 ");
console.log(randomNumbers(10,1));
console.log(randomNumbers2);
console.log('=================');



