// // original code
// function getSum(arr1, arr2){
//     const sum = 0;
//     for (let i=0; i < arr1.length; i++){
//     sum += arr1[i];
//     }
//     for (let i=0; i < arr2.length; i++){
//     sum += arr2[i];
//     }
//     }
//     getSum([1,2,3][5,66,23]);

// What is wrong with this code?
// 1. First find the line that contains the problem. Write it down.
// ? line 20 fixed by adding "," , also line 9 changed from const to let
// 2. Which debug method did you use to find the bug?
// ? i used vscode debuger
// 3. Explain the bug in your own words.
// ? getsum accept 2 argument and we passed to it undefind argument
// ? primitive const variable cant be change
// 4. Fix the code and submit it all.
// ?the code is fixed

// fixed code
function getSum(arr1, arr2) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
    console.log(arr2[i]);
  }
  //   console.log(arr2[0]);
  //   console.log(sum);
}
getSum([1, 2, 3], [(5, 66, 23)]);
