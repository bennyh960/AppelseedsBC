// sequential request
// async function get3pokemon() {
//   const poke1 = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
//   const poke2 = await axios.get("https://pokeapi.co/api/v2/pokemon/2");
//   const poke3 = await axios.get("https://pokeapi.co/api/v2/pokemon/3");
//   console.log(poke1.data.name, poke2.data.name, poke3.data.name);
// }
// paralell request
async function get3pokemon() {
  const prom1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
  const prom2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
  const prom3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");
  const poke1 = await prom1;
  const poke2 = await prom2;
  const poke3 = await prom3;
  console.log(poke1.data.name, poke2.data.name, poke3.data.name);
}

get3pokemon();
