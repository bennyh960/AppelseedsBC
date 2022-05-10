const url = "https://swapi.dev/api/people/";

//fetch data and return obj of that data
async function fetchData(url) {
  const data = await fetch(url);
  if (!data.ok) {
    throw new Error("Unable to get data from url");
  }
  return data.json();
}

// Create new array of object with desire keys
function setDataInArrOfObj(array, homePlanet) {
  return array.map((e, i) => {
    return {
      name: e.name,
      height: e.height,
      hair_color: e.hair_color,
      planet: {
        name: homePlanet[i].name,
        population: homePlanet[i].population,
      },
    };
  });
}

//use all function above to get array with desired content of k and value.
async function getArrayData(url) {
  const { results } = await fetchData(url);
  const homePlanet = [];
  for (let people = 0; people < results.length; people++) {
    homePlanet.push(await fetchData(results[people].homeworld));
  }
  //another methode with promise all
  //   const homePlanet = await Promise.all(
  //     results.map((people) => {
  //       return fetchData(people.homeworld);
  //     })
  //   );

  return setDataInArrOfObj(results, homePlanet);
}

// getArrayData(url).then((val) => console.log(val[0]));

// ==================create table and elements
const table = document.querySelector(".table");

async function createTable(rows, columns, arr) {
  for (let r = 0; r < rows; r++) {
    const tempArr = arr[r];
    const keys = Object.keys(tempArr);
    if (r === 0) drawTitle(keys);
    const row = document.createElement("div");
    row.classList.add("row");
    row.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    table.appendChild(row);
    for (let c = 0; c < columns; c++) {
      if (c < columns - 2) {
        const col = document.createElement("div");
        row.appendChild(col);
        col.textContent = tempArr[keys[c]];
      } else if (c !== 4) {
        const col1 = document.createElement("div");
        const col2 = document.createElement("div");
        row.append(col1, col2);
        // console.log(r, c, tempArr[keys[c]]);
        col1.textContent = tempArr[keys[c]].name;
        col2.textContent = tempArr[keys[c]].population;
      }
    }
  }
}

//draw title name
function drawTitle(arr) {
  const container = document.querySelector(".title2");
  arr.forEach((key, idx, arr) => {
    if (idx < arr.length - 1) {
      const head = document.createElement("div");
      container.appendChild(head);
      head.textContent = key;
    } else {
      const head1 = document.createElement("div");
      const head2 = document.createElement("div");
      head1.textContent = "Planet name";
      head2.textContent = "Popolation";
      container.append(head1, head2);
    }
  });
}

const paintPage = async () => {
  createTable(10, 5, await getArrayData(url));
};
paintPage();
