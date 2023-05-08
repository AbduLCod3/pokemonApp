const React = require("react");
const DefaultLayout = require("../layout/Default");

class New extends React.Component {
  render() {
    return (
      <DefaultLayout title="New Page" link="/pokemons" text="Home">
        <h1>Create a New Pokemon!</h1>
        <form action="/pokemons" method="POST">
          Name: <input type="text" name="name" />
          Image: <input type="text" name="img" />
          <input type="submit" value="Create Pokemon" />
        </form>
      </DefaultLayout>
    );
  }
}

module.exports = New;
