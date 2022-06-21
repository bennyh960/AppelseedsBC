const add = (a, b) => {
  return new Promise((res, rej) => {
    console.log("start timer");
    setTimeout(() => {
      res(a + b);
    }, 2000);
  });
};

// *regular way call promise
// add(1, 2)
//   .then((sum) => {
//     console.log("time pass and the sum is", sum);
//     add(sum, 5)
//       .then((sum2) => {
//         console.log("time pass and the sum2 is", sum2);
//       })
//       .catch((e) => console.log(e));
//   })
//   .catch((e) => console.log(e));

// * promise chiaing
add(1, 2)
  .then((sum) => {
    console.log("time pass and the sum is", sum);
    return add(sum, 3);
  })
  .then((sum2) => {
    console.log("time pass and the sum is", sum2);
  })
  .catch((e) => console.log(e));
