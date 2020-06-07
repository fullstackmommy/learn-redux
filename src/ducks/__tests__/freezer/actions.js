import { actions, types } from "../../freezer";

describe("updateTemperature()", () => {
  it("should contain the right action type", () => {
    const action = actions.updateTemperature();
    expect(action.type).toEqual(types.UPDATE_TEMPERATURE);
  });

  it("should contain the temperature in the payload", () => {
    const action = actions.updateTemperature(-5);
    expect(action.payload).toEqual(-5);
  });
});

describe("addProductToFreezer()", () => {
  it("should contain the right action type", () => {
    const action = actions.addProductToFreezer();
    expect(action.type).toEqual(types.ADD_PRODUCT_TO_FREEZER);
  });

  it("should contain the name in the payload", () => {
    const action = actions.addProductToFreezer("foo");
    expect(action.payload.name).toEqual("foo");
  });

  it("should contain the amount in the payload", () => {
    const action = actions.addProductToFreezer("foo", 5);
    expect(action.payload.amount).toEqual(5);
  });

  it("should contain the default amount in the payload", () => {
    const action = actions.addProductToFreezer("foo");
    expect(action.payload.amount).toEqual(20);
  });
});

describe("doSomething()", () => {
  const getState = () => ({
    freezer: {
      temperature: 10
    }
  });

  it("should dispatch foo function", () => {
    const dispatch = jest.fn();

    const action = actions.doSomething();
    action(dispatch, getState);

    expect(dispatch.mock.calls.length).toEqual(1);
    expect(dispatch.mock.calls[0][0].type).toEqual("FOO");
  });

  it("should use the temperature in the state for the payload", () => {
    const dispatch = jest.fn();

    const action = actions.doSomething();
    action(dispatch, getState);

    expect(dispatch.mock.calls.length).toEqual(1);
    expect(dispatch.mock.calls[0][0].payload).toEqual(10);
  });
});
