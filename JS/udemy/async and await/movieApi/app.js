//fetching data
async function getMovie(userInput) {
  const getApi = await fetch(`http://www.omdbapi.com/?t=${userInput}&apikey=57d5e741`);
  const apiObj = await getApi.json();
  if (apiObj.Response === "True") {
    return apiObj;
  } else {
    throw "Error: Movie not found";
  }
}

const elements = {
  userInput: document.querySelector("input"),
  poster: document.querySelector(".poster"),
  title: document.querySelector(".title"),
  genere: document.querySelector(".genere"),
  year: document.querySelector(".year"),
  plot: document.querySelector(".plot"),
  director: document.querySelector(".director"),
  actors: document.querySelector(".actors"),
  rating: document.querySelector(".rating"),
};

function setElementInDocument(movie, poster, title, genere, year, plot, director, actors, rating) {
  poster.style.background = `url("${movie.Poster}") no-repeat center center/contain`;
  title.innerHTML = `<h2>${movie.Title}</h2>`;
  genere.innerHTML = "<b>Genere:</b> " + movie.Genre;
  year.innerHTML = "<b>Year:</b> " + movie.Year;
  plot.innerHTML = "<b>Plot:</b> " + movie.Plot;
  director.innerHTML = "<b>Director:</b> " + movie.Director;
  actors.innerHTML = "<b>Actors:</b> " + movie.Actors;
  let strRating = "";
  movie.Ratings.forEach((site) => {
    strRating += "<b>" + site.Source + ":</b> " + site.Value + "</br>";
  });
  rating.innerHTML = "<b>Rating:</b><br> " + strRating;
}

//user search for movie
document.querySelector("button").addEventListener("click", async () => {
  const { userInput, poster, title, genere, year, plot, director, actors, rating } = elements;
  const movie = await getMovie(userInput.value)
    .then((val) => setElementInDocument(val, poster, title, genere, year, plot, director, actors, rating))
    .catch((e) => {
      //   document.querySelector(".container").innerHTML = e;
      //   document.getElementById("searchBar").ariaPlaceholder = "xx";
      console.log("Error: ", e);
    });
  //   const data = await setElementInDocument(movie, poster, title, genere, year, plot, director, actors, rating);
});
