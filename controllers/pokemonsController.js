const express = require("express");
const router = express.Router();
const Pokemon = require("../models/pokemon");

// Seed Route
router.get("/seed", async (req, res) => {
  try {
    await Pokemon.create([
      { name: "Bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur.jpg" },
      { name: "Ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur.jpg" },
      { name: "Venusaur", img: "http://img.pokemondb.net/artwork/venusaur.jpg" },
      {
        name: "Charmander",
        img: "http://img.pokemondb.net/artwork/charmander.jpg",
      },
      { name: "Charizard", img: "http://img.pokemondb.net/artwork/charizard.jpg" },
      { name: "Squirtle", img: "http://img.pokemondb.net/artwork/squirtle.jpg" },
      { name: "Wartortle", img: "http://img.pokemondb.net/artwork/wartortle.jpg" },
    ]);
    res.redirect("/pokemons");
  } catch (err) {
    res.status(400).send(err);
  }
});

// I.N.D.U.C.E.S
// ==============
// Index
router.get("/", async (req, res) => {
  console.log("Index Controller Func. running...");
  try {
    const foundPokemon = await Pokemon.find({});
    res.status(200).render("pokemons/Index", { pokemons: foundPokemon });
  } catch (err) {
    res.status(400).send(err);
  }
});

// New // renders a form to create a new fruit
router.get("/new", (req, res) => {
  res.render("pokemons/New");
});

// Create // recieves info from new route to then create a new fruit w/ it
router.post("/", async (req, res) => {
  try {
    // req.body.readyToEat = req.body.readyToEat === "on";
    const newPokemon = await Pokemon.create(req.body);
    // console.log(newFruit);
    //console.log(fruits);
    // redirect is making a GET request to whatever path you specify
    res.redirect("/pokemons");
  } catch (err) {
    res.status(400).send(err);
  }
});

// Show
router.get("/:id", async (req, res) => {
  try {
    // We are using the id given to us in the URL params to query our database.
    const foundPokemon = await Pokemon.findById(req.params.id);
    res.render("pokemons/Show", {
      //second param must be an object
      pokemon: foundPokemon,
      //there will be a variable available inside the jsx file called pokemon, its value is pokemons[req.params.indexOfPokemonsArray]
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
