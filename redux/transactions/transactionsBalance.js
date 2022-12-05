import { hideError, showError } from "../error/error";

const GET_TRANSACTION_BALANCE = "wizkid/accounts/GET_TRANSACTION_BALANCE";
const UPDATE_TRANSACTION_BALANCE = "wizkid/accounts/UPDATE_TRANSACTION_BALANCE";

// Create actions
export function getTransactionBalance(payload) {
  return { type: GET_TRANSACTION_BALANCE, payload };
}
export function updateTransactionBalance(payload) {
  return { type: UPDATE_TRANSACTION_BALANCE, payload };
}

const initialState = 0;

// Define reducer
export default function transactionBalanceReducer(
  state = initialState,
  action = {}
) {
  const { type, payload } = action;
  switch (type) {
    case GET_TRANSACTION_BALANCE:
      return payload;
    case UPDATE_TRANSACTION_BALANCE:
      return payload;
    default:
      return state;
  }
}

export const getTransactionBalanceFromServer = () => async (dispatch) => {
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
    dispatch(getTransactionBalance(finalResult));
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

export const updateTransactionBalanceInServer = () => async (dispatch) => {
  const url = "https://dummylink";
  const tempResult = await fetch(url, {
    method: "PATCH",
    headers: {
      Authorization: "jdwtokenprovidedbytheserver",
      "Content-Type": "application/json",
    },
  });
  const finalResult = await tempResult.json();
  dispatch(updateTransactionBalance(finalResult));
};
