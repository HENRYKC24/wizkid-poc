import React from "react";
jest.useFakeTimers()
import renderer from "react-test-renderer";

import SignIn from "../../pages/SignIn";

describe("<SignIn />", () => {
  it("has 5 children", () => {
    const tree = renderer.create(<SignIn />).toJSON();
    expect(tree.children.length).toBe(5);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<SignIn />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
