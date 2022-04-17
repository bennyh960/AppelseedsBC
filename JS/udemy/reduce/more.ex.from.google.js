// Turn an array of numbers into a total of all the numbers
function total(arr) {
  return arr.reduce((a, b) => (a = a + b));
}

console.log(total([1, 2, 3])); // 6

console.log("=======================================================================");

// Turn an array of numbers into a long string of all those numbers.
function stringConcat(arr) {
  return arr.reduce((a, b) => {
    // a = a.toString() + b.toString();
    return a.toString() + b.toString();
    // return a;
  });
}

console.log(stringConcat([1, 2, 3])); // "123"

console.log("=======================================================================");
// Turn an array of voter objects into a count of how many people voted

function totalVotes(arr) {
  return arr.reduce((acc, cur) => {
    if (cur.voted) {
      console.log(acc, cur);
      return (acc += 1);
    }
    return acc;
  }, 0);
}

var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];
console.log(totalVotes(voters)); // 7

console.log("=======================================================================");
// Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
function shoppingSpree(arr) {
  return arr.reduce((totalPrice, itemPrice) => {
    totalPrice += itemPrice.price;
    return totalPrice;
  }, 0);
}

var wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

console.log(shoppingSpree(wishlist)); // 227005

console.log("=======================================================================");
// Given an array of arrays, flatten them into a single array
function flatten(arr) {
  return arr.reduce((acc, cur) => {
    // console.log(acc, cur);
    return acc.concat(cur);
  });
}

var arrays = [["1", "2", "3"], [true], [4, 5, 6]];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

console.log("=======================================================================");
// 6) Given an array of potential voters, return an object representing the results of the vote
// Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.

var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

function voterResults(arr) {
  return arr.reduce((acc, cur) => {
    if (cur.age <= 25) {
      acc.young ? acc.young++ : (acc.young = 1);
      if (cur.voted) acc.youngVoted ? acc.youngVoted++ : (acc.youngVoted = 1);
    }
    if (cur.age <= 35 && cur.age >= 26) {
      acc.youngMid ? acc.youngMid++ : (acc.youngMid = 1);
      if (cur.voted) acc.youngMidVoted ? acc.youngMidVoted++ : (acc.youngMidVoted = 1);
    }
    if (cur.age <= 55 && cur.age >= 36) {
      acc.old ? acc.old++ : (acc.old = 1);
      if (cur.voted) acc.oldVoted ? acc.oldVoted++ : (acc.oldVoted = 1);
    }
    return acc;
  }, {});
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4 
}
*/

console.log("=======================================================================");
// Write a function called addKeyAndValue which accepts 3 parameters an
// array of objects, key and value and returns the array of objects passed to it
// .with each object now including the key and value passed to the function

const arr = [
  {
    k1: 10,
    k2: 20,
    k3: 30,
  },
  {
    k1: 110,
    k2: 120,
    k3: 130,
  },
  {
    k1: 210,
    k2: 220,
    k3: 230,
  },
];

const addKeyAndValue = (arrOfobj, key, value) => {
  return arrOfobj.reduce((acc, cur) => {
    cur[key] = value;
    acc.push(cur);
    return acc;
  }, []);
};

console.log(addKeyAndValue(arr, "numOfkids", 10));
