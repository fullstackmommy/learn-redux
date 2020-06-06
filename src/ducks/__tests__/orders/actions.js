import { actions, types } from "../../orders";

describe("placeOrder()", () => {
  const orderData = {
    customerName: "Bob",
    createdAt: 5,
    cone: true
  };
  it("should contain the right action type", () => {
    const action = actions.placeOrder({});
    expect(action.type).toEqual(types.PLACE_ORDER);
  });

  it("should contain customer name in the payload", () => {
    const action = actions.placeOrder(orderData);
    expect(action.payload.customerName).toEqual(orderData.customerName);
  });

  it("should contain order date in the payload", () => {
    const action = actions.placeOrder(orderData);
    expect(action.payload.createdAt).toEqual(orderData.createdAt);
  });

  it("should contain current date in the payload if not supplied", () => {
    const action = actions.placeOrder({});
    expect(typeof action.payload.createdAt).toEqual("number");
  });

  it("should contain cone/cup option in the payload", () => {
    const action = actions.placeOrder(orderData);
    expect(action.payload.cone).toEqual(orderData.cone);
  });

  it("should default to cone option in the payload if not supplied", () => {
    const action = actions.placeOrder({});
    expect(action.payload.cone).toEqual(true);
  });

  it("should contain scoops in the payload", () => {
    const action = actions.placeOrder(orderData);
    expect(action.payload.scoops).toEqual(orderData.scoops);
  });
});

describe("fulfillOrder()", () => {
  it("should contain the right action type", () => {
    const action = actions.fulfillOrder(5);
    expect(action.type).toEqual(types.FULFILL_ORDER);
  });

  it("should contain customer name in the payload", () => {
    const action = actions.fulfillOrder(1);
    expect(action.payload).toEqual(1);
  });
});

describe("payForOrder()", () => {
  it("should contain the right action type", () => {
    const action = actions.payForOrder(5);
    expect(action.type).toEqual(types.PAY_FOR_ORDER);
  });

  it("should contain id in the payload", () => {
    const action = actions.payForOrder(1);
    expect(action.payload).toEqual(1);
  });
});

describe("cancelOrder()", () => {
  it("should contain the right action type", () => {
    const action = actions.cancelOrder(5);
    expect(action.type).toEqual(types.CANCEL_ORDER);
  });

  it("should contain id in the payload", () => {
    const action = actions.payForOrder(1);
    expect(action.payload).toEqual(1);
  });
});
