const React = require("react");
const Nav = require("../components/Nav");

class Index extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div>
        <h1>Pokemon Index Page</h1>
        <Nav link="/pokemons/new" text="Create a pokemon" />
        <ul>
          {pokemons.map((pokemon, i) => {
            return (
              <li key={i}>
                The <a href={`/pokemons/${pokemon._id}`}>{pokemon.name}</a> is{" "}
                {pokemon.name} <br></br>
                {pokemon.img}
                <br />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
