function getFocus(idx) {
  const input = document.querySelectorAll("input")[idx];
  const current = input.nextElementSibling;
  current.focus();
}

document.addEventListener("paste", function (e) {
  // if the target is a text input
  //   console.log(e);
  if (e.target.type === "text") {
    var data = e.clipboardData.getData("Text");
    // split clipboard text into single characters
    data = data.split("");
    // find all other text inputs
    [].forEach.call(document.querySelectorAll("input[type=text]"), (node, index) => {
      // And set input value to the relative character
      node.value = data[index];
    });
  }
});

const x = document.getElementsByTagName("input")[0];
// console.log(x.type);
