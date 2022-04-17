//? every : tests whether all elements in array pass the provided function. it returned a boolean value

const words = ["dog", "dig", "log", "bag", "wag"];

words.every((word) => {
  return word.length === 3;
}); //true

words.every((word) => word[0] === "d"); //false

words.every((w) => {
  let last_letter = w[w.length - 1];
  return last_letter === "g";
}); // true

// ? some - similar to every but return if anyy of the array elements pass the test

words.some((word) => {
  return word.length === 3;
}); //true

words.some((word) => word[0] === "d"); //true

words.some((w) => {
  let last_letter = w[w.length - 1];
  return last_letter === "g";
}); // true
