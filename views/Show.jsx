const React = require("react");
const Nav = require("./components/Nav");

const myStyle = {
  color: "#ffffff",
  backgroundColor: "gray",
};

class Show extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div style={myStyle}>
        <h1>Gotta Catch 'Em All</h1>
        <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>

        <p>
          {/* Image:{" "} */}
          <a href={`${pokemon.img}.jpg`}>Pokemon Image</a>
        </p>

        <Nav link="/pokemons" text="Go Back" />
      </div>
    );
  }
}

module.exports = Show;
