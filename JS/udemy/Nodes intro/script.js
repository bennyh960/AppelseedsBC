const title2 = document.querySelector(".start-here");

title2.innerText = "Main title";
// console.log(title2.innerText);

const anotherSubTitle = document.createElement("li");
anotherSubTitle.style.listStyleType = "circle";
anotherSubTitle.innerText = "sub title 4";

const ul = document.querySelector("li ul");
ul.append(anotherSubTitle);
console.log(ul.lastChild.innerText);

const parentOfparentUl = document.querySelector("body ul");
// console.log(parentOfparentUl.lastElementChild.innerText);
parentOfparentUl.lastElementChild.remove();
// parentOfparentUl.lastChild.remove();

const title = document.querySelector("title");
title.innerText = "“Master Of The Dom";

// Change the text of the <p> element ot something else of your
const newP = document.querySelector("#changeme");
newP.innerText = "Hello beutiful world!";
