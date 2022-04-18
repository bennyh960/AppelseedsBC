// block 1
// var b = 1;
// function someFunction(number) {
//   function otherFunction(input) {
//     return b;
//   }
//   b = 5;
//   return otherFunction;
// }
// var firstResult = someFunction(9);
// var result = firstResult(2);
// console.log(result); // 5 >>> first result invoke outer func which return inner func with 2 as argument , b is updating in outer func scope

// ====================================================================
var a = 1;
function b2() {
  a = 10;
  return;
  console.log("this line will not be printed");
  function a() {}
}
b2();
console.log(a);
//

// ===================================================

let i;
for (i = 0; i < 3; i++) {
  // console.log(i);
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 100);
  // log();
}
