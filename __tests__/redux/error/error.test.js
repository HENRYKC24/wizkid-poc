import {
  SHOW_ERROR,
  HIDE_ERROR,
  showError,
  hideError,
  initialState,
} from "../../../redux/error/error";
import errorReducer from "../../../redux/error/error";

describe("Error Reducer", () => {
  it("Returns initial state", () => {
    expect(errorReducer(undefined, {})).toEqual(initialState);
  });

  it("Can show error", () => {
    expect(
      errorReducer(undefined, {
        type: SHOW_ERROR,
        payload: {
          errorStatus: true,
          error: {
            desc: "some error",
          },
        },
      })
    ).toEqual({
      errorStatus: true,
      error: {
        desc: "some error",
      },
    });
  });

  it("Can hide error", () => {
    expect(
      errorReducer(undefined, {
        type: HIDE_ERROR,
        payload: {
          errorStatus: false,
          error: null,
        },
      })
    ).toEqual({
      errorStatus: false,
      error: null,
    });
  });

  it("Can run showError action creator correctly", () => {
    expect(
      showError({
        errorStatus: true,
        error: {
          error: "some error",
        },
      })
    ).toEqual({
      type: SHOW_ERROR,
      payload: {
        errorStatus: true,
        error: {
          error: "some error",
        },
      },
    });
  });

  it("Can run hideError action creator correctly", () => {
    expect(
      hideError({
        errorStatus: false,
        error: null,
      })
    ).toEqual({
      type: HIDE_ERROR,
      payload: {
        errorStatus: false,
        error: null,
      },
    });
  });
});
