// this is what we done in 186 section - in parallel
// async function get3pokemon() {
//     const prom1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
//     const prom2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
//     const prom3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");
//     const poke1 = await prom1;
//     const poke2 = await prom2;
//     const poke3 = await prom3;
//     console.log(poke1.data.name, poke2.data.name, poke3.data.name);
//   }

async function get3pokemon() {
  const prom1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
  const prom2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
  const prom3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");
  //promise all accept array of promises
  const results = await Promise.all([prom1, prom2, prom3]);
  printPokemon(results);
}

get3pokemon();

function printPokemon(arr) {
  arr.forEach((element) => {
    console.log(element.data.name);
  });
}
