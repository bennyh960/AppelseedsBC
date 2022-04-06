// section 90 in udemy
// named function- the old way
const sum = function(x,y){
    return x + y;
}
console.log(sum(1,2));
// anonymos function into variable -valid
const square = function (num){
    return num * num ;
}
// named function into variable -valid
const square2 = function Sqr (num){
    return num * num ;
}
// the Sqr function will not work 
// console.log(Sqr(7));

console.log(square(7));
console.log(square2(7));

// section 99 in udemy
// Arrow Function -if we have 1 parameter the parantecis is not must
// const square3 = (x) => { 
const square3 = x => { 
    return x * x ;
}
console.log(square3(3));

const isEven = num => {
    return num % 2 === 0;
}

console.log(isEven(5));
console.log(isEven(4));

// we have to use parentesis
const multiply = (x,y) => {
    return x * y ;
}
console.log(multiply(5,'a'));
console.log(multiply(5,6));

const greet = () => {
    console.log("If function without arguments , we must use parantesis")
}

greet();

//  IMPLICIT RETURN : section 100 in udemy
// regular function expression
// const isEven2 = function (num) {
//     return num % 2 === 0 
// }
// arrow function without parens 
// const isEven = num => {
//     return num % 2 === 0;
// }

const isEven2 = num => (//Implict return
    num % 2 === 0
)
const isEven3 = num => num % 2 === 0; // one-liner implict return

console.log('isEven2: ',isEven2(5));
console.log('isEven3:' ,isEven3(5));

const nums = [1,2,3,4,5,6,7,8,];
const doubles1 = nums.map(function(n){
    return n * 2;
})
console.log(doubles1);

const doubles2 = nums.map(n => {
    return n * 2;
})
console.log(doubles2);

const doubles3 = nums.map(n => n * 2);
console.log(doubles3);

// another example -regular way
const parityList = nums.map(function(n){
    if(n % 2 === 0) return 'even';
    return 'odd';
})
console.log(parityList);
// with arrow func
const parityList2 = nums.map(n => {
    if(n % 2 === 0) return 'even';
    return 'odd';
})
console.log(parityList2);

// with arrow func shorter - notice that if no return i got to change from  { }
//  to ()
const parityList3 = nums.map(n => (
    n % 2 === 0 ? 'even' : 'odd'
));
console.log(parityList3);

// one line 
const parityList4 = nums.map(n => n % 2 === 0 ? 'even' : 'odd');
console.log(parityList4);
