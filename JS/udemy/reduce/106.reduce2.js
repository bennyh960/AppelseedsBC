// finding max

let grades = [91, 89, 100, 93, 68, 98, 90, 94];

const topScore = grades.reduce((max, currVal) => {
  if (currVal > max) return currVal;
  return max;
});

console.log(topScore);

// shorter option use Math.max
const topScore2 = grades.reduce((max, currVal) => Math.max(max, currVal));

console.log(topScore2);

// ==========================
const sum = [10, 20, 30, 40, 50].reduce((sum, currVal) => sum + currVal, 1);
console.log(sum);
