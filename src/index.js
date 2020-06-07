import store from "./store";
import { actions } from "./ducks/freezer";
import { VANILLA } from "./constants/flavors";

store.dispatch(actions.updateTemperature(-8));
store.dispatch(actions.addProductToFreezer(VANILLA, 5));
store.dispatch(actions.doSomething());
