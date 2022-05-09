//here it will print data as promise first
// function getData() {
//   const data = axios.get("https://swapi.dev/api/planets/?page=2");
//   console.log(data);
// }

//here it will print data in correct way
// function getData2() {
//   const data = axios.get("https://swapi.dev/api/planets/?page=2").then((data) => console.log(data));
// }

// getData();

//? The asynk keyword
// function greet() {
//   return "hello";
// }
// console.log(greet());

// async function greet2() {
//   return "hello";
// }
// console.log(greet2());

// greet2().then((val) => console.log("Promise resolved with :", val));

//async functions allwayes return a promise
//if the function return a value, the promise resolve with that value
//if the function throw an exception , the promise will be rejected

async function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") throw "X and Y must be numbers.";
  return x + y;
}

add("e", 5)
  .then((val) => console.log("Promise resolved with :", val))
  .catch((err) => console.log(err));

//old way to write it is with promise

const add2 = (x, y) =>
  new Promise((resolve, reject) => {
    if (typeof x !== "number" || typeof y !== "number") reject("X and Y must be numbers.");
    resolve(x + y);
  });

add2(8, 5)
  .then((val) => console.log("Promise resolved with :", val))
  .catch((err) => console.log(err));
