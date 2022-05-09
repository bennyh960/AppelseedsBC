//fetch methode take one mandatory arg , the path . it return a promise that resolve the response to that request
// fetch("https://swapi.dev/api/planets").then((response) => console.log(response));

// fetch("https://swapi.dev/api/planets").then((res) => console.log(res));
// fetch("https://swapi.dev/api/planets").then((res) => console.log(res.json()));

fetch("https://swapi.dev/api/planets")
  .then((res) => {
    if (!res.ok) console.log("ERROR");
    else {
      res.json().then((data) => {
        for (let planet of data.results) {
          console.log(planet.name);
        }
      });
    }
  })
  .catch((err) => {
    console.log("Somthing went wrong with fetch");
    console.log(err);
  });
