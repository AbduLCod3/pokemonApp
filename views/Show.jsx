const React = require("react");

class Show extends React.Component {
  render() {
    const pokemons = this.props.pokemons;
    return (
      <div>
        <h1> Show Page</h1>
        <br></br>
        <h1>WHATEVER</h1>
        {/* The {fruit.name} is {fruit.color} <br />
        {fruit.readyToEat ? "It is ready to eat" : "not ready"} */}
      </div>
    );
  }
}

module.exports = Show;
