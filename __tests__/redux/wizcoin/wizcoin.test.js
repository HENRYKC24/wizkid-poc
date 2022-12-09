import {
  GET_WIZCOIN_BALANCE,
  UPDATE_WIZCOIN_BALANCE,
  getWizcoinBalance,
  updateWizcoinBalance,
  initialState,
} from "../../../redux/wizcoin/wizcoin.js";

import wizcoinReducer from "../../../redux/wizcoin/wizcoin";

describe("Transactions Balance Reducer", () => {
  it("Returns initial state", () => {
    expect(wizcoinReducer(undefined, {})).toEqual(initialState);
  });

  it("Can run the wizcoinReducer for type GET_WIZCOIN_BALANCE correctly", () => {
    expect(
      wizcoinReducer(undefined, {
        type: GET_WIZCOIN_BALANCE,
        payload: {
          balance: 3450,
        },
      })
    ).toEqual({
      balance: 3450,
    });
  });

  it("Can run the wizcoinReducer for type UPDATE_WIZCOIN_BALANCE correctly", () => {
    expect(
      wizcoinReducer(undefined, {
        type: UPDATE_WIZCOIN_BALANCE,
        payload: {
          balance: 33,
        },
      })
    ).toEqual({
      balance: 33,
    });
  });

  it("Can run getWizcoinBalance action creator correctly", () => {
    expect(getWizcoinBalance(200)).toEqual({
      type: GET_WIZCOIN_BALANCE,
      payload: 200,
    });
  });
  
  it("Can run updateWizcoinBalance action creator correctly", () => {
    expect(updateWizcoinBalance(50)).toEqual({
      type: UPDATE_WIZCOIN_BALANCE,
      payload: 50,
    });
  });
});
