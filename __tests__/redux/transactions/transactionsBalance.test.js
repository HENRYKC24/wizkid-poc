import {
  GET_TRANSACTION_BALANCE,
  UPDATE_TRANSACTION_BALANCE,
  getTransactionBalance,
  updateTransactionBalance,
  initialState,
} from "../../../redux/transactions/transactionsBalance";

import transactionBalanceReducer from "../../../redux/transactions/transactionsBalance";

describe("Transactions Balance Reducer", () => {
  it("Returns initial state", () => {
    expect(transactionBalanceReducer(undefined, {})).toEqual(initialState);
  });

  it("Can run the getTransactionBalance reducer correctly", () => {
    expect(
      transactionBalanceReducer(undefined, {
        type: GET_TRANSACTION_BALANCE,
        payload: 800,
      })
    ).toEqual(800);
  });

  it("Can run the updateTransactionBalance reducer correctly", () => {
    expect(
      transactionBalanceReducer(undefined, {
        type: UPDATE_TRANSACTION_BALANCE,
        payload: 100,
      })
    ).toEqual(100);
  });

  it("Can run getTransactionBalance action creator correctly", () => {
    expect(getTransactionBalance(250)).toEqual({
      type: GET_TRANSACTION_BALANCE,
      payload: 250,
    });
  });

  it("Can run updateTransactionBalance action creator correctly", () => {
    expect(updateTransactionBalance(200)).toEqual({
      type: UPDATE_TRANSACTION_BALANCE,
      payload: 200,
    });
  });
});
