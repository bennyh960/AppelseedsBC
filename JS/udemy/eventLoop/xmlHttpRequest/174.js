const btn = document.querySelector("#btn");
const div = document.querySelector("#joke");
const title = document.querySelector("h2");
const myReq = new XMLHttpRequest();

btn.addEventListener("click", () => {
  myReq.onload = function () {
    const data = JSON.parse(this.responseText);
    // console.log(data.contents);
    div.textContent = data.contents.jokes[0].joke.text;
    title.textContent = data.contents.jokes[0].joke.title;
  };

  myReq.onerror = function (err) {
    console.log("ERROR: ", err);
  };

  myReq.open("get", "https://api.jokes.one/jod", true);
  myReq.setRequestHeader("Accept", "application/json");
  myReq.send();
  //   console.log("xxx");
});
