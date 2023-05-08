// Destructing the Schema and model
const { Schema, model } = require("mongoose");

// creating a new Schema, same thing as mongoose.Schema
const pokemonSchema = new Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
});

// creating a new model, same thing as mongoose.model
const Pokemon = model("Pokemon", pokemonSchema);

module.exports = Pokemon;
