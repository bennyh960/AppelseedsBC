// the constructor function
function Arr(arr) {
  this.arr = arr;
}

// instance of that function (will use for filter reduce and find)
const myArr = new Arr([1, 2, 3, 4, 5]);

// create a function to that cunstractor
Arr.prototype.Filter = function (callBack) {
  const newArr = [];
  for (let element of this.arr) {
    if (callBack(element)) newArr.push(element);
  }
  return newArr;
};

// create new filtered array with using my Filter func
const evenArray = myArr.Filter((e) => {
  return true ? e % 2 === 0 : false;
});

/// create new filtered array with THE ORIGINAL filter func of Array constructor
const foryouguys = [1, 2, 3, 4, 5].filter((e) => {
  return true ? e % 2 === 0 : false;
});

console.log("================== filter ===============================");
console.log(evenArray);
console.log(foryouguys);

console.log("================== find ===============================");

// create find methode to Arr constructor
Arr.prototype.Find = function (callBack) {
  for (let element of this.arr) {
    if (callBack(element)) {
      return element;
    }
  }
};

// using same instance myArr [1,2,3,4,5]
const aboveOne = myArr.Find((e) => {
  return e > 1;
});
console.log(aboveOne);

// another instance for find
const str = new Arr("hello");
console.log(
  str.Find((i) => {
    return i === "l";
  })
);

console.log("======================== Reduce =========================================");
// remainder
// function Arr(arr){
//   this.arr = arr;
// }
// myArr = new Arr([1,2,3,4,5])

Arr.prototype.Reduce = function (callBack, initalVal) {
  // console.log(typeof initalVal);
  let accumoletor = initalVal !== undefined ? initalVal : this.arr[0];
  let startLoop = initalVal === undefined ? 1 : 0;

  for (let i = startLoop; i < this.arr.length; i++) {
    accumoletor = callBack(accumoletor, this.arr[i]);
  }
  return accumoletor;
};

const sumMyArr = myArr.Reduce((a, b) => {
  return a + b;
});
const sumMyArrWithInitial = myArr.Reduce((a, b) => {
  return a + b;
}, 10);

const multyMyArr = myArr.Reduce((a, b) => {
  return a * b;
});
const multyMyArrWithInitail = myArr.Reduce((a, b) => {
  return a * b;
}, 2);

// myArr = [1,2,3,4,5]
console.log(sumMyArr);
console.log(sumMyArrWithInitial);
console.log(multyMyArr);
console.log(multyMyArrWithInitail);
