import { showError, hideError } from "../error/error";

const GET_WIZCOIN_BALANCE = "wizkid/GET_WIZCOIN_BALANCE";
const UPDATE_WIZCOIN_BALANCE = "wizkid/UPDATE_WIZCOIN_BALANCE";

// Create actions
export function getWizcoinBalance(payload) {
  return { type: GET_WIZCOIN_BALANCE, payload };
}

export function updateWizcoinBalance(payload) {
  return { type: UPDATE_WIZCOIN_BALANCE, payload };
}

const initialState = {
  balance: 0,
};

// Define reducer
export default function wizcoinReducer(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case GET_WIZCOIN_BALANCE:
      return { balance: payload };
    case UPDATE_WIZCOIN_BALANCE:
      return { balance: payload };
    default:
      return state;
  }
}

export const getWizcoinBalanceFromServer = () => async (dispatch) => {
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
    dispatch(getWizcoinBalance(finalResult));
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
