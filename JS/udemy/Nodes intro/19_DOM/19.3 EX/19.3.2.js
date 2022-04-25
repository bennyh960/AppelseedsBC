const inputs = [...document.querySelectorAll("input")];
const buttom = document.querySelector("button");

let userInput = "";
inputs.forEach((input, idx) => {
  input.addEventListener("keyup", (event) => {
    userInput += event.target.value;
    idx < 5 && inputs[idx + 1].focus();
    // console.log(userInput);
    if (userInput.length === 6) submit(userInput);
  });
});

const form = document.querySelector("form");
const submit = (pass) => {
  if (pass === "123456") {
    form.submit();
    alert("Submited");
  }
};
// console.log(form);

inputs[0].addEventListener("paste", (event) => {
  const pasteData = event.clipboardData.getData("text");
  inputs.forEach((input, idx) => {
    input.value = pasteData[idx];
  });
  setTimeout(() => {
    submit(pasteData);
  }, 1000);
});
