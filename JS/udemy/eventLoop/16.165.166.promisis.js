const btn = document.querySelector("button");
// setTimeout(() => {
//   btn.style.transform = `translateX(100px)`;
//   setTimeout(() => {
//     btn.style.transform = `translateX(200px)`;
//     setTimeout(() => {
//       btn.style.transform = `translateX(300px)`;
//     }, 1000);
//   }, 1000);
// }, 1000);

// const moveX = (element, amount, delay, callBack) => {
//   setTimeout(() => {
//     element.style.transform = `translateX(${amount}px)`;
//     if (callBack) callBack();
//   }, delay);
// };

// moveX(btn, 100, 1000, () => {
//   moveX(btn, 200, 1000, () => {
//     moveX(btn, 300, 1000, () => {
//       moveX(btn, 400, 1000);
//     });
//   });
// });

// const moveX = (element, amount, delay, onSuccess, onFailure) => {
//   const bodyBoundary = document.body.clientWidth;
//   const elRight = element.getBoundingClientRect().right;
//   const currLeft = element.getBoundingClientRect().left;
//   if (elRight + amount > bodyBoundary) {
// console.log("Done - Cannot go that far");
//   } else {
//     setTimeout(() => {
//       element.style.transform = `translateX(${currLeft + amount}px)`;
//       if (onSuccess) onSuccess();
//     }, delay);
//   }
// };

// moveX(btn, 100, 1000, () => {
//   moveX(btn, 100, 1000, () => {
//     moveX(btn, 100, 1000, () => {
//       moveX(btn, 1000, 1000);
//     });
//   });
// });
const moveX = (element, amount, delay, onSuccess, onFailure) => {
  const bodyBoundary = document.body.clientWidth;
  const elRight = element.getBoundingClientRect().right;
  const currLeft = element.getBoundingClientRect().left;
  if (elRight + amount > bodyBoundary) {
    onFailure();
  } else {
    setTimeout(() => {
      element.style.transform = `translateX(${currLeft + amount}px)`;
      onSuccess();
    }, delay);
  }
};

// moveX(
//   btn,
//   100,
//   1000,
//   () => {
//sucess
//     moveX(
//       btn,
//       400,
//       100,
//       () => {
//sucess
//         moveX(
//           btn,
//           800,
//           100,
//           () => {
//             console.log("cool");
//           },
//           () => {
//             console.log("bad");
//           }
//         );
//       },
//       () => {
//         alert("bad");
//       }
//     );
//   },
//   () => {
//failure
//     alert("CANNOT MOVE");
//   }
// );

const moveXPromisis = (element, amount, delay, onSuccess, onFailure) => {
  const bodyBoundary = document.body.clientWidth;
  const elRight = element.getBoundingClientRect().right;
  const currLeft = element.getBoundingClientRect().left;
  if (elRight + amount > bodyBoundary) {
    onFailure();
  } else {
    setTimeout(() => {
      element.style.transform = `translateX(${currLeft + amount}px)`;
      onSuccess();
    }, delay);
  }
};

// moveXPromisis(btn, 100, 1000)
//   .then(() => moveXPromisis(btn, 100, 100))
//   .then(() => moveXPromisis(btn, 200, 100))
//   .then(() => moveXPromisis(btn, 300, 100))
//   .then(() => moveXPromisis(btn, 50, 100))
//   .then(() => moveXPromisis(btn, 50, 100))
//   .catch((position) => {
//     alert("CANNOT MOVE FURTHER");
//   });
