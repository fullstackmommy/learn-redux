import { createStore } from "redux";

export const increaseCount = (amount = 1) => {
  return {
    type: "INCREASE_COUNT",
    payload: amount
  };
};

const DEFAULT_STATE = {
  count: 0
};

export const reducer = (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case "INCREASE_COUNT":
      return {
        ...state,
        count: state.count + action.payload
      };
    default:
      return { ...state };
  }
};

export const store = createStore(reducer);
