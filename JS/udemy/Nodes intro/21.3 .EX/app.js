const text = document.querySelector("textarea");
const btn = document.querySelector("button");

let content = "";
// if (content.length < 99) {
text.addEventListener("keyup", (e) => {
  content = e.target.value;
  const charLeft = document.querySelector("#charLeft");
  charLeft.textContent = ` ${100 - content.length} characters left.`;
});
// }

btn.addEventListener("click", () => {
  if (content.length < 10) {
    btn.textContent = ` ${100 - content.length} characters left.`;
  } else {
    btn.type = "submit";
  }
});

btn.addEventListener("mouseover", () => {
  btn.textContent = "submit";
});
