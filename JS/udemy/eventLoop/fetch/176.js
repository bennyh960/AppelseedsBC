const btn = document.querySelector("#btn");
const div = document.querySelector("#joke");
const title = document.querySelector("h2");
const url = "https://api.jokes.one/jod";

btn.addEventListener("click", () => {
  fetch(url, { headers: { Accept: "application/json" } })
    .then((res) => {
      // console.log(res.json());
      if (res.status !== 200) {
        console.log("problem:", res.status);
        return;
      }
      res.json().then((data) => {
        //   console.log(data);
        title.textContent = data.contents.jokes[0].joke.title;
        div.textContent = data.contents.jokes[0].joke.text;
      });
    })
    .catch(function (err) {
      console.log("Fetch Error: ", err);
    });
});
