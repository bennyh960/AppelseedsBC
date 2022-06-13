// Object property shortend
const name = "Benny";
const age = 35;

const obj = {
  name,
  age: age,
  location: "Ashkelon",
};

console.log(obj);
const obj2 = {
  name1: "xyz",
  age1: "122",
  location: "Ashkelon",
};

const { name1: user1Name, age1: user1Age, country = "israel" } = obj2;
// console.log(user1Name);
console.log(obj2);
console.log(country);
