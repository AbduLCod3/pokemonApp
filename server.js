const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const pokemons = require("./models/pokemons");

//Middleware
const reactViewsEngine = require("jsx-view-engine").createEngine();
app.engine("jsx", reactViewsEngine);

// this line tells the render method the default
// file extension to look for
// we set up veiw engine to jsx
app.set("view engine", "jsx");
// this line sets the render method's default lcation to
//look for a jsx file to render.
// Withou this line of code we would have specifi
// the views directory everytime we use the ender method
app.set("views", "./views");

// ====== I.N.D.U.C.E ======
// === Index ===
app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

app.get("/pokemons", (req, res) => {
  //   res.send(pokemons);
  res.render("Index", {
    // pokemons: pokemons
    pokemons,
  });
});

// === Show ===
app.get("/pokemons/:id", (req, res) => {
  // res.render ("views/views")
  res.send([req.params.id]);
  // res.render("Show", {
  //   // second param must be an object
  //   fruit: fruits[req.params.id],
  //   // there will be a variable available
  //   //inside the jsx file called fruit.
  //   // its value is fruits
  //   //[req.params.indexOfArray]
});

// Listen
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
