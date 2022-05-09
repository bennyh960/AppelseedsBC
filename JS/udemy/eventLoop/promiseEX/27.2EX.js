// Write two functions that use Promises that you can chain.
// The first function, makeAllCaps(), will take in an array of words and capitalize
// them, and then the second function, sortWords(), will sort the words in
// alphabetical order. If the array contains anything but strings, it should throw
// an error.
// Call the functions once with an array of words and call it once with an array
// that includes at least one item that is not a word. Print the resolve and reject
// in a .then, .catch.

const makeAllCaps = (arr) => {
  return new Promise((resolve, reject) => {
    arr.forEach((element, i, arr) => {
      if (typeof element !== "string")
        reject(`Err:your array is invalid. "${element}" in index ${i} is not a string is a ${typeof i}`);
      else arr[i] = element.toUpperCase();
    });
    resolve(arr);
  });
};

const sortWords = (arr) => {
  arr.sort();
  return new Promise((resolve, reject) => {
    if (arr[1] < arr[0]) reject("Err:you sort bad");
    else resolve(arr);
  });
};

const arr1 = ["lion", "cat", "zebra", "bear"];
const arr2 = ["lion", 8, "zebra", "bear"];
makeAllCaps(arr1)
  .then((data) => {
    console.log(data);
    return sortWords(data);
  })
  .then((data2) => {
    console.log(data2);
  })
  .catch((err) => {
    console.log(err);
  });
