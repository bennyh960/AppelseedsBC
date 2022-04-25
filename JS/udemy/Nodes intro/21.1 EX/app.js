const btn = document.querySelector("button");
const input = document.querySelector("input");

let age = 0;

input.addEventListener("keyup", (e) => {
  age = e.target.value;
  console.dir(age);
});

input.placeholder = "Age";

btn.addEventListener("click", () => {
  age > 18 ? alert("you can drink appear") : alert("You are too young");
});
