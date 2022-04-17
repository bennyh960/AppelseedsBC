const nums = [2, 3, 4];
const product = nums.reduce((total, currentVal) => {
  return total * currentVal;
}, 10);
console.log(product);
