/*
    JavaScript - Declaring Functions
    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function declarations to function expression.
        * Please reformat the following function expressions to function declarations.
    Submit the file to Hive
*/

// From function declarations to function expressions
function welcome() {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
}


const welcome2 = () => 'Welcome to Appleseeds Bootcamp!';

console.log("Result of ex-1");
console.log(welcome());
console.log(welcome2());
console.log("==================");


function power(a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}

const power2 = a => {
    let myNumber = a ;
    return Math.pow(myNumber, 2);
}

const power3 = a => Math.pow(a, 2);

console.log("Result of ex-2");
console.log(power(5));
console.log(power2(5));
console.log(power3(5));
console.log("==================");



function add(a, b = 5) {
    let myNumber = a;
    let sum = myNumber + b;
    return sum;
}

const add2 = (a , b=5) => a + b ;
console.log("Result of ex-3");
console.log(add(5));
console.log(add2(5));
console.log("==================");

// From function expressions to function declarations
const hello = () => "Hello!";

function hello2(){
    return 'Hello!';
}

console.log("Result of ex-4");
console.log(hello());
console.log(hello2());
console.log("==================");


const squareRoot = a => Math.sqrt(a);

function squareRoot2(a){
    return Math.sqrt(a)
}

console.log("Result of ex-5");
console.log(squareRoot(9));
console.log(squareRoot2(9));
console.log("===================");




const randomNumbers = (a, b) => Math.random() * (a - b) + b;

function randomNumbers2(a,b){
    return Math.random() * (a - b) + b;
}

console.log("Result of ex-6");
console.log(randomNumbers(10,1));
console.log(randomNumbers2(10,1));
console.log("===================");