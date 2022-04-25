const navigator = document.createElement("nav");
document.body.appendChild(navigator);
// console.dir(navigator);

// parent.appendChild(newh2);

navigator.style.width = "100vw";
navigator.style.height = "50px";
navigator.style.background = "rgb(100,100,100)";
navigator.style.display = "flex";
// navigator.style.justifyContent = "flex-end";
navigator.style.alignItems = "center";

const firstLink = document.createElement("a");
const secLink = document.createElement("a");
const thirdLink = document.createElement("a");

firstLink.textContent = "Home";
secLink.textContent = "About";
thirdLink.textContent = "contact";

const linkList = [firstLink, secLink, thirdLink];
for (let link of linkList) {
  link.style.margin = "0px 5px";
  link.href = "#";
  link.style.textDecoration = "none";
  link.style.color = "black";
  link.addEventListener(
    "mouseover",
    function (event) {
      // highlight the mouseover target
      event.target.style.color = "orange";

      // reset the color after a short delay
      setTimeout(function () {
        event.target.style.color = "black";
      }, 500);
    },
    false
  );
  navigator.append(link);
}

const image2 = document.createElement("img");
image2.src =
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*";
image2.style.width = "500px";
// as last child of body
document.body.appendChild(image2);

console.log(firstLink.style.color); // it will print the color due to the first link defined by js

// const test = document.querySelector(".footer h2");
// console.log(test.textContent);
// console.log(test.style.color); // we cant get style data due to js and css not connected
