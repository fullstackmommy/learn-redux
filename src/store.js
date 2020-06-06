import { createStore, combineReducers } from "redux";
import { reducer as freezer } from "./ducks/freezer";

const rootReducer = combineReducers({
  freezer,
  foo: (state = { hello: "world" }, action) => state
});

export default createStore(rootReducer);
