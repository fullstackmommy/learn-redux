import store from "./store";
import { actions } from "./ducks/freezer";
import { VANILLA } from "./constants/flavors";

store.subscribe(() => console.log(store.getState()));

store.dispatch(actions.updateTemperature(-8));
store.dispatch(actions.addProductToFreezer(VANILLA, 5));
