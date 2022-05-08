// Create an object with a name property. The object should
// also have a method that prints its name, and another
// method that prints its name after a second with the help of
// setTimeOut. in this exercise, you are not allowed to use
// arrow functions.

const obj = {
  name: "Benny",
  printName() {
    console.log(this.name);
  },
  printDelay() {
    //printDelay is bellong to obj but setTimeout is bellong to window after first call then we bind the callback func in "setTimeout" "this" into obj instead window
    return setTimeout(
      function () {
        console.log(this.name);
      }.bind(this),
      1000
    );
  },
};

obj.printDelay();
