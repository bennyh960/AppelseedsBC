// const url = "https://pokeapi.co/api/v2/pokemon/";
const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150";
const urlByname = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

// fetch(url)
//   .then((data) => data.json())
//   .then((val) => console.log(val))
//   .catch((e) => console.log(e));

async function fetchData(url) {
  const data = await fetch(url);
  if (!data.ok) throw "Its Error";
  return data.json();
}

// fetchData(url).then((data) => console.log(data.results[0]));

async function seeData(url, i) {
  const all = await fetchData(url);
  const pok = await fetchData(all.results[i].url);
  const img = await fetch(pok.sprites.other.dream_world.front_default);
  console.log(img.url);
  document.querySelector("div").style.background = `url("${img.url}") no-repeat center center/contain`;
  document.querySelector("div").style.width = "200px";
  document.querySelector("div").style.height = "200px";
}
let num = 0;
document.querySelector("#next").addEventListener("click", () => {
  seeData(url, num);
  num += 1;
});
