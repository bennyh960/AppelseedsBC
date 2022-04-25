const handleEvent = () => {
  console.log("Im working");
};
const handleEvent2 = () => {
  console.log("Im working also and im call after first function");
};

const myBox = document.querySelector(".box");

//? myBox.onclick = handleEvent2;

// js events
myBox.addEventListener("click", (e) => {
  //   console.log("i'm a call back function");
  //   console.log(e.target);
  console.log(input.value);
});

const input = document.querySelector("input");
// input.addEventListener("change", (e) => {
//   console.dir(e.target.value);
// });
