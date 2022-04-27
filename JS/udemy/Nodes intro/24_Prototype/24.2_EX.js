function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

const mewtwo = new Pokemon("Mewtwo", "Psychic", ["Psytrike", "Recover", "Shadow Ball", "Aura Sphere"]);
const lugia = new Pokemon("Lugia", "Fly-Psychic", ["Toxic", "Recover", "Subtitue", "Aeroblast"]);
const dragonite = new Pokemon("Dragonite", "Dragon-Fly", ["Outrage", "Rosst", "Dragon Dance", "Dual Wing Beast"]);

Pokemon.prototype.callPokemon = function () {
  return `${this.name} i choose you!`;
};
Pokemon.prototype.attack = function (a) {
  return `${this.name} used ${this.attackList[a]}`;
};

console.log(mewtwo.callPokemon());
console.log(mewtwo.attack(0));
console.log(lugia.callPokemon(0));
console.log(lugia.attack(1));
// console.log(lugia.attack(4));
