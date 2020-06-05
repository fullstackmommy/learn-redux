import reducer from "./freezer";
import { updateTemperature, addProductToFreezer } from "../actions/freezer";
import * as FLAVORS from "../constants/flavors";

describe("Freezer reducer", () => {
  it("should store the temperature in the state", () => {
    const newState = reducer(undefined, updateTemperature(-5));
    expect(newState.temperature).toEqual(-5);
  });

  it("should store the product in the state", () => {
    const newState = reducer(
      undefined,
      addProductToFreezer(FLAVORS.VANILLA, 5)
    );
    expect(newState.flavors[FLAVORS.VANILLA]).toEqual(5);
  });

  it("should add the scoops toe a flavor if it already exists", () => {
    const oldState = {
      flavors: {
        [FLAVORS.CHOCOLATE]: 7
      }
    };

    const newState = reducer(
      oldState,
      addProductToFreezer(FLAVORS.CHOCOLATE, 5)
    );
    expect(newState.flavors[FLAVORS.CHOCOLATE]).toEqual(12);
  });

  it("should not exceed maximum capacity", () => {
    const oldState = {
      flavors: {
        [FLAVORS.CHOCOLATE]: 58
      }
    };

    const newState = reducer(
      oldState,
      addProductToFreezer(FLAVORS.CHOCOLATE, 5)
    );
    expect(newState.flavors[FLAVORS.CHOCOLATE]).toEqual(60);
  });
});
