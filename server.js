const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const Pokemon = require("./models/pokemon");
//const index = require("./views/pokemons/Index.jsx");
app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

app.get("/pokemons", async (req, res) => {
  console.log("Index Controller Func. running...");
  try {
    const foundPokemon = await Pokemon.find({});
    res.status(200).render("pokemons/Index", { fruits: foundFruit });
  } catch (err) {
    res.status(400).send(err);
  }
});

// New // renders a form to create a new fruit
app.get("/pokemons/new", (req, res) => {
  res.render("poekmons/New");
});

app.post("/pokemon", async (req, res) => {
  try {
    req.body.name = req.body.name === "on";
    const newPokemon = await Pokemon.create(req.body);
    console.log(newPokemon);
    //console.log(fruits);
    // redirect is making a GET request to whatever path you specify
    res.redirect("/pokemons");
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get("/pokemons/:id", async (req, res) => {
  try {
    // We are using the id given to us in the URL params to query our database.
    const foundPokemon = await Pokemon.findById(req.params.id);
    res.render("pokemons/Show", {
      //second param must be an object
      pokemon: foundPokemon,
      //there will be a variable available inside the jsx file called fruit, its value is fruits[req.params.indexOfFruitsArray]
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

// app.get("/pokemon", (req, res) => {
//   res.send(pokemon);
// });

app.get("/pokemon", (req, res) => {
  res.render(index);
});

// Listen
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
