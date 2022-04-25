const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const text = document.querySelector(".text");
// const input = document.querySelector("input");

let size = 16;
plus.addEventListener("click", () => {
  size < 100 && size++;
  text.style.fontSize = `${size}px`;
  // console.log(size);
});
minus.addEventListener("click", () => {
  size > 6 && size--;
  // console.log(size);
  text.style.fontSize = `${size}px`;
  // console.log(text.style.fontSize);
});
