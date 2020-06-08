import React from "react";
import { render } from "react-dom";
import App from "./components/App/App";
import * as FLAVORS from "./constants/flavors";
import { actions } from "./ducks/freezer";
import store from "./store";

setTimeout(() => {
  store.dispatch(actions.addProductToFreezer(FLAVORS.STRAWBERRY, 5));
}, 1500);
render(<App />, document.getElementById("root"));
