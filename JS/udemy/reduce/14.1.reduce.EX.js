// max
const max = [10, 20, 32, 1, 100, 214].reduce((max, currVal) =>
  currVal > max ? currVal : max
);
console.log(max);

// also
const max2 = [10, 20, 32, 1, 100, 214].reduce((max, currVal) =>
  Math.max(max, currVal)
);

console.log(max2);
console.log("==================================");

// sum of even
const evenSum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce((sum, val) => {
  return sum + (val % 2 === 0 ? val : 0);
}, 0);

console.log(evenSum);

// average

const arr = [2, 4, 6];
const average =
  arr.reduce((sum, val) => {
    return sum + val;
  }) / arr.length;
console.log(average);
