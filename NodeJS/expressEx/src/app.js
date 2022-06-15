import express from "express";
import pokemon from "./pokemon.js";

const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.get("/", (req, res) => {
  res.json(pokemon.loadPokemons());
});
app.post("/", (req, res) => {
  //   const { name, atk, def, spa, spd, speed } = req.body;
  pokemon.addPokemon(req.body);
  res.send(pokemon.loadPokemons());
  //   res.send(pokemon.addPokemon(JSON.parse(req.body)));
  //   console.log(typeof req.body);
  //   res.json(pokemon.loadPokemons());
});

app.put("/:name", (req, res) => {
  //   const { name, atk, def, spa, spd, speed } = req.body;
  pokemon.update(req.params.name, req.body);
  console.log(req.params);
  //   console.log(atk, def);
  res.send(pokemon.loadPokemons());
});

app.delete("/:name", (req, res) => {
  const { name } = req.params;
  //   req.qu
  res.send(pokemon.deleter(name));
  //   res.json(pokemon.loadPokemons());
  console.log(req.params);
});

// app.post("/", (req, res) => {
//   pokemon.addPokemon(req.body);
//   res.json(pokemon.loadPokemons());
// });

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
