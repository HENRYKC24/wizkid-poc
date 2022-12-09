import {
  GET_TRANSACTION_HISTORY,
  getTransactionHistory,
  initialState,
} from "../../../redux/transactions/transactionsHistory.js";

import transactionHistoryReducer from "../../../redux/transactions/transactionsHistory";

describe("Transactions History Reducer", () => {
  it("Returns initial state", () => {
    expect(transactionHistoryReducer(undefined, {})).toEqual(initialState);
  });

  it("Can run the getTransactionsHistory reducer correctly", () => {
    expect(
      transactionHistoryReducer(undefined, {
        type: GET_TRANSACTION_HISTORY,
        payload: [
          {
            id: "5",
            type: "debit",
            amount: 600,
            who: "Airbnb Payment",
            date: "Sep 20, 2022",
          },
          {
            id: "6",
            type: "credit",
            amount: 310,
            who: "Upwork Earning",
            date: "Sep 23, 2021",
          },
        ],
      })
    ).toEqual([
      {
        id: "5",
        type: "debit",
        amount: 600,
        who: "Airbnb Payment",
        date: "Sep 20, 2022",
      },
      {
        id: "6",
        type: "credit",
        amount: 310,
        who: "Upwork Earning",
        date: "Sep 23, 2021",
      },
    ]);
  });

  it("Can run getTransactionHistory action creator correctly", () => {
    expect(
      getTransactionHistory([
        {
          id: "1",
          type: "credit",
          amount: 1600,
          who: "ridoyrock@gmail.com",
          date: "Sep 23, 2021",
        },
      ])
    ).toEqual({
      type: GET_TRANSACTION_HISTORY,
      payload: [
        {
          id: "1",
          type: "credit",
          amount: 1600,
          who: "ridoyrock@gmail.com",
          date: "Sep 23, 2021",
        },
      ],
    });
  });
});
