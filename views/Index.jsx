const React = require("react");
const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
};
class Index extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div style={myStyle}>
        <h1>See All The Pokemon(IndexPage)</h1>
        <ul>
          {pokemons.map((pokemon, index) => {
            return (
              <li key={index}>
                Name:{" "}
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                <br></br>
                Image: {pokemon.img}
                <br></br>
                <br></br>
              </li>
            );
          })}
          <br></br>
        </ul>
      </div>
    );
  }
}
module.exports = Index;
