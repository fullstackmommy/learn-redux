import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./components/App/App";
import * as FLAVORS from "./constants/flavors";
import { actions } from "./ducks/freezer";

setTimeout(() => {
  store.dispatch(actions.addProductToFreezer(FLAVORS.STRAWBERRY, 5));
}, 1500);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
