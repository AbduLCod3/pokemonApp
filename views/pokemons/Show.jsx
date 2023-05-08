const React = require("react");
const DefaultLayout = require("../layout/Default");

class Show extends React.Component {
  render() {
    const pokemon = this.props.pokemon;
    return (
      <DefaultLayout title="Show Page" link="/pokemons" text="Home">
        The {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} looks
        like {pokemon.img} <br />
      </DefaultLayout>
    );
  }
}

module.exports = Show;
