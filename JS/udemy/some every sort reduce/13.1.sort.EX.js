// Use the array of numbers below and answer the following
// questions:
// 1. Sort the array of numbers from descending to ascending
// order
// 2. Sort the array of numbers from ascending to decending
// order.

const numbers = [1, -5, 666, 2, 400, 11];

const decToasc = numbers
  .slice()
  .sort((a, b) => b - a)
  .sort((a, b) => a - b);

const ascTodsc = numbers
  .slice()
  .sort((a, b) => a - b)
  .sort((a, b) => b - a);

console.log(decToasc);
console.log(ascTodsc);
console.log(numbers);
