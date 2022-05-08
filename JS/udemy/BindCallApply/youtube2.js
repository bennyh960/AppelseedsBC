let obj = {
  num: 2,
};

let addToThis = function (a, b, c) {
  return this.num + a + b + c;
};

const x = addToThis.call(obj, 5, 3, 2);
console.log(x);
const y = addToThis.apply(obj, [5, 3, 2]);
console.log(y);

//bind
const z = addToThis.bind(obj);
console.log(z(5, 3, 2));
