// original
// function findSmallest(a, b, c) {
//   if (a > b > c) {
//     return c;
//   } else if (a > c > b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// findSmalest(52, 66, 2);

// What is wrong with this code?
// 1. First find the line that contains the problem. Write it down.
// ? the function invoke is with typo
// 2. Which debug method did you use to find the bug?
// ? vs code debugger
// 3. Explain the bug in your own words.
// ? when we declear a function we allocate a memory space for that function.
// ? if we call function which is not decleared anywhere it will be an error.
// 4. Fix the code and submit it all.

function findSmallest(a, b, c) {
  if (a > b > c) {
    return c;
  } else if (a > c > b) {
    return a;
  } else {
    return b;
  }
}
findSmalest(52, 66, 2);
// console.log(findSmallest(52, 66, 2));
