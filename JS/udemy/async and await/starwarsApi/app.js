//create table

const table = document.querySelector(".table");

function createTable(rows, columns) {
  for (let r = 0; r < rows; r++) {
    const row = document.createElement("div");
    row.classList.add("row");
    row.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    table.appendChild(row);
    for (let c = 0; c < columns; c++) {
      const col = document.createElement("div");
      row.appendChild(col);
      col.textContent = 1;
    }
  }
}

// createTable(20, 8);

// a way for catch error with fetch
// Fetch promises only reject with a TypeError when a network error occurs. Since 4xx and 5xx responses aren't network errors, there's nothing to catch.
// fetch(url)
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error("Something went wrong");
//   })
//   .then((responseJson) => {
// Do something with the response
//     console.log(responseJson);
//   })
//   .catch((error) => {
//     console.log("benny", error);
//   });
const url = "https://swapi.dev/api/people/";

async function fetchData(url) {
  const api = await fetch(url);
  if (!api.ok) throw new Error(" Wrong url");
  const obj = await api.json();
  const planetData = await fetch(obj.homeworld);
  console.log(planetData.json());
  return obj;
}

//array of object
function desiredData(array, planetData) {
  return array.map((e, i) => {
    return {
      name: e.name,
      height: e.height,
      hair_color: e.hair_color,
      planet: {
        name: "x",
        population: "100",
      },
    };
  });
}

fetchData(url)
  .then((data) => {
    // console.log(data.results[0]);
    const newArrOfObj = desiredData(data.results);
    console.log(newArrOfObj);
  })
  .catch((err) => console.log(err));
