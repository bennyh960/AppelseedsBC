const btn = document.querySelector("button");
const input = document.querySelector("input");
const containerImg = document.querySelector(".smily-container");

// let bool = true;

let imgList = [];
btn.addEventListener("click", () => {
  for (let i = 0; i < input.value; i++) {
    const img = document.createElement("img");
    img.src = "./smily.png";
    img.style.width = "50px";
    containerImg.appendChild(img);
    imgList.push(img);
  }
});

// ninja unfinished yet
input.addEventListener("click", () => {
  if (containerImg.childElementCount > 0) {
    input.value = "";
    while (imgList.length > 0) {
      containerImg.removeChild(imgList[0]);
      imgList.shift();
    }
  }
});
