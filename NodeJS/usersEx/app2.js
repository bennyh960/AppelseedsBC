import fs from "fs";
import uniqid from "uniqid";

// fs.writeFileSync("pokemon.json", "");

// * Load Pokemon
const loadPokemons = () => {
  try {
    const pokemonBuffer = fs.readFileSync("pokemon.json");
    const pokemonStr = pokemonBuffer.toString();
    const pokemonObj = JSON.parse(pokemonStr);
    // console.log(pokemonObj);
    return pokemonObj;
  } catch (error) {
    console.log("Not data", error);
    return [];
  }
};

// * Save on file
const saveData = (data) => {
  const dataStr = JSON.stringify(data);
  fs.writeFileSync("pokemon.json", dataStr);
};

// loadPokemons();

// * Add pokemon
const addPokemon = (newPokemon) => {
  const pokemons = loadPokemons();
  //   console.log(pokemons);
  const duplicate = pokemons.filter((p) => p.id === newPokemon.id);
  if (duplicate.length === 0) {
    pokemons.push({ ...newPokemon, id: uniqid() });
    saveData(pokemons);
    console.log("added new pokemon:", newPokemon.name);
  } else {
    console.log(newPokemon.name, "already exist");
  }
};

// ? Add invoke functions
// addPokemon({ name: "Dragonite", atk: 300, def: 250, spa: 200, spd: 300, speed: 280 });
// addPokemon({ name: "Tyrnitar", atk: 330, def: 350, spa: 100, spd: 220, speed: 210 });

// * Delete
const deleter = (deletName) => {
  const pokemons = loadPokemons();
  //   pokemons.find(p=>p.name === deletObj.name)
  const others = pokemons.filter((p) => p.name !== deletName);
  if (pokemons.length === others.length) {
    console.log("Not found this name: ", deletName);
  } else {
    saveData(others);
    console.log("Deleted:", deletName);
  }
};

// deleter("Dragonite");

// * Update
const update = (pokemonName, { atk, def, spa, spd, speed }) => {
  const pokemons = loadPokemons();
  const index = pokemons.findIndex((p) => p.name === pokemonName);
  if (index !== -1) {
    pokemons[index] = { ...pokemons[index], atk, def, spa, spd, speed };
    saveData(pokemons);
    //   console.log(pokemons[index]);
  } else {
    console.log("Pokemon not found", pokemonName);
  }
};

update("Tyrnitar", { atk: 320, def: 300, spa: 120, spd: 250, speed: 200 });
