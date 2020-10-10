import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    //this is the only time we do direct assignment for state
    this.state = {
      lat: null,
    };
    //render method may call several time in a component so
    //we don't want to slow down it by doing some complex operations
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //to update state we called setState
        this.setState({ lat: position.coords.latitude });

        //we can;t do ....
        //this.state.lat = position.coords.latitude
      },
      (err) => console.log(err)
    );
  }

  //React says we must have to define render()
  render() {
    return <div>Lattitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
