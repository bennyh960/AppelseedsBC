// Write a function called extractOnlyValue which accepts an array of objects and a key
// and returns a new array with the value of each object at the key

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

const extractOnlyValue = (arr, key) => {
  const list = arr.reduce((accum, val) => {
    if (!Array.isArray(accum[key])) accum[key] = [];
    accum[key].push(val[key]);
    return accum;
  }, {});
  return list;
};

console.log(extractOnlyValue(arr, "k1"));

console.log("=========================================");
// ===============================================
// Write a function called countOnlyVowels which accepts a string and
// returns an object with the keys as the vowel and the values as the number
// of times the vowel appears in the string. This function should be case
// insensitive so a lowercase letter and uppercase letter should count

const countOnlyVowels = (str) => {
  let vowels = "aeoui";
  str = str.toLowerCase();
  return str.split("").reduce((acc, cur) => {
    if (vowels.includes(cur)) {
      acc[cur] ? acc[cur]++ : (acc[cur] = 1); //acc is obj
    }
    return acc;
  }, {});
};

console.log(countOnlyVowels("Hello world what a beutiful day"));

// Write a function called addKeyAndValue which accepts 3 parameters an
// array of objects, key and value and returns the array of objects passed to it
// .with each object now including the key and value passed to the function

const addKeyAndValue = (arrOfobj, key, value) => {
  return arrOfobj.reduce((acc, cur, idx) => {
    acc.push(cur);
    acc[idx][key] = value;
    return acc;
  }, []);
};

console.log(addKeyAndValue(arr, "k4", 40));
// another methode
const addKeyAndValue2 = (arrOfobj, key, value) => {
  return arrOfobj.reduce((acc, cur, idx) => {
    acc[idx][key] = value;

    return acc;
  }, arrOfobj);
};

console.log(addKeyAndValue2(arr, "k4", 40));

// another methode
const addKeyAndValue3 = (arrOfobj, key, value) => {
  return arrOfobj.reduce((acc, cur) => {
    cur[key] = value;
    acc.push(cur);
    return acc;
  }, []);
};

console.log(addKeyAndValue3(arr, "k4", 40));
