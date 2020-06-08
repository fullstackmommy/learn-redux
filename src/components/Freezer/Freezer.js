import React, { Component } from "react";
import Panel from "../Panel/Panel";
import FreezerFlavor from "../FreezerFlavor/FreezerFlavor";
import Button from "../Button/Button";

class Freezer extends Component {
  render() {
    const flavors = Object.keys(this.props.flavors).map(flavorName => (
      <FreezerFlavor
        key={flavorName}
        onClickRestock={() => this.props.onClickRestock(flavorName)}
        onClickFlavor={() => this.props.onClickFlavor(flavorName)}
        flavorName={flavorName}
        scoops={this.props.flavors[flavorName]}
      />
    ));
    return (
      <Panel title={`Freezer (°${this.props.temperature || 0}C)`}>
        <Button label="Add product" onClick={this.props.onClickAddProduct} />
        {flavors}
      </Panel>
    );
  }
}

export default Freezer;
