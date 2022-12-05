const SHOW_ERROR = "wizkid/error/SHOW_ERROR";
const HIDE_ERROR = "wizkid/error/HIDE_ERROR";

// Create actions
export function showError(payload) {
  return { type: SHOW_ERROR, payload };
}
export function hideError(payload) {
  return { type: HIDE_ERROR, payload };
}

const initialState = {
  errorStatus: false,
  error: null,
};

// Define reducer
export default function errorReducer(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case SHOW_ERROR:
      return {
        ...payload,
      };
    case HIDE_ERROR:
      return {
        ...payload,
      };
    default:
      return state;
  }
}
