import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer as freezer } from "./ducks/freezer";

const rootReducer = combineReducers({
  freezer,
  foo: (state = { hello: "world" }, action) => state
});

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxThunk))
);
