// const React = require("react");
// const Nav = require("./components/Nav");

// class Show extends React.Component {
//   render() {
//     const pokemons = this.props.pokemons;
//     return (
//       <div>
//         <Nav link="/pokemons" text="Home" />
//         <h1> Show Page</h1>
//         <br></br>
//         <h1>WHATEVER</h1>
//         {pokemons.name}
//         {/* The {fruit.name} is {fruit.color} <br />
//         {fruit.readyToEat ? "It is ready to eat" : "not ready"} */}
//       </div>
//     );
//   }
// }

// module.exports = Show;

const React = require("react");
const Nav = require("./components/Nav");

const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
};

class Show extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div style={myStyle}>
        <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
        <p>Image: {pokemon.img}</p>

        <Nav link="/pokemons" text="Go Back" />
      </div>
    );
  }
}

module.exports = Show;
