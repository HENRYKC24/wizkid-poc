import { showError, hideError } from "../error/error";

const GET_TRANSACTION_HISTORY = "wizkid/accounts/GET_TRANSACTION_HISTORY";

// Create actions
export function getTransactionHistory(payload) {
  return { type: GET_TRANSACTION_HISTORY, payload };
}

const initialState = [];

// Define reducer
export default function transactionHistoryReducer(
  state = initialState,
  action = {}
) {
  const { type, payload } = action;
  switch (type) {
    case GET_TRANSACTION_HISTORY:
      return [...payload];
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
