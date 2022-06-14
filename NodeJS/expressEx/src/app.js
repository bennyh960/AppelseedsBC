import express from "express";
import pokemon from "./pokemon.js";

const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.get("/", (req, res) => {
  res.json(pokemon.loadPokemons());
});
app.post("/", (req, res) => {
  const { name, atk, def, spa, spd, speed } = req.body;
  res.send(pokemon.addPokemon({ name, atk, def, spa, spd, speed }));
  res.json(pokemon.loadPokemons());
});

app.delete("/?id", (req, res) => {
  const { name } = req.params.name;
  //   req.qu
  res.send(pokemon.deleter());
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
