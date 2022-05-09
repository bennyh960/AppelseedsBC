// Write a function that takes a number as an argument and returns a Promise
// that tests if the value is less than or greater than the value 10.
// If it is greater than 10 it is resolved, if it is less than 10 it is rejected.
// Call the function and print the resolve and reject in a .then, .catch.
// Submit the file to Hive.

const greaterThan = (num) => {
  return new Promise((resolve, reject) => {
    if (num > 10) resolve(`${num} is greater than 10`);
    else reject(`ERROR:${num} is lower than 10`);
  });
};

greaterThan(9)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

greaterThan(11)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
