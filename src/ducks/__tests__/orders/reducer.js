import { reducer, actions } from "../../orders";
import { VANILLA } from "../../../constants/flavors";

describe("Orders reducer", () => {
  it("should store the order in the state", () => {
    const newState = reducer(
      undefined,
      actions.placeOrder({
        customerName: "Bob",
        cone: false,
        scoops: {
          [VANILLA]: 1
        }
      })
    );

    expect(newState.length).toEqual(1);
    expect(newState[0].customerName).toEqual("Bob");
    expect(newState[0].cone).toEqual(false);
    expect(newState[0].scoops).toEqual({ [VANILLA]: 1 });
    expect(typeof newState[0].createdAt).toEqual("number");
    expect(newState[0].status).toEqual("pending");
  });

  it("should change the selected order status to fulfilled", () => {
    const oldState = [{ customerName: "John", status: "pending" }];

    const newState = reducer(oldState, actions.fulfillOrder(0));

    expect(newState[0].status).toEqual("fulfilled");
  });

  it("should change the selected order status to paid", () => {
    const oldState = [{ customerName: "John", status: "pending" }];

    const newState = reducer(oldState, actions.payForOrder(0));

    expect(newState[0].status).toEqual("paid");
  });

  it("should cremove an order from the store", () => {
    const oldState = [{ customerName: "John", status: "pending" }];

    const newState = reducer(oldState, actions.cancelOrder(0));
    expect(newState).toEqual([]);
  });
});
