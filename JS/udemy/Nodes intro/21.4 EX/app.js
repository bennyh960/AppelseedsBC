const img = document.querySelector("img");
const btn = document.querySelector("button");
const title = document.createElement("h3");
title.textContent = "Click on the Bulb.";
btn.parentElement.prepend(title);
// console.log(btn.parentElement);

let bool = false;

btn.addEventListener("click", () => {
  bool ? (img.src = "./OFFbulb.jpg") && (bool = !bool) : (img.src = "./ONbulb.jpg") && (bool = !bool);
});
