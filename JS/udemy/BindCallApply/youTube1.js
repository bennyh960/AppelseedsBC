//call
let mammal = function (legs) {
  this.legs = legs;
};

let cat = function (legs, isDomesticated) {
  mammal.call(this, legs);
  this.isDomesticated = isDomesticated;
};

let lion = new cat(4, false);
//console.log(lion);

//apply
let numArray = [1, 2, 3];
Math.min(1, 2, 3);
console.log(Math.min([1, 2, 3])); //min not working on array
console.log(Math.min.apply(null, numArray)); // here we borrow the functionallity from math into nothing , but we add array to it

//bind
let button = function (content) {
  this.content = content;
};

button.prototype.click = function () {
  console.log(`${this.content} clicked`);
};

let newBtn = new button("add");
let looseClick = newBtn.click;
let boundBtn = newBtn.click.bind(newBtn);

newBtn.click();
looseClick();
boundBtn();
