// Question 1:
// In your own words what will this point to and why?(Note this is the global scope)
console.log(this);

// ? answere 1 : window object

console.log("================= Question 2 ===========================");
// Question 2:
// a. In your own words what will this point to and why.
//? Window again , Arrow functions don't get their 'own' this. they get the nearest local eaxeution context
// b. How can you fix this code.
// ? Changing to traditional function object >> ,greet(){do somthing} , i add it as greet2
const myObj = {
  name: "Timmy",
  greet: () => {
    console.log(this);
    console.log(`Hello ${this.name}`);
  },
  greet2() {
    console.log(`Hello ${this.name}`);
  },
};

console.log(myObj.greet());
console.log(myObj.greet2());
console.log("================= Question 3 ===========================");

// Question 3:
// In your own words what will this point to and why?
const myFuncDec = function () {
  console.log(this);
};
//?answere : still window due to the variable myFuncDec call to function , and this variable in window scope
console.log(myFuncDec());

console.log("================= Question 4 ===========================");
// Question 4:
// In your own words what will this point to and why?
const myFuncArrow = () => {
  console.log(this);
};
myFuncArrow();
// ? still window do to arrow function dont get thier on this, in this case the function called by window (the arrow function belong to global window)

console.log("================= Question 5 ===========================");
// Question 5:
// a. In your own words what will this point to and why.
// ?still window due to "addEventListener" is window function. and the arrow function call back this and it refere to closest context which is addeventlistner.

// b. How can you fix this code.
// ? first add an event
// ? if we want to refer to element we need to change the callback func to regular function , now the "addeventlistner" belongs to "element" "obj" which is call to this . then this refer to "element"
// const x = document.querySelector(".element");

// x.addEventListener("click", () => {
//   console.log(this);
// });

// x.addEventListener("click", function () {
//   console.log("not arrow function:", this);
// });

// function func() {
//   //   console.log(1, this);
//   const x = function () {
//     return (() => {
//       console.log(this);
//     })();
//   };
//   return x;
// }

// func()();
