import { showError, hideError } from "../error/error";

const GET_TRANSACTION_HISTORY = "wizkid/accounts/GET_TRANSACTION_HISTORY";

// Create actions
export function getTransactionHistory(payload) {
  return { type: GET_TRANSACTION_HISTORY, payload };
}

const initialState = [
  {
    id: "1",
    type: "credit",
    amount: 1600,
    who: "ridoyrock@gmail.com",
    date: "Sep 23, 2021",
  },
  {
    id: "2",
    type: "debit",
    amount: 600,
    who: "Airbnb Payment",
    date: "Sep 20, 2022",
  },
  {
    id: "3",
    type: "credit",
    amount: 310,
    who: "Upwork Earning",
    date: "Sep 23, 2021",
  },
  {
    id: "4",
    type: "credit",
    amount: 1600,
    who: "ridoyrock@gmail.com",
    date: "Sep 23, 2021",
  },
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
];

// Define reducer
export default function transactionHistoryReducer(
  state = initialState,
  action = {}
) {
  const { type, payload } = action;
  switch (type) {
    case GET_TRANSACTION_HISTORY:
      return { balance: payload };
    case GET_ACCOUNT_BALANCE:
      return { balance: payload };
    default:
      return state;
  }
}

export const getTransactionHistoryFromServer = () => async (dispatch) => {
  const url = "https://dummylink";
  try {
    const tempResult = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "jdwtokenprovidedbytheserver",
        "Content-Type": "application/json",
      },
    });
    const finalResult = await tempResult.json();
    dispatch(transactionHistoryReducer(finalResult));
  } catch (error) {
    dispatch(
      showError({
        errorStatus: true,
        error,
      })
    );
    setTimeout(
      () =>
        dispatch(
          hideError({
            errorStatus: false,
            error: null,
          })
        ),
      3000
    );
  }
};
