const nums = [2, 3, 4];
const product = nums.reduce((total, currentVal) => {
  return total * currentVal;
});
console.log(product);

// total       currentVal
// 2            3
// 6            4
// 24
