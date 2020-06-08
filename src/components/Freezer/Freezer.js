import React, { Component } from "react";
import Panel from "../Panel/Panel";
import FreezerFlavor from "../FreezerFlavor/FreezerFlavor";
import store from "../../store";

class Freezer extends Component {
  state = {
    flavors: store.getState().freezer.flavors
  };

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        flavors: store.getState().freezer.flavors
      });
    });
  }

  render() {
    console.log(this.state.flavors);
    const flavors = Object.keys(this.state.flavors).map(flavor => (
      <FreezerFlavor
        key={flavor}
        flavorName={flavor}
        scoops={this.state.flavors[flavor]}
      />
    ));
    return <Panel title="Freezer (°0C)">{flavors}</Panel>;
  }
}

export default Freezer;
