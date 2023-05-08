const React = require("react");
const DefaultLayout = require("../layout/Default");

class Index extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <DefaultLayout
        title="Pokemons Index Page"
        link="/pokemons/new"
        text="Create a Pokemon"
      >
        <ul>
          {pokemons.map((pokemon, i) => {
            return (
              <li key={i}>
                The{" "}
                <a href={`/pokemons/${pokemon._id}`}>
                  {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </a>{" "}
                {pokemon.img} <br></br>
                <br />
              </li>
            );
          })}
        </ul>
      </DefaultLayout>
    );
  }
}

module.exports = Index;
